const modal = document.getElementById("modal");

const modalBTN = document.getElementById("modalBTN");
const modalBackground = document.getElementById("modal-background");
const modalClose = document.getElementById("modal-close");

modalBTN.onclick = () => {
modal.style.display = "flex";
}

const closeModal = () => {
    modal.style.display = "none";
}

modalBackground.onclick = closeModal;
modalClose.onclick = closeModal;


const navToggle = document.getElementById("nav-toggle");

navToggle.onclick = () => {
    navToggle.classList.toggle("active");
}