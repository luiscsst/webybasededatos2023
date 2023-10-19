<?php

$server = "localhost";
$user = "root";
$password = ""; //si tienes xampp es $password = ""

//conexion

$conexion = new mysqli($server, $user, $password);


//revisar conexion

if($conexion->connect_error){
    die("fallo la conexion" . $conexion->connect_error);


}
?>