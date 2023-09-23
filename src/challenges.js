// Desafio 1 - Crie a função compareTrue

const compareTrue = (parametro1, parametro2) => {
  let resultado = ((parametro1 && parametro2) === true);

  return resultado;
};

// Desafio 2 - Crie a função splitSentence

const splitSentence = (string) => string.split(' ');

// Desafio 3 - Crie a função concatName

const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => (3 * wins) + ties;

// Desafio 5 - Crie a função highestCount

const highestCount = (array) => {
  let maiorNumero = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }

  console.log(`maior número: ${maiorNumero}`);

  let vezesAparece = 0;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNumero) {
      vezesAparece += 1;
    }
  }

  return vezesAparece;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  let resposta = '';

  if (form === 'triângulo') {
    resposta = `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } else if (form === 'retângulo') {
    resposta = `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } else {
    resposta = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }

  return resposta;
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  letDistanciaCat1 = Math.abs(mouse - cat1);
  letDistanciaCat2 = Math.abs(mouse - cat2);

  let maisProximo;

  if (letDistanciaCat1 < letDistanciaCat2) {
    maisProximo = 'cat1';
  } else if (letDistanciaCat2 < letDistanciaCat1) {
    maisProximo = 'cat2';
  } else {
    maisProximo = 'os gatos trombam e o rato foge';
  }

  return maisProximo;
};

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (array) => {
  novoArray = [];
  for (numero of array) {
    if (numero % 3 === 0 && numero % 5 !== 0) {
      novoArray.push('fizz');
    } else if (numero % 3 !== 0 && numero % 5 === 0) {
      novoArray.push('buzz');
    } else if (numero % 3 === 0 && numero % 5 === 0) {
      novoArray.push('fizzBuzz');
    } else { novoArray.push('bug!'); }
  }
  return novoArray;
};

// Desafio 9 - Crie a função encode e a função decode

const encode = (string) => {
  let letraA = string.replaceAll('a', '1');
  let letraE = letraA.replaceAll('e', '2');
  let letraI = letraE.replaceAll('i', '3');
  let letraO = letraI.replaceAll('o', '4');
  let letraU = letraO.replaceAll('u', '5');

  return letraU;
};

const decode = (string) => {
  let letra1 = string.replaceAll('1', 'a');
  let letra2 = letra1.replaceAll('2', 'e');
  let letra3 = letra2.replaceAll('3', 'i');
  let letra4 = letra3.replaceAll('4', 'o');
  let letra5 = letra4.replaceAll('5', 'u');

  return letra5;
};

// Desafio 10 - Crie a função techList

const techList = (array, string) => {
  arrayOrdenado = array.sort();
  let lista = [];
  for (techs of arrayOrdenado) {
    let objeto = {
      tech: techs,
      name: string,
    };
    lista.push(objeto);
  }

  if (array === []) {
    return [];
  }
  return lista;
};

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
