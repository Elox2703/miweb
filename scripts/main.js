let tituloHeader = "Amazing Universe";

function crearEncabezado() {
    let encabezado = `
        <div id="divHeader" style="margin: 0; padding: 0;">
            <h3 id="divHeader__titulo"></h1>
        </div>
        <div>
            <ul id="navegacion" class="uk-breadcrumb" style="width: 100%;">
                <li><a href="#" onclick="sitioInicio()"><img src="./recursos/icons/home_xs.png"> INICIO</a></li>
            </ul>    
        </div>
    `;
    
    $('#encabezado').append(encabezado);
}

function sitioInicio() {
    window.open('index.html', '_self');
}

function sitioLightYear() {
    window.open('lightyear.html', '_self');
}

function sitioOort() {
    window.open('nubeoort.html', '_self');
}

function sitioEstrellas() {
    window.open('estrellas.html', '_self');
}

$(document).ready(function() {
    console.log('Ready');
    $('#divHeader__titulo').text(tituloHeader);
});