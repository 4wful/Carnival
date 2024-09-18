document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener valores del formulario
    const divisionInicio = document.getElementById("divisionInicio").value;
    const servicio = document.getElementById("servicio").value;
    const discord = document.getElementsByName("discord")[0].value;
    const fechaServicio = document.getElementById("fechaServicio").value;
    const precioFinal = document.getElementById("precioFinal").textContent;
    // Mapeo de divisiones de inicio
    const tipoDivisionInicio = {
        "1": "Hierro IV",
        "2": "Hierro III",
        "3": "Hierro II",
        "4": "Hierro I",
        "5": "Bronce IV",
        "6": "Bronce III",
        "7": "Bronce II",
        "8": "Bronce I",
        "9": "Plata IV",
        "10": "Plata III",
        "11": "Plata II",
        "12": "Plata I",
        "13": "Oro IV",
        "14": "Oro III",
        "15": "Oro II",
        "16": "Oro I",
        "17": "Platino IV",
        "18": "Platino III",
        "19": "Platino II",
        "20": "Platino I",
        "21": "Esmeralda IV",
        "22": "Esmeralda III",
        "23": "Esmeralda II",
        "24": "Esmeralda I",
        "25": "Diamante IV",
        "26": "Diamante III",
        "27": "Diamante II",
        "28": "Diamante I",
        "29": "Maestro IV"
    };

    // Mapeo de servicios
    const tipoServicio = {
        "1": "1 SESIÓN",
        "2": "2 SESIONES",
        "3": "5 SESIONES"
    };

    // Verificar si se seleccionó una división de inicio válida
    const divisionSeleccionada = tipoDivisionInicio[divisionInicio] ? tipoDivisionInicio[divisionInicio] : "División no seleccionada";

    // Verificar si se seleccionó un servicio válido
    const servicioSeleccionado = tipoServicio[servicio] ? tipoServicio[servicio] : "Servicio no seleccionado";

    // Crear mensaje para WhatsApp solo con los elementos seleccionados
    let mensajeWhatsApp = "¡Hola! Me gustaría adquirir este servicio de coaching:\n";
    mensajeWhatsApp += `División de Inicio: ${divisionSeleccionada}\n`;
    mensajeWhatsApp += `Servicio: ${servicioSeleccionado}\n`;
    mensajeWhatsApp += `Discord: ${discord}\n`;
    mensajeWhatsApp += `Fecha Deseada: ${fechaServicio}\n`;
    mensajeWhatsApp += `${precioFinal}\n`;

    // Codificar el mensaje para la URL de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);

    // URL de WhatsApp con el mensaje
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=+541138555057&text=${mensajeCodificado}`;

    // Redireccionar a la URL de WhatsApp
    window.open(urlWhatsApp, '_blank');
    
});


