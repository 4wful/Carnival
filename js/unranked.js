// Define el número de WhatsApp al que se enviará el mensaje
const whatsappNumber = "+541138555057"; 

// Función para seleccionar el plan y abrir WhatsApp con el mensaje adecuado
function selectPlan(plan, event) {
  // Evita el envío predeterminado del formulario
  event.preventDefault();

  // Asigna el plan seleccionado al campo oculto
  document.getElementById("selectedPlan").value = plan;

  // Genera el mensaje para enviar a WhatsApp
  const message = `Hola, quiero pedir una cuenta del plan ${plan} para la cuenta Unranked.`;

  // Codifica el mensaje para que sea compatible con la URL
  const encodedMessage = encodeURIComponent(message);

  // Crea el enlace de WhatsApp con el mensaje
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Redirige al enlace de WhatsApp para enviar el mensaje
  window.open(whatsappUrl, "_blank");
}