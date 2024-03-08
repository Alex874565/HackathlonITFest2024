<?php
// Datele pentru conexiunea la baza de date
$servername = "localhost";
$username = "root";
$password = "";
$database = "EasyParkTM";

// Crearea conexiunii
$conn = new mysqli($servername, $username, $password, $database);

// Verificarea conexiunii
if ($conn->connect_error) {
    die("Conexiunea a eșuat: " . $conn->connect_error);
}

// Query pentru a selecta toate datele dintr-un tabel (înlocuiește "nume_tabel" cu numele tabelului tău)
$sql = "SELECT * FROM ParkingLocations";
$result = $conn->query($sql);

// Verifică dacă interogarea a avut succes
if ($result === false) {
    die("Interogarea a eșuat: " . $conn->error);
}

// Afisează datele din tabel
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo $row["Denumire"]. "; " . $row["Nr_Locuri_Totale"]. "; " . $row["Nr_Locuri_Ocupate"]."\n";
        // Adaugă aici toate coloanele pe care dorești să le afișezi
    }
} else {
    echo "Nu există date în tabel.";
}

// Închide conexiunea
$conn->close();
?>