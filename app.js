var mostrar = document.getElementById("cajaoculta");
var imagenes = document.querySelectorAll('[id=fotos]');
var btncerrar = document.getElementById('cerrar');

imagenes.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (item.getAttribute('alt') == 'Dia') {
        mostrar.classList.replace("cajaoculta", "showfoto1");
        btncerrar.style.display = "block";
    }else if (item.getAttribute('alt') == 'Atardecer') {
        mostrar.classList.replace("cajaoculta", "showfoto2");
        btncerrar.style.display = "block";
    }else if (item.getAttribute('alt') == 'Noche') {
        mostrar.classList.replace("cajaoculta", "showfoto3");
        btncerrar.style.display = "block";
    }
  });
});

btncerrar.addEventListener("click", function(){
    mostrar.classList.remove("showfoto1", "showfoto2", "showfoto3")
    mostrar.classList.add("cajaoculta")
    btncerrar.style.display = "none";
    console.log('Cerrar')
})

