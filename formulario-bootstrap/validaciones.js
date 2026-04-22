document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {

        const checkboxes = document.querySelectorAll("#suscripciones input[type='checkbox']");
        const algunoMarcado = Array.from(checkboxes).some(cb => cb.checked);

        if (!algunoMarcado) {
            e.preventDefault();
            alert("Seleccioná al menos una opción de suscripción");
        }else {
            console.log("Formulario válido");

            const datos = new FormData(form);

            for (let [clave, valor] of datos.entries()) {
                console.log(clave + ": " + valor);
            }
        }

    });

});