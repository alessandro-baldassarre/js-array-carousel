

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


let mainCarouselImage = "";

let mainCarouselText = "";


for ( let i = 0; i < items.length; i++){

    
        mainCarouselImage += `<div class="my-carousel-img d-none"> <img src="${items[i]}" alt="random image"> </div>`;

        mainCarouselText += `<div class="my-carousel-text d-none position-absolute">
        <h1>${title[i]}</h1>
        <p>${text[i]}</p> </div>`;
    

}

const mainCarousel = document.querySelector(".my-carousel-main");

mainCarousel.innerHTML += mainCarouselImage;

mainCarousel.innerHTML += mainCarouselText;

const mainCarouselImageCurrent = document.getElementsByClassName("my-carousel-img");

const mainCarouselTextCurrent = document.getElementsByClassName("my-carousel-text");

const asideCarouselImageCurrent = document.getElementsByClassName("my-carousel-aside-img");

mainCarouselImageCurrent[0].classList.remove("d-none");
mainCarouselImageCurrent[0].classList.add("d-block");

mainCarouselTextCurrent[0].classList.remove("d-none");
mainCarouselTextCurrent[0].classList.add("d-block");

asideCarouselImageCurrent[0].classList.add("my-active");

let counter = 0;

const arrowDown = document.querySelector(".arrow-down");

arrowDown.addEventListener("click", function(){


    if(counter < (mainCarouselImageCurrent.length - 1)){

        mainCarouselImageCurrent[counter].classList.remove("d-block");
        mainCarouselImageCurrent[counter].classList.add("d-none");
        mainCarouselTextCurrent[counter].classList.remove("d-block");
        mainCarouselTextCurrent[counter].classList.add("d-none");
        asideCarouselImageCurrent[counter].classList.remove("my-active");

        counter++;

        mainCarouselImageCurrent[counter].classList.add("d-block");
        mainCarouselImageCurrent[counter].classList.remove("d-none");
        mainCarouselTextCurrent[counter].classList.add("d-block");
        mainCarouselTextCurrent[counter].classList.remove("d-none");
        asideCarouselImageCurrent[counter].classList.add("my-active");
    }

    else{
        mainCarouselImageCurrent[counter].classList.remove("d-block");
        mainCarouselImageCurrent[counter].classList.add("d-none");
        mainCarouselTextCurrent[counter].classList.remove("d-block");
        mainCarouselTextCurrent[counter].classList.add("d-none");
        asideCarouselImageCurrent[counter].classList.remove("my-active");

        mainCarouselImageCurrent[0].classList.remove("d-none");
        mainCarouselImageCurrent[0].classList.add("d-block");

        mainCarouselTextCurrent[0].classList.remove("d-none");
        mainCarouselTextCurrent[0].classList.add("d-block");
        asideCarouselImageCurrent[0].classList.add("my-active");

        counter = 0;

    }


});

const arrowUp = document.querySelector(".arrow-up");

arrowUp.addEventListener("click", function(){


    if(counter > 0){

        mainCarouselImageCurrent[counter].classList.remove("d-block");
        mainCarouselImageCurrent[counter].classList.add("d-none");
        mainCarouselTextCurrent[counter].classList.remove("d-block");
        mainCarouselTextCurrent[counter].classList.add("d-none");
        asideCarouselImageCurrent[counter].classList.remove("my-active");

        counter--;

        mainCarouselImageCurrent[counter].classList.add("d-block");
        mainCarouselImageCurrent[counter].classList.remove("d-none");
        mainCarouselTextCurrent[counter].classList.add("d-block");
        mainCarouselTextCurrent[counter].classList.remove("d-none");
        asideCarouselImageCurrent[counter].classList.add("my-active");
    }

    else{
        mainCarouselImageCurrent[counter].classList.remove("d-block");
        mainCarouselImageCurrent[counter].classList.add("d-none");
        mainCarouselTextCurrent[counter].classList.remove("d-block");
        mainCarouselTextCurrent[counter].classList.add("d-none");
        asideCarouselImageCurrent[counter].classList.remove("my-active");

        mainCarouselImageCurrent[mainCarouselImageCurrent.length - 1].classList.remove("d-none");
        mainCarouselImageCurrent[mainCarouselImageCurrent.length - 1].classList.add("d-block");
        asideCarouselImageCurrent[mainCarouselImageCurrent.length - 1].classList.add("my-active");

        mainCarouselTextCurrent[mainCarouselImageCurrent.length - 1].classList.remove("d-none");
        mainCarouselTextCurrent[mainCarouselImageCurrent.length - 1].classList.add("d-block");

        counter = mainCarouselImageCurrent.length - 1;

    }


});