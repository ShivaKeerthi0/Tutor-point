<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require "dbconnect.php";

$json = file_get_contents('php://input');
$data=json_decode($json);
$sql="SELECT  Username,Pwd from accounts where Email='$data->mail';";
$result=$conn->query($sql);
if($result->num_rows>0){
    $row= $result->fetch_assoc();
    if(strcmp($data->pwd,$row['Pwd'])===0) 
        echo json_encode(['Username'=>$row['Username']]);
    else
       echo json_encode(['perror'=>'Password Incorrect']);
}
 else 
 echo  json_encode(['mailerror'=>'Account Does not exists']);




$conn->close();
?>