const btn = document.getElementById("darkBtn");

/* Check saved mode */

if(localStorage.getItem("mode") === "dark"){

document.body.classList.add("dark");
btn.textContent="☀";

}

/* Toggle Dark Mode */

btn.onclick = function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

btn.textContent="☀";
localStorage.setItem("mode","dark");

}

else{

btn.textContent="🌙";
localStorage.setItem("mode","light");

}

}

/* Form Validation */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let messageError = document.getElementById("messageError");

nameError.textContent="";
emailError.textContent="";
messageError.textContent="";

let valid=true;

if(name===""){

nameError.textContent="Name is required";
valid=false;

}

if(email===""){

emailError.textContent="Email is required";
valid=false;

}

if(message===""){

messageError.textContent="Message cannot be empty";
valid=false;

}

if(valid){

alert("Form submitted successfully!");
form.reset();

}

});