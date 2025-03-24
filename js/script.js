const contadorVisitas = document.getElementById("contadorVisitas");
const btnReestablecer = document.getElementById("btnReestablecer");
const añadir = document.getElementById("añadir");
const restar = document.getElementById("restar");
const reload = document.getElementById("reload");
const eliminar = document.getElementById("eliminar");

if(localStorage.getItem("contador")){
    localStorage.setItem("contador", parseFloat(localStorage.getItem("contador"))+1);
    contadorVisitas.innerText = localStorage.getItem("contador");
} else {
    localStorage.setItem("contador",1);
    contadorVisitas.innerText = 1;
}

btnReestablecer.addEventListener("click", () => {
    localStorage.setItem("contador", 0)
    contadorVisitas.innerText = 0;
});

añadir.addEventListener("click", () => {
    if(localStorage.getItem("contador")){
        console.log(isNaN(localStorage.getItem("contador")));
        localStorage.setItem("contador", parseFloat(localStorage.getItem("contador"))+100);
        contadorVisitas.innerText = localStorage.getItem("contador");
    }
});

restar.addEventListener("click", () => {
    if(localStorage.getItem("contador")){
        console.log(isNaN(localStorage.getItem("contador")));
        localStorage.setItem("contador", parseFloat(localStorage.getItem("contador"))-100);
        contadorVisitas.innerText = localStorage.getItem("contador");
    }
});


reload.addEventListener("click", (_) => {
  location.reload();
});

eliminar.addEventListener("click", (_) => {
    localStorage.removeItem("contador");
    contadorVisitas.innerText = " ";
});