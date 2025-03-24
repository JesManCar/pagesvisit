const contadorVisitas = document.getElementById("contadorVisitas");
const btnReestablecer = document.getElementById("btnReestablecer");
const añadir = document.getElementById("añadir");
const restar = document.getElementById("restar");
const reload = document.getElementById("reload");
const eliminar = document.getElementById("eliminar");

function editStorage (modificador){
    if(localStorage.getItem("contador")){
        localStorage.setItem("contador", parseFloat(localStorage.getItem("contador"))+modificador);
    } else {
        localStorage.setItem("contador",modificador);
    }
    contadorVisitas.innerText = localStorage.getItem("contador");
}

editStorage(1);

btnReestablecer.addEventListener("click", () => {
    localStorage.removeItem("contador");
    editStorage(0);
});

añadir.addEventListener("click", () => {
    editStorage(100);
});

restar.addEventListener("click", () => {
    editStorage(-100);
});


reload.addEventListener("click", (_) => {
  location.reload();
});

eliminar.addEventListener("click", (_) => {
    localStorage.removeItem("contador");
    contadorVisitas.innerText = " ";
});