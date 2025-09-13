let modalBtn = document.querySelector("#modalBtn");
let closeBtn = document.querySelector("#closeBtn");
let simplemodal = document.querySelector("#simpleModal");

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outSideModal);
function openModal() {
  simplemodal.style.display = "block";
}
function closeModal() {
  simplemodal.style.display = "none";
}
function outSideModal(e) {
  if (e.target == simplemodal) {
    simplemodal.style.display = "none";
  }
}
