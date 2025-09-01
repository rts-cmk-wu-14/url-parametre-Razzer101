let params = new URLSearchParams(window.location.search)
const id = params.get("id")
const destionationsWrapper = document.querySelector("#destionationsWrapper")

fetch(`../data/${id}.json`).then((respons) => respons.json()).then((data)=>{showData(data)})

function showData(data){
    const destinationsContent = /*html*/`
        <figure>
            <button></button>
            <img src="" alt="">
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
        </article>
    `

    destionationsWrapper.insertAdjacentHTML("afterbegin", destinationsContent)
}