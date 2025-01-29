window.onload = function () {
    //------------------CREAR OBJETO TUTOR----------------
    //Un objeto tiene clave: "valor"

    //-------------------OBJETO TUTOR---------------------
    let tutor = {
        nombre: "Juanjo",
        edad: 23,
        DNI: '77956380L',
        titulo_universitario: "Ingenieria de Software"
    };

    //-------------------OBJETO ASIGNATURA---------------------
    let asignatura = {
        nombre_asignatura: "Calculo",
        curso: 2,
        horas_totales: 16
    };

    //Creo una lista de objetos asignatura

    let listaAsignaturas = [
        { nombre_asignatura: "Matematicas discreta", curso: 1, horas_totales: 17 },
        { nombre_asignatura: "Estadistica", curso: 1, horas_totales: 17 },
        { nombre_asignatura: "ADA", curso: 2, horas_totales: 20 },
        { nombre_asignatura: "Sistemas inteligentes", curso: 1, horas_totales: 20 }
    ];

    //-------------------OBJETO ALUMNO--------------------- hago uso de tutor y asignatura
    let alumno = {
        nombre_alumno: "Enya",
        edad: 24,
        ciclo: "Ingieneria e software",
        curso: 1,
        //objeto tutor
        tutor: {
            nombre: "Alejandra",
            edad: 29,
            DNI: '05977433D',
            titulo_universitario: "Ingieneria Informatica",
        },
        //Lista asignaturas
        listaAsignaturas: [
            { nombre_asignatura: "Sistemas inteligentes", curso: 1, horas_totales: 20 }
        ],

        //Lista de notas medias
        listaNotaMedia: [
            //creo objeto para relacionar asignatura con nota
            { asignatura: "Sistemas inteligentes", nota_media: 8.3 }
        ]

    };

    for (const key_alumno in alumno) {
        if (key_alumno === "tutor") {
            // Mostrar tutor
            CrearTitulo("Mi Tutor", "alumno");
            for (const key_tutor in alumno.tutor) {
                CrearElemento(`${key_tutor} : `, alumno.tutor[key_tutor], "alumno");
            }
        } else if (key_alumno === "listaAsignaturas") {
            // Mostrar asignaturas
            CrearTitulo("Mis Asignaturas", "alumno");
            for (const asignatura of alumno.listaAsignaturas) {
                for (const key_asignatura in asignatura) {
                    CrearElemento(`${key_asignatura} : `, asignatura[key_asignatura], "alumno");
                }
            }
        } else if (key_alumno === "listaNotaMedia") {
            // Mostrar notas medias
            CrearTitulo("Notas Medias", "alumno");
            for (const nota of alumno.listaNotaMedia) {
                for (const key_nota in nota) {
                    CrearElemento(`${key_nota} : `, nota[key_nota], "alumno");
                }
            }
        } else {
            // Mostrar los demás atributos del alumno
            CrearElemento(`${key_alumno} : `, alumno[key_alumno], "alumno");
        }
    }

    //Muestro al tutor solamente
    for (const key_alumno in alumno) {
        if (key_alumno === "tutor") { // Solo cuando el atributo sea "tutor"
            for (const key_tutor in alumno.tutor) {
                // Aquí iteramos sobre las propiedades del tutor
                CrearElemento(`${key_tutor} : `, alumno.tutor[key_tutor], "tutor");
            }
        }
    }

    //Muestro las asignaturas
    for (const asignatura of listaAsignaturas) {
        CrearTitulo("Asignatura: ", "asignaturas");
        //como ahora voy a rrecorrer objetos
        for (const key_asignaturas in asignatura) {
            CrearElemento(`${key_asignaturas} : `, asignatura[key_asignaturas], "asignaturas");
        }

    }

    //--------------------------ACEDO A LOS ELEMENTOS DEL HTML-----------------------------------

    //Funcion para crear el texto a los datos.
    function CrearElemento(mensaje, dato, papa) {
        let parrafo = document.createElement("p");
        let divPadre = document.getElementById(papa);
        parrafo.textContent = mensaje + dato;
        divPadre.appendChild(parrafo);
    }

    function CrearDatos(dato, papa) {
        let parrafo = document.createElement("p");
        let divPadre = document.getElementById(papa);
        parrafo.textContent = dato;
        divPadre.appendChild(parrafo);
    }

    function CrearTitulo(dato, papa) {
        let parrafo = document.createElement("h2");
        let divPadre = document.getElementById(papa);
        parrafo.textContent = dato;
        parrafo.style.color = "purple";
        divPadre.appendChild(parrafo);
    }

    //--------------------------PARTE 2 CREAR FUNCIONES-----------------------------------
    //Devuelve una cadena ton todos los datos del tutor objeto(que la info sea clara)

    //-----------------------FUNCIONES TUTOR----------------------------
    function Mostrar(objeto) {
        let info_objeto = "";
        for (const key_objeto in objeto) {
            CrearElemento(`${key_objeto} : `, objeto[key_objeto], "tutor_funcion");
            info_objeto += `${key_objeto}: ${objeto[key_objeto]}\n`;
        }
        //fuera del bucle devuelvo
        return info_objeto;
    }

    //Llamo a la funcion
    let datos_tutor = Mostrar(tutor);
    console.log(datos_tutor);

    //Funcion que sirve para cambiar el nombre al tutor
    function CambiarNombre(objeto, nuevoNombre) {
        //verifico que el objeto y la propiedad exista
        if (objeto && objeto.nombre !== undefined) {
            objeto.nombre = nuevoNombre;
            CrearElemento("Nuevo nombre del tutor es: ", nuevoNombre, "tutor_funcion");

        }
    }
    //llamo a la funcion de cambiarNombre
    let nombreNuevoTutor = CambiarNombre(tutor, "Sandra");
    console.log(nombreNuevoTutor);

    //-----------------------FUNCIONES ASIGNATURA----------------------------
    //devuelve la informaccion de todo el objeto
    function mostrar(objeto) {
        let info_objeto = "";
        for (const key_objeto in objeto) {
            CrearElemento(`${key_objeto} : `, objeto[key_objeto], "asignatura_funcion");
            info_objeto += `${key_objeto}: ${objeto[key_objeto]}\n`;
        }
        return info_objeto;
    }

    let datos_asignatura = mostrar(asignatura);
    console.log(datos_asignatura);

    //funcion que permite cambiar la hora de la asignatura
    function cambiarHora(objeto, hora) {
        if (objeto && objeto.horas_totales !== undefined) {
            //verifico que la hora se un numero valido
            if (typeof hora === 'number' && !isNaN(hora) && hora > 0) {
                objeto.horas_totales = hora;
                CrearElemento("Las horas actualizadas: ", hora, "asignatura_funcion");
            }
        }
    }
    let horaAsignaturaNueva = cambiarHora(asignatura, 33);
}





