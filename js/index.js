window.addEventListener("scroll", function () {
    if (window.scrollY == 0) {
        document.querySelector(".topBar").classList.toggle("fixed", false);
    } else {
        document.querySelector(".topBar").classList.toggle("fixed", true);
    }
})