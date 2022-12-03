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

let slideIndex = 0; // set initial index for slideshow

let slideInterval = setInterval(() => {
    plusSlides(1);
}, 4000);  //set an interval that automatically increments the slide after 4s of inactivity. Saves the interval ID to a value that can be cleared later


showSlides(slideIndex); //show initial slide


function plusSlides(n) { //will advance the slides by n-amount

    clearInterval(slideInterval); // clear any existing interval so the slides dont keep advancing automatically when the user is using it

    slideInterval = setInterval(() => { //reset the interval to advance every 4 seconds
        plusSlides(1);
    }, 4000);

    showSlides(slideIndex += n); //increase slide by one


}




function currentSlide(n) { //sets slide to slide number n
clearInterval(slideInterval); // clear interval to prevent auto sliding
slideInterval = setInterval(() => { //reset it to 4s from now
    plusSlides(1);
}, 4000);

  showSlides(slideIndex = n); //set slide

}

function showSlides(n) { //for setting slides
  let slides = document.getElementsByClassName("mySlides"); //get slides in an array
  let dots = document.getElementsByClassName("dot"); //get dots in an array
  if (n > slides.length - 1) {slideIndex = 0} //sets slide to 0 if slide advances past the amount of available slides
  if (n < 0) {
    slideIndex = slides.length - 1; //goes to last slide if index goes below 0
  }
  for (let i = 0; i < dots.length; i++) { //removes css active class from slide being transferred from
    if (i != slideIndex) {
        dots[i].classList.remove("active"); //makes dot inactive again
        slides[i].classList.remove("active"); //makes slide inactive again
    }

    if (i === slideIndex) { //activates slide at new index
        dots[i].classList.add("active"); //applies color to dot
        slides[i].classList.add("active"); //applies active effects to slide
    }
  }
}