const { join } = require("path");

// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  let stringSplit = string.split(' ');
  return stringSplit;
}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  let resultado = [];
  let resultadoFinal;
  resultado.push(array[array.length - 1]);
  resultado.push(array[0]);
  resultadoFinal = resultado.join(', ');
  return resultadoFinal;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints;
  let tiesPoints;
  winsPoints = wins * 3;
  tiesPoints = ties * 1;
  let points = winsPoints + tiesPoints;

  return points;
}

console.log(footballPoints());

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = (-100000);
  let contagem = 0;
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    let numeroIndex = arrayDeNumeros[index]
    if (numeroIndex > maiorNumero) {
      maiorNumero = numeroIndex
    }
  }
  // console.log(maiorNumero);
  for (let index2 = 0; index2 < arrayDeNumeros.length; index2 += 1) {
    let numeroIndex2 = arrayDeNumeros[index2]
    if (numeroIndex2 === maiorNumero) {
      contagem = contagem + 1
    }
  }
  return contagem
}

highestCount([]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let gatoMaisPerto = '';
  if (distanceCat1 < distanceCat2) {
    gatoMaisPerto = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    gatoMaisPerto = 'cat2';
  } else if (distanceCat1 === distanceCat2) {
    gatoMaisPerto = 'os gatos trombam e o rato foge';
  }
  return gatoMaisPerto
}

catAndMouse();

// Desafio 8
function fizzBuzz(numerosFizzBuzz) {
  let resultadoFizzBuzz = [];
  for (let index in numerosFizzBuzz) {
    if (numerosFizzBuzz[index] % 3 === 0 && numerosFizzBuzz[index] % 5 !== 0) {
      resultadoFizzBuzz.push('fizz')
    } else if (numerosFizzBuzz[index] % 5 === 0 && numerosFizzBuzz[index] % 3 !== 0) {
      resultadoFizzBuzz.push('buzz')
    } else if (numerosFizzBuzz[index] % 3 === 0 && numerosFizzBuzz[index] % 5 === 0) {
      resultadoFizzBuzz.push('fizzBuzz')
    } else {
      resultadoFizzBuzz.push('bug!')
    }
  }
  return resultadoFizzBuzz;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(stringEncode) {
  let stringInArray = stringEncode.split('');
  let arrayEncode = [];
  for (let index in stringInArray) {
    if (stringInArray[index] === 'a') {
      arrayEncode.push('1')
    } else if (stringInArray[index] === 'e') {
      arrayEncode.push('2')
    } else if (stringInArray[index] === 'i') {
      arrayEncode.push('3')
    } else if (stringInArray[index] === 'o') {
      arrayEncode.push('4')
    } else if (stringInArray[index] === 'u') {
      arrayEncode.push('5')
    } else {
      arrayEncode.push(stringInArray[index])
    }
  }
  let resultEncode = arrayEncode.join('')
  return resultEncode

}
console.log(encode('hi there!'))

function decode(stringDecode) {
  let stringInArray2 = stringDecode.split('');
  let arrayDecode = [];
  for (let index in stringDecode) {
    if (stringInArray2[index] === '1') {
      arrayDecode.push('a')
    } else if (stringInArray2[index] === '2') {
      arrayDecode.push('e')
    } else if (stringInArray2[index] === '3') {
      arrayDecode.push('i')
    } else if (stringInArray2[index] === '4') {
      arrayDecode.push('o')
    } else if (stringInArray2[index] === '5') {
      arrayDecode.push('u')
    } else {
      arrayDecode.push(stringInArray2[index])
    }
  }
  let resultadoDecode = arrayDecode.join('');
  return resultadoDecode;
}
console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(tech, name) {
  let arrayTechList = [];
  tech = tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    arrayTechList.push({ tech: tech[index], name: name })
  }
  if (tech.length === 0){
    arrayTechList = 'Vazio!'
  }
  return arrayTechList
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Renan'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
