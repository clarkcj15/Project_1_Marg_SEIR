const beginButton = document.querySelector(".begin-game");
const modal = document.querySelector(".modal");
const getStarted = document.querySelector(".get-started");
const carouselNext = document.querySelector(".carousel-next");
const carouselPrevious = document.querySelector(".carousel-previous");
const plantChoice = document.querySelector("#actualPlant");
const carouselSelect = document.querySelector(".carousel-select");
const currentStatsContainer = document.querySelector(".plant-stats");
const sunPwr = document.querySelector(".sunPwr");
const H2O = document.querySelector(".H2O");
const Love = document.querySelector(".Love");
const upgrade = document.querySelector(".upgrade")
const carousel = document.querySelector(".carousel");
const parnellPlantShopId = document.querySelector("#parnellPlantShop");
const carouselImage = document.querySelector(".carousel img");
const plantStats = document.querySelector(".plant-stats")
// const form = document.querySelector("form");
// const ul = document.querySelector("ul");
// const nameBtn = document.querySelector("nameBtn");


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
        plantStats.innerHTML = `
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

    sunPwr() {
        // setInterval(() => {
            this.sunpower ++;
            this.checkUpgrade();
            this.updateStats();
        // }, interval);
    }

    H2O() {
        // setInterval(() => {
            this.h2o ++;
            this.checkUpgrade();
            this.updateStats();
        // }, 5000);

        // this.h2o ++;
    }

    Love() {
        // setInterval(() => {
            this.love ++;
            this.checkUpgrade();
            this.updateStats();
            // }, interval);
        }
        
        
    checkUpgrade = () => {
        if(this.love >= 5 && this.h2o >= 7 && this.sunpower >= 10) {
            carouselImage.setAttribute('src', plantBaby[0]);
            }
        if(this.love >= 8 && this.h2o >= 10 && this.sunpower >= 14)
        carouselImage.setAttribute('src', plantTeen[0]);
        }
}
        
//global

const plant = new Plant("Gladys", 1, 1, 1);

//Array of pics to choose from
// const nameList = ["Gladys", "Gertrude", "Harrison", "Enola", "Lionel"]


const plantOptions = [
    "https://www.clipartkey.com/mpngs/m/119-1193957_bean-sprouting-into-seedling-seedling-clipart.png",
    "https://us.123rf.com/450wm/studiobarcelona/studiobarcelona1901/studiobarcelona190100120/119084264-stock-vector-little-germinating-plant-from-seed-seedling-icon-vector-illustration-.jpg?ver=6",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwY0Dw6BdOcFEVBV5aSGwInfAkZslu5rtqJg&usqp=CAU",
]

const plantBaby = [
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhITExIVFhUWGRgVFxgVFRYWFhcYFhYWGBUeGhcYHSggGBolGxgVITEiJSorLi8uFx8zRDMtNygtLisBCgoKDg0OGxAQGy0lHyYrNS81Ky0tLS0tLS0tNy4tLS0tKy0tLS0tLS0tLy8tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQECAwj/xABEEAABAwICBwQECgkEAwAAAAABAAIDBBEhMQUGBxJBUXETImGBMkKRoTNScnOCkrGz0fAUIzRDYqLBwsMksuHxU4Oj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EAC4RAAICAQIEBQIGAwAAAAAAAAABAgMRBBIhMTNBE1FhcbEigQUjMqHB8EKR4f/aAAwDAQACEQMRAD8AvFERAEREAREQBERAEREAREQBERAF5Q1LHlwa9riw7rg1wJa6wNnAZGxBseaj+0HT5oqOSRhtK+0cXynXx+i0Od5BajY7o9zKJ0z73nkLxfMtb3QTfMkhxv4hQ3/VtIOf17SeIiKZMIiIAiIgCIiAIiIAiIgCIiAIiwdI6Xhp7ds/cBycWv3MTYAvtug+BKAzkWLS6Shl+Dljf8l7T9hWUuJ55AIiLoCIiAIiIAiIgCIiAprbFWunrKekYfQAFuHaTuAF+jQz6xVu0FI2GKOJgs2NrWN6NAA+xUroc/pmnRIcWmd8g492IOMfuYxXks9L3OUvX4M9L3OUvUIiLQaAiIgCIsGu0vDDg94v8Ud53sGXmuSkorLeA3gzkUTqNcM9yLDgXux+q38VrptYah37zdHJoA95x96yT19Me+fYrdkSeoqzqK2V2csh+m63svZaWqryCWtJLuJvg3r4+Cof4lHtFkHel2LmRQ/ZrCexmkd68lmniWsY0f7i9TBehXPfBS8y6LyshERTOhdXsBBBAIOBBxBHRdkQEG1m1FYWmSlaGuGJi9Rw47l/QdyHonLC91FaKpqox+qkkAGFmvItbCxY7Ii1rW4WVxqHa56G3b1UQtb4UcCPj+WR8MeBv52r0zx4lXB+nf8A6UWV90aGm10rYzZ7BIP4oyD7WWHuW7h1/G6TJST3HCMB9/bulaOIhwuvQsXmw118e+fcrUpLuK7aocWw0wB5zPtbq1o/qFGNJ616SqL/AOpEbT6sPc/mA3/5luq2lZILSMDh4jLocx5LU1OrUf7p74/C5c32E396k9fOXN4ISlN9yKv/AElj+1bUSdoPWEj97618fNTHV7a7NFaOuiMgy7SMBsnm3Br/ACt5qN6SoKmMm7O0aPWZnbxbnfoPNaYTtfhxysc/Yr6NTYuOcoqVk4PgfR2gdZ6StF6edjzmW33ZB1Y6zh1tZbdfKwo7ODmkscMQWk4Hw5eSsbZrrtUtqWUdVIZWSd2N7zd7Xer3ji4G1sbm5C9CrVRm8dzTXqVJ4ZcawdO1fY01RKM2RveOrWkj3rOUa2jVHZ6PqDz7Nn15WNPuJWibxFs0yeE2V9smpP8AXXt6ETz0xY3+4q5lVWyJl6id3KID6zwf7VaqzaJflIp0y/LCIuCVrLzla/SemIoPSN3fFbifPkOq1GltZL3bCcOL+fyfx9nNRqV97knPzPtXn6jXKH0w4v8AYqlZjkbDSGsMstxvbjfit/q7M+4eC0jyuHHFeb3BePZbOx5k8meUm+YEi9A9YriACSbAYkngsYVzXC7b2yuRZQRHJzV1b3uMbLtA9J39G/n2LzdAGiwFgu8JuttonR/bSxx8HOG98kYv9rQR5qcYuUlFdyKW5lgarUnZUkDCLHcDiOTn953vJW1RF9PFKKSR6CWOAREXToREQBcOaCCCLg4EFcogK30no40kxZj2bsWH+Hl1be3TdPFclTnTGjG1EZY7A5tda5a7gfHkRxBKgL2vhcYpW2cPMW4OaeLDw9mBBA8LW6V1y3x5P9jPOOH6HWVi8nMKzxHfFdHxrzXAg4mrexarSehYp/Tb3uDhg4efEeBuFInRLHkjVeJReU8FbiQKs0XLTYn9ZEPWHpN+UOXj9i6Ok3HQ1DMTE9sg+i4Ee8e9TzdUa01ofsbyRi8R9NnxL8Ryb9nTLXTe203z+Stx7ovyCUPa1zTcOAcDzBFwoftYfahA+NLGPZvO/tWTs10kJqGJt7uh/VHo34P+TdHUFazbLJajg8aho/8AlMf6L6GyalS5LujdOWa2/Q12x0XfVHk2Me0yfgrOVX7FXXdW9If8ytBR0nRX97kdP00dXvDQSSAALkk2AAzJPAKE6e06Z7sZcRe+TxI4N8PbyHOs+mDM8xMP6pvpH/yOB/2D3nwAvqQLrFrdXn8uH3f8HZz7I4BXjM9d3mywp3rymyhsOkXhPMGgucbAZleNRUtY0ucbALRyVBmN3YMHot5+J/P/ACis8Sts9qiczG5wjGTeLvErsJbYLxlfyXmw4qTZXk2tM9WNqDQ9105GfcZ0B7x8yAPolV5oakfPKyJmbja/IcSfAC5V10lM2NjY2izWgNHl/Veh+H07pb3yXyatPHLyeyIi9k1hERAEREAREQBYWldFx1DN14Nx6Lhg5p8D/Q4FZqLjSawwV9pDR01LcuG9H8dvo/SGcZ64ZYlY7Khp8Ov4qyStDpDVSCS5YDE7PuW3T1YcPZYnmvLu/Ds8a39mVOvyIs5YkoW3qtUahvwb2PHUscfom4961U2iqxhxgeegDx/ISvNs0ly/xfz8FMoy8jya1dpWgA3y43yXQUlWcBTzX+acPe4Ae9bSh1PqZbGZwibxBIfJ0Aad1vW56Llejuk8KL+DijJ9iJ6HnkopJXU8ha2SwDSAbD6V7m+XILnXPWKSppI45bFzZmva4C1x2crSCBhe7gpPtC1LjFH2kDTvwXe4k3e9lu/c8xYOwwFnWGKgukIg7RsdRvBzjUtiI4t3YZXOv8ruHDhboN3g31Pa5ZWPsQmpRzH0JfsSH7Z0h/zKVa6aX3Gdgx1nyDvEGxaw4YHg52IB4AE4GyhWyKvbDHpGV/osbC42zPw1gBxJNgBzK85Kx0jnySG73kudjcC+TR4AANHgFbPUeFp0lzeSyue2pGTEF7WssaKZenbrySKZxM9ayrlDQXONgM1lTTgAkmyj1cHSyHe+DbkOeH/eaJZISZjPe6chxFmD0W8/E8/z59ngrJDOS4e1SbyVGLddwV6mG5wUx1G1U7Z4nmH6phu1p/eOB97Ac+ZFsrhWVVStmoolCDk8IkGzvV8wRmeQWklHdBzZHmAfF2BPQDgVMURfRV1quKij0YxUVhBERTJBERAEREAREQBERAEREAREQBERAcOaCLEXBwN18960UZpJamjx7PtWSMxOQZJ2fXuS2J5tX0Kqi20UW7PTzAfCMcw/+t1x7pPcsurjmvK7GfUx+jPkRfVuZwjnYMGvdEXHmY+0sP5wfILcxBYOjYNyNg42uepxP4eSzWuXz9k90jIuRlRhdpbAXJsBibrHjmstPW1hnduM9D7bcT4ch+RyKySbwdaqQ1DuIjacBz6/nAdVkdmsqnhDQAOC4c1SbI4PGNi5DF6BimerWphdaSpBa3MR5Od8r4o8M+nGymidrxFEoQcnhGu1T1XdUkSPBbCDnkZLcG8hzPkMcrPijDQGtAAAsAMAAMgAjGAAAAAAWAGAAGVguy96jTxpjhf7N0IKC4BERXkwiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKBbW6TfipMP326ehjc53uYp6ontHeBDBfjMAOvZTf8AKo1TxTL2K7f0MgW6um6uZXLW6R0j2bbD0zl4Dn+fxXzKWXhGFsyqyPeY5t7Eiy60FEGDmTmVl6E1WrntuYJMTe8hDLeTyD7ApTo7UOY/DSsZ4RgvPtdugHyK2Q0lz4JfwTjVJ9iM7oAWfozV2oqLGNlmn133DOo4v8sPEKf6N1Yp4bEM33fGks4+y26D4gBblbavw5LjY/si+NHmaHQGq0NNZx/WS/HcLW+Q31OPM45lb5EXpRhGKxFYReklwQREUjoREQBERAEREAREQBERAEREAREQBERAEREAUG2ukilgINiJ2kHxEUpCnKg215t6SH59v3Uqo1PSl7FV36GQRlZvwySBjiIwN+wJALrhuOQBIIF1tNmOrZqpjWzi8cbv1YOTpBkR/Cz3u6FRrR8cjx+jM/fyRDqW77W38LyX8lfei6BlPDHDGLNY0NHjbMnxJuT4lefoaIt7/L5M1Ed7y+3yZSIi9c3BERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBQrat+zQfPj7mZTVQja0f9LAeU4+6mVGp6UvYqu6bI1s6ow+taeEbXSedgwf7/crcVZbJBeWpdyYwfWc4/wBqs1VaGOKV6kNMsVhERbDQEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAFA9sR/0cPz7fupVPFA9sf7HD8+37qZU6jpS9iq7ps1WxV93Vo8IPeZ/wVoqq9iI71d0g+2dWoo6XpI5p+mgiItBcEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBF5zztYLvc1o5uIA9pXMMzXi7XBw5tII9oQHdQPbF+yQ/Pt+6mU8UD2xfskPz7fuplTqOlL2KrumzV7Fh3q3pB/mVoKstjAxrOkP+ZWaoaTor+9yOn6aCIi0l4REQBERAEREAREQBERAEREAREQBERAEREARcOcALkgAcTgFXu17Wn9Hpo4Ind+q3xvA5RMA7SxHElzW9C7kjOpZeDL0vtU0fA8sBkmINiYWBzAflOc0O6tus+l18o5qaeohk3jC3edG4FkgJwYCDwLrDeFwvndwXlFOY3hwJAyda+LbgkG2YwBtzA5KrezT4KJnW6TlqpDLM4vccr5NHJo9UdPtxWdojSklNIJInbpw3hweBwcOIUXOlY2Yb1/k4+8YJNplha7dd3rGwItjbDwVPHmX4WMFqN2sxNkDZYg1l8S1+89o5lu7isva1M19FTuYQ5rp2kEG4IMM1iCM18/h1yvR0jwAGveBe+61xtfHHdGF8T7SpzTnBx8zHfQpQe0szUnWgUAqT2RkdJ2QaN4Nb3O0LrusSPTbwKnWrm0OKof2c0fYOIJa4vDojYXILyGlpsCcRbxvgqfoahojYHXDrd7Djxy8UrXA2ANxa/moVZrio+ROrTRjWo9y86vXfR7IpZRVwyNiG84RSMkfibNAa03JJIA6qldYdrWkJ3nsXimiv3Wsa1z7cN97gbn5IA65rTzQggrSTQ2JV29skqUiX6v7WdIwPHbSCpj4ska1rrcd2RgBB63Hgr81d05FW08dRCbsfwODmuGDmuHBwP5svk3cU82ba7HR0VU3szJ2hY6Nt91oeA4PLjnbd3MhjujLNdUvMjOvK4H0Siox+1Cvc64dE0fFbGCPa4k+9SjVjaiHuEdY1rL4CVlwwH+NpJ3R/Fe3gBiuqaIOqSWSy0QFFMqCIiAIiIAiIgCIiAIiIAsTS2kY6aGSeV27HG0ucc8ByHEk2AHEkJpetEEEsxF+zY51uZAwHhcqjNM6WlqHOdNIX39Uk7g8GsyAUJT2lldbma/XTXmXSbt0t7KBhJbFvXLuTpODnYYDIXOJzUaFO5wAb6puBfAXz6Xw9i9dMUwjIezC+BAy54exZVO7daOdsevFQb7miC4bWeDqVywphwW3dKFr60XxUEWMwg1dXldZJbLz7S6kRPVjreK21BHdodbE3WpZGSLAXJyC3lFC5rGh3u6lHjBxZ3eh7tau0xLWl1r2xsuYxismamc9jgwXJwzA65qPcsfI0s2khkG25knJYsjC7IE9BdetRSODt0izsrHxyUgZRCNoaOGZ5niVOaS5FNUpSzkij4CMCCOoWSyOwW5qo7i1lqXnFQzktwI32XuJMFhOK57VAWFqttBqoQxjniSOMBu44AHcGQDxje2AJvkFd1JUNkYyRvovaHt6OAI9xXy5TYBWhsp1plMwo5Hl7HNJjviWFgvug/F3QcOFhZThLjhlNtfDKLYREVxlCIiAIiIAiIgCIiAx9IUjZopIn+jI1zDbOzhbDxVP6S1HrI3FgiMo4PZazhwuCbtPgfac1dCKMoqXMnCxx5FSw7IjPGw1FQ6J9ydyMNfYG1ruOG9nlcY8VBtctXpNH1BhdvFhxikP7xnUC28MiMOdrEL6TWLpLRsNQwxzxMkYcd17Q4XGRF8j4rjgsYJRtallnysZlu6TU2sqaJ9ZFGXMa7utAO/Kyx33xj1gDbAZ962VjdtNs40XG/fFG0nOz3ySM+pI4t9ylTWgAACwGAAyC4q/MlK7yPjSZ64jOXM4DmScrcyvqzTmo+j6xxfPSRuec3t3o3nq+Mhx8yudBak6Po3B1PSRseMnm73jo+Qlw9q7sHjehSQ1DqqehZWSRvDnO70YF3xREd1725jvDEeqC0m3et5aIpn1DXGGN8oaLu7JrpLD6AOPhmvpJcNaBkAOi460zivaKW0DqXLUuaOzljZ6zpGOZYcbB4BcVj6b0S6hldC8uLc45HADtGnEG4AG8MiBbLKxCvJcOaDmAeqeGsYO+PLOT5w1k0ZUEQyinm3XNNntjc5pxwxaDbiRe174XWS+GURsklhliDxh2rHMuRgbbwH/AFZfQ64cL4FHWmsHFc1Js+f9C6CmrH7kLL83G4jb8pwBt0xPgtjRbG6wRvL6iDfzaxu+QTfG8hA3fqlXe1oGAwXK6oJI5K5t5R851eoGkmkt/Q3nxa6Mg+e99tlIdUtkcz5GyVxEcbSD2LXBz32xs9ze6xvPdJJ8M1daIoJB3SZQus+zatgmf+jRGeBxJYWOaHNaTcNe1xBuMri4Nr4Xspbsu1HnppDVVTQx+6Wxx3a5zd70nOLSQDbAAE4E35CzUXdizk47ZNYCIikVhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//9k="
]

const plantTeen = [

]

let slideIndex = 0;


//Makes modal toggle open
const toggleModal = () => {
    modal.classList.toggle('open');
}

//update carousel image
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
        slideIndex--;
    } else {
        slideIndex = plantOptions.length - 1;
    }
    updateCarouselImage();
}

//when the user clicks on the select button
// make the background of the body element current slide
// in our carousel


// const updatePlantChoice = () => {
//     const body = document.querySelector("#parnellPlantShop");
//     body.style.setAttribute = `url(${plantOptions[slideIndex]})`;
//     carousel.remove();

    // updatePlantChoice();
// }


const updatePlantChoice = () => {
    const body = document.querySelector('.actualPlant');
    const img = document.createElement("img")
    img.setAttribute('src', plantOptions[slideIndex]);
    body.appendChild(img);
    carousel.remove();
//    //Plant Choice Has Been Made
    // updatePlantChoice(); 

}

const openCarousel = () => {
    //remove the modal
    toggleModal();
    //add the open class to the open button
    carousel.classList.add("open");
}

//Plant functions

const choosePlant = () => plant.plantChoiceMade();
const sunPlant = () => plant.sunPwr();
const waterPlant = () => plant.H2O();
const lovePlant = () => plant.Love();

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
sunPwr.addEventListener("click", sunPlant);
H2O.addEventListener("click", waterPlant);
Love.addEventListener("click",lovePlant);
getStarted.addEventListener("click", openCarousel);
carouselSelect.addEventListener("click", choosePlant);
carouselNext.addEventListener("click", changeSlideNext);
carouselPrevious.addEventListener("click", changeSlidePrevious);
carouselSelect.addEventListener("click", updatePlantChoice);