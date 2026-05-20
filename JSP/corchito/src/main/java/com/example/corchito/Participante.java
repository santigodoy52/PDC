package com.example.corchito;

public class Participante {

    private int id;
    private String nombre;
    private boolean eliminado;

    public Participante() {
    }

    public Participante(int id) {
        this.id = id;
        this.nombre = "";
        this.eliminado = false;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public boolean isEliminado() {
        return eliminado;
    }

    public void setEliminado(boolean eliminado) {
        this.eliminado = eliminado;
    }
}