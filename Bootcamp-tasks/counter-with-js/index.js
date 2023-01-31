let counterBox = document.querySelector("#counter-box")
let btn = document.createElement("button")

window.addEventListener("load", () => {
  btn.addEventListener("click", () => {
    let count = 0
    count++
    btn.innerHTML = `Count is ${count}`
  })
  counterBox.append(btn)
})
