<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];
    $conn = new mysqli("localhost", "root", "", "EasyParkTM");
    if($conn -> connect_error){
        exit("Eroare la conectare ". $conn -> connect_error);
    }
    $stmt = $conn -> prepare("SELECT loc_parcare FROM users WHERE email = ?");
}
?>