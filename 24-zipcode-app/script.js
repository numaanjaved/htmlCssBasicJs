document.querySelector("form").addEventListener("submit", getLocation);
function getLocation(e) {
  e.preventDefault();
  let zip = document.querySelector(".zip").value.trim();
  if (!/^\d{5}$/.test(zip)) {
    showIcon("remove");
    document.querySelector(".output").innerHTML = `<div class="message">
        <p>Please enter a valid 5-digit zipcode</p>
      </div>`;
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
        document.querySelector(".output").innerHTML = `<div class="message">
            <p>Please enter valid zipcode</p>
            </div>`;
        return Promise.reject("No data found");
      } else {
        showIcon("check");
        return response.json();
      }
    })
    .then((data) => {
      if (!data) return;
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
    .catch(
      (err) =>
        (document.querySelector(".output").innerHTML = `<div class="message">
            <p>${err}</p>
            </div>`)
    );
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
