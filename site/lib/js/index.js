const modal = document.getElementById("modal");
const modalBTN = document.getElementById("modalBTN");
const modalBTNSpan = document.querySelector("#modalBTN > span");
const modalBackground = document.getElementById("modal-background");
const modalClose = document.getElementById("modal-close");

// Gathering all necessary modal elements


modalBTNSpan.onclick = () => {  //adding event listener to modal button to open form on click.
modal.style.display = "flex";
} 

document.getElementById("kill-modal").onclick = () => { //adding event listener for X to kill to modal button
    modal.style.display = "none";
    modalBTN.style.display = "none";
    console.log("hello");
};

const closeModal = () => {  //function to close the modal by clicking out of the modal or by clicking the modal close button
    modal.style.display = "none";
}

modalBackground.onclick = closeModal;  // accesses closeModal and sets display on modal to none
modalClose.onclick = closeModal; // accesses closeModal and sets display on modal to none


const navToggle = document.getElementById("nav-toggle");  // snatches up the navigation toggle button
const navWrapper = document.querySelector(".nav-wrapper"); // snatches up the first-found (the only one) nav-wrapper classed element

navToggle.onclick = () => {
    if (document.body.dataset.overflowY == "auto") {
        document.body.dataset.overflowY = "scroll";
        console.log("scroll");
    }
    else {
        setTimeout(() => {document.body.dataset.overflowY = "auto"}, 20);
        console.log("auto");
    }
    navToggle.classList.toggle("active");  //adds the active class to the navToggle button, enabling its associated css animation
    
};

let slideIndex = 0;

let slideInterval = setInterval(() => {
    plusSlides(1);
}, 4000);


showSlides(slideIndex);


function plusSlides(n) {

    clearInterval(slideInterval);

    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 4000);

    showSlides(slideIndex += n);


}




function currentSlide(n) {
clearInterval(slideInterval);
slideInterval = setInterval(() => {
    plusSlides(1);
}, 4000);

  showSlides(slideIndex = n);

}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length - 1) {slideIndex = 0}
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < dots.length; i++) {
    if (i != slideIndex) {
        dots[i].classList.remove("active");
        slides[i].classList.remove("active");
    }

    if (i === slideIndex) {
        dots[i].classList.add("active");
        slides[i].classList.add("active");
    }
  }
}