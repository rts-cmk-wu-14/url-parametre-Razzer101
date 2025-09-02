import { handleHeartBtn } from "./handleHeartBtn.js";

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

    data.destinations.forEach((dataId) => {
        let heartBtn = document.querySelector(`#btn${dataId.id}`)
        localStorage.getItem(`btn${dataId.id}`) ? heartBtn.classList.add("favorite") : heartBtn.classList.remove("favorite")
    })
}