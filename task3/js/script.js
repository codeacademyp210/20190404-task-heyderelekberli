"use strict";

let cars = [];

let letterPattern = /^[a-zA-Z]*$/;
let modelPattern = /^[a-zA-Z0-9]*$/;
let releaseYearPattent = /^[0-9{4}]*$/;


let manufacturer = document.forms["carForm"]["manufacturer"];
let carModel = document.forms["carForm"]["carModel"];
let releaseYear = document.forms["carForm"]["releaseYear"];

let ulPerson = document.querySelector("#carList");


let Car = function (id, manufacturer, model, release) {
    this.id = id;
    this.name = manufacturer;
    this.model = model;
    this.release = release;

};


let idCounter = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();



function validateForm() {
    if (manufacturer.value == "" || carModel.value == "" || releaseYear.value == "") {
        alert("Inputs shouldn't be empty");
        return false;
    }

    if (!manufacturer.value.match(letterPattern)) {
        alert("Manufacturer\'\s name should be only letter");
        return false;
    }

    if (!carModel.value.match(modelPattern)) {
        alert("Please, enter correct format");
        return false;
    }

    if (!releaseYear.value.match(releaseYearPattent)) {
        alert("Please, enter just relase year");
        return false;
    }




    let newCar = new Car(idCounter(), manufacturer.value, carModel.value, releaseYear.value);

    cars.push(newCar);
    displayList();
    resetInputs();

    return false;
}


function displayList() {
    let lists = '';
    for (let i = 0; i < cars.length; i++) {
        lists += `<li class="list-group-item d-flex newList justify-content-between">${cars[i].id}. ${cars[i].name}
         ${cars[i].model} - ${cars[i].release} <i class=" fas fa-trash-alt"></i></li>`;
    }
    ulPerson.innerHTML = lists;


    
let iconElement = document.querySelector(".fa-trash-alt");

iconElement.addEventListener("click", function () {
    let deletLiElement = document.querySelector(".list-group")
    deletLiElement.removeChild(deletLiElement.childNodes[0])
})



let liElement = document.querySelector("li");

liElement.addEventListener("click", function () {




}




function resetInputs() {
    manufacturer.value = "";
    carModel.value = "";
    releaseYear.value = "";
}


