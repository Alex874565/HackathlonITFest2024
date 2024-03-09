<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "utilizatori";

$conn = new mysqli($servername, $email, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Funcție pentru a selecta datele pentru un utilizator specific
function getUserData($email) {
    global $conn;
    $query = "SELECT * FROM utilizatori WHERE email = '$email'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        return $result->fetch_assoc();
    } else {
        return null;
    }
}

// Funcție pentru a actualiza strada unde este parcata masina
function updateParkingStreet($email, $street) {
    global $conn;
    $query = "UPDATE utilizatori SET street = '$street' WHERE email = '$email'";
    $conn->query($query);
}

// Alte funcții pot fi adăugate pentru inserarea datelor, eliberarea locului de parcare etc.

$conn->close();
?>