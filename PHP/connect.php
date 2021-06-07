<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require "dbconnect.php";

$json = file_get_contents('php://input');
$data=json_decode($json);
$name=$data->user;
$pwrd=$data->pass;
$mail=$data->mail;
$mob=$data->mobno;
$s="SELECT * from accounts where accounts.Email='$mail';";
$res=$conn->query($s);
if($res->num_rows==0){
$sql = "INSERT INTO accounts(Email,Username,Pwd,Moblieno) VALUES('$mail','$name','$pwrd','$mob');";

if ($conn->query($sql) === TRUE) {
  echo json_encode(["status"=>"Account Created Successfully"]);
} 
else {
  echo json_encode(["Error"=>$conn->error]);
} 
}
else{
  echo json_encode(["msg"=>"Account already Exists!"]);
}

$conn->close();





?>