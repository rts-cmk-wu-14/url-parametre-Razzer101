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
                    <button class="heartBtn"><i class="fa fa-heart"></i></button>
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
        // event.currentTarget.style.color === "red" ? event.currentTarget.style.color = "black" : event.currentTarget.style.color = "red"
        event.currentTarget.classList.toggle("favorite")
    }
}