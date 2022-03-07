import masonry from "masonry-layout"
import isWebp from "./modules/isWebp.js"
import imagesLoaded from "imagesloaded"

isWebp()

// Masonry layout

let comments = document.querySelector(".testimonial__comments")

imagesLoaded(comments, function (instance) {
    new masonry(comments, {
        columnWidth: 356,
        itemSelector: ".comment",
        horizontalOrder: true,
        fitWidth: true,
        gutter: 24,
    })
})
