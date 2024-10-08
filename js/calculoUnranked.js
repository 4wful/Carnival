// Tasa de cambio (ejemplos)
const tasasCambio = {
    USD: 1, // Valor base
    CLP: 945, // Ejemplo: 1 USD = 945 CLP
    UYU: 37.83  // Ejemplo: 1 USD = 37.83 UYU
};

// Precios base por servidor
const preciosBase = {
    "1": 8,  // LAS: 8 USD
    "2": 8,  // BR: 8 USD
    "3": 8   // NA: 8 USD
};

let precioBaseSeleccionado = 0; // Para almacenar el precio base según el servidor
let divisaSeleccionada = 'USD'; // Divisa por defecto (USD)

// Función para actualizar el precio
function actualizarPrecio() {
    const precioFinal = document.getElementById("precioFinal");

    if (precioBaseSeleccionado > 0 && divisaSeleccionada !== "0") {
        const precioEnDivisa = (precioBaseSeleccionado * tasasCambio[divisaSeleccionada]).toFixed(2);
        precioFinal.textContent = `PRICE ${precioEnDivisa} ${divisaSeleccionada}`;
    } else if (precioBaseSeleccionado === 0) {
        precioFinal.textContent = "SELECT A SERVER";
    } else {
        precioFinal.textContent = "SELECT A CURRENCY";
    }
}

// Manejador para la selección del servidor
document.getElementById("servidor").addEventListener("change", function() {
    const servidorSelect = document.getElementById("servidor");
    const cuentaInfo = document.getElementById("cuentaInfo");
    const infoServidor = document.getElementById("infoServidor");

    // Compara el valor como cadena
    if (servidorSelect.value !== "0") {
        // Muestra el bloque de información de la cuenta
        cuentaInfo.style.display = "block";

        // Actualiza el servidor seleccionado
        switch (servidorSelect.value) {
            case "1":
                infoServidor.textContent = "LAS";
                precioBaseSeleccionado = preciosBase["1"];
                break;
            case "2":
                infoServidor.textContent = "BR";
                precioBaseSeleccionado = preciosBase["2"];
                break;
            case "3":
                infoServidor.textContent = "NA";
                precioBaseSeleccionado = preciosBase["3"];
                break;
        }

        // Actualiza el precio al cambiar el servidor
        actualizarPrecio();
    } else {
        cuentaInfo.style.display = "none";
        precioBaseSeleccionado = 0;
        document.getElementById("precioFinal").textContent = "SELECT A SERVER";
    }
});

// Manejador para la selección de divisa y mostrar el precio convertido
document.getElementById("divisa").addEventListener("change", function() {
    divisaSeleccionada = document.getElementById("divisa").value;

    // Actualiza el precio automáticamente al cambiar la divisa
    actualizarPrecio();
});

document.getElementById("form").addEventListener("change", function() {
    const server = document.getElementById("servidor").value;

    const tipoServer = {
        1:" LAS", 2:" BR",3:" LAN"
    }
    
    const nombreServer=tipoServer[server];

    document.getElementById("mostrarS").textContent = nombreServer;
});






