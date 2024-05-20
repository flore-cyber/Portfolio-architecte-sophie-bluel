const email = document.querySelector("form #email");
const password = document.querySelector("form #password");
const form = document.querySelector("form");
const messageError = document.querySelector("p");
const API_BASE_URL = "http://localhost:5678/api"



  fetch ("http://localhost:5678/api/users")
  .then(res => console.log(res));


  
