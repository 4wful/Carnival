document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener valores del formulario
    const servidor = document.getElementById("servidor").value;
    const precioFinal = document.getElementById("precioFinal").textContent;

    // Mapeo de servidores
    const tipoServidor = {
        "1": "LAS",
        "2": "BR",
        "3": "NA"
    };

    // Verificar si se seleccionó un servidor válido
    const servidorSeleccionado = tipoServidor[servidor] ? tipoServidor[servidor] : "Servidor no seleccionado";

    // Crear mensaje para WhatsApp solo con los elementos seleccionados
    let mensajeWhatsApp = "¡Hola! Me gustaría adquirir una nueva cuenta:\n ";
    mensajeWhatsApp += `Servidor: ${servidorSeleccionado}\n`;
    mensajeWhatsApp += `${precioFinal}\n`;

    // Codificar el mensaje para la URL de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);

    // URL de WhatsApp con el mensaje
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=+541138555057&text=${mensajeCodificado}`;

    // Redireccionar a la URL de WhatsApp
    window.open(urlWhatsApp, '_blank');
   
});

