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

function displayWorks(medias){
const gallery = document.querySelector('.gallery')
gallery.innerHTML = medias.map ( media => `
<div class="div-img" data-id="${media.id}">
<img class="img-modale" src="${media.imageUrl}" alt="${media.title}">
<p>${media.title}</p>
</div>
`).join('');
}



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
const filtres = document.querySelector(".filtres")

 async function displayCategories (categories){
    console.log(categories)
    categories.forEach((categorie) => {
        const btn = document.createElement("button");
        btn.textContent = categorie.name;
        btn.id = categorie.id;
        filtres.appendChild(btn)

    });
}



displayCategories();
getCategories();
getWorks();