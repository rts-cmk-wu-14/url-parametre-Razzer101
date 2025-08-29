const dataLink = "http://127.0.0.1:5500/data/destinations.json"
const mainWrapper = document.querySelector("#mainWrapper")

fetch(dataLink).then((result) => result.json()).then((data) => {handleData(data)})

function handleData(data) {
    const mainContent = /*html*/ `
    <h1>Apartments for rent</h1>
    <section>
        ${data.destinations.map((elm) => {
            return /*html*/ `
            <figure>
                <img src="/img/${elm.image}" alt="#">
                <figcaption>
                    <button></button>
                    <a href="#"></a>
                </figcaption>
            </figure>
            `
        }).join("")}
    </section>
    `

    mainWrapper.insertAdjacentHTML("afterbegin", mainContent)
}