<%@ page contentType="text/html;charset=UTF-8" %>

<%@ taglib prefix="c" uri="jakarta.tags.core" %>

<!DOCTYPE html>
<html>

<head>

    <title>Resultados</title>

    <link rel="stylesheet"
          href="${pageContext.request.contextPath}/webjars/bootstrap/5.3.8/css/bootstrap.min.css">

</head>

<body class="container mt-4">

<div class="card">

    <div class="card-header bg-dark text-white">

        <h4>

            Resultados del Prode

        </h4>

    </div>

    <div class="card-body">

        <table class="table table-bordered">

            <thead class="table-dark">

            <tr>

                <th>Partido</th>
                <th>Resultado</th>
                <th>Pronóstico</th>
                <th>Acierto</th>

            </tr>

            </thead>

            <tbody>

            <c:forEach var="p"
                       items="${listado.partidos}">

                <tr>

                    <td>

                            ${p.local} vs ${p.visitante}

                    </td>

                    <td>

                            ${p.golesLocal}
                        -
                            ${p.golesVisitante}

                    </td>

                    <td>

                        <c:choose>

                            <c:when test="${p.pronostico eq 'L'}">

                                Local

                            </c:when>

                            <c:when test="${p.pronostico eq 'E'}">

                                Empate

                            </c:when>

                            <c:otherwise>

                                Visitante

                            </c:otherwise>

                        </c:choose>

                    </td>

                    <td>

                        <c:choose>

                            <c:when test="${p.acierto}">

                                <span class="text-success">

                                    ✔ Acierto

                                </span>

                            </c:when>

                            <c:otherwise>

                                <span class="text-danger">

                                    ✘ Error

                                </span>

                            </c:otherwise>

                        </c:choose>

                    </td>

                </tr>

            </c:forEach>

            </tbody>

        </table>

        <div class="alert alert-info">

            Total de aciertos:

            <strong>

                ${listado.cantidadAciertos}

            </strong>

        </div>

        <a href="index.jsp"
           class="btn btn-primary">

            Volver

        </a>

    </div>

</div>

</body>

</html>