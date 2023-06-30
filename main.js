//traer todas las clases de html
let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");


//por cada boton
buttons.forEach((button) => {  // se crea parametro button
    button.addEventListener("click", (e) => { //si se hace click en un boton
        let value = e.target.dataset.num; //se toma el valor de ese boton y se pone en la variable value
        screen.value += value; //el valor de la variabe se pone en la pantalla
    })
});

//btn-equal
equal.addEventListener("click", (e) => { //si se hace click en el boton
    if (screen.value !== "") { //si no hay algun valor   
        let answer = eval(screen.value); //si queremos daber la respuesta la funcion eval() revisa la pantalla y guarda el valor en la variable answer
        screen.value = ""; //limpiamos la pantalla
        screen.value += answer; //llamamos la variable answer a la pantalla
    }
})

//btn-clear
clear.addEventListener("click", (e) => {
    screen.value = ""; //si se hace click en el boton C se limpia la pantalla
})
