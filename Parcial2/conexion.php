<?php
$server = "localhost";
$user = "root";
$password = "12345678";

$conexion = new mysql($server, $user, $password);

if($conexion->conncect_error){
    die("Fallo la conexion" . $conexion->connect_error);
}
?>