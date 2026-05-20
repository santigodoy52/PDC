package com.example.prode;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.IOException;


@WebServlet("/resultados")
public class ResultadosServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession();

        ListadoPartidosBean listado =
                (ListadoPartidosBean)
                        session.getAttribute("listado");

        if(listado == null){

            listado = new ListadoPartidosBean();

            session.setAttribute("listado", listado);

        }

        String[] pronosticos = new String[10];

        for(int i = 0; i < 10; i++){

            pronosticos[i] =
                    request.getParameter("partido" + i);

        }

        listado.generarResultados(pronosticos);

        request.getRequestDispatcher(
                "resultados.jsp"
        ).forward(request, response);

    }

}