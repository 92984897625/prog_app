const prompt = require("prompt-sync")()

let nomes = []
let quartos = []
let emails = []

let qcd = Number(prompt("Quantos quartos serão alugados?: "))
let quarto = ""

for  (let i = 1; i < qcd+1; i++) {
    console.log(i);
    while (true){
        quarto = Number(prompt(`Quarto do ${i}º ospedado: `))        
        if (verificarQuarto())
            break
    }
    console.log("");
    quartos.push(quarto)

    let nome = prompt(`Nome do ${i}º ospedado: `)
    nomes.push(nome)
    console.log("");

    let email = prompt(`O email do ${i}º ospedado: `)
    emails.push(email)
    console.log("");
}
console.log("");
for  (let i = 0; i < nomes.length; i++) {
    console.log(`Quartos: ${quartos[i]} ,Nome: ${nomes[i]} ,Email: ${emails[i]}\n`);
    
}

function verificarQuarto() {
    for (let i = 0; i < quartos.length; i++) {
        if (quartos[i] === quarto) {
            console.log(`\x1b[31m[quarto ocupado, tente outro]\x1b[0m\n`)
            return false      
    }
        // \x1b[31m vermelho e \x1b[32m eu acho que e verde \x1b[0m e o branco normal
}
return true

}
