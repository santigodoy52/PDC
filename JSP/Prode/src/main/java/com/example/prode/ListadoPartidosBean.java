package com.example.prode;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class ListadoPartidosBean {

    private List<PartidoBean> partidos;

    public ListadoPartidosBean() {

        partidos = new ArrayList<>();

        List<List<String>> equipos = new ArrayList<>();

        equipos.add(Arrays.asList("EQUIPO A", "EQUIPO B"));
        equipos.add(Arrays.asList("EQUIPO C", "EQUIPO D"));
        equipos.add(Arrays.asList("EQUIPO E", "EQUIPO F"));
        equipos.add(Arrays.asList("EQUIPO G", "EQUIPO H"));
        equipos.add(Arrays.asList("EQUIPO I", "EQUIPO J"));
        equipos.add(Arrays.asList("EQUIPO K", "EQUIPO L"));
        equipos.add(Arrays.asList("EQUIPO M", "EQUIPO N"));
        equipos.add(Arrays.asList("EQUIPO O", "EQUIPO P"));
        equipos.add(Arrays.asList("EQUIPO Q", "EQUIPO R"));
        equipos.add(Arrays.asList("EQUIPO S", "EQUIPO T"));

        for(List<String> e : equipos){

            PartidoBean p = new PartidoBean();

            p.setLocal(e.get(0));
            p.setVisitante(e.get(1));

            partidos.add(p);

        }

    }

    public List<PartidoBean> getPartidos() {
        return partidos;
    }

    public void setPartidos(List<PartidoBean> partidos) {
        this.partidos = partidos;
    }

    public void generarResultados(String[] pronosticos){

        Random r = new Random();

        for(int i = 0; i < partidos.size(); i++){

            PartidoBean p = partidos.get(i);

            p.setPronostico(pronosticos[i]);

            int gl = r.nextInt(5);
            int gv = r.nextInt(5);

            p.setGolesLocal(gl);
            p.setGolesVisitante(gv);

            String resultado;

            if(gl > gv){

                resultado = "L";

            } else if(gl < gv){

                resultado = "V";

            } else {

                resultado = "E";

            }

            p.setAcierto(
                    resultado.equals(pronosticos[i])
            );

        }

    }

    public int getCantidadAciertos(){

        int total = 0;

        for(PartidoBean p : partidos){

            if(p.isAcierto()){

                total++;

            }

        }

        return total;

    }

}