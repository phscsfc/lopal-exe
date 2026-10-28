// Código 1


// const SENHA_CORRETA = "pao123"
// let contador = 0
// while (contador <= 2) {
// let senha = prompt("Digite a senha:")
// if (senha === SENHA_CORRETA) {
//     alert("Conectado, bom café!")
//     break
// }
// else {
//     contador++
//         alert("Senha Incorreta!!")
//         switch(contador) {
//             case 1:
//                 alert("voce tem mais 2 chances")
//                 break;
//             case 2:
//         alert("Voce tem mais uma chance")
//             break;
//             case 3:
//         alert("Voce bloqueou")
//                 break;                
//         } } 
//     }
// let number = 10
// while (number => 0) {
//     alert(number--) 
//     if(number === 0){
//         alert("Feliz Ano Novo!!")
//         break
//     }    
// }

// Codigo 2

// num1 = 300
// while(true){
//     gain = Number(prompt("Digite o valor que você quer colocar: "))
//     if (gain > 0 ){
//     let final = num1 - gain
//     num1 = num1 - gain
//     if (final >0) {
//         alert(`O valor restante é : ${final}`)
        
//     } 
//     else if(final === 0 || final < 0) {
//         alert("Você atingiu o seu objetvo")
//     break
//     }
//     }else{
//         alert("Digite um valor maior positivo e diferente de 0!!")
//     }
// }

// Código 3

// let number_correct = 13
// let attempts = 1

// while(true){
//     let num1 = Number(prompt("Digite um valor entre 1 a 50"))
//     if(num1 > 1 && num1 < 50){
//         if (num1 > number_correct) {
//             alert("O número é menor")
//         attempts++
//         }
//         else if(num1 < number_correct){
//             alert("O número é maior")
//         attempts++
//         }
//     }
//     else{
//         alert("Digite um número entre 1 e 50")
//         attempts++
//     }
//     if(num1 === number_correct){
//         alert(`Você acertou o número 13 em ${attempts} tentativas`)
//         break;
//     }
// }