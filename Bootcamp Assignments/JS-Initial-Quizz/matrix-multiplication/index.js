/* let form1 = document.querySelector("#form1")
let matACols = document.querySelector("#matACols")
let matARows = document.querySelector("#matARows")
let matBCols = document.querySelector("#matBCols")
let matBRows = document.querySelector("#matBRows") */

let matrixB = [
  [[], []],
  [[], []],
]
let matrixC = [[], []]

/* form1.addEventListener("submit", (e) => {
  multiplyAAndB()
  e.preventDefault()
}) */

let form2 = document.querySelector("#form2")

//? Values for matrix A

let matrixAR1C1 = document.querySelector("#matrixAR1C1")
let matrixAR1C2 = document.querySelector("#matrixAR1C2")
let matrixAR2C1 = document.querySelector("#matrixAR2C1")
let matrixAR2C2 = document.querySelector("#matrixAR1C1")

//? Values for matrix B

let matrixBR1C1 = document.querySelector("#matrixBR1C1")
let matrixBR1C2 = document.querySelector("#matrixBR1C2")
let matrixBR2C1 = document.querySelector("#matrixBR2C1")
let matrixBR2C2 = document.querySelector("#matrixBR2C2")

let matrixContainer = document.querySelector("#matrix-container")

function multiplyAAndB() {
  let matrixA = [[], []]
  matrixA[0][0].push(matrixAR1C1.value)
  matrixA[1][1].push(matrixAR1C2.value)

  matrixContainer.innerHTML = matrixA
}

form2.addEventListener("submit", (e) => {
  multiplyAAndB()
  e.preventDefault()
})
