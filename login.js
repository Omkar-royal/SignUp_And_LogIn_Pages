const loginn = document.getElementById("loginn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

email.addEventListener('change', ()=> {
    if (!emailPattern.test(email.value)) {
      email.classList.add("is-invalid");
      
      emailError.innerHTML = "<i class='bi bi-x-circle-fill text-danger'> Invalid email address.</i>";
    } else {
      email.classList.replace("is-invalid","is-valid");
      emailError.innerHTML = '<i class="bi bi-check-circle-fill text-success">&nbsp Email</i>';
    }
  });

password.addEventListener('change', ()=> {
    if (!passwordPattern.test(password.value)) {

      password.classList.add("is-invalid");
      passwordError.innerHTML = '<i class="bi bi-x-circle-fill text-danger">Invalid password. At least 8 characters with at least one digit, one lowercase and one uppercase letter.</i>';
    } else {
      password.classList.replace("is-invalid","is-valid");
      passwordError.innerHTML = '<i class="bi bi-check-circle-fill text-success">Password</i>';
    }
  });

loginn.addEventListener("submit", (event) => {
    if (!emailPattern.test(email.value)) {
        email.classList.add("is-invalid");
        emailError.innerHTML = '<i class="bi bi-x-circle-fill text-danger">Enter Your Email Address.</i>';
        event.preventDefault();
      }
      if (!passwordPattern.test(password.value)) {
        password.classList.add("is-invalid");
        passwordError.innerHTML = '<i class="bi bi-x-circle-fill text-danger">Please Enter Your Password</i>';
        event.preventDefault();
      }
});