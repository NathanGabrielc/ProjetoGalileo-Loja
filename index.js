const container = document.querySelector("section .container");
const teste = document.createElement("div");
teste.id = "demo";
container.appendChild(teste);
teste.style.color = "white";

var countDownDate = new Date("Jan 5, 2023 24:00:00").setHours(24);

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    "A promoção termina em " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
