package com.example.sistemaproductos;
import java.util.ArrayList;
import java.util.List;

public class ProductoBean {

    private List<Producto> productos;

    public ProductoBean() {

        productos = new ArrayList<>();
    }

    public List<Producto> getProductos() {

        return productos;
    }

    public void agregarProducto(String nombre,
                                String categoria,
                                String estado,
                                String descripcion,
                                boolean destacado) {

        int id = productos.size() + 1;

        Producto p =
                new Producto(id,
                        nombre,
                        categoria,
                        estado,
                        descripcion,
                        destacado);

        productos.add(p);
    }

    public void eliminarProducto(int id) {

        productos.removeIf(
                p -> p.getId() == id);
    }
}