<?php
// session_start();
// if (!isset($_SESSION['admin'])) die("⛔ Accès refusé.");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Sécurisation des données reçues
  $nom = htmlspecialchars($_POST['nom']);
  $categorie = htmlspecialchars($_POST['categorie']);
  $description = htmlspecialchars($_POST['description']);
  $prix = htmlspecialchars($_POST['prix']); // 🆕 Nouveau champ prix
  $image = $_FILES['image'];

  // 📁 Dossier de stockage des images
  $target_dir = "uploads/";
  if (!is_dir($target_dir)) mkdir($target_dir, 0777, true);

  // Nom unique pour éviter les conflits
  $image_name = time() . "_" . basename($image["name"]);
  $image_path = $target_dir . $image_name;

  // Sauvegarde de l'image
  move_uploaded_file($image["tmp_name"], $image_path);

  // 🔧 Connexion à la base de données
  $pdo = new PDO("mysql:host=localhost;dbname=ton_site", "user", "password");
  $stmt = $pdo->prepare("INSERT INTO produits (nom, categorie, description, image_url, prix) VALUES (?, ?, ?, ?, ?)");
  $stmt->execute([$nom, $categorie, $description, $image_path, $prix]);

  // 🧬 Génération du bloc HTML à retourner
  $html = "<div class='product-card'>
    <span class='badge'>Nouveau</span>
    <img src='$image_path' alt='$nom'>
    <p> $categorie </p>
    <h3>$nom</h3>
    <ul>
      <li>$description</li>
    </ul>
    <p class='price'>
      <span class='new-price'>$prix FCFA</span>
    </p>
    <a class='whatsapp-btn' href='#' data-nom='$nom' data-img='$image_name'>Ajouter au panier</a>
  </div>\n";

  // 📄 Ajout dans le fichier produits.html
  file_put_contents("produits.html", $html, FILE_APPEND);

  // 🔁 Retourne le HTML pour affichage dynamique
  echo $html;
}
?>
