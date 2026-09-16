<?php
session_start();

if (!isset($_SESSION['admin']) || $_SESSION['admin'] !== true) {
    header("Location: login.php");
    exit();
}

if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    session_destroy();
    header("Location: login.php");
    exit();
}

$host = "localhost";
$user = "root";
$password = "";
$database = "gtel_db";

$conn = new mysqli($host, $user, $password, $database);

$sql = "
    SELECT 'devis' AS type, id, nom, email, telephone, service AS produit, message AS detail, date_creation AS date_time 
    FROM devis
    UNION ALL
    SELECT 'catalogue' AS type, id, nom, email, telephone, interet AS produit, entreprise AS detail, date_demande AS date_time 
    FROM demande_catalogue
    ORDER BY date_time DESC
";

$result = $conn->query($sql);

$grouped_data = [];
if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $date = date("Y-m-d", strtotime($row['date_time']));
        $grouped_data[$date][] = $row;
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GTEL | Espace Administration</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Syne:wght@700;800&display=swap" rel="stylesheet">
  <style>
    body { 
      font-family: 'Nunito', sans-serif;
      background-image: radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.05) 0%, rgba(248, 250, 252, 1) 70%);
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 min-h-screen p-6 sm:p-8">

  <div class="max-w-[1200px] mx-auto">
      
      <!-- HEADER ADMIN -->
      <header class="flex justify-between items-center border-b border-slate-200/80 pb-6 mb-8">
          <div>
              <h1 class="font-syne text-2xl uppercase tracking-tight text-brand-purple">GTEL <span class="text-brand-gold text-[#FBB82B]">Admin Hub</span></h1>
              <p class="text-xs text-slate-500">Suivi en direct des leads B2B et demandes de catalogues</p>
          </div>
          <a href="admin.php?action=logout" class="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white border border-red-200 px-4 py-2 rounded-xl text-xs font-semibold transition-all">Déconnexion</a>
      </header>

      <!-- NO LEADS DISPLAY -->
      <?php if (empty($grouped_data)): ?>
        <div class="text-center py-20 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <p class="text-slate-500">Aucune demande enregistrée pour le moment.</p>
        </div>
      <?php endif; ?>

      <!-- LISTE DES JOURS -->
      <div class="space-y-12">
          <?php foreach ($grouped_data as $date => $rows): ?>
              <div>
                  <!-- DATE HEADER -->
                  <h3 class="font-syne text-xs font-bold tracking-widest text-brand-purple uppercase mb-4 border-b border-slate-200/80 pb-2">
                      📅 <?php echo date("d F Y", strtotime($date)); ?>
                  </h3>
                  
                  <!-- LEADS GRID -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <?php foreach ($rows as $row): ?>
                          <div class="bg-white/80 backdrop-blur-md border border-slate-200/60 p-6 rounded-2xl relative overflow-hidden shadow-lg shadow-slate-100/50 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 <?php echo $row['type'] === 'catalogue' ? 'border-l-[6px] border-l-[#FBB82B]' : 'border-l-[6px] border-l-[#552583]'; ?>">
                              
                              <!-- BADGE TYPE -->
                              <span class="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase <?php echo $row['type'] === 'catalogue' ? 'bg-brand-gold/10 text-[#FBB82B]' : 'bg-brand-purple/10 text-[#552583]'; ?>">
                                  <?php echo $row['type'] === 'catalogue' ? 'Catalogue' : 'Devis'; ?>
                              </span>

                              <!-- SENDER INFO -->
                              <h4 class="font-bold text-sm text-slate-800 uppercase mb-1"><?php echo $row['nom']; ?></h4>
                              <p class="text-xs text-slate-500 mb-4"><?php echo $row['email']; ?> | <?php echo $row['telephone']; ?></p>
                              
                              <!-- DETAILS -->
                              <div class="space-y-2 text-xs">
                                  <p><strong class="text-slate-500">Intérêt / Solution :</strong> <span class="text-slate-800 font-semibold"><?php echo $row['produit']; ?></span></p>
                                  <?php if (!empty($row['detail'])): ?>
                                      <p><strong class="text-slate-500"><?php echo $row['type'] === 'catalogue' ? 'Entreprise' : 'Message'; ?> :</strong></p>
                                      <blockquote class="bg-slate-50 p-3 rounded-lg border border-slate-200/80 text-slate-600 italic"><?php echo $row['detail']; ?></blockquote>
                                  <?php endif; ?>
                              </div>
                              
                              <!-- DATE TIME -->
                              <div class="mt-4 text-[10px] text-slate-400 text-right font-bold">
                                  ⏱️ <?php echo date("H:i", strtotime($row['date_time'])); ?>
                              </div>

                          </div>
                      <?php endforeach; ?>
                  </div>
              </div>
          <?php endforeach; ?>
      </div>

  </div>

</body>
</html>