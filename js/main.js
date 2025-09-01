const mainWrapper = document.querySelector("#mainWrapper")

fetch("../data/destinations.json").then((result) => result.json()).then((data) => {handleData(data)})

function handleData(data) {
    const mainContent = /*html*/ `
    <h1>Apartments for rent</h1>
    <section>
        ${data.destinations.map((elm) => {
            return /*html*/ `
            <figure>
                <img src="/img/${elm.image}" alt="#">
                <figcaption>
                    <button id="btn${elm.id}" class="heartBtn" data-id=${elm.id}><i class="fa fa-heart"></i></button>
                    <a href="/destinations.html?id=${elm.id}">MORE</a>
                </figcaption>
            </figure>
            `
        }).join("")}
    </section>
    `

    mainWrapper.insertAdjacentHTML("afterbegin", mainContent)

    const heartBtn = document.querySelectorAll(".heartBtn")
    heartBtn.forEach((btn) => {
    btn.addEventListener("click", handleHeartBtn)
    })

    function handleHeartBtn(event){
        let btnId = event.currentTarget.dataset.id
        if(localStorage.getItem(`btn${btnId}`)){
            localStorage.removeItem(`btn${btnId}`)
            event.currentTarget.classList.remove("favorite")
        }
        else{
            localStorage.setItem(`btn${btnId}`, btnId)
            event.currentTarget.classList.add("favorite")
        }
    }

    let dataId = data.destinations
    if(localStorage.key(`btn${dataId[0].id}`)){
        document.querySelector(`#btn${dataId[0].id}`).classList.add("favorite")
    }
}