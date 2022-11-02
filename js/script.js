const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0 );
});

let navlist = document.querySelector('.navbar');
let menu = document.querySelector('#navbar-icon');

menu.onClick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

const sr = ScrollReveal({
    distance: '50px',
    duration: 2500,
    reset: true
})

sr.reveal('.apresentacao', {delay:350, origin:'left'})