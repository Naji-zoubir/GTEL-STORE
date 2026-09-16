<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Importation de PHPMailer (S7e7t lik l-chemin)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer-master/src/Exception.php';
require '../PHPMailer-master/src/PHPMailer.php';
require '../PHPMailer-master/src/SMTP.php';

$host = "localhost";
$user = "root";
$password = "";
$database = "gtel_db";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "error" => "Erreur de connexion DB"]);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    // Lecture intelligente (JSON ou POST classique)
    if (is_array($data)) {
        $nom = $conn->real_escape_string($data['name'] ?? '');
        $email = $conn->real_escape_string($data['email'] ?? '');
        $telephone = $conn->real_escape_string($data['phone'] ?? '');
        $service = $conn->real_escape_string($data['service'] ?? $data['interet'] ?? '');
        $message = $conn->real_escape_string($data['message'] ?? '');
        $type_demande = $data['type'] ?? 'devis';
    } else {
        $nom = $conn->real_escape_string($_POST['name'] ?? $_POST['nom'] ?? '');
        $email = $conn->real_escape_string($_POST['email'] ?? '');
        $telephone = $conn->real_escape_string($_POST['phone'] ?? $_POST['telephone'] ?? '');
        $service = $conn->real_escape_string($_POST['service'] ?? $_POST['interet'] ?? '');
        $message = $conn->real_escape_string($_POST['message'] ?? '');
        $type_demande = $_POST['type'] ?? 'devis';
    }

    if (empty($nom) || empty($email) || empty($telephone)) {
        echo json_encode(["success" => false, "error" => "Champs obligatoires vides."]);
        exit();
    }

    $db_success = false;
    $sql_error = "";
    $subject = "";
    $email_body = "";

    // 💾 ROUTAGE VERS LA BONNE TABLE & CONFIGURATION DU CORPS DU MAIL
    if ($type_demande === 'catalogue') {
        // --- CAS CATALOGUE ---
        $entreprise = !empty($message) ? $message : "Non spécifiée";
        $sql = "INSERT INTO demande_catalogue (nom, email, telephone, entreprise, interet) 
                VALUES ('$nom', '$email', '$telephone', '$entreprise', '$service')";
        
        $subject = "🔔 Nouveau Téléchargement Catalogue - $nom";
        $email_body = "
            <div style='font-family: Arial, sans-serif; padding: 25px; border: 1px solid #EAEAEA; border-radius: 12px; max-width: 600px; background-color: #F8F7FC;'>
                <h2 style='color: #552583; font-size: 20px; text-transform: uppercase;'>Nouveau Téléchargement Catalogue</h2>
                <hr style='border: 1px solid #EAEAEA; margin: 15px 0;' />
                <p><strong>Nom / Entreprise :</strong> {$nom}</p>
                <p><strong>E-mail :</strong> {$email}</p>
                <p><strong>Téléphone :</strong> {$telephone}</p>
                <p><strong>Nom de l'Entreprise :</strong> {$entreprise}</p>
                <p><strong>Gamme d'intérêt :</strong> <span style='color: #FBB82B; font-weight: bold;'>{$service}</span></p>
                <hr style='border: 1px solid #EAEAEA; margin: 15px 0;' />
                <small style='color: #888;'>Sauvegardé avec succès dans la table: <strong>demande_catalogue</strong></small>
            </div>
        ";
    } else {
        // --- CAS DEVIS (Par défaut) ---
        $sql = "INSERT INTO devis (nom, email, telephone, service, message) 
                VALUES ('$nom', '$email', '$telephone', '$service', '$message')";
        
        $subject = "🔔 Nouvelle Demande d'Étude / Devis - $nom";
        $email_body = "
            <div style='font-family: Arial, sans-serif; padding: 25px; border: 1px solid #EAEAEA; border-radius: 12px; max-width: 600px; background-color: #F8F7FC;'>
                <h2 style='color: #552583; font-size: 20px; text-transform: uppercase;'>Nouvelle Demande d'Étude</h2>
                <hr style='border: 1px solid #EAEAEA; margin: 15px 0;' />
                <p><strong>Nom / Entreprise :</strong> {$nom}</p>
                <p><strong>E-mail :</strong> {$email}</p>
                <p><strong>Téléphone :</strong> {$telephone}</p>
                <p><strong>Solution ciblée :</strong> <span style='color: #FBB82B; font-weight: bold;'>{$service}</span></p>
                <p><strong>Détails du besoin :</strong></p>
                <blockquote style='background: #FFFFFF; padding: 15px; border-left: 4px solid #552583; border-top: 1px solid #EAEAEA; border-right: 1px solid #EAEAEA; border-bottom: 1px solid #EAEAEA; border-radius: 0 8px 8px 0;'>{$message}</blockquote>
                <hr style='border: 1px solid #EAEAEA; margin: 15px 0;' />
                <small style='color: #888;'>Sauvegardé avec succès dans la table: <strong>devis</strong></small>
            </div>
        ";
    }

    // Sauvegarde MySQL d'abord
    if ($conn->query($sql) === TRUE) {
        $db_success = true;
    } else {
        $sql_error = $conn->error;
    }

    // ==========================================
    // 🔔 SIFTANE DIAL EMAIL (SMTP) - Si MySQL OK
    // ==========================================
    if ($db_success) {
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host       = 'smtp.titan.email';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'pro@gtelstore.ma'; 
            $mail->Password   = 'PROserv@123456';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port       = 465;

            $mail->setFrom('pro@gtelstore.ma', 'GTEL Portal');
            $mail->addAddress('pro@gtelstore.ma'); 

            $mail->isHTML(true);
            $mail->Subject = "=?UTF-8?B?".base64_encode($subject)."?=";
            $mail->Body    = $email_body;

            $mail->send();
            echo json_encode(["success" => true, "message" => "Données enregistrées et Email envoyé !"]);
            
        } catch (Exception $e) {
            // Si l'email échoue mais MySQL a réussi, on valide quand même
            echo json_encode(["success" => true, "warning" => "Enregistré en DB, mais erreur d'envoi Email: " . $mail->ErrorInfo]);
        }
    } else {
        echo json_encode(["success" => false, "error" => "Erreur SQL : " . $sql_error]);
    }

} else {
    echo json_encode(["success" => false, "error" => "Méthode non autorisée"]);
}

$conn->close();
?>