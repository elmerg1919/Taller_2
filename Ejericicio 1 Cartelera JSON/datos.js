var nombres = {
    "Cartelera": [
        {
            "imagen": "img/venom.jpg",
            "titulo": "Venom Carnage Liberado",
            "duracion": "100 min",
            "calificacion": 4.8,
            "tipo": "Tradicional",
            "horario": "11:30 a.m"


        },

        {
            "imagen": "img/peli2.jpg",
            "titulo": "Sin tiempo para Morir",
            "duracion": "165 min",
            "calificacion": 4.4,
            "tipo": "Gold",
            "horario": "12:35 p.m"

        },

        {
            "imagen": "img/aro3.jpg",
            "titulo": "El Aro 3 El Mar Revive",
            "duracion": "120 min",
            "calificacion": 4.2,
            "tipo": "Plus",
            "horario": "14:00 p.m"
            ,
        },
        {
            "imagen": "img/peli3.png",
            "titulo": "Shang-Chi",
            "duracion": "135 min",
            "calificacion": 4.6,
            "tipo": "Tradicional",
            "horario": "10:00 a.m"

        },

    ]
};

//Obteniendo el elemento contenedor donde se cargarán
//todos los datos del objeto JSON
var div = document.getElementById("info");
div.innerHTML = datosPeliculas(nombres.Cartelera);
function datosPeliculas(datos) {
    var total = datos.length;

        data = "<div class='container'>";
        data = "<div class='row'>";
    for (var i = 0; i < total; i++) {
        data += "<div class='col-md-6 d-flex justify-content-center align-items-center'>";

        data += "<div class='card mb-3' style='max-width: 540px;'>";
        data += "<div class='row'>";
        data += "<div class='col-md-4'>";
        data += "<img src=" + datos[i].imagen + " class='img-fluid rounded-start' alt='...'>";
        data += "</div>"
        data += "<div class='col-md-8'>";
        data += "<div class='card-body'>";
        data += '<h5 class="card-title">' + datos[i].titulo + '</h5>';
        data += '<p class="card-text">Duracion: ' + datos[i].duracion + '<br>';
        data += '<p class="card-text">Calificacion: ' + datos[i].calificacion + '<br>';
        data += '<p class="card-text">Tipo de Butacas: ' + datos[i].tipo + '<br>';
        data += '<p class="card-text">Horario: ' + datos[i].horario + '<br>';
        data += "</div>"
        data += "</div>"
        data += "</div>"
        data += "</div>"
        data += "</div>"


    }
    data += '</div>'
    data += '</div>'
  
    return data;
}