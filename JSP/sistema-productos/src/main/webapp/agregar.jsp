<%@page contentType="text/plain"
        pageEncoding="UTF-8"%>

<jsp:useBean id="productoBean"
             class="com.example.sistemaproductos.ProductoBean"
             scope="session" />

<jsp:setProperty name="productoBean"
                 property="*" />

${productoBean.agregarProducto(
param.nombre,
param.categoria,
param.estado,
param.descripcion,
param.destacado == 'true'
)}

ok