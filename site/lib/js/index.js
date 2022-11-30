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
    navToggle.classList.toggle("active");  //adds the active class to the navToggle button, enabling its associated css animation
    
};