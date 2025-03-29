let main = document.getElementById("main");
let search = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");

let dataCard;
searchBtn.addEventListener("click", getCard);

async function getCard() {
//   spiner.classList.remove("none");
  let response = await fetch(`https://api.github.com/users/${search.value}`);
  if (response.ok) {
    dataCard = await response.json();
    generateCard();
  } else {
    console.log("не верные данные");
  }
//   spiner.classList.add("none");
}

function generateCard() {
  console.log(dataCard);
  main.classList.remove("none");
  main.innerHTML = `        <img src="https://play-lh.googleusercontent.com/aW22h9t8Lzb9kiB6fVuh9-E6-ilsm45bo7p2HWWocxDJLdKDcwK42VvJ7qMZo0capeQ=w526-h296-rw">
        <h1>Login</h1>
        <p>Описание </p>
        
        <div>
            <i class="fas fa-heart"></i>
            <span>Репозиториев: 5</span>
        </div>
        <div>
            <i class="fas fa-fire-alt"></i>
            <span>Репозиториев: 5</span>
        </div>
        <div>
            <i class="fas fa-thumbs-down"></i>
            <span>Репозиториев: 5</span>
        </div>`;
}
