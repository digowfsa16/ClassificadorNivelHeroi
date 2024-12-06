// 1️⃣ Desafio Classificador de nível de Herói

//"""O Que deve ser utilizado**

//- Variáveis

let heroi = ['Goku',10001]
let nivel = 'Radiante'

let Niveis= [[0,1000,"Ferro"],
[1001,2000,"Bronze"],
[2001,5000,"Prata"],
[5001,700,"Ouro"],
[7001,8000,"Platina"],
[8001,9000,"Ascendente"],
[9001,10000,"Imortal"] ]


//- Operadores
//- Laços de repetição

for (let i = 0; i < Niveis.length; i++) {
    if (heroi[1] >= Niveis[i][0] && heroi[1] <= Niveis[i][1]) {
        nivel = Niveis[i][2]
    }
}

let mensagem = `O Herói de nome ${heroi[0]} está no nível ${nivel}`
console.log(mensagem)
