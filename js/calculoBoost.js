document.addEventListener("DOMContentLoaded", function () {
    // Objeto con los datos recuperados
    const formElements = [
        document.getElementById("divisionInicio"),
        document.getElementById("divisionDeseada"),
        document.getElementById("ganaciaLP"),
        document.getElementById("duoBoost"),
        document.getElementById("orderPrioridad"),
        document.getElementById("poolCampeones"),
        document.getElementById("rolSupport"),
        document.getElementById("jugarOffline"),
        document.getElementById("divisa")  // Selector para la divisa
    ];

    // funcion change para evaluar la funcion de caclulo cada vez que se realice un cambio
    formElements.forEach(function (element) {
        element.addEventListener("change", calcularPrecioAutomáticamente);
    });

    // Función para convertir el precio según la divisa seleccionada
    function convertirDivisa(precio, divisa) {
        const tasasDeCambio = {
            USD: 1,    // Valor base
            CLP: 945, // Ejemplo: 1 USD = 945 CLP
            UYU: 37.83  // Ejemplo: 1 USD = 37.83 UYU
        };
        // Verificar si la divisa existe en tasasDeCambio
        if (!tasasDeCambio[divisa]) {
            return 0 ; // Si la divisa no es válida, retorna el mensaje
        }

        return precio * tasasDeCambio[divisa]; // Si es válida, realiza la conversión
    }

    // Dentro de esta función estarán todos los cálculos
    function calcularPrecioAutomáticamente() {
        const divisionInicio = document.getElementById("divisionInicio").value;
        const divisionDeseada = document.getElementById("divisionDeseada").value;
        const ganaciaLP = document.getElementById("ganaciaLP").value;
        const duoBoost = document.getElementById("duoBoost").checked;
        const orderPrioridad = document.getElementById("orderPrioridad").checked;
        const poolCampeones = document.getElementById("poolCampeones").checked;
        const rolSupport = document.getElementById("rolSupport").checked;
        const divisaSeleccionada = document.getElementById("divisa").value; // Obtener divisa seleccionada

        // Objetos con los precios
        const precios = {
            "Hierro": {"IV": 0, "III": 2.12, "II": 2.12, "I": 2.12},
            "Bronce": {"IV": 2.12, "III": 2.65, "II": 2.65, "I": 2.65},
            "Plata": {"IV": 2.65, "III": 3.50, "II": 3.50, "I": 3.50},
            "Oro": {"IV": 3.50, "III": 4.77, "II": 4.77, "I": 4.77},
            "Platino": {"IV": 4.77, "III": 6.15, "II": 6.15, "I": 6.15},
            "Esmeralda": {"IV": 6.15, "III": 8.47, "II": 8.47, "I": 8.47},
            "Diamante": {"IV": 8.47, "III": 9.53, "II": 9.53, "I": 9.53},
            "Maestro": {"IV": 10.06, "III": 10.06, "II": 10.06, "I": 10.06}
        };

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
            1: "ganaciaBaja", 2: "ganaciaMedia", 3: "ganaciaAlta"
        };

        const aumentoPorLp = {
            "ganaciaBaja": 0.25, "ganaciaMedia": 0, "ganaciaAlta": 0
        };

        function SinDatos() {
            return 0;
        }

        const mensaje = "PRICE ";

        if (isNaN(divisionInicio) || isNaN(divisionDeseada)) {
            const precioSinDatos = SinDatos();
            document.getElementById("precioFinal").textContent = mensaje + precioSinDatos.toFixed(2) + " USD";
            return;
        }

        if (divisionInicio !== null && divisionDeseada !== null) {
            const divisionInicioNombre = mapeoDivisiones[divisionInicio];
            const divisionDeseadaNombre = mapeoDivisiones[divisionDeseada];

            function calcularPrecio(divisionInicioNombre, divisionDeseadaNombre, precios) {
                const [categoriaInicio, nivelInicio] = divisionInicioNombre.split(' ');
                const [categoriaDeseada, nivelDeseada] = divisionDeseadaNombre.split(' ');
                const niveles = ["IV", "III", "II", "I"];
                let precioTotal = 0;

                if (categoriaInicio === categoriaDeseada) {
                    const indexInicio = niveles.indexOf(nivelInicio);
                    const indexDeseada = niveles.indexOf(nivelDeseada);
                    if (indexInicio <= indexDeseada) {
                        for (let i = indexInicio; i <= indexDeseada; i++) {
                            precioTotal += precios[categoriaInicio][niveles[i]];
                        }
                    } else {
                        console.log("ERROR");
                    }
                } else {
                    const categorias = Object.keys(precios);
                    const indexCategoriaInicio = categorias.indexOf(categoriaInicio);
                    const indexCategoriaDeseada = categorias.indexOf(categoriaDeseada);

                    if (indexCategoriaDeseada > indexCategoriaInicio) {
                        const nivelesInicio = ["IV", "III", "II", "I"];
                        const indexInicio = nivelesInicio.indexOf(nivelInicio);
                        for (let i = indexInicio; i < nivelesInicio.length; i++) {
                            precioTotal += precios[categoriaInicio][nivelesInicio[i]];
                        }

                        for (let j = indexCategoriaInicio + 1; j < indexCategoriaDeseada; j++) {
                            const categoria = categorias[j];
                            for (let nivel of niveles) {
                                precioTotal += precios[categoria][nivel];
                            }
                        }

                        const indexDeseadaNivel = niveles.indexOf(nivelDeseada);
                        for (let i = 0; i <= indexDeseadaNivel; i++) {
                            precioTotal += precios[categoriaDeseada][niveles[i]];
                        }

                    } else {
                        console.log("ERROR");
                    }
                }
                return precioTotal;
            }

            const precioBase = calcularPrecio(divisionInicioNombre, divisionDeseadaNombre, precios);
            const aumentoLpPorcentaje = aumentoPorLp[mapeoLp[ganaciaLP]];

            function preciosExtras(aumentoLpPorcentaje, duoBoost, orderPrioridad, poolCampeones, rolSupport) {
                let precioFinal = precioBase;
                if (isNaN(aumentoLpPorcentaje)) {
                    aumentoLpPorcentaje = 0;
                } else {
                    precioFinal += precioBase * aumentoLpPorcentaje;
                }
                if (duoBoost === true) {
                    precioFinal += precioBase * 0.35;
                }
                if (orderPrioridad === true) {
                    precioFinal += precioBase * 0.30;
                }
                if (poolCampeones === true) {
                    precioFinal += precioBase * 0.15;
                }
                if (rolSupport === true) {
                    precioFinal += precioBase * 0.30;
                }
                return precioFinal;
            }

            let precioConExtras = preciosExtras(aumentoLpPorcentaje, duoBoost, orderPrioridad, poolCampeones, rolSupport);

            // Convertir el precio a la divisa seleccionada
            precioConExtras = convertirDivisa(precioConExtras, divisaSeleccionada);

            // Mostrar el precio final en la divisa seleccionada
            document.getElementById("precioFinal").textContent = mensaje + precioConExtras.toFixed(2) + " " + divisaSeleccionada;
        }
    }
});


