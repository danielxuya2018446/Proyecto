<?php

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$mail = $_POST['mail'];
$usuario = $_POST['usuario'];
$pass = $_POST['pass'];
$sexo = $_POST['sexo'];

if($nombre === '' || $apellido === '' ||  $mail === '' || $usuario === '' || $pass === '' || $sexo === ''){
    echo json_encode('error');
}else{
    echo json_encode('Listo: <br>Nombres:'.$nombre.'<br>Apellidos:'.$apellido.'<br>Correo Electronico:'.$mail.'<br>Usuario:'.$usuario.'<br>Password:'.$pass.'<br>Sexo:'.$sexo);
}