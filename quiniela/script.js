const btn = document.getElementById("btnSorteo");
const display = document.getElementById("display");
const tabla = document.getElementById("tablaResultados");

const TOTAL_SORTEOS = 20;

let sorteosRealizados = 0;
let combinaciones = [];
let enCurso = false;

// ===== INICIALIZACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
    cargarDesdeSession();
    renderizarTabla();

    if (enCurso) {
        btn.disabled = true;
        btn.textContent = "Sorteando...";
        ejecutarSorteo();
    } else if (combinaciones.length === TOTAL_SORTEOS) {
        btn.textContent = "Volver a sortear";
    }
});

// ===== EVENTO BOTÓN =====
btn.addEventListener("click", () => {
    if (btn.textContent === "Volver a sortear") {
        limpiarTodo();
    }
    iniciarSorteo();
});

// ===== FUNCIONES =====

function iniciarSorteo() {
    btn.disabled = true;
    btn.textContent = "Sorteando...";

    enCurso = true;
    guardarEstado();

    ejecutarSorteo();
}

function ejecutarSorteo() {
    if (sorteosRealizados >= TOTAL_SORTEOS) {
        finalizarSorteo();
        return;
    }

    generarCombinacion((combinacion) => {
        combinaciones.push(combinacion);
        sorteosRealizados++;

        guardarEstado();
        agregarATabla(combinacion);

        setTimeout(() => {
            display.innerHTML = "";
            ejecutarSorteo();
        }, 2000);
    });
}

// ===== GENERAR COMBINACIÓN SIN REPETIDOS =====
function generarCombinacion(callback) {
    let numeros = [];
    let contador = 0;

    function generarNumero() {
        if (contador === 4) {
            const combinacion = numeros.join("");

            // 🔴 evitar combinaciones repetidas
            if (combinaciones.includes(combinacion)) {
                numeros = [];
                contador = 0;
                display.innerHTML = "";
                generarNumero();
                return;
            }

            callback(combinacion);
            return;
        }

        const numero = Math.floor(Math.random() * 10);
        numeros.push(numero);

        mostrarNumero(numero);

        contador++;

        setTimeout(generarNumero, 300);
    }

    generarNumero();
}

// ===== UI =====
function mostrarNumero(num) {
    const div = document.createElement("div");
    div.className = "numero";
    div.textContent = num;

    display.appendChild(div);
}

function agregarATabla(combinacion) {
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${sorteosRealizados}</td>
        <td>${combinacion}</td>
    `;

    tabla.appendChild(fila);
}

function renderizarTabla() {
    tabla.innerHTML = "";

    combinaciones.forEach((comb, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${comb}</td>
        `;

        tabla.appendChild(fila);
    });

    sorteosRealizados = combinaciones.length;
}

// ===== FINALIZAR =====
function finalizarSorteo() {
    enCurso = false;
    guardarEstado();

    btn.disabled = false;
    btn.textContent = "Volver a sortear";
}

// ===== STORAGE =====
function guardarEstado() {
    sessionStorage.setItem("combinaciones", JSON.stringify(combinaciones));
    sessionStorage.setItem("enCurso", JSON.stringify(enCurso));
}

function cargarDesdeSession() {
    const datos = sessionStorage.getItem("combinaciones");
    const estado = sessionStorage.getItem("enCurso");

    if (datos) {
        combinaciones = JSON.parse(datos);
    }

    if (estado) {
        enCurso = JSON.parse(estado);
    }
}

// ===== LIMPIAR TODO =====
function limpiarTodo() {
    sessionStorage.clear();
    combinaciones = [];
    sorteosRealizados = 0;
    tabla.innerHTML = "";
    display.innerHTML = "";
}