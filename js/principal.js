document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Recoger los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const discord = document.getElementById('discord').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear el mensaje para WhatsApp
    let mensajeWhatsApp = "¡Hola! tengo algunas dudas:\n";
    mensajeWhatsApp += `Mi nombre es: ${nombre}\n`;
    mensajeWhatsApp += `Mi discord es: ${discord}\n`;
    mensajeWhatsApp += `Asunto: ${asunto}\n`;
    mensajeWhatsApp += `Comentario: ${mensaje}\n`;
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    // URL de WhatsApp Web con el mensaje prellenado
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=+541138555057&text=${mensajeCodificado}`;

    // Redireccionar al usuario a WhatsApp Web
    window.open(urlWhatsApp, '_blank');

    // Limpia el formulario
    document.getElementById('contactForm').reset();
});
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});


