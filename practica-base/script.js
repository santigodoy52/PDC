// ===== DOM =====
const inputTexto = document.getElementById("inputTexto");
const inputNumero = document.getElementById("inputNumero");
const inputFecha = document.getElementById("inputFecha");
const select = document.getElementById("selectOpciones");

const btnAgregar = document.getElementById("btnAgregar");
const listaHTML = document.getElementById("lista");
const tabla = document.getElementById("tabla");
const display = document.getElementById("display");
const btnTimer = document.getElementById("btnTimer");
const btnClear = document.getElementById("btnClear");

// ===== ESTADO =====
let datos = [];

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    cargarStorage();
    render();
});

// ===== FUNCIONES =====

// Obtener radio seleccionado
function obtenerRadio() {
    const radios = document.querySelectorAll('input[name="radioGrupo"]');
    for (let r of radios) {
        if (r.checked) return r.value;
    }
    return "";
}

// Obtener checkboxes
function obtenerCheckboxes() {
    const checks = document.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checks).map(c => c.value).join(",");
}

// Agregar
function agregar() {
    const dato = {
        texto: inputTexto.value.trim(),
        numero: inputNumero.value,
        fecha: inputFecha.value,
        opcion: select.value,
        radio: obtenerRadio(),
        checks: obtenerCheckboxes()
    };

    if (dato.texto === "") {
        alert("Texto obligatorio");
        return;
    }

    datos.push(dato);
    guardarStorage();
    render();
    limpiarInputs();
}

// Render
function render() {
    renderLista();
    renderTabla();
}

// Lista simple
function renderLista() {
    listaHTML.innerHTML = "";

    datos.forEach((d, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between";

        li.textContent = d.texto;

        const btn = document.createElement("button");
        btn.className = "btn btn-danger btn-sm";
        btn.innerHTML = '<i class="bi bi-trash"></i>';

        btn.onclick = () => eliminar(index);

        li.appendChild(btn);
        listaHTML.appendChild(li);
    });
}

// Tabla completa
function renderTabla() {
    tabla.innerHTML = "";

    datos.forEach((d, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${d.texto}</td>
            <td>${d.numero}</td>
            <td>${d.fecha}</td>
            <td>${d.opcion}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="eliminar(${index})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;

        tabla.appendChild(fila);
    });
}

// Eliminar
function eliminar(index) {
    datos.splice(index, 1);
    guardarStorage();
    render();
}

// Timer / random
function iniciarTimer() {
    display.innerHTML = "";

    let count = 0;

    const intervalo = setInterval(() => {
        const num = Math.floor(Math.random() * 10);
        mostrarNumero(num);

        count++;
        if (count === 5) clearInterval(intervalo);

    }, 300);
}

// Mostrar número
function mostrarNumero(num) {
    const div = document.createElement("div");
    div.className = "box";
    div.textContent = num;

    display.appendChild(div);
}

// Storage
function guardarStorage() {
    localStorage.setItem("datos", JSON.stringify(datos));
}

function cargarStorage() {
    const data = localStorage.getItem("datos");
    if (data) datos = JSON.parse(data);
}

// Limpiar inputs
function limpiarInputs() {
    inputTexto.value = "";
    inputNumero.value = "";
    inputFecha.value = "";
    select.value = "";

    document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
    document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
}

// Limpiar todo
function limpiarTodo() {
    datos = [];
    localStorage.clear();
    render();
    display.innerHTML = "";
}

// ===== EVENTOS =====
btnAgregar.addEventListener("click", agregar);
btnTimer.addEventListener("click", iniciarTimer);
btnClear.addEventListener("click", limpiarTodo);