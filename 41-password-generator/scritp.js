let input = document.querySelector("#passBox");
let limitNumber = document.querySelector("#limitNumber");
let lowerEl = document.querySelector("#lowercase");
let upperEl = document.querySelector("#uppercase");
let numberEl = document.querySelector("#number");
let symbolEl = document.querySelector("#symbol");
let genBtn = document.querySelector("#genPassword");
let copy = document.querySelector("#copy");

const ranFunction = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol,
};

genBtn.addEventListener("click", () => {
  let length = +limitNumber.value;
  let hasLower = lowerEl.checked;
  let hasUpper = upperEl.checked;
  let hasNumber = numberEl.checked;
  let hasSymbol = symbolEl.checked;
  input.value = passwordGenerated(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

copy.addEventListener("click", () => {
  input.select();
  input.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(input.value);
  alert("Copyed: " + input.value);
});

function passwordGenerated(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => {
      return Object.values(item)[0];
    }
  );

  if (typesArr === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const ranFun = Object.keys(type)[0];
      generatedPassword += ranFunction[ranFun]();
    });
  }
  return generatedPassword.slice(0, length);
}
// generate password
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 68);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 47);
}

function randomSymbol() {
  const symbol = "!@#$%^&*()_+}{}";
  return symbol[Math.floor(Math.random() * symbol.length)];
}
