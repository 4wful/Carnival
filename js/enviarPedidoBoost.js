// Enviar los datos al wsp
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener valores del formulario
    const divisionInicio = document.getElementById("divisionInicio").value;
    const divisionDeseada = document.getElementById("divisionDeseada").value;
    const ganaciaLP = document.getElementById("ganaciaLP").value;
    const duoBoost = document.getElementById("duoBoost").checked;
    const orderPrioridad = document.getElementById("orderPrioridad").checked;
    const poolCampeones = document.getElementById("poolCampeones").checked;
    const rolSupport = document.getElementById("rolSupport").checked;
    const summoners = document.getElementById("summoners").value;
    const precioFinal = document.getElementById("precioFinal").textContent;

    // Mapeo de divisiones
    const mapeoDivisiones = {
        1: "Hierro IV", 2: "Hierro III", 3: "Hierro II", 4: "Hierro I",
        5: "Bronce IV", 6: "Bronce III", 7: "Bronce II", 8: "Bronce I",
        9: "Plata IV", 10: "Plata III", 11: "Plata II", 12: "Plata I",
        13: "Oro IV", 14: "Oro III", 15: "Oro II", 16: "Oro I",
        17: "Platino IV", 18: "Platino III", 19: "Platino II", 20: "Platino I",
        21: "Esmeralda IV", 22: "Esmeralda III", 23: "Esmeralda II", 24: "Esmeralda I",
        25: "Diamante IV", 26: "Diamante III", 27: "Diamante II", 28: "Diamante I",
        29: "Maestro IV"
    };

    const mapeoLp = {
        1: "menos de 18 Lp", 2: "entre 20-21 Lp", 3: "más de 22 Lp"
    };

    // Crear mensaje para WhatsApp solo con los elementos seleccionados
    let mensajeWhatsApp = "¡Hola! Me gustaría recibir información sobre este servicio:\n";

    if (divisionInicio) {
        mensajeWhatsApp += `Division Actual: ${mapeoDivisiones[divisionInicio]}\n`;
    }
    if (divisionDeseada) {
        mensajeWhatsApp += `Division Deseada: ${mapeoDivisiones[divisionDeseada]}\n`;
    }
    if (ganaciaLP) {
        mensajeWhatsApp += `Gano ${mapeoLp[ganaciaLP]}\n`;
    }
    if (duoBoost) {
        mensajeWhatsApp += `Duo Boost: Sí\n`;
    }
    if (orderPrioridad) {
        mensajeWhatsApp += `Prioridad: Sí\n`;
    }
    if (poolCampeones) {
        mensajeWhatsApp += `Pool de Campeones: Sí\n`;
    }
    if (rolSupport) {
        mensajeWhatsApp += `Rol Support: Sí\n`;
    }
    if(summoners){
        mensajeWhatsApp += `Summoner: ${[summoners]}`;
    }
    mensajeWhatsApp +=  `Jugar Offline: Sí `
    mensajeWhatsApp += ` PRECIO: ${[precioFinal]}`;
    
    // Codificar el mensaje para la URL de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);

    // URL de WhatsApp con el mensaje
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=+541138555057&text=${mensajeCodificado}`;

    // Redireccionar a la URL de WhatsApp
    window.open(urlWhatsApp, '_blank');
    
});

