

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// initialize variables to add to the carousel

let mainCarouselImage = "";

let mainCarouselText = "";

let asideCarouselImage = "";

// for loop to create html elements as many as there are elements in the list

for ( let i = 0; i < items.length; i++){

    
    mainCarouselImage += `<div class="my-carousel-img d-none"> <img src="${items[i]}" alt="random image"> </div>`;

    mainCarouselText += `<div class="my-carousel-text d-none position-absolute text-start"> <h1>${title[i]}</h1> <p>${text[i]}</p> </div>`;
    
    asideCarouselImage += `<div class="my-carousel-aside-img"> <img src="${items[i]}" alt="random small image"> </div>`;

}

// variable to select the html element that i want to add those created
const mainCarousel = document.querySelector(".my-carousel-main");

const asideCarousel = document.querySelector(".my-carousel-aside");

// add them through innerHTML
mainCarousel.innerHTML += mainCarouselImage;

mainCarousel.innerHTML += mainCarouselText;

asideCarousel.innerHTML += asideCarouselImage;

// variables that contain a list of elements with a specific class
const mainCarouselImageCurrent = document.getElementsByClassName("my-carousel-img");

const mainCarouselTextCurrent = document.getElementsByClassName("my-carousel-text");

const asideCarouselImageCurrent = document.getElementsByClassName("my-carousel-aside-img");

// initialize the first item in the list to display it when the page load
mainCarouselImageCurrent[0].classList.remove("d-none");
mainCarouselImageCurrent[0].classList.add("d-block");

mainCarouselTextCurrent[0].classList.remove("d-none");
mainCarouselTextCurrent[0].classList.add("d-block");

asideCarouselImageCurrent[0].classList.add("my-active");

// variable that serves to understand which element of the list we are
let counter = 0;

// select the button (arrowDown)
const arrowDown = document.querySelector(".arrow-down");

// event that listens to the user's click on the button and performs the operations inside it
arrowDown.addEventListener("click", function(){


    mainCarouselImageCurrent[counter].classList.remove("d-block");
    mainCarouselImageCurrent[counter].classList.add("d-none");
    mainCarouselTextCurrent[counter].classList.remove("d-block");
    mainCarouselTextCurrent[counter].classList.add("d-none");
    asideCarouselImageCurrent[counter].classList.remove("my-active");

    // check wich position of the list we are in and in case we were at the end the loop starts again
    if(counter < (mainCarouselImageCurrent.length - 1)) {

        counter++;

    }

    else {

        counter = 0;
    }

    mainCarouselImageCurrent[counter].classList.add("d-block");
    mainCarouselImageCurrent[counter].classList.remove("d-none");
    mainCarouselTextCurrent[counter].classList.add("d-block");
    mainCarouselTextCurrent[counter].classList.remove("d-none");
    asideCarouselImageCurrent[counter].classList.add("my-active");


});

const arrowUp = document.querySelector(".arrow-up");

arrowUp.addEventListener("click", function(){

    mainCarouselImageCurrent[counter].classList.remove("d-block");
    mainCarouselImageCurrent[counter].classList.add("d-none");
    mainCarouselTextCurrent[counter].classList.remove("d-block");
    mainCarouselTextCurrent[counter].classList.add("d-none");
    asideCarouselImageCurrent[counter].classList.remove("my-active");

    if(counter > 0) {

        counter--;

    }

    else {

        counter = mainCarouselImageCurrent.length - 1;

    }

    mainCarouselImageCurrent[counter].classList.add("d-block");
    mainCarouselImageCurrent[counter].classList.remove("d-none");
    mainCarouselTextCurrent[counter].classList.add("d-block");
    mainCarouselTextCurrent[counter].classList.remove("d-none");
    asideCarouselImageCurrent[counter].classList.add("my-active");


});