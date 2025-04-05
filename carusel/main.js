let left = document.getElementById("left");
let right = document.getElementById("right");
let carusel = document.getElementById("carusel");

let caruselElem = 3;
const width = 100 / caruselElem;
const item = carusel.children.length - caruselElem;
let current = 0;

for (let item of carusel.children) {
  item.style.width = width + "%";
}

function clickRight() {
  current += 1;
  if (current >= item) {
    current = 0;
  }
  carusel.style.transform = `translateX(-${width*current}%)`;
}

right.addEventListener("click", clickRight)

function clickLeft() {
    current -= 1;
    if (current <= item) {
        current = 0;
    }
    carusel.style.transform = `translateX(-${width*current}%)`
}

left.addEventListener("click", clickLeft)