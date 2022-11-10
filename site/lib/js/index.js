const modal = document.getElementById("modal");

const modalBTN = document.getElementById("modalBTN");
const modalBackground = document.getElementById("modal-background");
const modalClose = document.getElementById("modal-close");

modalBTN.onclick = () => {
modal.style.display = "block";
}

const closeModal = () => {
    modal.style.display = "none";
}

modalBackground.onclick = closeModal;
modalClose.onclick = closeModal;