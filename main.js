const Hamburger = document.querySelector(".hamburger");

const navlinks = document.querySelector("nav .navlinks");

const Toggler = () => {
    navlinks.classList.toggle('open')
    if(navlinks.classList.contains('open')){
        console.log("actif")
    }
}

Hamburger.addEventListener("click", Toggler);














