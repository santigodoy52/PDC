<%@page contentType="text/html"
        pageEncoding="UTF-8"%>

<%@taglib prefix="c"
          uri="jakarta.tags.core"%>

<jsp:useBean id="productoBean"
             class="com.example.sistemaproductos.ProductoBean"
             scope="session" />

<!DOCTYPE html>

<html>

<head>

    <title>CRUD Dinámico</title>

    <link href=
                  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet">

    <link rel="stylesheet"
          href="css/estilos.css">

</head>

<body class="container mt-4">

<h2>Registro de Productos</h2>

<div class="card p-3 mb-4">

    <div class="mb-3">

        <label>Nombre</label>

        <input type="text"
               id="txtNombre"
               class="form-control">

    </div>

    <div class="mb-3">

        <label>Categoría</label>

        <select id="cmbCategoria"
                class="form-select">

            <option value="">
                Seleccione
            </option>

            <option value="Tecnología">
                Tecnología
            </option>

            <option value="Hogar">
                Hogar
            </option>

            <option value="Deportes">
                Deportes
            </option>

        </select>

    </div>

    <div class="mb-3">

        <label>Estado</label>

        <br>

        <input type="radio"
               name="estado"
               value="Nuevo">

        Nuevo

        <input type="radio"
               name="estado"
               value="Usado">

        Usado

    </div>

    <div class="mb-3">

        <label>Descripción</label>

        <textarea id="txtDescripcion"
                  class="form-control">
        </textarea>

    </div>

    <div class="mb-3">

        <input type="checkbox"
               id="chkDestacado">

        Destacado

    </div>

    <button class="btn btn-primary"
            onclick="agregarProducto()">

        Agregar Producto

    </button>

</div>

<input type="text"
       id="txtBuscar"
       class="form-control mb-3"
       placeholder="Buscar..."
       onkeyup="filtrarTabla()">

<table class="table table-bordered">

    <thead>

    <tr>

        <th>ID</th>
        <th>Nombre</th>
        <th>Categoría</th>
        <th>Estado</th>
        <th>Descripción</th>
        <th>Destacado</th>
        <th>Acción</th>

    </tr>

    </thead>

    <tbody id="tbodyProductos">

    </tbody>

</table>

<script src="js/app.js"></script>

</body>

</html>