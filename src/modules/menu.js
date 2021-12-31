import menuData from '../data/menu.json';
// const pathToAssets = require.context('../assets/');

function importAll(r) {
  return r.keys().map(r);
}

// const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

function loadMenu() {
  const menu = document.createElement('menu');
  menu.id = 'menu';

  menuData.forEach((section, index) => {
    const sectionTitle = section['title'];
    const foods = section['foods'];

    const sectionElement = createSection(sectionTitle, foods);
    menu.appendChild(sectionElement)
  })

  return menu;
}

function createSection(title, items) {
  const section = document.createElement('div');
  section.classList.add('section');

  const heading = document.createElement('h3');
  heading.classList.add('heading');
  heading.textContent = title;

  const row = document.createElement('row');
  row.classList.add('row');

  items.forEach((food, index) => {
    const foodName = food['name'];
    const price = food['price'];
    const source = food['source'];

    const rowItem = createRowItem(foodName, price, source);
    row.appendChild(rowItem);
  })

  section.appendChild(heading);
  section.appendChild(row);
  return section;
}

function createRowItem(titleText, price, source) {
  const rowItem = document.createElement('row-item');
  rowItem.classList.add('row-item');

  const img = new Image();
  console.log('../assets/' + source);
  img.src = require('../assets/' + source);
  // img.src = 'http://placehold.jp/3d4070/ffffff/150x150.png';
  // img.src = require(`${source}`);
  // console.log(images);

  const info = document.createElement('div');
  info.classList.add('info');

  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = titleText;

  const priceDiv = document.createElement('div');
  priceDiv.classList.add('price');
  priceDiv.textContent = price;

  info.appendChild(title);
  info.appendChild(priceDiv);

  rowItem.appendChild(img);
  rowItem.appendChild(info);
  return rowItem;
}

function addMenuContent() {
  var home = document.getElementById('home');
  home.innerHTML = '';
  home.appendChild(loadMenu());
}

export default addMenuContent;