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

const catAndMouse = (mouse, cat1, cat2)=>{
  letDistanciaCat1= Math.abs(mouse-cat1);
  letDistanciaCat2= Math.abs(mouse-cat2);
  
  let maisProximo; 

  if(letDistanciaCat1<letDistanciaCat2){
      maisProximo="cat1"
  } else if (letDistanciaCat2<letDistanciaCat1){
      maisProximo="cat2"
  } else{
      maisProximo = "os gatos trombam e o rato foge"
  }

  return maisProximo;

}

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (array) =>{
  novoArray=[];
  for(numero of array){
      if(numero%3===0 && numero%5!==0){
          novoArray.push("fizz")
      } else if( numero%3!==0 && numero%5===0){
          novoArray.push("buzz")
      } else if(numero%3===0 && numero%5===0){
          novoArray.push("fizzBuzz")
      } else { novoArray.push("bug!")}
  }
  return novoArray
}

// Desafio 9 - Crie a função encode e a função decode

const encode = (string) => {

  let stringModificada;

for(letra of string){
      if (letra==="a"){
          stringModificada= string.replaceAll(letra, "1")
      } else if(letra==="e"){
          stringModificada= string.replaceAll(letra, "2")
      } else if(letra==="i"){
          stringModificada= string.replaceAll(letra, "3")
      } else if(letra==="o"){
          stringModificada= string.replaceAll(letra, "4")
      } else if(letra==="u"){
          stringModificada= string.replaceAll(letra, "5")
      }
  }

  return stringModificada

}


const decode = (string) => {

  let stringOriginal;

for(letra of string){
      if (letra==="1"){
          stringOriginal= string.replaceAll(letra, "a")
      } else if(letra==="2"){
          stringOriginal= string.replaceAll(letra, "e")
      } else if(letra==="3"){
          stringOriginal= string.replaceAll(letra, "i")
      } else if(letra==="4"){
          stringOriginal= string.replaceAll(letra, "o")
      } else if(letra==="5"){
          stringOriginala= string.replaceAll(letra, "u")
      }
  }

  return stringOriginal

}

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
