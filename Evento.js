let data_evento = new Date (2021,10,13)
let data_hoje = new Date (2021,10,15)
let idade = 17
let pessoas 

if (data_hoje > data_evento) {
    console.log ("Cadastro não permitido, data ultrapassada")  
}else {
    console.log ("Cadastro permitido")
}

if (idade <18) {
    console.log ("Cadastro não permitido, idade inferior a 18 anos")
    } else {
    console.log ("Cadastro permitido")
}
do {
    console.log ("cadastrando")
    pessoas++
} 
while (pessoas <=100) {
    console.log ("Cadastro permitido")
    if (pessoas >=100) {
    console.log ("Cadastro não permitido")
    }
}