window.addEventListener("load", function () {

    let formulario = document.getElementsByClassName("FormuB")
    formulario.addEventListener("submit", function (e) {



        let errores = []

        let nombre = document.getElementsByClassName("nombreP");
        if (nombre.value == "") {
            errores.push("Nombre Obligatorio")

        }
        let precio = document.getElementsByClassName("precioP");
        if (precio.value == "") {
            errores.push("Especificado Precio")
        }

        let plataforma = document.getElementById("Plataforma");
        if (plataforma.value == "") {
            errores.push("Eliga al menos 1 plataforma")
        }

        let categoria = document.getElementById("categoria");
        if (categoria.value == "") {
            errores.push("Eliga al menos 1 categoria")
        }

        let idiomas = document.getElementsByClassName("idiomas");
        if (idiomas.value == "") {
            errores.push("Espesificar idomas")
        }

        let desarollador = document.getElementsByClassName("desarrollador");
        if (desarollador.value == "") {
            errores.push("Falta nombre de Desarrollador")
        }

        let procesador = document.getElementsByClassName("pro");
        if (procesador.value == "") {
            errores.push("Espesificar Procesador")
        }

        /*let descuento = document.getElementById("descuento");
        if (descuento.value == "") {
            errores.push("El campo no puede estar vacio")
        }*/

        let memoria = document.getElementsByClassName("memoria");
        if (memoria.value == "") {
            errores.push("Espesificar memoria RAM")
        }


        let disco = document.getElementsByClassName("disco");
        if (disco.value == "") {
            errores.push("Espesificar espacio de disco duro")
        }

        let graficos = document.getElementsByClassName("graficos");
        if (graficos.value == "") {
            errores.push("Espesificar Graficos")
        }

        let trailer = document.getElementsByClassName("trailer");
        if (trailer.value == "") {
            errores.push("Trailer obligatorio")
        }

        let resumen = document.getElementsByClassName("resumen");
        if (resumen.value == "") {
            errores.push("Falta un Resumen")
        }

        let fecha = document.getElementsByClassName("datebirth");

        if (fecha.value == "") {
            errores.push("El campo fecha no puede estar vacio")

        }

        






        if (errores.length > 0) {
            e.preventDefault();



            let ulErrores = document.querySelector("div.errores ul")

            ulErrores.innerHTML = ""

            for (let i = 0; i < errores.length; i++) {

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"


            }

        }

    })
})