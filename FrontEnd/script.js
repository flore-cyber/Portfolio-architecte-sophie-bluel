const API_BASE_URL = "http://localhost:5678/api"

                     //FETCH POUR RECUPERER LES WORKS//

 function getWorks(){
fetch (`${API_BASE_URL}/works`)
.then(response => response.json ())
.then(data => {
    displayWorks (data)
    console.table(data)
})
.catch(error => {
    console.log(error)
});
}
getWorks();
// Affichage des Works //
 function displayWorks(medias){
const gallery = document.querySelector('.gallery')
gallery.innerHTML = medias.map ( media => `
<div class="div-img" data-id="${media.id}">
<img class="img-modale" src="${media.imageUrl}" alt="${media.title}">
<p>${media.title}</p>
</div>
`).join('');
}

                       // FETCH POUR RECUPERER LES CATEGORIES //

    function getCategories(){
        fetch (`${API_BASE_URL}/categories`)
        .then(reponse => reponse.json())
        .then (data => {
            console.table(data)
            displayCategories(data)
        })
    .catch(error=>{
        console.log(error)
    })
}
                       // CREATION BUTTON TOUS //

function createBtn() {
const btn = document.createElement('button');
    const  t = document.createTextNode("Tous");
    btn.appendChild(t);
    filtres.appendChild(btn);


}

const filtres = document.querySelector(".filtres")

 async function displayCategories (categories){
    console.log(categories)
    createBtn();
    categories.forEach((categorie) => {
        const btn = document.createElement("button");
        btn.textContent = categorie.name;
        btn.id = categorie.id;
        filtres.appendChild(btn);
        filtreCategories();
    });
} 
   async function filtreCategories(){
    const buttons = document.querySelectorAll(".filtres button");
    const gallery = document.querySelector(".gallery");
    buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
    btnId = e.target.id;
    gallery.innerHTML = "";
    if( btnId !=="0"){
     const triworks = getWorks.filter((work)=>{
        return work.categorieId == btnId;
     }
    )

    }
    console.log(btnId);
    });
    });
}
getWorks();
getCategories();
