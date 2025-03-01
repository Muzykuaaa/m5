let menu = document.getElementById("menu")
let navigation = document.getElementById("navigation")

let closeMenu = true

menu.addEventListener("click", openMenu)

function openMenu() {
    if (closeMenu == true) {
        navigation.style.right = '-100%'
    }
    else {
        navigation.style.right = '0' 
    }
    closeMenu = !closeMenu
}