<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>

<jsp:useBean id="listado"
             class="com.example.prode.ListadoPartidosBean"
             scope="session"/>

<!DOCTYPE html>
<html>

<head>

    <title>Prode</title>

    <link rel="stylesheet"
          href="${pageContext.request.contextPath}/webjars/bootstrap/5.3.8/css/bootstrap.min.css">

</head>

<body class="container mt-4">

<h2 class="mb-4">

    Pronósticos Prode

</h2>

<form action="resultados"
      method="POST">

    <table class="table table-bordered">

        <thead class="table-dark">

        <tr>

            <th>Local</th>
            <th>L</th>
            <th>E</th>
            <th>V</th>
            <th>Visitante</th>

        </tr>

        </thead>

        <tbody>

        <c:forEach var="p"
                   items="${listado.partidos}"
                   varStatus="s">

            <tr>

                <td>

                        ${p.local}

                </td>

                <td class="text-center">

                    <input type="radio"
                           name="partido${s.index}"
                           value="L"
                           required>

                </td>

                <td class="text-center">

                    <input type="radio"
                           name="partido${s.index}"
                           value="E">

                </td>

                <td class="text-center">

                    <input type="radio"
                           name="partido${s.index}"
                           value="V">

                </td>

                <td>

                        ${p.visitante}

                </td>

            </tr>

        </c:forEach>

        </tbody>

    </table>

    <button type="submit"
            class="btn btn-primary">

        Calcular resultados

    </button>

</form>

</body>

</html>