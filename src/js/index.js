/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// import './styles/style.scss';

const XMLHttpRequest = require('xhr2');

const btn = document.getElementById('btn');
const fav = document.getElementsByClassName('fav');

function buildTable(data) {
  const table = document.getElementById('myTable');

  for (let i = 0; i < data.length - 2; i++) {
    const row = `<tr>
                        <td>${data[i]}</td>
                        <td class="fct">${data[i + 1]}</td>
                        <td>${data[i + 2]}</td>
                        <td><button class="fav" type="button">Favorit</button></td>
                  </tr>`;
    table.innerHTML += row;
  }
}

function chucknorris() {
  const send = null;
  let data = null;
  // eslint-disable-next-line prefer-const
  let myArray = [];

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      data = JSON.parse(this.responseText);
      myArray.push(data.data.cat, data.data.fact, data.data.hits);
      buildTable(myArray);
      console.log(data.data.cat);
      console.log(myArray);
    }
  });

  xhr.open('GET', 'https://asli-fun-fact-api.herokuapp.com/');
  xhr.send(send);
}

function removeFromWishlist(button) {
  button.closest('li').remove();
}

function addtoWishlist(button) {
  let parentItem = button.closest('tr');
  console.log(parentItem);
  let clonedItem = parentListItem.cloneNode(true);

  let batn = clonedItem.getElementsByTagName('button')[0];
  batn.textContent = 'x';
  batn.addEventListener('click', function () { removeFromWishlist(this); });
  document.getElementById('wishlist').append(clonedItem);
}

btn.addEventListener('click', chucknorris);
fav.addEventListener('click', addtoWishlist(this));
