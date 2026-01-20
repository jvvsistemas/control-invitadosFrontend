/*
const TOKEN_STORAGE_KEY = 'invitation_token';
const params = new URLSearchParams(window.location.search);
const token = params.get("t");

if (!token) {
    console.error("No se encontró token en la URL");
}

async function cargarDatosInvitado() {
    try {
        const response = await fetch(`http://127.0.0.1:8083/admin/buscar/${token}`);

        if (!response.ok) {
            throw new Error("Invitado no encontrado");
        }

        const invitado = await response.json();

        // Guardar el token para usarlo en el envío de datos.js
        localStorage.setItem(TOKEN_STORAGE_KEY, token);

        // Rellenar HTML
        document.getElementById("nombre-invitado").innerHTML = invitado.nombre;
        document.getElementById("pases-invitado").innerHTML = "Pases: " + invitado.acompanantes;

        // Rellenar FORMULARIO automáticamente
        document.getElementById("nombre").value = invitado.nombre;
        document.getElementById("acompanantes").value = invitado.acompanantes;

    } catch (error) {
        console.error(error);
    }
}

cargarDatosInvitado();
*/
const API_URL = "https://control-invitadosbackend.onrender.com";                 
const TOKEN_STORAGE_KEY = 'invitation_token';
const params = new URLSearchParams(window.location.search);
const token = params.get("t");

if (!token) {
    console.error("No se encontró token en la URL");
}

async function cargarDatosInvitado() {
    try {
        const response = await fetch(`${API_URL}/admin/buscar/${token}`);

        if (!response.ok) {
            throw new Error("Invitado no encontrado");
        }

        const invitado = await response.json();

        // Guardar token
        localStorage.setItem(TOKEN_STORAGE_KEY, token);

        // Rellenar tarjetas
        document.getElementById("nombre-invitado").innerHTML = invitado.nombre;
        document.getElementById("pases-invitado").innerHTML = "Pases: " + invitado.acompanantes;

        // Rellenar formulario
        document.getElementById("nombre").value = invitado.nombre;
        document.getElementById("acompanantes").value = invitado.acompanantes;

        // SI YA CONFIRMÓ → BLOQUEAR FORMULARIO
        if (invitado.confirmado) {
            deshabilitarFormulario();
        }

    } catch (error) {
        console.error(error);
    }
}

function deshabilitarFormulario() {
    document.getElementById("form-rsvp").classList.add("d-none");

    const msg = document.getElementById("msg-success");
    msg.classList.remove("d-none");
    msg.innerHTML = "Ya has confirmado tu asistencia 💖";
}

cargarDatosInvitado();

