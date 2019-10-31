/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
  'Go To Sleep'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const fullMenu = document.querySelector('body');
fullMenu.appendChild(newMenu(menuItems));

function newMenu(){

const menu1 = document.createElement('div');
const listItems = document.createElement('ul');
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
const item4 = document.createElement('li');
const item5 = document.createElement('li');
const item6 = document.createElement('li');
const item7 = document.createElement('li');

menu1.appendChild(listItems);
listItems.appendChild(item1);
listItems.appendChild(item2);
listItems.appendChild(item3);
listItems.appendChild(item4);
listItems.appendChild(item5);
listItems.appendChild(item6);
listItems.appendChild(item7);

item1.textContent = menuItems[0];
item2.textContent = menuItems[1];
item3.textContent = menuItems[2];
item4.textContent = menuItems[3];
item5.textContent = menuItems[4];
item6.textContent = menuItems[5];
item7.textContent = menuItems[6];

menu1.classList.add('menu')

const button = document.querySelector('.menu-button');
button.addEventListener('click', () => {
  menu1.classList.toggle('menu--open');
})

return menu1;

}