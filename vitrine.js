const form = document.querySelector("form")
const teste = document.createElement("p");
teste.id = "demo";
form.appendChild(teste);


const btnEnviar = document.querySelector("button[name=myButton]");
const inputEmail = document.getElementById("email");
const checkBox = document.querySelector("input[type = checkbox]");
const label = document.querySelector('label[for = termoscheck]')
const mensagem = document.querySelector('form h2')
let valorPrompt;

function validar() {
  btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    validaEmail();
  });
}

function validaEmail() {
  if (inputEmail.value === "") {valorPrompt = prompt("Qual é o seu endereço de e-mail?"); validaPrompt(); }

  if (inputEmail.value.length <= 9) { alert("seu email deve conter 10 caracteres!"); return false; } // Valida se há 10 caracteres
  if (inputEmail.value.lastIndexOf(".") < inputEmail.value.indexOf("@") + 1) {alert('Email inválido, precisa de um "." após o "@"'); return false; } // Valida se há um . após o @
  if (inputEmail.value.indexOf("@") == -1) {alert('Email inválido, precisa de um "@"'); return false; } // Valida se existe um @ no email
  if (inputEmail.value.lastIndexOf("@") > inputEmail.value.indexOf("@") + 0) {alert("deve haver um @ apenas"); return false; } // Valida se há mais de um @
  if (inputEmail.value.indexOf(".") == -1) {alert("Não há . em seu email"); return false; } // Valida se existe . no email
  if (checkBox.checked == false) {
      label.style.backgroundColor = 'red'
      teste.innerText = "Voce deve aceitar os termos";  
      return false; 
    } // Valida se o checkBox foi marcado

  if (true) {return mensagem.innerText = "Email: " + inputEmail.value + " cadastrado com sucesso!"; }
}

function validaPrompt() {
  if (valorPrompt.length === 0) alert("ERRO - Informe um email");
}

validar();
