
const password = document.getElementById("pwd");
const cpassword = document.getElementById("cpwd");

function checkPasswords(e) {
  if (password.value === cpassword.value && password.value !== '') {
    password.classList.remove('nomatch');
    cpassword.classList.remove('nomatch');
    cpassword.classList.add('match')
    password.classList.add('match');

  } else if (password.value === "" && cpassword.value === "") {
    password.classList.remove('nomatch');
    cpassword.classList.remove('nomatch');
    password.classList.remove('match');
    cpassword.classList.remove('match');
  } else {
    password.classList.add('nomatch');
    cpassword.classList.add('nomatch');
    password.classList.remove('match');
    cpassword.classList.remove('match');
  }
}

document.addEventListener('DOMContentLoaded', checkPasswords); // Initial check on page load
password.addEventListener('input', (e) => { checkPasswords(e) });
cpassword.addEventListener('input', (e) => { checkPasswords(e) });
