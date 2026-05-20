<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib prefix="c"
          uri="jakarta.tags.core"%>

<jsp:useBean id="sorteo"
             class="com.example.corchito.SorteoBean"
             scope="session" />

<!DOCTYPE html>

<html>

<head>

    <title>Juego del Corchito</title>

    <link href=
                  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet">

    <link rel="stylesheet"
          href="css/estilos.css">

</head>

<body class="container mt-4">

<h2>Juego del Corchito</h2>

<button class="btn btn-primary mb-3"
        id="btnAgregar"
        onclick="agregarParticipante()">

    Agregar

</button>

<button class="btn btn-danger mb-3 d-none"
        id="btnExtraer"
        onclick="extraerBolilla()">

    Extraer Bolilla

</button>

<button class="btn btn-success mb-3 d-none"
        id="btnReiniciar"
        onclick="reiniciarJuego()">

    Iniciar

</button>

<table class="table"
       id="tablaParticipantes">

    <thead>

    <tr>
        <th>#</th>
        <th>Participante</th>
    </tr>

    </thead>

    <tbody id="tbodyParticipantes">

    </tbody>

</table>

<script src="js/app.js"></script>

<script>

    window.onload = () => {

        agregarParticipante();

    }

</script>

</body>

</html>