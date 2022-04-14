//Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function DiaDaSemana(numero) {
    switch(numero) {
      case 1:
        return 'Segunda'
      case 2:
        return 'Terca'
      case 3:
        return 'Quarta'
      case 4:
        return 'Quinta'
      case 5:
        return 'Sexta'
      case 6:
        return 'Sabado'
      case 7:
        return 'Domingo'

      default :
        return 'Dia inexistente'
    }
  }
  
  console.log(DiaDaSemana(1))