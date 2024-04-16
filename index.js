let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

let setCountToZero = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

    setCountToZero.textContent = 0
    count = 0
}

