let params = new URLSearchParams(window.location.search)
const id = params.get("id")
const destionationsWrapper = document.querySelector("#destionationsWrapper")

fetch(`../data/${id}.json`).then((respons) => respons.json()).then((data)=>{showData(data)})

function showData(data){
    const destinationsContent = /*html*/`
        <figure>
            <button id="favorite${data.id}"><i class="fa fa-heart"></i><p>Favorite</p></button>
            <img src="/img/${data.image}" alt="">
        </figure>
        <article>
            <h2>${data.destination}</h2>
            <h1>${data.title}</h1>
            <h3>${data.subtitle}</h3>
            <p>${data.text}</p>
            <h4>Facilities</h4>
            <ul>
                ${data.facilities.map((elm)=>{
                return /*html*/ `<li>${elm}</li>`
                }).join("")}
            </ul>
            <a href="/index.html">Tilbage</a>
        </article>
    `

    destionationsWrapper.insertAdjacentHTML("afterbegin", destinationsContent)

    const favoriteBtn = document.querySelector(`#favorite${data.id}`)

    favoriteBtn.addEventListener("click", handleFavoriteClick)

    function handleFavoriteClick(){
        if(localStorage.getItem(`btn${data.id}`)){
            localStorage.removeItem(`btn${data.id}`)
            favoriteBtn.classList.remove("favorite")
            favoriteBtn.style.color = "white"
        }

        else{
            localStorage.setItem(`btn${data.id}`, data.id)
            favoriteBtn.classList.add("favorite")
            favoriteBtn.style.color = ""
        }
        
    }

    if(localStorage.getItem(`btn${data.id}`)){
            favoriteBtn.classList.add("favorite")
            favoriteBtn.style.color = ""
    }

    else{
        favoriteBtn.classList.remove("favorite")
        favoriteBtn.style.color = "white"
    }
}