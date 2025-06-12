const loginToggle = document.getElementById('loginToggle');
const signupToggle = document.getElementById('signupToggle');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginToggle.addEventListener('click', () => {
  loginToggle.classList.add('active');
  signupToggle.classList.remove('active');
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
});

signupToggle.addEventListener('click', () => {
  signupToggle.classList.add('active');
  loginToggle.classList.remove('active');
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
});

function togglePassword(el) {
  const form = el.closest("form");
  const passwordInputs = form.querySelectorAll('input[type="password"], input[data-type="text-toggle"]');
  passwordInputs.forEach(input => {
    if (el.checked) {
      input.setAttribute("data-type", "text-toggle");
      input.type = "text";
    } else {
      input.removeAttribute("data-type");
      input.type = "password";
    }
  });
}