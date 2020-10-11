// REGION 0: North America, REGION 1: EUROPE, REGION 3: ASIA
let currentregion = 0;
let regionbuttons = [document.querySelector(".region.na"), document.querySelector(".region.europe"), document.querySelector(".region.asia")];
let regionsgms = [document.querySelector(".rg0"), document.querySelector(".rg1"), document.querySelector(".rg2")]

window.addEventListener("scroll", function () {
    if (window.scrollY == 0) {
        document.querySelector(".topBar").classList.toggle("fixed", false);
    } else {
        document.querySelector(".topBar").classList.toggle("fixed", true);
    }
});

function updateRegion(regioncode) {
    if(regioncode == 0) {
        regionsgms[0].setAttribute("style", "display: block;");
        regionsgms[1].setAttribute("style", "display: none;");
        regionsgms[2].setAttribute("style", "display: none;");

    } else if(regioncode == 1) {
        regionsgms[0].setAttribute("style", "display: none;");
        regionsgms[1].setAttribute("style", "display: block;");
        regionsgms[2].setAttribute("style", "display: none;");

    } else if(regioncode == 2) {
        regionsgms[0].setAttribute("style", "display: none;");
        regionsgms[1].setAttribute("style", "display: none;");
        regionsgms[2].setAttribute("style", "display: block;");

    }
}

updateRegion(currentregion)

for (let i = 0; i < regionbuttons.length; i++) {
    const element = regionbuttons[i];
    element.addEventListener("click", function () {
        if(currentregion != i) {
            regionbuttons[currentregion].classList.remove("selected");
            if(regionbuttons[i].classList.contains("selected") == false) {
                regionbuttons[i].classList.add("selected");
                updateRegion(i)
            }
            currentregion = i;
        }
    });
}
