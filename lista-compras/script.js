// ===== VARIABLES =====
const input = document.getElementById("inputArticulo");
const btnAgregar = document.getElementById("btnAgregar");
const listaHTML = document.getElementById("lista");

let lista = [];

// ===== INICIALIZACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
    cargarDesdeLocalStorage();
    renderizar();
    input.focus();
});

// ===== FUNCIONES =====

// Cargar datos
function cargarDesdeLocalStorage() {
    const datos = localStorage.getItem("listaCompras");
    if (datos) {
        lista = JSON.parse(datos);
    }
}

// Guardar datos
function guardarEnLocalStorage() {
    localStorage.setItem("listaCompras", JSON.stringify(lista));
}

// Renderizar lista
function renderizar() {
    listaHTML.innerHTML = "";

    lista.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.textContent = item;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        const icono = document.createElement("i");
        icono.className = "bi bi-trash";

        btnEliminar.appendChild(icono);
        btnEliminar.className = "btn btn-danger btn-sm";

        btnEliminar.addEventListener("click", () => {
            eliminarItem(index);
        });

        li.appendChild(btnEliminar);
        listaHTML.appendChild(li);
    });
}

// Agregar item
function agregarItem() {
    const valor = input.value.trim();

    if (valor === "") {
        alert("El campo no puede estar vacío");
        return;
    }

    lista.push(valor);
    guardarEnLocalStorage();
    renderizar();

    input.value = "";
    input.focus();
}

// Eliminar item
function eliminarItem(index) {
    lista.splice(index, 1);
    guardarEnLocalStorage();
    renderizar();
}

// ===== EVENTOS =====

// Click botón
btnAgregar.addEventListener("click", agregarItem);

// Enter en input
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        agregarItem();
    }
});