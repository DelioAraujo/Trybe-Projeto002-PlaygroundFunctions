// Desafio 11 - Crie a função generatePhoneNumber

const generatePhoneNumber = (array) => {
  let numeroFinal = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;

  for (let i = 0; i < array.length; i += 1) {
    let contador = 0;
    for (let i2 = 0; i2 < array.length; i2 += 1) {
      if (array[i] === array[i2]) {
        contador += 1;
      }
      if (contador >= 3) {
        numeroFinal = 'não é possível gerar um número de telefone com esses valores';
        break;
      }
    }
  }

  for (numero of array) {
    if (numero < 0 || numero > 9) {
      numeroFinal = 'não é possível gerar um número de telefone com esses valores';
    }
  }

  if (array.length !== 11) {
    numeroFinal = 'Array com tamanho incorreto.';
  }

  return numeroFinal;
};

// Desafio 12 -  Crie a função triangleCheck

const triangleCheck = (lineA, lineB, lineC) => {
  // teste 1
  let testA1 = lineA < lineB + lineC;
  let testB1 = lineB < lineA + lineC;
  let testC1 = lineC < lineB + lineA;
  let teste1 = !!((testA1 === true && testB1 === true && testC1 === true));
  // teste 2
  let testA2 = lineA > Math.abs(lineB - lineC);
  let testB2 = lineB > Math.abs(lineA - lineC);
  let testC2 = lineC > Math.abs(lineB - lineA);
  let teste2 = !!((testA2 === true && testB2 === true && testC2 === true));
  // resultado
  let resultado = !!((teste1 === true && teste2 === true));

  return resultado;
};

// Desafio 13 - Crie a função hydrate

const hydrate = (string) => {
  let arrayDasStringsNumericas = string.match(/\d+/g);
  let numeroDeDoses = 0;

  for (numeros of arrayDasStringsNumericas) {
    numeroDeDoses += +numeros;
  }

  let conselho = (numeroDeDoses === 1) ? `${numeroDeDoses} copo de água` : `${numeroDeDoses} copos de água`;

  return conselho;
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
