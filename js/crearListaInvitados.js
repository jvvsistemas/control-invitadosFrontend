document.getElementById("form-crear-lista-invitados").addEventListener("submit", async function (e) {
    e.preventDefault();

    const btn = document.querySelector("button[type='submit']");
    const msgSuccess = document.getElementById("msg-success");
    const msgError = document.getElementById("msg-error");

    msgSuccess.classList.add("d-none");
    msgError.classList.add("d-none");

    btn.disabled = true;
    btn.innerText = "Enviando...";

    try {
        const data = {
            nombre: document.getElementById("nombreinvitado").value,
            acompanantes: parseInt(document.getElementById("acompanantesinvitado").value) || 0,
            telefono: document.getElementById("telefonoinvitado").value,
        };

        const response = await fetch("http://127.0.0.1:8083/admin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            msgSuccess.classList.remove("d-none");

            // limpiar formulario
            document.getElementById("form-crear-lista-invitados").reset();
        } else {
            msgError.classList.remove("d-none");
        }

    } catch (error) {
        msgError.classList.remove("d-none");
    }

    btn.disabled = false;
    btn.innerText = "Crear Invitados";
});
