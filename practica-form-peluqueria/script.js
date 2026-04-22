// ===== DOM =====
const inputTexto = document.getElementById("inputTexto");
const inputNumero = document.getElementById("inputNumero");
const inputFecha = document.getElementById("inputFecha");
const select = document.getElementById("selectOpciones");

const btnAgregar = document.getElementById("btnAgregar");
const tabla = document.getElementById("tabla");
const btnClear = document.getElementById("btnClear");
const btnRandom = document.getElementById("btnRandom");

// ===== ESTADO =====
let datos = [];
let editIndex = -1;

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    cargarStorage();
    render();
    inputTexto.focus();
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
        fecha: inputFecha.value,
        opcion: select.value,
        radio: obtenerRadio(),
        checks: obtenerCheckboxes()
    };

    if (dato.texto === "") {
        alert("Texto obligatorio");
        return;
    }

    if (dato.fecha === "") {
        alert("Fecha obligatoria");
        return;
    }

    if (editIndex === -1) {
        // AGREGAR
        datos.push(dato);
    } else {
        // EDITAR
        datos[editIndex] = dato;
        editIndex = -1;
        btnAgregar.textContent = "Agregar turno";
    }

    guardarStorage();
    render();
    limpiarInputs();
    inputTexto.focus();
}

// Render
function render() {
    renderTabla();
}

// Tabla completa
function renderTabla() {
    tabla.innerHTML = "";

    datos.forEach((d, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${d.texto}</td>
            <td>${d.fecha}</td>
            <td>${d.opcion}</td>
            <td>${d.radio}</td>
            <td>${d.checks}</td>
            <td>
                <button class="btn btn-warning btn-sm me-2" onclick="editar(${index})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-danger btn-sm" onclick="eliminar(${index})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;

        tabla.appendChild(fila);
    });
}

// Editar
function editar(index) {
    const turno = datos[index];

    inputTexto.value = turno.texto;
    inputFecha.value = turno.fecha;
    select.value = turno.opcion;

    // radio
    document.querySelectorAll('input[name="radioGrupo"]').forEach(r => {
        r.checked = (r.value === turno.radio);
    });

    // checkbox
    const checks = turno.checks.split(",");
    document.querySelectorAll('input[type="checkbox"]').forEach(c => {
        c.checked = checks.includes(c.value);
    });

    editIndex = index;

    btnAgregar.textContent = "Guardar cambios";

    inputTexto.focus();
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

function generarTurnosAutomaticos() {
    let count = 0;

    const intervalo = setInterval(() => {
        const turno = {
            texto: "Cliente " + Math.floor(Math.random() * 100),
            fecha: "2026-06-01",
            opcion: ["Corte", "Color", "Peinado"][Math.floor(Math.random() * 3)],
            radio: Math.random() > 0.5 ? "Normal" : "Urgente",
            checks: "Lavado"
        };

        datos.push(turno);
        guardarStorage();
        render();

        count++;

        if (count === 5) {
            clearInterval(intervalo);
        }

    }, 500);
}

// ===== EVENTOS =====
btnAgregar.addEventListener("click", agregar);
btnClear.addEventListener("click", limpiarTodo);
btnRandom.addEventListener("click", generarTurnosAutomaticos);
