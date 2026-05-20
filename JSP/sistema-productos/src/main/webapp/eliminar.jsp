<%@page contentType="text/plain"
        pageEncoding="UTF-8"%>

<jsp:useBean id="productoBean"
             class="com.example.sistemaproductos.ProductoBean"
             scope="session" />

${productoBean.eliminarProducto(param.id)}

ok