import { node_52 } from "./section-1.js";

// ================= Section 2


const node_63 = document.createElement('section');            
node_63.setAttribute('id', 'search-hotels'); 
node_52.appendChild(node_63);

const node_64 = document.createElement('h1');            
node_64.innerText = "Find Hotels";
node_63.appendChild(node_64);

const node_65 = document.createElement('div');            
node_65.setAttribute('class', 'search-form'); 
node_63.appendChild(node_65);

const node_66 = document.createElement('li');            
node_65.appendChild(node_66);

const node_67 = document.createElement('p');            
node_67.innerText = "Where";
node_66.appendChild(node_67);

const node_68 = document.createElement('input');            
node_68.setAttribute('class', 'search-input'); 
node_68.setAttribute('type', 'text');
node_68.setAttribute('placeholder', 'Location');
node_66.appendChild(node_68);

const node_69 = document.createElement('li');            
node_65.appendChild(node_69);

const node_70 = document.createElement('p');            
node_70.innerText = "Check in";
node_69.appendChild(node_70);

const node_71 = document.createElement('input');            
node_71.setAttribute('class', 'search-input'); 
node_71.setAttribute('type', 'text');
node_71.setAttribute('placeholder', 'DD-MM-YYYY');
node_69.appendChild(node_71);

const node_72 = document.createElement('li');            
node_65.appendChild(node_72);

const node_73 = document.createElement('p');            
node_73.innerText = "Check out";
node_72.appendChild(node_73);

const node_74 = document.createElement('input');            
node_74.setAttribute('class', 'search-input'); 
node_74.setAttribute('type', 'text');
node_74.setAttribute('placeholder', 'DD-MM-YYYY');
node_72.appendChild(node_74);

const node_75 = document.createElement('li');            
node_65.appendChild(node_75);

const node_76 = document.createElement('p');            
node_76.innerText = "Adult";
node_75.appendChild(node_76);

const node_77 = document.createElement('input');            
node_77.setAttribute('class', 'search-input'); 
node_77.setAttribute('type', 'text');
node_77.setAttribute('placeholder', '01');
node_75.appendChild(node_77);


const node_78 = document.createElement('li');            
node_65.appendChild(node_78);

const node_79 = document.createElement('p');            
node_79.innerText = "Child";
node_78.appendChild(node_79);

const node_80 = document.createElement('input');            
node_80.setAttribute('class', 'search-input'); 
node_80.setAttribute('type', 'text'); 
node_80.setAttribute('placeholder', '00'); 
node_78.appendChild(node_80);

const node_81 = document.createElement('li');            
node_65.appendChild(node_81);

const node_82 = document.createElement('br');            
node_81.appendChild(node_82);

const node_83 = document.createElement('button');            
node_83.setAttribute('id', 'find-hotel-btn'); 
node_83.innerText = "Click Here";
node_81.appendChild(node_83);



