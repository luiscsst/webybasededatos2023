<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asignar materias</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <script src="code.jquery.com_jquery-3.7.1.min.js"></script>
</head>
<body>
    <?php 
        include 'menu.php';
        include 'conexion.php';
        $sql_alumnos ="SELECT * FROM alumnos"; 
        $sql_materias ="SELECT * FROM materias"; 
        $datos_alumnos= $conexion->query($sql_alumnos);
        $datos_materias= $conexion->query($sql_materias);
    ?>

    <div class="container">
        <div class="row">
            <div class="col-12 card p-4 m-2">
                <h2>Asignar materias a alumno</h2><hr>
                <form action="GuardarAsignacion.php" method="POST" >
                    <label for="">Alumno:</label>
                    <select name="alumno" id="form-control">
                        <option value="">Selecciona un alumno</option>
                <?php 
                if($datos_alumnos->num_rows >0){
                    while($registro = $datos_alumnos->fetch_assoc()){ ?>
                        <option value="<?php echo $registro["id"];?>"><?php echo $registro["nombre"];?></option>
                   <?php } ?>
                <?php } ?> 
                    </select><br><br>
                    <h3>Selecciones las materias:</h3>
             <?php  if($datos_materias->num_rows >0){
                    while($registro = $datos_materias->fetch_assoc()){ ?>
                    <p><input type="checkbox" name="materias[]" value=""><?php echo $registro["nombre"];?></p>
                   <?php } } ?>
                   <div>
                    <input type="submit" class="btn btn-primary" value="Asignar">
                    <a href="inicio.php" class="btn btn-danger">Cancelar</a>
                   </div>
                </form>
            </div>
        </div>
    </div>
        <footer class="text-center">
            <hr>
            CETIS 107 &copy; 2023
        </footer>


<script src="js/bootstrap.js"></script>
</body>
</html>