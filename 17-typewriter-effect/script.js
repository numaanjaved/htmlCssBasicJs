const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txttype = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

TypeWriter.prototype.type = function () {
  const current = this.wordIndex % this.words.length;
  const fulltxt = this.words[current];
  if (this.isDeleting) {
    this.txttype = fulltxt.substring(0, this.txttype.length - 1);
  } else {
    this.txttype = fulltxt.substring(0, this.txttype.length + 1);
  }
  this.txtElement.innerHTML = `<span class="txt">${this.txttype}</span>`;
  let typeSpeed = 300;
  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  if (!this.isDeleting && this.txttype === fulltxt) {
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txttype === "") {
    this.wordIndex++;
    this.isDeleting = false;
    typeSpeed = 500;
  }
  setTimeout(() => this.type(), typeSpeed);
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  new TypeWriter(txtElement, words, wait);
}
