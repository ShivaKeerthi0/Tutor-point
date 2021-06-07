<?php

$server="localhost";
$username="root";
$password="";
$dbname="tutor";
$conn= new mysqli($server,$username,$password,$dbname);
if ($conn->connect_error) {
  die("Connection failed: " );
}
?>


