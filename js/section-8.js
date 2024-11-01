import { node_52 } from "./section-1.js";

// ================= Section 8

const array = [
    {path: "./assets/s8.1-bus.jpg"},
    {path: "./assets/s8.2-car.jpg"},
    {path: "./assets/s8.3-monk.jpg"}
]

const node_232 = document.createElement('section');      
node_232.setAttribute('id', 'section-8');
node_52.appendChild(node_232);

const node_233 = document.createElement('h1');      
node_233.setAttribute('class', 'head-1');
node_233.innerText = "Trusted since 2001";
node_232.appendChild(node_233);

const node_234 = document.createElement('h2');      
node_234.setAttribute('class', 'head-2');
node_234.innerText = "GO EXPLOORE";
node_232.appendChild(node_234);

const node_235 = document.createElement('ul');      
node_235.setAttribute('class', 's8-offers');
node_232.appendChild(node_235);

for (const card of array) {

    const node_236 = document.createElement('li');      
    node_236.setAttribute('class', 's8-card center-card-wrap s7-side-card');
    node_235.appendChild(node_236);

    const node_237 = document.createElement('img');      
    node_237.setAttribute('src', card.path);
    node_237.setAttribute('class', 's8-images');
    node_236.appendChild(node_237);

    const node_238 = document.createElement('button');      
    node_238.setAttribute('class', 's8-button');
    node_238.innerText = "Click here";
    node_236.appendChild(node_238);

    const node_239 = document.createElement('div');        
    node_236.appendChild(node_239);

    const node_240 = document.createElement('h1');      
    node_240.setAttribute('class', 's8-head1');
    node_240.innerText = "Lorem ipsum dolor";
    node_239.appendChild(node_240);

    const node_241 = document.createElement('p');      
    node_241.setAttribute('class', 's8-paragraph');
    node_241.innerText = "Lorem ipsum dolor sit amet, consectetur adipi sicing elit. Nobis dicta sint sunt rerum, perfe rendis reprehrit acus";
    node_239.appendChild(node_241);

}


