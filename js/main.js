

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