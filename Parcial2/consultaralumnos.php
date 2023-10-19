<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consultar alumnos</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <script src="jquery-3.7.1.js"></script>
</head>
<body>
    <?php
    include 'menu.php';
    include 'conexion.php';

    $sql = "SELECT = FROM alumnos";
    $datos = $conexion =query($sql);

    ?>

    <div class="contariner">
        <div class="row">
            <div class="col-12">
                <?php if($datos->num_row>0){ ?>
                    <table class="table table-hover">
                    <thead>
                        <tr>
                            <tr>ID</tr>
                            <tr>Nombre</tr>
                            <tr>Numero de control</tr>
                            <tr>Semestres</tr>
                            <tr>Edad</tr>
                            <tr>Turno</tr>
                            <tr>Sexo</tr>
                        </tr>
                    </thead>
                    <tbody>
                        <?php while($registro = $datos->fetch_assoc()){ ?>
                            <tr>
                                <td><?php echo $registro["id"]; ?></td>
                                <td><?php echo $registro["nombre"]; ?></td>
                                <td><?php echo $registro["numero_control"]; ?></td>
                                <td><?php echo $registro["semestre"]; ?></td>
                                <td><?php echo $registro["edad"]; ?></td>
                                <td><?php echo $registro["turno"]; ?></td>
                                <td><?php echo $registro["sexo"]; ?></td>
                                <td>
                                    <a href="" class="btn btn-xs btn-primary">editar</a>
                                    <a href="" class="btn btn-xs btn-danger">Eliminar</a>
                                </td>
                            </tr>

                        <?php } ?>

                    </tbody>
                    </table>
                </div>
                <?php } else { ?>
                        <h2 class="m-4">No existe datos de alumnos en la base de datos</h2>
                    <?php } ?>
                
                
            </div>
        </div>
    </div>
    
</body>
</html>