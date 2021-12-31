import './style.css'
import addHomeContent from './modules/home';
import addMenuContent from './modules/menu';
import addContactContent from './modules/contact';
import headerIcon from './assets/bibimbap.png'

function addObservers() {
  const homeButton = document.getElementById('home-btn');
  homeButton.addEventListener('click', addHomeContent);

  const menuButton = document.getElementById('menu-btn');
  menuButton.addEventListener('click', addMenuContent);

  const contactButton = document.getElementById('contact-btn');
  contactButton.addEventListener('click', addContactContent);

  const buttons = document.querySelectorAll('.list-item button');
  buttons.forEach((button, index) => {
    console.log(button);

    button.addEventListener('click', function() {
      const active = document.querySelector('button.active');
      active.classList.remove('active');
      button.classList.add('active');

      // replace content with new content
      // addMenuContent();
      // addContactContent();
    })
  })
}

function loadSite() {
  document.getElementById('bibimbap').src = headerIcon;

  addObservers();
  addHomeContent();
}

loadSite();