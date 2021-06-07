<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require "dbconnect.php";

$json = file_get_contents('php://input');
$data=json_decode($json);
$sql="SELECT  cid from coursesreg where Email='$data->cmail';";
$result=$conn->query($sql);
if($result->num_rows>0){
    $array=[];
    while($row= $result->fetch_assoc()){
      array_push($array,$row["cid"]);
    }
    echo json_encode(["results"=>$array]);
    
}
else{
    echo json_encode(["results"=>["0"]]);
}



$conn->close();
?>