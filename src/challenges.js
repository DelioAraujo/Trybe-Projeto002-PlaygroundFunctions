// Desafio 1 - Crie a função compareTrue

const compareTrue = (parametro1, parametro2)=>{
  let resultado = ((parametro1&&parametro2)===true)? "true" : "false"

  return resultado
}

// Desafio 2 - Crie a função splitSentence

const splitSentence = (string) => sring.split(" ")

// Desafio 3 - Crie a função concatName

const concatName = (array) => `${array[array.length-1]}, ${array[0]}`

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) =>(3*wins)+ties

// Desafio 5 - Crie a função highestCount

const highestCount = (array) =>{
  let maiorNumero=array[0];
  for(let i=1; i<array.length; i+=1){
      if(array[i]>maiorNumero){
          maiorNumero=array[i]
      }
  }

  console.log("maior número: "+maiorNumero)

  let vezesAparece=0
  for(i=0; i<array.length; i+=1){
      if(array[i]===maiorNumero){
          vezesAparece=vezesAparece+1
      }
  }

  return vezesAparece;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height)=> (base*height)/2;



const calcRectangleArea = (base, height) => base*height;



const calcAllArea = (base, height, form)=>{
    if(form==="triângulo"){
        return calcTriangleArea (base, height)
    } else if (form==="retângulo"){
        return calcRectangleArea (base, height)
    } else {
        return "Não foi possível fazer o cálculo, insira uma forma geométrica válida"
    }
}

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

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
