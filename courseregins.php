<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require "dbconnect.php";
$json = file_get_contents('php://input');
$data=json_decode($json);
$cid=$data->cid;
$cimg=$data->cimg;
$cname=$data->cname;
$cprice=$data->cprice;
$cmail=$data->cmail;
$sql = "INSERT INTO coursesreg(Email,cid,cimg,cname,cprice) VALUES('$cmail','$cid','$cimg','$cname','$cprice');";
if ($conn->query($sql) === TRUE) {
  echo json_encode(["status"=>"Inserted Successfully"]);
} 
else {
  echo json_encode(["Error"=>$conn->error]);
} 
$conn->close();
?>
