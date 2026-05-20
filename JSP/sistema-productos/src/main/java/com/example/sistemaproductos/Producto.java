package com.example.sistemaproductos;

public class Producto {

    private int id;
    private String nombre;
    private String categoria;
    private String estado;
    private String descripcion;
    private boolean destacado;

    public Producto() {
    }

    public Producto(int id,
                    String nombre,
                    String categoria,
                    String estado,
                    String descripcion,
                    boolean destacado) {

        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.estado = estado;
        this.descripcion = descripcion;
        this.destacado = destacado;
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


    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }


    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }


    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }


    public boolean isDestacado() {
        return destacado;
    }

    public void setDestacado(boolean destacado) {
        this.destacado = destacado;
    }
}