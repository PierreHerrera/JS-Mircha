import hamburgerMenu from "./js/dom/menu_hamburguesa.js";
import {digitalClock, alarm} from "./js/dom/reloj.js";
import {moveBall, shorcuts} from "./js/dom/teclado.js";
import countdown from "./js/dom/cuenta_regresiva.js";
import scrollTopButton from "./js/dom/boton_scroll.js";
import darkTheme from "./js/dom/tema_oscuro.js";
import responsiveMedia from "./js/dom/objeto_responsive.js";
import responsiveTester from "./js/dom/prueba_responsive.js";
import userDeviceInfo from "./js/dom/deteccion_dispositivos.js";
import networkStatus from "./js/dom/deteccion_red.js";
import webCam from "./js/dom/deteccion_webcam.js";
import getGeolocation from "./js/dom/geolocalizacion.js";
import searchFilters from "./js/dom/filtro_busquedas.js";
import draw from "./js/dom/sorteo.js";
import slider from "./js/dom/carrusel.js";
import scrollSpy from "./js/dom/scroll_espia.js";
import smartVideo from "./js/dom/video_inteligente.js";
import contactFormValidations from "./js/dom/validaciones_formulario.js";
import speechReader from "./js/dom/narrador.js";

const d = document

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a")
    digitalClock("#reloj", "#activar-reloj", "#detener-reloj")
    alarm("assets/emergency-alarm.mp3", "#activar-alarma", "#desactivar-alarma")
    countdown(
        "countdown",
        "May 23, 2024 11:16:00",
        "Feliz cumpleaños amigo y docente digital 🤓"
    )
    scrollTopButton(".scroll-top-btn")
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=J6zBK-cI6QQ" target="_blank" rel="noopener">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/J6zBK-cI6QQ?si=IfyeOZIUyTirbkFv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    )
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://maps.app.goo.gl/uCkLeB7CESBUnFKW6" target="_blank" rel="noopener">Ver mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860711338!2d-99.16888681121844!3d19.427023124964418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2spe!4v1716494960999!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    )
    responsiveTester("responsive-tester")
    userDeviceInfo("user-device")
    webCam("webcam")
    getGeolocation("geolocation")
    searchFilters(".card-filter", ".card")
    draw("#winner-btn", ".player")
    slider()
    scrollSpy()
    smartVideo()
    contactFormValidations()
})

d.addEventListener("keydown", e => {
    shorcuts(e)
    moveBall(e, ".ball", ".stage")
})

darkTheme(".dark-theme-btn", "dark-mode")
networkStatus()
speechReader()