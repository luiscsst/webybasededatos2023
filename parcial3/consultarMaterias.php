<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cátalago de Materias</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <script src="code.jquery.com_jquery-3.7.1.min.js"></script>
</head>
<body>
    <?php 
        include 'menu.php'; 
        include 'conexion.php';

        $sql = "SELECT * FROM materias";
        $datos = $conexion->query($sql);

    ?>

    <div class="container">
        <div class="row">
            <div class="col-12">
        <?php 
            if($datos->num_rows > 0) { ?>

                <br>
                <table class="table table-hover">
                    <thead> 
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Semestre</th>
                            <th>Especialidad</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php while($registro = $datos->fetch_assoc()){ ?> 
                        <tr>
                            <td><?php echo $registro["id"]; ?></td>
                            <td><?php echo $registro["nombre"]; ?></td>
                            <td><?php echo $registro["semestre"]; ?></td>
                            <td><?php echo $registro["especialidad"]; ?></td>
                            <td>
                                <a href="editarMateria.php?id=<?php echo $registro["id"]; ?>" class="btn btn-sm btn-primary">Editar</a>
                                <a href="eliminarMateria.php?id=<?php echo $registro["id"]; ?>" class="btn btn-sm btn-danger">Eliminar</a>
                            </td>
                        </tr>
                        <?php } ?>
                    </tbody>
                </table>
        <?php }else{ ?>
            <center><h2>No existen datos del alumno en la base de datos</h2></center>
        <?php } ?>
            </div>
        </div>
    </div>
    <script src="js/bootstrap.js"></script>
</body>
</html>