let search = document.querySelector("#search");
let matchList = document.querySelector("#match-list");
search.addEventListener("input", () => searchStates(search.value));
const searchStates = async (searchText) => {
  const states = await fetch("./data/states.json");
  const res = await states.json();
  let matches = res.filter((match) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return match.name.match(regex) || match.abbr.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = "";
  }

  outputHtml(matches);
};

const outputHtml = (matches) => {
  if (matches.length > 0) {
    let html = matches
      .map(
        (match) =>
          `<div class="card card-body mb-2"><h4>${match.name}(${match.abbr})<span class="text-info">${match.capital}</span></h4><small>lat: ${match.lat} / long:${match.long}</small></div>`
      )
      .join("");
    matchList.innerHTML = html;
  }
};
