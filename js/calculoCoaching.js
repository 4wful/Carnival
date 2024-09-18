// Tasa de cambio (ejemplos)
const tasasCambio = {
    USD: 1, // Valor base
    CLP: 945, // Ejemplo: 1 USD = 945 CLP
    UYU: 37.83  // Ejemplo: 1 USD = 37.83 UYU
};

// Precios base por servidor
const preciosServicio = {
    "1": 11,  // Monto en dólares  
    "2": 18, // Monto en dólares   
    "3": 49  // Monto en dólares  
};

let precioBaseSeleccionado = 0; // Para almacenar el precio base según el servidor
let divisaSeleccionada = 'USD'; // Valor por defecto de la divisa

// Función para actualizar el precio
function actualizarPrecio() {
    const precioFinal = document.getElementById("precioFinal");

    if (precioBaseSeleccionado > 0 && divisaSeleccionada !== "0") {
        const precioEnDivisa = (precioBaseSeleccionado * tasasCambio[divisaSeleccionada]).toFixed(2);
        precioFinal.textContent = `Price ${precioEnDivisa} ${divisaSeleccionada}`;
    } else if (precioBaseSeleccionado === 0) {
        precioFinal.textContent = "SELECT A SERVER";
    } else {
        precioFinal.textContent = "SELECT A CURRENCY";
    }
}

// Manejador para la selección del servidor
document.getElementById("servicio").addEventListener("change", function () {
    const servicioSelect = document.getElementById("servicio").value;

    switch (servicioSelect) {
        case "1":
            precioBaseSeleccionado = preciosServicio["1"];
            break;
        case "2":
            precioBaseSeleccionado = preciosServicio["2"];
            break;
        case "3":
            precioBaseSeleccionado = preciosServicio["3"];
            break;
        default:
            precioBaseSeleccionado = 0; // Resetea si no hay selección válida
    }

    // Actualizar el precio automáticamente al cambiar el servicio
    actualizarPrecio();
});

// Manejador para la selección de divisa y mostrar el precio convertido
document.getElementById("divisa").addEventListener("change", function() {
    divisaSeleccionada = document.getElementById("divisa").value;

    // Actualizar el precio automáticamente al cambiar la divisa
    actualizarPrecio();
});


