let escolha ='X'

function chose (celula) {
    if(celula.innerHTML==""){
        celula.innerHTML=escolha
        if(escolha=="X"){
        escolha="O"
        }
        else{
        escolha="X"
        }
    }
}
function reset () {
    const positions = document.getElementsByClassName('position');
    for (let i = 0; i < positions.length; i++) {
        positions[i].textContent = "";
    }
}