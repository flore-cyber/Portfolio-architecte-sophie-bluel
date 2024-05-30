const messageError = document.querySelector("p");
const API_BASE_URL = "http://localhost:5678/api"


// recuperer les users 



function getUsers() {
  const email = document.querySelector("form #email").value;
  const password = document.querySelector("form #password").value;

  let data = {
    email: email,
    password: password,
  }

    return fetch(`${API_BASE_URL}/users/login`),{
    method:"POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type' : 'application/json'
    }
  }
  const p1 = new Promise((resoudre, rejeter) => {
    resoudre("Réussite !");
    console.log(resooudre);
    // ou
    // rejeter(new Error("Erreur !"));
  });
  
  p1.then(
    (value) => {
      console.log(value); // Réussite !
    },
    (reason) => {
      console.error(reason); // Erreur !
    },
  );
}
    //connexion 
      //.then récupérer les datas.
  //.then stocker le token dans le localStorage   exemple : localStorage.setItem('token', 'iciuntoken')



//const test = document.querySelector('.test')
//test.addEventListener('click', function (e) {
 //e.preventDefault();
 
//login();
// const form = document.querySelector("form");

// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   login()
// })

function login(){      
  const form = document.querySelector("form");
  form.addEventListener('submit', function(e) {
   e.preventDefault();
   const userEmail = email.value;
   const usePwd = password.value;
   login()
   });
  }
  getUsers();

