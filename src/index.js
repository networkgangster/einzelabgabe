/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// import './styles/style.scss';

const XMLHttpRequest = require('xhr2');

const btn = document.getElementById('btn');

function chucknorris() {
  const data = null;

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open('GET', 'https://asli-fun-fact-api.herokuapp.com/');
  xhr.send(data);
}

btn.addEventListener('click', chucknorris);
