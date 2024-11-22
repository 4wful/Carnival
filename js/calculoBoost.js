document.addEventListener("DOMContentLoaded", function () {
    // Selección de elementos del formulario
    const formElements = [
        document.getElementById("divisionInicio"),
        document.getElementById("divisionDeseada"),
        document.getElementById("ganaciaLP"),
        document.getElementById("duoBoost"),
        document.getElementById("orderPrioridad"),
        document.getElementById("poolCampeones"),
        document.getElementById("rolSupport"),
        document.getElementById("divisa")
    ];

    // Agregar eventos de cambio
    formElements.forEach(function (element) {
        element.addEventListener("change", calcularPrecioAutomáticamente);
    });

    // Configuración de precios por divisa
    const preciosPorDivisa = {
        USD: {
            Hierro: [2.1, 2.1, 2.1, 2.1],
            Bronce: [2.89, 2.89, 2.89, 2.89],
            Plata: [3.68, 3.68, 3.68, 3.68],
            Oro: [4.94, 4.94, 4.94, 4.94],
            Platino: [6.41, 6.41, 6.41, 6.41],
            Esmeralda: [8.82, 8.82, 8.82, 8.82],
            Diamante: [9.98, 9.98, 9.98, 10.5]
        },
        CLP: {
            Hierro: [2000, 2000, 2000, 2000],
            Bronce: [2750, 2750, 2750, 2750],
            Plata: [3500, 3500, 3500, 3500],
            Oro: [4700, 4700, 4700, 4700],
            Platino: [6100, 6100, 6100, 6100],
            Esmeralda: [8400, 8400, 8400, 8400],
            Diamante: [9500, 9500, 9500, 10000]
        },
        UYU: {
            Hierro: [170, 170, 170, 170],
            Bronce: [190, 190, 190, 190],
            Plata: [250, 250, 250, 250],
            Oro: [295, 295, 295, 295],
            Platino: [340, 340, 340, 340],
            Esmeralda: [480, 480, 480, 480],
            Diamante: [580, 580, 580, 590]
        }
    };

    // Mapeo de divisiones
    const mapeoDivisiones = {
        1: "Hierro IV", 2: "Hierro III", 3: "Hierro II", 4: "Hierro I",
        5: "Bronce IV", 6: "Bronce III", 7: "Bronce II", 8: "Bronce I",
        9: "Plata IV", 10: "Plata III", 11: "Plata II", 12: "Plata I",
        13: "Oro IV", 14: "Oro III", 15: "Oro II", 16: "Oro I",
        17: "Platino IV", 18: "Platino III", 19: "Platino II", 20: "Platino I",
        21: "Esmeralda IV", 22: "Esmeralda III", 23: "Esmeralda II", 24: "Esmeralda I",
        25: "Diamante IV", 26: "Diamante III", 27: "Diamante II", 28: "Diamante I",
        29: "Maestro"
    };

    const niveles = ["IV", "III", "II", "I"];

    // Función para aplicar precios extras
    function preciosExtras(precioBase, aumentoLpPorcentaje, duoBoost, orderPrioridad, poolCampeones, rolSupport) {
        let precioFinal = precioBase;
        if (!isNaN(aumentoLpPorcentaje)) {
            precioFinal += precioBase * aumentoLpPorcentaje;
        }
        if (duoBoost) precioFinal += precioBase * 0.40;
        if (orderPrioridad) precioFinal += precioBase * 0.30;
        if (poolCampeones) precioFinal += precioBase * 0.15;
        if (rolSupport) precioFinal += precioBase * 0.30;
        return precioFinal;
    }

    // Función principal para calcular el precio
    function calcularPrecioAutomáticamente() {
        const divisionInicio = parseInt(document.getElementById("divisionInicio").value);
        const divisionDeseada = parseInt(document.getElementById("divisionDeseada").value);
        const divisaSeleccionada = document.getElementById("divisa").value;

        // Validar divisiones
        if (divisionInicio >= divisionDeseada) {
            alert("La División de Inicio no puede ser mayor o igual a la Deseada.");
            return;
        }

        const precios = preciosPorDivisa[divisaSeleccionada];
        let precioBase = 0;

        for (let i = divisionInicio; i < divisionDeseada; i++) {
            const [categoria, nivel] = mapeoDivisiones[i].split(" ");
            const nivelIndex = niveles.indexOf(nivel);
            precioBase += precios[categoria][nivelIndex];
        }

        // Aplicar precios extras
        const gananciaLp = document.getElementById("ganaciaLP").value;
        const aumentoLpPorcentaje = gananciaLp === "1" ? 0.25 : 0;
        const duoBoost = document.getElementById("duoBoost").checked;
        const orderPrioridad = document.getElementById("orderPrioridad").checked;
        const poolCampeones = document.getElementById("poolCampeones").checked;
        const rolSupport = document.getElementById("rolSupport").checked;

        let precioConExtras = preciosExtras(precioBase, aumentoLpPorcentaje, duoBoost, orderPrioridad, poolCampeones, rolSupport);

        // Mostrar información
        document.getElementById("mostrarDA").textContent = mapeoDivisiones[divisionInicio];
        document.getElementById("mostrarDD").textContent = mapeoDivisiones[divisionDeseada];
        document.getElementById("precioFinal").textContent = precioConExtras.toFixed(2) + " " + divisaSeleccionada;
    }
});




