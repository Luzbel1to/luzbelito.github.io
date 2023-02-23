document.addEventListener("DOMContentLoaded", function() {
    console.log("Documento cargado con éxito")
})

const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        header.classList.toggle("active", window.scrollY > 0);
    })


// Formulario 
const form = document.getElementById("#formulario");

form.addEventListener("submit", enviarFormulario);

const enviarFormulario = function(evento) {
    evento.preventDefault();
    
    const {nombre, email, mensaje} = evento.target

    console.log(
        nombre.value, 
        email.value, 
        mensaje.value
        );
}