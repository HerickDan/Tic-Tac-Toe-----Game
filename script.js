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
