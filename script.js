let escolha = prompt("Escolha se irá jogar com o X ou com o O")
let playerControl = escolha
let npc 
if(escolha === 'X'){
    npc = 'O'
    console.log(`Você escolheu o ${playerControl}, então jogarei com o ${npc}`)
}else if(escolha === 'O'){
    npc = 'X' 
    console.log(`Você escolheu o  ${playerControl}, então jogarei com o  ${npc}`)
}
console.log(npc)