function createHeader() {
  const header = document.createElement('div');
  header.id = 'header';
  return header;
}

function loadHeader() {
  const element = createHeader();
  document.getElementById('content').appendChild(element);
}

module.exports = {
  loadHeader,
  createHeader
}