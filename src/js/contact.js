/* eslint-disable no-undef */
const text = document.getElementById('text');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  const messages = [];
  if (text.value.length < 3) {
    messages.push('Geben Sie einen längeren Text ein.');
  }

  if (password.value.length <= 6) {
    messages.push('Passwort muss mehr als 6 Zeichen haben');
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters');
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});
