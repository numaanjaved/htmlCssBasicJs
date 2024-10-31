
//=============== Navbar







//=============== Top Navbar
export const node_1 = document.createElement('nav');
node_1.setAttribute('class', 'mynav')

const node_2 = document.createElement('ul'); 
node_2.setAttribute('class', 'top-nav');
node_1.appendChild(node_2);

const node_3 = document.createElement('li'); 
node_2.appendChild(node_3);

const node_4 = document.createElement('img'); 
node_4.setAttribute('src', './assets/icons/icon-phone.svg')
node_4.setAttribute('class', 'nav-logo');
node_3.appendChild(node_4);

const node_5 = document.createElement('p'); 
node_3.appendChild(node_5);
              
const node_6 = document.createTextNode(new String("+123 4577 8900"));
node_5.appendChild(node_6);

const node_7 = document.createElement('li'); 
node_2.appendChild(node_7);

const node_8 = document.createElement('img'); 
node_8.setAttribute('src', './assets/icons/icon-email.svg')
node_8.setAttribute('class', 'nav-logo');
node_7.appendChild(node_8);

const node_9 = document.createElement('p'); 
node_7.appendChild(node_9); 
            
const node_10 = document.createTextNode(new String("free@psdfreebies.com"));
node_9.appendChild(node_10);

const node_11 = document.createElement('li'); 
node_2.appendChild(node_11);

const node_12 = document.createElement('a'); 
node_11.appendChild(node_12);

const node_13 = document.createElement('img'); 
node_13.setAttribute('src', './assets/icons/icon-facebook.svg')
node_13.setAttribute('class', 'nav-logo');
node_12.appendChild(node_13);
 
const node_14 = document.createElement('a'); 
node_11.appendChild(node_14);

const node_15 = document.createElement('img'); 
node_15.setAttribute('src', './assets/icons/icon-google.svg')
node_15.setAttribute('class', 'nav-logo');
node_14.appendChild(node_15);

const node_16 = document.createElement('a'); 
node_11.appendChild(node_16);

const node_17 = document.createElement('img'); 
node_17.setAttribute('src', './assets/icons/icon-vk.svg')
node_17.setAttribute('class', 'nav-logo');
node_16.appendChild(node_17);

const node_18 = document.createElement('a'); 
node_11.appendChild(node_18);

const node_19 = document.createElement('img'); 
node_19.setAttribute('src', './assets/icons/icon-youtube.svg')
node_19.setAttribute('class', 'nav-logo');
node_18.appendChild(node_19);

const node_20 = document.createElement('li'); 
node_2.appendChild(node_20);

const node_21 = document.createElement('button'); 
node_21.setAttribute('class', 'nav-button');
node_20.appendChild(node_21);

const node_22 = document.createElement('img'); 
node_22.setAttribute('src', './assets/icons/icon-user.svg')
node_22.setAttribute('class', 'nav-logo');
node_21.appendChild(node_22);

const node_23 = document.createElement('p'); 
node_21.appendChild(node_23);
                 
const node_24 = document.createTextNode(new String("Login"));
node_23.appendChild(node_24);

const node_25 = document.createElement('button'); 
node_25.setAttribute('class', 'nav-button');
node_20.appendChild(node_25);

const node_26 = document.createElement('img'); 
node_26.setAttribute('src', './assets/icons/icon-key.svg')
node_26.setAttribute('class', 'nav-logo');
node_25.appendChild(node_26);

const node_27 = document.createElement('p'); 
node_25.appendChild(node_27);
 
const node_28 = document.createTextNode(new String("Sign Up")); 
node_27.appendChild(node_28);

const node_29 = document.createElement('hr'); 
node_1.appendChild(node_29);






document.body.appendChild(node_1);