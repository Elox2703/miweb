let tituloHeader = "Amazing Universe";


function sitioInicio() {
    window.open('index.html', '_self');
}

function sitioLightYear() {
    window.open('lightyear.html', '_self');
}

function sitioOort() {
    window.open('nubeoort.html', '_self');
}

$(document).ready(function() {
    console.log('Ready');
    $('#divHeader__titulo').text(tituloHeader);
});