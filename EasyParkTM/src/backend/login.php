<?php
ini_set('display_errors', '1');
ini_set('dispaly_startup_errors', '1');
error_reporting(E_ALL);
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];
    $password = $_Post['password'];
    if($password != "" && $email != ""){
        $conn = new mysqli("localhost", "root", "", "EasyPark");
        if($conn -> connect_error){
            exit("Connection Error ". $conn -> connect_error);
        }
        $stmt = $conn -> prepare("SELECT username, pass FROM users WHERE email = ?");
        $stmt -> bind_param("s", $email);
        $smtm -> execute();
        $result = $stmt -> get_result();
        if(mysqli_num_rows($result) == 0){
            echo "!exists";
        }else{
            $res = mysqli_fetch_array($result);
            if(password_verify($password, $res['pass'])){
                echo $res['username'];
            }else{
                echo "!exists";
            }
        }
    };
}

?>