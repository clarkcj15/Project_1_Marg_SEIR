class Plant {
    constructor(name, sunpower, h20, love) {
        this.name = name;
        this.sunpower = sunpower;
        this.h2o = h2o;
        this.love = love;
    }

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
