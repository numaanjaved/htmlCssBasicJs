document.querySelector("form").addEventListener("submit", getLocation);
function getLocation(e) {
  e.preventDefault();
  let zip = document.querySelector(".zip").value.trim();
  if (!/^\d{5}$/.test(zip)) {
    showIcon("remove");
    let div = document.createElement("div");
    div.className = "message";
    let paragraph = document.createElement("p");
    paragraph.textContent = "Please enter a valid 5-digit zipcode";
    div.appendChild(paragraph);
    document.querySelector(".output").appendChild(div);
    setTimeout(() => {
      document.querySelector(".output").innerHTML = "";
    }, 2000);
    setTimeout(() => {
      document.querySelector(".zip").value = "";
    }, 2000);
    setTimeout(() => {
      document.querySelector(".icon-remove").style.display = "none";
    }, 2000);
    return;
  }
  fetch(`https://api.zippopotam.us/us/${zip}`)
    .then((response) => {
      if (response.status != 200) {
        showIcon("remove");
        let div = document.createElement("div");
        div.className = "message";
        let paragraph = document.createElement("p");
        paragraph.textContent = "Please enter a valid zipcode";
        div.appendChild(paragraph);
        document.querySelector(".output").appendChild(div);
        return Promise.reject("No data found");
      } else {
        showIcon("check");
        return response.json();
      }
    })
    .then((data) => {
      if (!data) return;
      data.places.forEach((place) => {
        let div = document.createElement("div");
        div.className = "message";
        let innerDiv = document.createElement("div");
        let innerh1 = document.createElement("h1");
        innerh1.textContent = "Location Info";
        let button = document.createElement("button");
        button.className = "delete";
        button.textContent = "X";
        innerDiv.append(innerh1, button);
        div.appendChild(innerDiv);
        let ul = document.createElement("ul");
        function makeLi(value, tagValue) {
          let li = document.createElement("li");
          li.textContent = value;
          let strong = document.createElement("strong");
          strong.textContent = tagValue;
          li.append(strong);
          return li;
        }
        ul.appendChild(makeLi("City :", place["place name"]));
        ul.appendChild(makeLi("State :", place["state"]));
        ul.appendChild(makeLi("Longitude :", place["longitude"]));
        ul.appendChild(makeLi("Latitude :", place["latitude"]));
        div.appendChild(ul);
        document.querySelector(".output").appendChild(div);
      });
    })
    .catch((err) => {
      let errorDiv = document.createElement("div");
      errorDiv.className = "message";
      let errorParagraph = document.createElement("p");
      errorParagraph.textContent = err;
      document.querySelector(".output").appendChild(errorDiv);
    });
}
function showIcon(icon) {
  document.querySelector(".icon-check").style.display = "none";
  document.querySelector(".icon-remove").style.display = "none";
  document.querySelector(`.icon-${icon}`).style.display = "block";
}
document.querySelector("body").addEventListener("click", deleteLocation);
function deleteLocation(e) {
  if (e.target.className == "delete") {
    document.querySelector(".message").remove();
    document.querySelector(".icon-check").remove();
    document.querySelector(".zip").value = "";
  }
}
