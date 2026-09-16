<?php
session_start();

$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($email === "admin@gtel.ma" && $password === "gtel2025") {
        $_SESSION['admin'] = true;
        header("Location: admin.php");
        exit();
    } else {
        $error = "Identifiants incorrects !";
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GTEL | Connexion Administration</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Syne:wght@700;800&display=swap" rel="stylesheet">
  <style>
    body { 
      font-family: 'Nunito', sans-serif;
      background-image: radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.08) 0%, rgba(248, 250, 252, 1) 70%);
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 min-h-screen flex items-center justify-center p-4">

  <div class="w-full max-w-[420px] bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl p-8 shadow-2xl relative">
    <div class="text-center mb-8">
      <h2 class="font-syne text-2xl text-brand-purple text-[#552583] uppercase tracking-tight">GTEL CONTROL</h2>
      <p class="text-xs text-slate-500 mt-1">Espace d'administration sécurisé</p>
    </div>

    <?php if (!empty($error)): ?>
      <div class="bg-red-500/5 border border-red-500/20 text-red-600 p-3 rounded-xl text-xs text-center mb-6 font-semibold">
        ⚠️ <?php echo $error; ?>
      </div>
    <?php endif; ?>

    <form method="POST" action="login.php" class="space-y-4">
      <div>
        <label class="block font-bold text-[10px] text-slate-500 uppercase tracking-wider mb-1.5">Email Professionnel</label>
        <input type="email" name="email" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:border-brand-purple focus:bg-white transition-all duration-200" placeholder="admin@gtel.ma" required>
      </div>
      
      <div>
        <label class="block font-bold text-[10px] text-slate-500 uppercase tracking-wider mb-1.5">Mot de Passe</label>
        <input type="password" name="password" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:border-brand-purple focus:bg-white transition-all duration-200" placeholder="••••••••" required>
      </div>
      
      <button type="submit" class="w-full py-3 bg-brand-purple hover:bg-brand-purpleDark text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 shadow-lg shadow-brand-purple/15">
        Connexion au Portail
      </button>
    </form>
  </div>

</body>
</html>