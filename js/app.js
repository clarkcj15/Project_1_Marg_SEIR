const beginButton = document.querySelector(".begin-game");
const modal = document.querySelector(".modal");
const getStarted = document.querySelector(".get-started");
const carouselNext = document.querySelector(".carousel-next");
const carouselPrevious = document.querySelector(".carousel-previous");
const carouselSelect = document.querySelector(".carousel-select");
const currentStatsContainer = document.querySelector(".plant-stats");
const SunPwr = document.querySelector(".Sun-Power");
const H2O = document.querySelector(".H2O");
const love = document.querySelector(".love");
const carousel = document.querySelector(".carousel");
const parnellPlantShopId = document.querySelector("#parnellPlantShop");
const carouselImage = document.querySelector(".carousel img");


//Plant Class
class Plant {
    constructor(name, sunpower, h2o, love) {
        this.name = name;
        this.sunpower = sunpower;
        this.h2o = h2o;
        this.love = love;
    }
//Allows player to update the stats of the plant
    updateStats() {
        currentContainer.innerHTML = `
        <div class="sun btn">
                Sun Power: <span>${this.sunpower}</span>
            </div>
            <div class="water">
                H2O: <span>${this.h2o}</span>
            </div>
            <div class="lve btn">
                Love: <span>${this.love}</span>
            </div>    
        `
    }
}

//Array of pics to choose from
const plantOptions = [
    "https://lh3.googleusercontent.com/proxy/Rt5PG9btFerFgr38VMSiWOhhdsuElCPPb3x3fZlRO2Eg1i4bJQA5VzMMjWXa4G1eTneRub6ECPenewfMtxqi1owRJcMmiKmPk91V9wCtV00S6K5WG_SMrSDOfdXtFN3TZfVpP2tjbK-G",
]

let slideIndex = 0;


//Makes modal toggle open
const toggleModal = () => {
    modal.classList.toggle('open');
}

//update carousel image
const updateCarouselImage = () => {
    carouselImage.setAttribute('src', plantOptions[slideIndex]);
}
updateCarouselImage()

//change slide next function -
//when the user clicks next button
//update carousel image by 1

const changeSlideNext = () => {
    if(slideIndex < plantOptions.length - 1){
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    updateCarouselImage();
}

const changeSlidePrevious = () => {
    if(slideIndex > 0){
    slideIndex--
} else {
    slideIndex = plantOptions.length - 1;
    }
    updateCarouselImage();
}

//when the user clicks on the select button
// make the background of the body element current slide
// in our carousel

const updateBackground = () => {
    const body = document.querySelector("body");
    body.style.plantOptions = `url(${plantOptions[slideIndex]})`;
    carousel.remove();
    // firstPet.birth();
    birthPet(); 

}

const openCarousel = () => {
    //remove the modal
    toggleModal();
    //add the open class to the open button
    carousel.classList.add("open");
}

beginButton.addEventListener("click", toggleModal);
// getStarted.addEventListener("click", openCarousel);
// .addEventListener("click", openCarousel);
// sun
// h2o
// love
// upgrade
// next
// back