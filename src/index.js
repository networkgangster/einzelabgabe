/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// import './styles/style.scss';

const XMLHttpRequest = require('xhr2');

const btn = document.getElementById('btn');

function buildTable(data) {
  const table = document.getElementById('myTable');

  for (let i = 0; i < data.length - 2; i++) {
    const row = `<tr>
                        <td>${data[i]}</td>
                        <td>${data[i + 1]}</td>
                        <td>${data[i + 2]}</td>
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

btn.addEventListener('click', chucknorris);
