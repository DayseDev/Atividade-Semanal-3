//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function Palavra(numero) {
    switch(numero) {
      case 1:
        return 'Impar'
      case 2:
        return 'Par'
      
      default :
        return 'Não existe essa condição!'
    }
  }
  
  console.log(Palavra(1))