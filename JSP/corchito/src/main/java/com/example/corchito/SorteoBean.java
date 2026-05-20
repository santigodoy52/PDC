package com.example.corchito;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class SorteoBean {

    private List<Participante> participantes;

    public SorteoBean() {

        participantes = new ArrayList<>();
    }

    public List<Participante> getParticipantes() {

        return participantes;
    }

    public int agregarParticipante() {

        int id = participantes.size() + 1;

        participantes.add(
                new Participante(id));

        return id;
    }

    public int eliminarParticipante() {

        List<Participante> activos =
                new ArrayList<>();

        for (Participante p : participantes) {

            if (!p.isEliminado()) {

                activos.add(p);
            }
        }

        if (activos.size() <= 2) {

            return -1;
        }

        Random r = new Random();

        Participante eliminado =
                activos.get(
                        r.nextInt(activos.size()));

        eliminado.setEliminado(true);

        return eliminado.getId();
    }

    public void reiniciar() {

        participantes.clear();
    }
}