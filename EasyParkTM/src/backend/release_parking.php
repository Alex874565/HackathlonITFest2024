<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];
    $strada = $_POST['loc_parcare'];
    echo $strada . "!!!!";
    $conn = new mysqli("localhost", "root", "", "EasyParkTM");
    if($conn -> connect_error){
        exit("Eroare la conectare ". $conn -> connect_error);
    }
    $stmt = $conn -> prepare("UPDATE users SET loc_parcare = NULL WHERE email = ?");
    $stmt -> bind_param("s", $email);
    if($stmt -> execute()){
        echo 'ok1';
    }else{
        echo 'not_ok1';
    }
    
    $sql = $conn -> prepare("SELECT * FROM Streets2 WHERE street_name = ?");
    $sql -> bind_param("s", $strada);
    $sql -> execute();
    $result = $sql -> get_result();
    $row = $result->fetch_assoc();
    $occupied = $row['occupied_space'] - 1;

    $stmt = $conn -> prepare("UPDATE Streets2 SET occupied_space = ? WHERE street_name = ?");
    $stmt -> bind_param("is", $occupied, $strada);
    if($stmt -> execute()){
        echo 'ok2';
    }else{
        echo 'not_ok2';
    } 
}
?>