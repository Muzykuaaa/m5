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
  main.innerHTML = `        <img src="${dataCard.avatar_url}">
        <h1>${dataCard.login}</h1>
        <p>${dataCard.bio} </p>
        
        <div>
            <i class="fas fa-heart"></i>
            <span>Репозиториев: ${dataCard.public_repos}</span>
        </div>
        <div>
            <i class="fas fa-fire-alt"></i>
            <span>Подписчиков: ${dataCard.followers}</span>
        </div>
        <div>
            <i class="fas fa-map-marker-alt"></i>
            <span>Локация: ${dataCard.location}</span>
        </div>`;
}
