// REGION 0: North America, REGION 1: EUROPE, REGION 3: ASIA
let currentregion = 0;
let regionbuttons = [document.querySelector(".region.na"), document.querySelector(".region.europe"), document.querySelector(".region.asia")];

window.addEventListener("scroll", function () {
    if (window.scrollY == 0) {
        document.querySelector(".topBar").classList.toggle("fixed", false);
    } else {
        document.querySelector(".topBar").classList.toggle("fixed", true);
    }
});

for (let i = 0; i < regionbuttons.length; i++) {
    const element = regionbuttons[i];
    element.addEventListener("click", function () {
        if(currentregion != i) {
            regionbuttons[currentregion].classList.remove("selected");
            if(regionbuttons[i].classList.contains("selected") == false) {
                regionbuttons[i].classList.add("selected");
            }
            currentregion = i;
        }
    });
}
