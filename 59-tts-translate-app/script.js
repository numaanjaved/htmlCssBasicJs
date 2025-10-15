const containerDiv = document.createElement("div");
containerDiv.id = "container";

const h1 = document.createElement("h1");
h1.textContent = "TTS & Translate App";

const textareaTag = document.createElement("textarea");
textareaTag.id = "inputBox";
textareaTag.placeholder = "Enter text";

const label = document.createElement("label");
label.textContent = "Select Voice";

const SelectTag = document.createElement("select");
SelectTag.id = "voiceSelect";

const playButtonTag = document.createElement("button");
playButtonTag.id = "playButton";
playButtonTag.textContent = "Play Text";

label.appendChild(SelectTag);

containerDiv.append(h1, textareaTag, label, playButtonTag);

document.body.appendChild(containerDiv);

const voiceSelect = document.querySelector("#voiceSelect");
const playBtn = document.querySelector("#playButton");
const textarea = document.querySelector("textarea");

// Load Voices
let voices = [];
function loadVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = voices
    .map(
      (voice, index) =>
        `<option value="${index}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
}
speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

playBtn.addEventListener("click", () => {
  const utterence = new SpeechSynthesisUtterance(textarea.value);
  utterence.voice = voices[voiceSelect.value];
  speechSynthesis.speak(utterence);
});
