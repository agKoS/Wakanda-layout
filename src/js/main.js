import masonry from "masonry-layout"
import isWebp from "./modules/isWebp.js"
import imagesLoaded from "imagesloaded"

import { activeMenu } from "./modules/burgerMenu.js"

isWebp()

// Elements
let buttonMenu = document.querySelector(".menu__icon")
let comments = document.querySelector(".testimonial__comments")

// Burger menu active

buttonMenu.addEventListener("click", activeMenu)

// Masonry layout

imagesLoaded(comments, function (instance) {
    new masonry(comments, {
        // columnWidth: 356,
        columnWidth: ".comment",
        itemSelector: ".comment",
        horizontalOrder: true,
        fitWidth: true,
        gutter: 24,
    })
})
