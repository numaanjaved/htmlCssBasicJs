let filterInput = document.querySelector("#filterItem");
filterInput.addEventListener("keyup", filterName);
function filterName() {
  let li = document.querySelectorAll(".item");
  let inputValue = document.querySelector("#filterItem").value.toUpperCase();
  for (let i = 0; i < li.length; i++) {
    let a = li[i].querySelector("a");
    if (a.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}