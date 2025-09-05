document.querySelector("form").addEventListener("submit", getLocation);
function getLocation(e) {
  e.preventDefault();
  let zip = document.querySelector(".zip").value;
  fetch(`https://api.zippopotam.us/us/${zip}`)
    .then((response) => {
      if (response.status != 200) {
        showIcon("remove");
        document.querySelector(".output").innerHTML = `<div class="message">
            <p>Please enter valid zipcode</p>
            </div>`;
        throw Error(response.statusText);
      } else {
        showIcon("check");
        return response.json();
      }
    })
    .then((data) => {
      data.places.forEach((place) => {
        document.querySelector(".output").innerHTML = `<div class="message">
        <div>
        <h1>Location Info</h1>
        <button class="delete">X</button>
        </div>
        <ul>
        <li><strong>City :</strong>${place["place name"]}</li>
        <li><strong>State :</strong>${place["state"]}</li>
        <li><strong>Longitude :</strong>${place["longitude"]}</li>
        <li><strong>Latitude :</strong>${place["latitude"]}</li>
        </ul>
        </div>`;
      });
    })
    .catch((err) => console.log(err));
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
