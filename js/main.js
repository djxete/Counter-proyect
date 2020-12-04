

/* ============== VARIABLES ===============================*/

let count = document.querySelector("#count");
let contador =0;

const buttons = [...document.querySelector(".button-container").children];


/* ============== ADD EVENT LISTENER ===============================*/

buttons.forEach(button => {

    button.addEventListener("click", () => {
        
      // Identificar que botón ha dado

        switch (button.innerHTML) {
            case "decrease":
                contador--;
                count.innerHTML = contador;
                
                break;
            case "reset":
                contador =0;
                count.innerHTML = contador;
                break;
            case "increase":
               
                contador++;
                count.innerHTML = contador;
                break;
            default:
                break;



        }

        //Cambiar colores contador dependiente del número

        if(contador < 0){
            count.classList.add("red");
        }
        else if(contador === 0){
            count.classList.remove("red");
            count.classList.remove("green");
        }
        else if(contador >= 1){
            count.classList.remove("red");
            count.classList.add("green");
        }

        

    })

});




// //============ OTRA FORMA DE HACERLO =============


// // ================== VARIABLES ==========================


// const botones = document.querySelectorAll("button");
// let count = document.querySelector("#count");
// let contador = 0;



// // ================== EVENTS ==========================



// botones.forEach(boton => {

//     boton.addEventListener("click", () => {
//         if (boton.innerHTML === "decrease") {
//             contador--;
//             count.innerHTML = contador;
//         }
//         if (boton.innerHTML === "reset") {
//             contador = 0;
//             count.innerHTML = 0;
//         }
//         if (boton.innerHTML === "increase") {
//             contador++;
//             count.innerHTML = contador;

//         }

//         if (contador < 0) {
//             colorRed(count);
//         }
//         if (contador === 0) {
//             colorBlack(count);
//         }
//         if (contador >= 1) {
//             colorGreen(count);
//         }



//     })



// })



// // ================== FUNCTIONS ==========================

// function colorRed(count) {
//     count.classList.add("red");
// }

// function colorGreen(count) {
//     count.classList.add("green");
// }

// function colorBlack(count) {
//     count.classList.remove("green");
//     count.classList.remove("red");
// }