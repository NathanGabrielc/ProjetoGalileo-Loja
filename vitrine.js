const form = document.querySelector("form");
const email = document.getElementById("email");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validacao();
});

function validacao() {
  if (email.value === "") {
     const valorPrompt = prompt("Qual é o seu endereço de e-mail?", "");
    if (valorPrompt.length === 0) {
      alert ("ERRO - nenhum valor informado no alert!");
      return false; }
    else {console.log ('Foi adicionado texto no prompt')
    }

    if (valorPrompt.indexOf("@") == -1) {
      alert("Deve adicionar @ no email");
      return false }else {console.log ('Foi adicionado o @ no prompt')
      }

    if (valorPrompt.lastIndexOf("@") > valorPrompt.indexOf("@") +1) {
      alert("deve haver um @ apenas");
      return false}else {console.log ('Foi adicionado apenas um @ no prompt')}

    if (valorPrompt.indexOf(".") == -1) {
      alert("Não há '.' em seu email");
      return false}else {console.log ('Foi adicionado o . no prompt')}

    if (valorPrompt.lastIndexOf(".") < valorPrompt.indexOf("@") +1) {
      alert("deve haver um . depois do @");
      return false}else {console.log ('Foi adicionado o . depois do @ no prompt') }

    if (valorPrompt.length <= 9) {
      /* Deve ter o tamanho mínimo de 10 caracteres. */
      alert("seu email deve conter 10 caracteres!");
      return false}else {console.log ('Foi adicionado 10 caracteres no prompt')}
   if (true){
    return alert("Email cadastrado com sucesso, seu email é " + valorPrompt)
   } 
  }
}

 /*  /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i */


/*  const form = document.querySelector("form");
 const email = document.getElementById("email");
 
 form.addEventListener("submit", (e) => {
   e.preventDefault();
   validacaoVazio()
   validacaoEmail();
 });
 
 function validacaoEmail() {
   usuario = email.value.substring(0, email.value.indexOf("@"));
   dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length
   );
 
   if (
     usuario.length >= 1 &&
     dominio.length >= 3 &&
     usuario.search("@") == -1 &&
     dominio.search("@") == -1 &&
     usuario.search(" ") == -1 &&
     dominio.search(" ") == -1 &&
     dominio.search(".") != -1 &&
     dominio.indexOf(".") >= 1 &&
     dominio.lastIndexOf(".") < dominio.length - 1
   ) {
     alert("E-mail valido");
   } else {
     alert("E-mail invalido");
   }
 }
 
 function validacaoVazio(){
   if (email.value === "") {
     const valorPrompt = prompt("Qual é o seu endereço de e-mail?", "");
    if (valorPrompt.length === 0) {
      alert ("ERRO - nenhum valor informado no alert!");
    }
 }
 }  */
  

 