import { node_1 } from "./topNav.js";



//==================== Bottom Navbar

var node_30 = document.createElement('ul'); 
node_30.setAttribute('class', 'bottom-nav'); 
node_1.appendChild(node_30);

var node_31 = document.createElement('div'); 
node_30.appendChild(node_31);

var node_32 = document.createElement('img'); 
node_32.setAttribute('src', './assets/logo.png');
node_31.appendChild(node_32);

var node_33 = document.createElement('div'); 
node_30.appendChild(node_33);

var node_34 = document.createElement('li'); 
node_34.setAttribute('class', 'active'); 
node_33.appendChild(node_34);

var node_35 = document.createElement('a');
node_34.appendChild(node_35);

var node_36 = document.createTextNode((new String("HOME")));
node_35.appendChild(node_36);

var node_37 = document.createElement('li'); 
node_33.appendChild(node_37);

var node_38 = document.createElement('a');
node_37.appendChild(node_38);  

var node_39 = document.createTextNode((new String("DESTINATION")));
node_38.appendChild(node_39);

var node_40 = document.createElement('li'); 
node_33.appendChild(node_40);

var node_41 = document.createElement('a');
node_40.appendChild(node_41);

var node_42 = document.createTextNode((new String("DISCOUNT")));
node_41.appendChild(node_42);

var node_43 = document.createElement('li'); 
node_33.appendChild(node_43);

var node_44 = document.createElement('a');
node_43.appendChild(node_44);

var node_45 = document.createTextNode((new String("ABOUT")));
node_44.appendChild(node_45);

var node_46 = document.createElement('li'); 
node_33.appendChild(node_46);

var node_47 = document.createElement('a');
node_46.appendChild(node_47);

var node_48 = document.createTextNode((new String("BLOG")));
node_47.appendChild(node_48);

var node_49 = document.createElement('li'); 
node_33.appendChild(node_49);

var node_50 = document.createElement('a');
node_49.appendChild(node_50);

var node_51 = document.createTextNode((new String("CONTACT")));
node_50.appendChild(node_51);

