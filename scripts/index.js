let temas = [
    "Año luz",
    "Nube de Oort",
    "Estrellas",
    "Supernovas",
    "Estrella de Neutrones",
    "Rayos Gamma",
    "Agujeros Negros",
    "Cúmulo de Virgo",
    "Gran Atractor",
    "Muralla Sloan"
];

let temas_img = [
    "01_velocidad_luz.jpg",
    "02_nube_oort.jpg",
    "03_estrellas.jpg",
    "04_supernova.jpg",
    "05_estrella_neutrones.jpg",
    "06_rayos_gamma.png",
    "07_agujero_negro.jpg",
    "08_cumulo_virgo.jpg",
    "09_atractor.jpg",
    "10_sloan.jpg"    
]

let rutaIMG = "./recursos/img/";

function carruselTemas() {
    let temaFragmento1 = `
        <div id="carruselTemas" class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">`;
    let temaFragmento2 = "";
    
    for (var i = 0; i < temas.length; i++) {
        temaFragmento2+= `
                <li id="carruselTemas-${i}">
                    <div class="carruselTemas__divIMG">
                        <img class="carruselTemas__divIMG__img" src="${rutaIMG}${temas_img[i]}" alt="">
                    </div>
                    <div id="carruselTemas__divTitulo" class="uk-panel">
                        <p>${temas[i]}</p>
                    </div>
                </li>`
    }
    temaFragmento2+= `
            </ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
        </div>`;
    
    temaFragmento1+= temaFragmento2;
    $('#divContenido__temas').append(temaFragmento1);
}
    

$(document).ready(function() {
    console.log('Ready');

    // CARGAR
    carruselTemas();
    // UIkit.slider('#carruselTemas').startAutoplay();

    // EVENTOS
    $('#carruselTemas-0').click(function() {
        sitioLightYear();
    });
});