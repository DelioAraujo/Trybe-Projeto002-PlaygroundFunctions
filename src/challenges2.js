// Desafio 11 - Crie a função generatePhoneNumber

const generatePhojeNumber = (array)=>{
    
  let numeroFinal = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`

  if(array.length!==11){
      numeroFinal="Array com tamanho incorreto"
  }

  for(numero of array){
      if(numero<0 || numero>9){
          numeroFinal="não é possível gerar um número de telefone com esses valores"
      }
  }

  let numeroRepetido=0

  for(numero1 of array){
      for(numero2 of array){
          if (numero1===numero2){
              numeroRepetido+=1
          }
      }
  }

  if(numeroRepetido>=3){
      numeroFinal="não é possível gerar um número de telefone com esses valores"
  }

  return numeroFinal
}

// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
