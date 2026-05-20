<%@page contentType="text/plain"
        pageEncoding="UTF-8"%>

<jsp:useBean id="sorteo"
             class="com.example.corchito.SorteoBean"
             scope="session" />

${sorteo.reiniciar()}

ok