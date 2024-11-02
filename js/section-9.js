import { node_52 } from "./section-1.js";

// ================= Section 9




const node_242 = document.createElement('section');       
node_242.setAttribute('id', 'section-9');
node_52.appendChild(node_242);

const node_243 = document.createElement('div');       
node_243.setAttribute('class', 's9-card');
node_242.appendChild(node_243); 

const node_245 = document.createElement('div');       
node_245.setAttribute('class', 's9-content');
node_243.appendChild(node_245);

const node_246 = document.createElement('h2');       
node_246.setAttribute('class', 's9-head1');
node_246.innerText = "New york + Paris";
node_245.appendChild(node_246);

const node_247 = document.createElement('h4');       
node_247.setAttribute('class', 's9-head2');
node_247.innerText = "7 day + 6 Night";
node_245.appendChild(node_247);

const node_248 = document.createElement('ul');       
node_248.setAttribute('class', 's9-images');
node_245.appendChild(node_248);

const node_249 = document.createElement('li');       
node_249.setAttribute('class', 's9-service');
node_248.appendChild(node_249);

const node_250 = document.createElement('img');       
node_250.setAttribute('src', './assets/icons/best-services-icons/aeroplane.svg');
node_250.setAttribute('class', 's9-logo');
node_249.appendChild(node_250);

const node_251 = document.createElement('h4');       
node_251.setAttribute('class', 's9-svc-tag');
node_251.innerText = "Flight";
node_249.appendChild(node_251);

const node_252 = document.createElement('li');       
node_252.setAttribute('class', 's9-service');
node_248.appendChild(node_252);

const node_253 = document.createElement('img');       
node_253.setAttribute('src', './assets/icons/best-services-icons/museum.svg');
node_253.setAttribute('class', 's9-logo');
node_252.appendChild(node_253);

const node_254 = document.createElement('h4');       
node_254.setAttribute('class', 's9-svc-tag');
node_254.innerText = "Hotel";
node_252.appendChild(node_254);

const node_255 = document.createElement('li');       
node_255.setAttribute('class', 's9-service');
node_248.appendChild(node_255);

const node_256 = document.createElement('img');       
node_256.setAttribute('src', './assets/icons/best-services-icons/car.svg');
node_256.setAttribute('class', 's9-logo');
node_255.appendChild(node_256);

const node_257 = document.createElement('h4');       
node_257.setAttribute('class', 's9-svc-tag');
node_257.innerText = "Transport";
node_255.appendChild(node_257);

const node_258 = document.createElement('p');       
node_258.setAttribute('class', 's9-paragraph');
node_258.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasmagni neces stibus tenetur derabunt libtrero est dolre simiue exturi corris.";
node_245.appendChild(node_258);

const node_259 = document.createElement('div');       
node_259.setAttribute('class', 's9-price-and-button');
node_245.appendChild(node_259);

const node_260 = document.createElement('p');       
node_260.setAttribute('class', 's9-price');
node_260.innerText = "$1000";
node_259.appendChild(node_260);

const node_261 = document.createElement('button');       
node_261.setAttribute('class', 's9-button');
node_261.innerText = "Book now";
node_259.appendChild(node_261);






