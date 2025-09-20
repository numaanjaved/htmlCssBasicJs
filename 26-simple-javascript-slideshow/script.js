var i = 0;
let images = [];
let time = 1000;

images[0] = "download.jpg";
images[1] = "photo.jpg";
images[2] = "photo2.jpg";

function changeImg() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changeImg, time);
}

window.onload = changeImg;
