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
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const nameBtn = document.querySelector("nameBtn");


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
        parnellPlantShopId.innerHTML = `
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

// Div that stores new plant (Stored in a varable)
    plantChoiceMade() {
        const div = document.createElement('div');
        div.innerHTML = `
        ${this.name}
    `
    parnellPlantShopId.appendChild(div);
    this.updateStats();
    }
}
//global

const plant = new Plant(`"${this.name}"`, 1, 1, 1);

//Array of pics to choose from

const plantOptions = [
    "https://www.clipartkey.com/mpngs/m/119-1193957_bean-sprouting-into-seedling-seedling-clipart.png",
    "https://us.123rf.com/450wm/studiobarcelona/studiobarcelona1901/studiobarcelona190100120/119084264-stock-vector-little-germinating-plant-from-seed-seedling-icon-vector-illustration-.jpg?ver=6",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwY0Dw6BdOcFEVBV5aSGwInfAkZslu5rtqJg&usqp=CAU",
]

let slideIndex = 0;


//Makes modal toggle open
const toggleModal = () => {
    modal.classList.toggle('open');
}

//update carousel image
// const updateCarouselImage = () => {
//     carouselImage.setAttribute('src', plantOptions[slideIndex]);
// }
// updateCarouselImage()

//change slide next function -
//when the user clicks next button
//update carousel image by 1
const updateCarouselImage = () => {
    carouselImage.setAttribute('src', plantOptions[slideIndex]);
}
updateCarouselImage()

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

const updateChar = () => {
    const body = document.querySelector("body");
    body.style.plantOptions = `url(${plantOptions[slideIndex]})`;
    carousel.remove();
   //Plant Choice Has Been Made
    choosePlant(); 

}

const openCarousel = () => {
    //remove the modal
    toggleModal();
    //add the open class to the open button
    carousel.classList.add("open");
}

//Plant functions

const choosePlant = () => plant.plantChoiceMade();
// const feedPet = () => plant.feed();
// const playPet = () => plant.play();


////Name form button
// nameBtn.addEventListener("click", (evt) => {
//     // console.log(evt);
//     if (input.value !== "") {
//         // get the value of the input
//         let userInput = input.value;
//         // create a li element 
//         let li = document.createElement("li");
//         // set the li's content to be the value of the input
//         li.textContent = userInput;
//         // append the li to the ul 
//         ul.appendChild(li);
//         // clear the input
//         input.value = "";
//     }
// });


//Event Listeners
beginButton.addEventListener("click", toggleModal);
// sun
// h2o
// love
// upgrade
carouselSelect.addEventListener("click", choosePlant);
carouselNext.addEventListener("click", changeSlideNext);
carouselPrevious.addEventListener("click", changeSlidePrevious);
carouselSelect.addEventListener("click", updateChar);