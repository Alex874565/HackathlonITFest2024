<?php
ini_set('display_errors', '1');
ini_set('dispaly_startup_errors', '1');
error_reporting(E_ALL);
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];
    $password = $_POST['password'];
    if($password != "" && $email != ""){
        $conn = new mysqli("localhost", "root", "", "EasyParkTM");
        if($conn -> connect_error){
            exit("Connection Error ". $conn -> connect_error);
        }
        $stmt = $conn -> prepare("SELECT email, pass FROM users WHERE email = ?");
        $stmt -> bind_param("s", $email);
        $stmt -> execute();
        $result = $stmt -> get_result();
        if(mysqli_num_rows($result) == 0){
            echo "!exists";
        }else{
            $res = mysqli_fetch_array($result);
            if(password_verify($password, $res['pass'])){
                echo "exists";
            }else{
                echo "!exists";
            }
        }
    };
}

?>