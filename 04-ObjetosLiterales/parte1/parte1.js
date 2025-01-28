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

    for (const attribute in alumno) {
        //------------------MUESTRO DATOS DEL ALUMNO---------------------
        CrearElemento(attribute + ": ", alumno[attribute], "alumno");

        if (attribute === "tutor") {
            for (const tutor_attribute in alumno[attribute]) {
                //console.log("Atributo tutor " + tutor_attribute + ", valor: " + alumno[attribute][tutor_attribute]);
                //------------------MUESTRO DATOS DEL TUTOR---------------------
                CrearElemento(tutor_attribute + ": ", alumno[attribute][tutor_attribute], "tutor");
            }
        } else if (attribute === "listaAsignaturas" || attribute === "listaNotaMedia") {
            for (const array_element in alumno[attribute]) {
                let obj_json = alumno[attribute][array_element]
                for (const attribute_array_element in obj_json) {
                    console.log("Atributo " + attribute + " " + attribute_array_element + " , valor: " + obj_json[attribute_array_element])
                }
            }
        } else {
            console.log("Attributo " + attribute + ", valor: " + alumno[attribute]);
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
}