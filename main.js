// DOM elements 
const elDarkLightModeBtn = document.querySelector(".js-darkLight-btn");
const elementsToChange = document.querySelectorAll(".site-header, .header-main-title, .js-countries-input, .js-countries-select");

let darkMode = false;

elDarkLightModeBtn.addEventListener("click", function() {
    darkMode = !darkMode;

    if(darkMode) {
        document.body.classList.add("bg-[#202C36]");
        elementsToChange.forEach(item => {
            item.classList.add("dark-color");
            item.classList.add("text-white", "placeholder:text-white");
        });
    } else {
        document.body.classList.remove("bg-[#202C36]");
        elementsToChange.forEach(item => {
            item.classList.remove("dark-color");
            item.classList.remove("text-white", "placeholder:text-white");
        });
    }
});
