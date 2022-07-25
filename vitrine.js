const form = document.querySelector("form");
const email = document.getElementById("email");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validacao();
});

function validacao() {
  if (email.value == "") {
    const valor = prompt("Qual é o seu endereço de e-mail?", "");
    if (valor.length == 0) {
      alert("ERRO - nenhum valor informado no Prompt!");
    }
    if (valor.indexOf("@") == -1) {
      alert("Não há '@' no seu valor");
    }
    if (valor.indexOf(".") == -1) {
      alert("Não há '.' em seu valor");
    }
    if (valor.lastIndexOf(".") < valor.indexOf("@") - 1) {
      alert("deve haver um . depois do @");
    }
    if (valor.length <= 9) {
      /* Deve ter o tamanho mínimo de 10 caracteres. */
      alert("seu email deve conter 10 caracteres!");
    }
  }
}
