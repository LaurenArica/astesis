<?php
    // Conexión a la base de datos (ejemplo con MySQL)
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "astesis";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibir datos del formulario
    $nombres = $_POST['nombres'];
    $apellidos = $_POST['apellidos'];
    $telefono1 = $_POST['telefono1'];
    $telefono2 = $_POST['telefono2'];
    $email = $_POST['email'];
    $comentario = $_POST['comentario'];


    // Insertar datos en la base de datos
    $sql = "INSERT INTO persona (nombres, apellidos, email, telefono_1, telefono_2) VALUES ('$nombres', '$apellidos', '$telefono1', '$telefono2', '$email')";

    if ($conn->query($sql) === TRUE) {
        $lastid = $conn->insert_id;
        $suscripcion = "INSERT INTO suscripcion (id_persona, comentario) VALUES ('$lastid', '$comentario')";

        if ($conn->query($suscripcion) === TRUE) {
            $response = array(
                'message' => 'Formulario enviado con éxito.',
                'icon' => 'success'
            );
        } else {
            $response = array(
                'message' => 'Error al guardar datos de suscripción: ' . $conn->error,
                'icon' => 'error'
            );
        }
    } else {
        $response = array(
            'message' => 'Error al guardar datos de persona: ' . $conn->error,
            'icon' => 'error'
        );
    }
    echo json_encode($response);
    $conn->close();
    } else {
        http_response_code(400);
        echo 'Error: Acceso no permitido.';
    }
?>