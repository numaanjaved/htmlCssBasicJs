import { node_52 } from "./section-1.js";

// ================= Section 5


const arr = [
    {tag: "Low budget trip", price: "$500", path: "./assets/icons/best-services-icons/car.svg"},
    {tag: "Mid budget trip", price: "$800", path: "./assets/icons/best-services-icons/train.svg"},
    {tag: "High budget trip", price: "$1000", path: "./assets/icons/best-services-icons/aeroplane.svg"}
]



const node_161 = document.createElement('section');        
node_161.setAttribute('id', 'section-5');
node_52.appendChild(node_161);


const node_162 = document.createElement('h1');        
node_162.setAttribute('class', 'head-1');
node_162.innerText = "Trusted Since 2001";
node_161.appendChild(node_162);

const node_163 = document.createElement('h2');        
node_163.setAttribute('class', 'head-2');
node_163.innerText = "We are travel agent";
node_161.appendChild(node_163);


const node_164 = document.createElement('div');        
node_161.appendChild(node_164);

for (const card of arr) {
    
    const node_165 = document.createElement('div');        
    node_165.setAttribute('class', 's5-card');
    node_164.appendChild(node_165);

    const node_167 = document.createElement('div');        
    node_165.appendChild(node_167);

    const node_168 = document.createElement('img');        
    node_168.setAttribute('src', card.path);
    node_168.setAttribute('class', 's5-lg-logo');
    node_167.appendChild(node_168);

    const node_169 = document.createElement('div');        
    node_169.setAttribute('class', 's5-headline');
    node_169.innerText = card.tag;
    node_165.appendChild(node_169);

    const node_170 = document.createElement('div');        
    node_170.setAttribute('class', 's5-offer-price');
    node_165.appendChild(node_170);

    const node_170_1 = document.createElement('p');        
    node_170_1.innerText = card.price;
    node_170.appendChild(node_170_1);

    const node_171 = document.createElement('div');       
    node_165.appendChild(node_171);

    const node_172 = document.createElement('ul');        
    node_172.setAttribute('class', 's5-card-list');
    node_171.appendChild(node_172);

    const node_173 = document.createElement('li');        
    node_173.setAttribute('class', 's5-list');
    node_172.appendChild(node_173);

    const node_174 = document.createElement('img');        
    node_174.setAttribute('src', './assets/icons/icon-tick-circle.svg');
    node_174.setAttribute('class', 's5-list-logo');
    node_173.appendChild(node_174);

    const node_175 = document.createElement('p');        
    node_175.innerText = "Lorem ipsum sit";
    node_173.appendChild(node_175);

    const node_176 = document.createElement('li');        
    node_176.setAttribute('class', 's5-list');
    node_172.appendChild(node_176);

    const node_177 = document.createElement('img');        
    node_177.setAttribute('src', './assets/icons/icon-tick-circle.svg');
    node_177.setAttribute('class', 's5-list-logo');
    node_176.appendChild(node_177);

    const node_178 = document.createElement('p');        
    node_178.innerText = "Amet consectetur";
    node_176.appendChild(node_178);

    const node_179 = document.createElement('li');        
    node_179.setAttribute('class', 's5-list');
    node_172.appendChild(node_179);

    const node_180 = document.createElement('img');        
    node_180.setAttribute('src', './assets/icons/icon-tick-circle.svg');
    node_180.setAttribute('class', 's5-list-logo');
    node_179.appendChild(node_180);

    const node_181 = document.createElement('p');        
    node_181.innerText = "Adipisicing elit";
    node_179.appendChild(node_181);

    const node_182 = document.createElement('li');        
    node_182.setAttribute('class', 's5-list');
    node_172.appendChild(node_182);

    const node_183 = document.createElement('img');        
    node_183.setAttribute('src', './assets/icons/icon-tick-circle.svg');
    node_183.setAttribute('class', 's5-list-logo');
    node_182.appendChild(node_183);

    const node_184 = document.createElement('p');        
    node_184.innerText = "Provident tenetur";
    node_182.appendChild(node_184);

}