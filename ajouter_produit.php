<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nom = htmlspecialchars($_POST['nom']);
  $categorie = htmlspecialchars($_POST['categorie']);
  $description = htmlspecialchars($_POST['description']);
  $image = $_FILES['image'];

  // Sauvegarde de l'image
  $target_dir = "image/";
  if (!is_dir($target_dir)) mkdir($target_dir, 0777, true);
  $image_path = $target_dir . basename($image["name"]);
  move_uploaded_file($image["tmp_name"], $image_path);

  // Connexion à la base de données
  $pdo = new PDO("mysql:host=localhost;dbname=vitrine", "yerevabe", "Donaldo179@");
  $stmt = $pdo->prepare("INSERT INTO produits (nom, categorie, description, image_url) VALUES (?, ?, ?, ?)");
  $stmt->execute([$nom, $categorie, $description, $image_path]);

  // Génération du code HTML
  $code = "<div class='carte-produit'>
    <img src='$image_path' alt='$nom' />
    <h3>$nom</h3>
    <p>$description</p>
    <span class='categorie'>$categorie</span>
  </div>\n";

  file_put_contents("produits.html", $code, FILE_APPEND);
  echo "✅ Produit ajouté avec succès !";
}
?>
