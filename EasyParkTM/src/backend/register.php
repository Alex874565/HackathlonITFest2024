<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);
if($_SERVER['REQUEST_METHOD'] == "POST"){
    $email = $_POST['email'];
    $keyword = $_POST['keyword'];
    if($email != ""){
        $conn = new mysqli("localhost", "root", "", "EasyPark");
        if($conn -> connect_error){
            exit("Connection Error " . $conn -> connect_error);
        }
        if($keyword != "undefined"){
            $stmt = $conn -> prepare("SELECT question, answer FROM history WHERE email = ? AND (question LIKE CONCAT('%', ?, '%') OR answer LIKE CONCAT('%', ?, '%'));");
            $stmt -> bind_param("sss", $email, $keyword, $keyword);
            $stmt -> execute();
            $result = $stmt -> get_result();
        }else{
            $stmt = $conn -> prepare("SELECT question, answer FROM history WHERE email = ?;");
            $stmt -> bind_param("s", $email); 
            $stmt -> execute();
            $result = $stmt -> get_result();
        }
        echo '
        <table>
            <tr>
                <th> Message </th>
                <th> Answer </th>
            </tr>';
        while($row = $result -> fetch_array()){
            echo '
                <tr>
                    <td>' . $row['question'] . '</td>
                    <td>' . $row['answer'] . '</td>
                </tr>';
        }
        echo '
        </table>
        ';
    }
}
?>