<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];
    $password = $_POST['password'];
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    if($password != "" && $email != ""){
        $conn = new mysqli("localhost", "root", "", "EasyParkTM");
        if($conn -> connect_error){
            exit("Eroare la conectare ". $conn -> connect_error);
        }
       $stmt = $conn -> prepare("INSERT INTO users (email, pass) VALUES (?, ?);");
       $stmt -> bind_param("ss", $email, $hashed_password);
       $stmt -> execute();
       echo "user added";
    }else{
        echo "user not added";
    }
}
?>