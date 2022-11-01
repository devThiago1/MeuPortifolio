const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0 );
});

let navList = document.querySelector('.navbar');
let menu = document.querySelector('#navbar-icons');

menu.onClick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('active');
}

const sr = ScrollReveal({
    distance: '50px',
    duration: 2500,
    reset: TextTrackCue
})

sr.reveal('.apresentacao', {delay:350, origin:'left'})