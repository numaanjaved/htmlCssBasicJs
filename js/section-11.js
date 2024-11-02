import { node_52 } from "./section-1.js";

// ================= Section 11




const arr = [
    {path: "./assets/icons/message.svg", tag1: "Email", tag2: "free@psdfreebies.com", tag3: "free@psdfreebies.com"},
    {path: "./assets/icons/mobile.svg", tag1: "Call us!", tag2: "+123 456 7890", tag3: "+123 456 7890"},
    {path: "./assets/icons/address.svg", tag1: "Address", tag2: "123, Main Road, New City,", tag3: "My Country 123456"}
]

const arr_2 = [
    {path: "./assets/icons/icon-facebook.svg"},
    {path: "./assets/icons/icon-google.svg"},
    {path: "./assets/icons/icon-vk.svg"},
    {path: "./assets/icons/icon-youtube.svg"},
    {path: "./assets/icons/linkedin.svg"},
    {path: "./assets/icons/digg.svg"},
    {path: "./assets/icons/deviantart.svg"}
]


const node_278 = document.createElement('section');       
node_278.setAttribute('id', 'section-11');
node_52.appendChild(node_278);

const node_279 = document.createElement('img');       
node_279.setAttribute('src', './assets/s11.png');
node_279.setAttribute('class', 's11-back-image');
node_278.appendChild(node_279);


const node_280 = document.createElement('div');       
node_280.setAttribute('id', 's11-main');
node_278.appendChild(node_280);


const node_281 = document.createElement('img');       
node_281.setAttribute('src', './assets/icons/location.svg');
node_281.setAttribute('class', 's11-location-logo');
node_280.appendChild(node_281);


const node_282 = document.createElement('div');       
node_282.setAttribute('class', 's11-info');
node_280.appendChild(node_282);

for (const card of arr) {

    const node_283 = document.createElement('ul');       
    node_283.setAttribute('class', 's11-subinfo');
    node_282.appendChild(node_283);

    const node_284 = document.createElement('li');         
    node_283.appendChild(node_284);

    const node_285 = document.createElement('img');       
    node_285.setAttribute('src', card.path);
    node_285.setAttribute('class', 's11-logo1');
    node_284.appendChild(node_285);

    const node_286 = document.createElement('li');         
    node_283.appendChild(node_286);

    const node_287 = document.createElement('p');       
    node_287.setAttribute('class', 's11-head1');
    node_287.innerText = card.tag1;
    node_286.appendChild(node_287);

    const node_288 = document.createElement('p');       
    node_288.setAttribute('class', 's11-head2');
    node_288.innerText = card.tag2;
    node_286.appendChild(node_288);

    const node_289 = document.createElement('p');       
    node_289.setAttribute('class', 's11-head2');
    node_289.innerText = card.tag3;
    node_286.appendChild(node_289);
}



const node_290 = document.createElement('ul');       
node_290.setAttribute('class', 's11-links');
node_280.appendChild(node_290);

for (const card_2 of arr_2) {
    const node_291 = document.createElement('li');
    node_290.appendChild(node_291);

    const node_292 = document.createElement('img');       
    node_292.setAttribute('src', card_2.path);
    node_292.setAttribute('class', 's11-logo2');
    node_291.appendChild(node_292);

}



