<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
    
//Load Composer's autoloader
require '../../vendor/autoload.php';


if($_SERVER["REQUEST_METHOD"] == "POST"){
    $email = $_POST["email"];

    $code = rand(100000, 999999);

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);
    
    $conn = new mysqli("localhost", "root", "", "EasyParkTM");
    if($conn -> connect_error){
        exit("Eroare la conectare ". $conn -> connect_error);
    }
    $result = $conn -> query("SELECT * FROM users WHERE email = '$email';");
    if(mysqli_num_rows($result) == 0){
        try {
            //Server settings
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'brawlstarz555@gmail.com';                     //SMTP username
            $mail->Password   = 'ierm zgeh ifjj dykn';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
        
            //Recipients
            $mail->setFrom('EasyParkTM@ezprktm.com', 'EasyParkTM');
            $mail->addAddress($email); //Add a recipient

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'EasyParkTM Registration Code';
            $mail->Body=$code;
        
            $mail->send();
            echo $code;
        } catch (Exception $e) {
            echo "Connect error";
        }
    }else{
    echo "exists";
    }
}
?>