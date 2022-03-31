function tableMultipli(){
    let inputValue = document.getElementById("input").value;
    let input = document.getElementById("input")
    let table = document.getElementById("table");
    let reset = document.getElementById("reset");

    if (inputValue <= 0 || inputValue > 1000){
        alert('Veuillez entrer un entier compris entre 1 et 999');
    }
    else {
        table.innerText = " ";
        table.style.display= "block"
        for (let i = 0; i <= 10; i++){
            
            let resultat = `${inputValue} * ${i} = ${inputValue * i} <hr>`;
            table.innerHTML += resultat ;
        }
        input.value = " ";
        reset.style.display= "block";
    }
}

function resetTable(){
    let reset = document.getElementById("reset");
    let table = document.getElementById("table");

    table.style.display= "none"
    reset.style.display= "none"
}

function hover(){

    let changerCouleur = document.querySelectorAll("input")[1];
    changerCouleur.style.backgroundColor = "black";

}
function normal(){

    let changerCouleur = document.querySelectorAll("input")[1];
    changerCouleur.style.backgroundColor = "rgb(29, 58, 64)";

}


