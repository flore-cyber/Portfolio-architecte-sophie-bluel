console.log("hello");
//FETCH POUR RECUPERER LES WORKS//

fetch ("http://localhost:5678/api/works")
.then(reponse => reponse.json ())
.then(reponse2 => console.table(reponse2));

//FUNCTION POUR AFFICHER LES WORKS //
