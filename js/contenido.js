function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML = contenido.innerHTML + '<p>' + texto + '</p>';
}
document.getElementById('imagen').onchange = function (evt) {
    var entradaArchivo = evt.target,
        archivos = entradaArchivo.files;
    if (FileReader && archivos && archivos.length) {
        var imagen = new FileReader();
        imagen.onload = function () {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.setAttribute('src', imagen.result);
            etiquetaImg.setAttribute('width', '200px');
            etiquetaImg.setAttribute('height', '180px');
            var contenido = document.getElementById('contenido');
            contenido.appendChild(etiquetaImg);
        }
        imagen.readAsDataURL(archivos[0]);
    }
}



function imprimir() {
    var divContents = document.getElementById("contenido").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
    a.document.write('<body > <h1>Resultado</h1> <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}
function crearTitulo() {
    
    var texto = document.getElementById('texto').value;
    var titulo = document.createElement("h1");
    titulo.textContent = texto;
    document.getElementById('contenido').appendChild(titulo);
}

function crearEnlace() {
    var texto = document.getElementById('texto').value;  // Obtener el texto para el enlace
    var url = document.getElementById('url').value;  // Obtener la URL del enlace
    var enlace = document.createElement("a");

    // Verificar si la URL y el texto no están vacíos
    if (texto && url) {
        enlace.href = url;  // Establecer el atributo href al valor de la URL
        enlace.textContent = texto;  // Establecer el texto del enlace
        enlace.target = "_blank"; // Opcional: abrir el enlace en una nueva ventana o pestaña

        // Añadir el enlace al contenido
        document.getElementById('contenido').appendChild(enlace);
    } else {
        alert("Por favor, ingresa tanto el texto como la URL.");
    }
}

