let cantidad = 0;

async function agregarParticipante(){

    const response =
        await fetch('agregar.jsp');

    const id =
        await response.text();

    cantidad++;

    const tbody =
        document.getElementById(
            'tbodyParticipantes');

    const fila =
        document.createElement('tr');

    fila.id = 'fila-' + id.trim();

    fila.innerHTML = `

        <td>${id}</td>

        <td>
            <input type="text"
                   class="form-control nombre">
        </td>

    `;

    tbody.appendChild(fila);

    controlarBotones();
}

function controlarBotones(){

    if(cantidad >= 3){

        document.getElementById(
            'btnExtraer')
            .classList.remove('d-none');
    }
}

async function extraerBolilla(){

    const inputs =
        document.querySelectorAll('.nombre');

    for(let input of inputs){

        if(input.value.trim() === ''){

            alert(
                'Complete todos los participantes');

            return;
        }
    }

    document.getElementById(
        'btnAgregar').disabled = true;

    const response =
        await fetch('eliminar.jsp');

    const id =
        await response.text();

    if(id.trim() !== '-1'){

        const fila =
            document.getElementById(
                'fila-' + id.trim());

        fila.classList.add('eliminado');
    }

    verificarFinal();
}

function verificarFinal(){

    const filas =
        document.querySelectorAll(
            '#tbodyParticipantes tr');

    const eliminadas =
        document.querySelectorAll(
            '.eliminado');

    const activas =
        filas.length - eliminadas.length;

    if(activas === 2){

        document.getElementById(
            'btnExtraer')
            .classList.add('d-none');

        document.getElementById(
            'btnReiniciar')
            .classList.remove('d-none');
    }
}

async function reiniciarJuego(){

    await fetch('reiniciar.jsp');

    location.reload();
}