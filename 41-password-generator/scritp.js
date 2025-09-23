let input = document.querySelector("#passbox");
let limitNumber = document.querySelector("#limitNumber");
let lowerEl = document.querySelector("#lowercase");
let upperEl = document.querySelector("#uppercase");
let numberEl = document.querySelector("#number");
let symbolEl = document.querySelector("#symbol");
let genBtn = document.querySelector("#genPassword");

let randFun = {
  lower: genRandomLower,
  upper: genRandomUpper,
  number: genRandomNumber,
  symbol: genRandomSymbol,
};

genBtn.addEventListener("click", () => {
  const length = limitNumber.value;
  const hasLower = lowerEl.checked;
  const hasUpper = upperEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;
  input.value = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let genPassword = "";

  let typesCount = lower + upper + number + symbol;

  console.log(typesCount);

  let typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  console.log(typesArr);

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      console.log(funcName);
      genPassword += randFun[funcName]();
    });
  }
  const finalPassword = genPassword.slice(0, length);
  return finalPassword;
}
function genRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function genRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function genRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function genRandomSymbol() {
  let symbol = "!@#$%^&*()_+";
  return symbol[Math.floor(Math.random() * symbol.length)];
}
