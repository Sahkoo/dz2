let count = 0 // рахунок
let counter = 0 // натискання
let score = document.getElementById("count")
let color = document.getElementById("color")
let colors = document.querySelectorAll(".guess")
let backgrounds = [
  "forestgreen",
  "olivedrab",
  "turquoise",
  "steelblue",
  "darkviolet",
  "indigo",
  "slategray",
  "goldenrod",
  "maroon",
  "tomato",
  "crimson",
  "khaki"
]
// перемішуємо кольори
function shuffle() {
  let x = 0; let xNumber
  for (let i = 0; i < 24; i++) {
    xNumber = Math.round(Math.random() * 11)
    x = backgrounds.splice(xNumber, 1)
    backgrounds.push(x[0])
  }
}

// вибираємо колір
let random = Math.round(Math.random() * 11)
color.innerText = backgrounds[random]

// заливаємо кольорами
shuffle() // перемішали

for (let i = 0; i < 12; i++) {
  colors[i].addEventListener("click", check)
}
function setColors() {
  for (let i = 0; i < 12; i++) {
    colors[i].style.background = backgrounds[i]
  }
}

setColors()
console.log (colors)
function check() {
  counter++
  console.log(counter)

  // завантажуємо інший раунд
  shuffle() // перемішали
  setColors()

  // вибираємо колір
  let random = Math.round(Math.random() * 11)
  color.innerText = backgrounds[random]

  if (this.style.background === color.innerText) {
    count++
    score.innerText = count
  }
  else {
    count--
    score.innerText = count
  }
  if (counter === 12) {
    alert(count)
    location.reload()
  }
}