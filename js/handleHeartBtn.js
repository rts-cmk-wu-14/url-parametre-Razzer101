export function handleHeartBtn(event){
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