// Tópico 1, se peça possuir um peso superior a 100 gramas, pode cadastrar.
console.log("--------------------")

var pecasGramas = 350

if(pecasGramas>=100){
    console.log("Peça válida para cadastro")
     
  }else console.log("Peça NÃO válida para cadastro")


console.log("Fim")
     
console.log("--------------------")
    
	 
/*Tópico 2, Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10,
imprima uma mensagem informando não ter capacidade suficiente*/


var quantidade_pecas = 8

if (quantidade_pecas <=10) {
	    console.log("Quantidade de Peças foi de:"+quantidade_pecas) 
    
	    console.log("Capacidade suficiente - cadastro válido")

      } else { console.log("capacidade insuficiente")
	


    }

     console.log("Fim")       
     
console.log("--------------------")


// Tópico 3, Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.


var Nome_peca = ["parafuso", "prego", "pá", "AC"]

for(let index =0; index<Nome_peca.length; index++){
  console.log(" Peça" +index+ "é" +Nome_peca[index])

  var vetor_peca = Nome_peca[index]

  if (vetor_peca.length <3){
    console.log(Nome_peca[index] + " nome inválido, nome da peça ter no minimo 3 caracteres")
  }else{
    console.log(Nome_peca[index] + " cadastrado")
  }
}
console.log("Fim")
console.log("--------------------")


