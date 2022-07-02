// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11){
    return 'Array com tamanho incorreto.'
  }

  for (let number = 0; number < arrayNumbers.length; number += 1){
    if (arrayNumbers[number] < 0 || arrayNumbers[number] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    let contagem = 0;
    for (let index = 0; index < arrayNumbers.length; index += 1) {
      if (arrayNumbers[number] === arrayNumbers[index]) {
        contagem = contagem + 1;
        if (contagem >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  let phone = "(" + arrayNumbers[0] + arrayNumbers[1] + ') ' + arrayNumbers[2] + arrayNumbers[3] + arrayNumbers[4] + arrayNumbers[5] + arrayNumbers[6] + '-' + arrayNumbers[7] + arrayNumbers[8] + arrayNumbers[9] + arrayNumbers[10]
  
  return phone
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    if (lineA > (Math.abs(lineB - lineC)) && lineB > (Math.abs(lineA - lineC)) && lineC > (Math.abs(lineA - lineB))) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}


function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
