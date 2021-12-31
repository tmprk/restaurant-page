import soondubuImg from '../assets/soondubu.jpg';
import bibimbapImg from '../assets/bibimbap-lrg.jpg'

function loadHomeContent() {
  const wrapper = document.createElement('div');
  wrapper.id = 'wrapper';
  
  const welcomeMsg = document.createElement('h1');
  welcomeMsg.id = 'welcome';
  welcomeMsg.textContent = 'Experience the best Korean food!';

  const subtext = document.createElement('h4');
  subtext.id = 'subtext';
  subtext.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const favorites = document.createElement('div');
  favorites.id = 'favorites';
  favorites.appendChild(createFavorite(bibimbapImg, 'Bibimbap, sometimes romanized as bi bim bap or bi bim bop, is a Korean rice dish. The term "bibim" means mixing rice, while the "bap" noun refers to rice. Bibimbap is served as a bowl of warm white rice topped with namul or kimchi and gochujang, soy sauce, or doenjang.'))
  favorites.appendChild(createFavorite(soondubuImg, 'Sundubu-jjigae or soft tofu stew is a jjigae in Korean cuisine. The dish is made with freshly curdled soft tofu, vegetables, sometimes mushrooms, onion, optional seafood, optional meat, and gochujang or gochu garu.'))

  wrapper.appendChild(welcomeMsg);
  wrapper.appendChild(subtext);
  wrapper.appendChild(favorites);
  return wrapper;
}

function createFavorite(source, cap) {
  const favoriteCell = document.createElement('div');
  favoriteCell.classList.add('cell');

  const cellImage = new Image();
  cellImage.classList.add('cell-image');
  cellImage.src = source;

  const caption = document.createElement('div');
  caption.id = 'caption';
  caption.textContent = cap;

  favoriteCell.appendChild(cellImage);
  favoriteCell.appendChild(caption);
  return favoriteCell;
}

function addHomeContent() {
  var home = document.getElementById('home');
  home.innerHTML = '';
  home.appendChild(loadHomeContent());
}

export default addHomeContent;