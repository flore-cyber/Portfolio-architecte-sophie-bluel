const API_BASE_URL = "http://localhost:5678/api"

                     //FETCH POUR RECUPERER LES WORKS//

 function getWorks(){
 return fetch (`${API_BASE_URL}/works`)
.then(response => response.json ())
.then(data => {
    displayWorks (data)
    console.table(data)
    return data;
})
.catch(error => {
    console.log(error)
});
}

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
      return  fetch (`${API_BASE_URL}/categories`)
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


const filtres = document.querySelector(".filtres")

 async function displayCategories (categories){
    const btnAll = document.createElement('button');
    btnAll.textContent = 'Tous'
    btnAll.addEventListener('click',() => {
        getWorks().then(displayWorks)
    })
filtres.appendChild(btnAll)

    categories.forEach((categorie) => {
        const btn = document.createElement("button");
        btn.textContent = categorie.name;
        btn.id = categorie.id;
        console.log(categorie.id)
        filtres.appendChild(btn);
    
        btn.addEventListener('click', function(){
            getWorks().then(data => {
                const filteredWorks = filterWorksByCategory(categorie.id,data);
                displayWorks(filteredWorks)
            })
        })
    });
} 
function filterWorksByCategory(categoryId, works){
    return works.filter(work => work.categoryId === categoryId);
}
getWorks().then(displayWorks);
getCategories();
