const button = document.getElementById('entrar');
const enviar = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

button.onclick = login;

function habilitar() {
  if (checkbox.checked === true) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
}
checkbox.onclick = habilitar;

const counter = document.querySelector('#counter');
// console.log(counter);

const textArea = document.querySelector('#textarea');
textArea.addEventListener('keyup', () => {
  counter.innerHTML = 500 - textArea.value.length;
});

// const nome = document.getElementById('input-name');
// const sobrenome = document.getElementById('input-lastname');
// const email = document.getElementById('input-email');
// const casa = document.getElementById('house');
// const familia = [];
// const materias = [];
// const avaliacao = [];
// const comentario = document.getElementById('textarea');

// const familiaAll = document.querySelectorAll('.familia-radio');

// for (let i = 0; i < familiaAll.length; i += 1) {
//   if (familiaAll[i].checked) {
//     familia.push(familiaAll[i]);
//   }
// }

// const materiasAll = document.querySelectorAll('.subject');

// for (let i = 0; i < materiasAll.length; i += 1) {
//   if (materiasAll[i].checked) {
//     materias.push(materiasAll[i]);
//   }
// }
// const avaliacaoAll = document.querySelectorAll('#avaliacao input');

// for (let i = 0; i < avaliacaoAll.length; i += 1) {
//   if (avaliacaoAll[i].checked) {
//     avaliacao.push(avaliacaoAll[i]);
//   }
// }

// let test = 'obaaaaa'

// let teste = document.createElement('p');
// teste.innerHTML = `nome: ${test}`;
// let footer = document.querySelector('footer');
// footer.appendChild(teste)

// function formData(event) {
//   event.preventDefault();
//   const formNew = document.getElementById('form-data');
//   const pNome = document.createElement('p');
//   pNome.innerHTML = `Nome:${nome.value} ${sobrenome.value}`;
//   formNew.appendChild(pNome);
//   const pEmail = document.createElement('p');
//   pEmail.innerHTML = `Email: ${email.value}`;
//   formNew.appendChild(pEmail);
//   const pCasa = document.createElement('p');
//   pCasa.innerHTML = `Casa: ${casa.value}`;
//   formNew.appendChild(pCasa);
//   const pFamilia = document.createElement('p');
//   pFamilia.innerHTML = `Família: ${familia.value}`;
//   formNew.appendChild(pFamilia);
//   const pMateria = document.createElement('p');
//   pMateria.innerHTML = `Matérias: ${materias.value}`;
//   formNew.appendChild(pMateria);
//   const pAvaliacao = document.createElement('p');
//   pAvaliacao.innerHTML = `Avaliação: ${avaliacao.value}`;
//   formNew.appendChild(pAvaliacao);
//   const pComentario = document.createElement('p');
//   pComentario.innerHTML = `Observações: ${comentario.innerText}`;
//   formNew.appendChild(pComentario);
//   console.log(pNome, pEmail);
// }

// enviar.addEventListener('click', formData);
