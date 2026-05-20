<%@page contentType="text/html"
        pageEncoding="UTF-8"%>

<%@taglib prefix="c"
          uri="jakarta.tags.core"%>

<jsp:useBean id="productoBean"
             class="com.example.sistemaproductos.ProductoBean"
             scope="session" />

<c:forEach items="${productoBean.productos}"
           var="p">

    <tr>

        <td>${p.id}</td>

        <td>${p.nombre}</td>

        <td>${p.categoria}</td>

        <td>${p.estado}</td>

        <td>${p.descripcion}</td>

        <td>

            <c:choose>

                <c:when test="${p.destacado}">
                    Sí
                </c:when>

                <c:otherwise>
                    No
                </c:otherwise>

            </c:choose>

        </td>

        <td>

            <button class="btn btn-danger btn-sm"
                    onclick="eliminarProducto(${p.id})">

                Eliminar

            </button>

        </td>

    </tr>

</c:forEach>