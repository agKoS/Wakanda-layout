let menu = document.querySelector(".menu")
let line = document.querySelector(".menu__line")

export function activeMenu() {
    if (menu.classList.contains("active")) {
        document.body.classList.remove("active")
        menu.classList.remove("active")
        menu.classList.add("not-active")
        setTimeout(() => line.classList.remove("menu__line_active"), 700)
    } else {
        document.body.classList.add("active")
        menu.classList.remove("not-active")
        menu.classList.add("active")
        setTimeout(() => line.classList.add("menu__line_active"), 700)
    }
}
