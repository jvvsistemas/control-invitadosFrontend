/*
const form = document.getElementById("form-rsvp");

let enviado = false;

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (enviado) return; // <-- evita doble envío
    enviado = true;

    document.querySelector("button[type='submit']").disabled = true;

    const data = {
        nombre: document.getElementById("nombre").value,
        acompanantes: document.getElementById("acompanantes").value,
        //asistencia: document.getElementById("asistencia").value,
        asistencia: document.querySelector('input[name="asistencia"]:checked').value,
        mensaje: document.getElementById("mensaje").value,
        // INCLUIR EL TOKEN EN EL BODY
        //tokenAcceso: token
    };

    const response = await fetch("http://127.0.0.1:8083/rsvp/confirmar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        mostrarMensajeBonito();
    } else {
        alert("Error al enviar.");
    }
});

function mostrarMensajeBonito() {
    document.getElementById("mensaje-exito").classList.remove("d-none");
}
    */
const form = document.getElementById("form-rsvp");
let enviado = false;

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (enviado) return;
    enviado = true;

    document.querySelector("button[type='submit']").disabled = true;

    const tokenAcceso = localStorage.getItem("invitation_token");

    const data = {
        nombre: document.getElementById("nombre").value,
        acompanantes: document.getElementById("acompanantes").value,
        asistencia: document.querySelector("input[name='asistencia']:checked").value,
        mensaje: document.getElementById("mensaje").value,
        tokenAcceso: tokenAcceso
    };

    const response = await fetch("http://127.0.0.1:8083/rsvp/confirmar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        mostrarMensajeBonito();
    } else {
        mostrarError();
    }
});

function mostrarMensajeBonito() {
    document.getElementById("msg-success").classList.remove("d-none");
    form.classList.add("d-none");
}

function mostrarError() {
    document.getElementById("msg-error").classList.remove("d-none");
}
