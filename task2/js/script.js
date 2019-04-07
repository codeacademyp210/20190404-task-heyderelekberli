"use strict";

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let sliderContent = document.querySelector(".slider .content");

next.addEventListener("click", nextButton);
prev.addEventListener("click", prevButton);



function nextButton() {
    let currentItem = document.querySelector(".slide-show");
    currentItem.classList.remove("slide-show");
    if (currentItem.nextElementSibling != null) {
        currentItem.nextElementSibling.classList.add("slide-show");
    } else {
        currentItem.parentNode.firstElementChild.classList.add("slide-show");
    }
}

function prevButton() {
    let currentItem = document.querySelector(".slide-show");
    currentItem.classList.remove("slide-show");
    if (currentItem.previousElementSibling != null) {
        currentItem.previousElementSibling.classList.add("slide-show");
    } else {
        currentItem.parentNode.lastElementChild.classList.add("slide-show");
    }
}