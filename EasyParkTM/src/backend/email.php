<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
    
//Load Composer's autoloader
require '../../vendor/autoload.php';
    

if($_SERVER['REQUEST_METHOD'] == "POST"){
    $email = $_POST['email'];
    $name= $_POST['name'];
    $subject = $_POST['subject'];
    $text = $_POST['message'];
    $text = wordwrap($text, 70, "\r\n");
    
    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);
    
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
        $mail->setFrom('brawlstarz555@gmail.com', 'EasyParkTM');
        $mail->addAddress('brawlstarz555@gmail.com'); //Add a recipient

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'EasyParkTM - ' . $subject;
        $mail->Body = 'Subject: ' . $subject . "<br />" . 'Name: ' . $name . "<br />" . 'Email: ' . $email . "<br /><br />" . $text;
    
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>