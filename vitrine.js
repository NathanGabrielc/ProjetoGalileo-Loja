const button = document.querySelector("button")
button.id = "submit";

const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

const email = document.getElementById("email");

function validate(){
if(email == ""){
    console.log ("certo")
}
}

