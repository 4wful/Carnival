// Tasa de cambio (ejemplos)
const tasasCambio = {
    USD: 1, // Valor base
    CLP: 945, // Ejemplo: 1 USD = 945 CLP
    UYU: 37.83  // Ejemplo: 1 USD = 37.83 UYU
};

// Precios base por servicio
const preciosServicio = {
    "1": 11,  // Monto en dólares  
    "2": 18, // Monto en dólares   
    "3": 49  // Monto en dólares  
};

let precioBaseSeleccionado = 0; // Para almacenar el precio base según el servicio
let divisaSeleccionada = 'USD'; // Valor por defecto de la divisa

// Función para actualizar el precio
function actualizarPrecio() {
    const precioFinal = document.getElementById("precioFinal");

    if (precioBaseSeleccionado > 0 && divisaSeleccionada !== "0") {
        const precioEnDivisa = (precioBaseSeleccionado * tasasCambio[divisaSeleccionada]).toFixed(2);
        precioFinal.textContent = ` ${precioEnDivisa} ${divisaSeleccionada}`;
    } else if (precioBaseSeleccionado === 0) {
        precioFinal.textContent = "SELECT A SERVICE";
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
document.getElementById("form").addEventListener("change", function() {
    divisaSeleccionada = document.getElementById("divisa").value;
    // Actualizar el precio automáticamente al cambiar la divisa
    actualizarPrecio();
    actualizarResumen();
});

function actualizarResumen(){
    const divisionInicio = document.getElementById("divisionInicio").value;
    const servicio = document.getElementById("servicio").value;
    const fechaServicio = document.getElementById("fechaServicio").value;


    
    //Mapeo de variables a usar
    const nombreDivision ={
        1: "Iron IV", 2: "Iron III", 3: "Iron II", 4: "Iron I",
        5: "Bronze IV", 6: "Bronze III", 7: "Bronze II", 8: "Bronze I",
        9: "Silver IV", 10: "Silver III", 11: "Silver II", 12: "Silver I",
        13: "Gold IV", 14: "Gold III", 15: "Gold II", 16: "Gold I",
        17: "Platinum IV", 18: "Platinum III", 19: "Platinum II", 20: "Platinum I",
        21: "Esmerald IV", 22: "Esmerald III", 23: "Esmerald II", 24: "Esmerald I",
        25: "Diamond IV", 26: "Diamond III", 27: "Diamond II", 28: "Diamond I",
        29: "Master IV"
    }
    //Mapeo de Promociones
    const nombrePromocion = {
        1: "BASIC", 2: "MEDIUM", 3:"SPECIAL"
    }
    const resumenP = nombrePromocion[servicio];
    const resumenDA = nombreDivision[divisionInicio];
    //Mostrar informacion selecionada 
    document.getElementById("mostrarDA").textContent = resumenDA;
    document.getElementById("mostrarTS").textContent = resumenP;
    document.getElementById("mostrarD").textContent = fechaServicio;
}



