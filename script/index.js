// find element that we need
let btn = document.querySelector(".card__share");
let tooltip = document.querySelector(".card__social");
let icon = document.querySelector(".card__share path");
let main = document.querySelector(".main");


btn.addEventListener("click", (e) => {
    // to prevent refresh and go up page 
    e.preventDefault();

    //choose element then if element dosen't have that classlist , assign it and vice versa
    tooltip.classList.toggle("card__social-active")
    btn.classList.toggle("card__share-active")
    icon.classList.toggle("card__share-active-icon")

    // fix positin of btn depend on screen size when button click
    if (window.innerWidth > "992") {
        btn.style.top = "0";
    } else {
        btn.style.top = "1rem";
    }
})