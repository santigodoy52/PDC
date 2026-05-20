window.onload = () => {

    cargarTabla();
}

async function agregarProducto(){

    const nombre =
        document.getElementById(
            'txtNombre').value;

    const categoria =
        document.getElementById(
            'cmbCategoria').value;

    const descripcion =
        document.getElementById(
            'txtDescripcion').value;

    const destacado =
        document.getElementById(
            'chkDestacado').checked;

    const estadoSeleccionado =
        document.querySelector(
            'input[name="estado"]:checked');

    if(nombre.trim() === ''){

        alert('Ingrese nombre');

        return;
    }

    if(categoria === ''){

        alert('Seleccione categoría');

        return;
    }

    if(estadoSeleccionado == null){

        alert('Seleccione estado');

        return;
    }

    const estado =
        estadoSeleccionado.value;

    await fetch(

        `agregar.jsp?
        nombre=${encodeURIComponent(nombre)}
        &categoria=${encodeURIComponent(categoria)}
        &estado=${encodeURIComponent(estado)}
        &descripcion=${encodeURIComponent(descripcion)}
        &destacado=${destacado}`

    );

    limpiarFormulario();

    cargarTabla();
}

async function eliminarProducto(id){

    await fetch(`eliminar.jsp?id=${id}`);

    cargarTabla();
}

async function cargarTabla(){

    const response =
        await fetch('listar.jsp');

    const html =
        await response.text();

    document.getElementById(
        'tbodyProductos').innerHTML = html;
}

function limpiarFormulario(){

    document.getElementById(
        'txtNombre').value = '';

    document.getElementById(
        'cmbCategoria').value = '';

    document.getElementById(
        'txtDescripcion').value = '';

    document.getElementById(
        'chkDestacado').checked = false;

    const radios =
        document.querySelectorAll(
            'input[name=\"estado\"]');

    radios.forEach(r => r.checked = false);
}

function filtrarTabla(){

    const texto =
        document.getElementById(
            'txtBuscar')
            .value
            .toLowerCase();

    const filas =
        document.querySelectorAll(
            '#tbodyProductos tr');

    filas.forEach(fila => {

        const contenido =
            fila.textContent
                .toLowerCase();

        fila.style.display =
            contenido.includes(texto)
                ? ''
                : 'none';
    });
}