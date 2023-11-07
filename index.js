document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.getElementById('signupForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const mobile=document.getElementById('mobile')
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
  //Error Message Variables
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const mobileError=document.getElementById('mobileError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
//Required Variables
    const requiredUser=document.getElementById('requiredUser');
    const requiredEmail=document.getElementById('requiredEmail');
    const requiredMobile=document.getElementById('requiredMobile');
    const requiredPassword=document.getElementById('requiredPassword');
  //Pattern Variables
    const usernamePattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[_]).{5,16}$/;  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const mobilePattern=/^\+(\d{2})[0-9]{10,10}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/; 
  
    username.addEventListener('change', ()=>{
      if (!usernamePattern.test(username.value)) {
        username.classList.add("is-invalid");
        requiredUser.innerHTML='*';
        usernameError.innerHTML = '<i class="bi bi-x-circle-fill  text-danger">Invalid username. Alphanumeric & underscores, 5-16 characters.</i>';
      } else {
        username.classList.replace("is-invalid","is-valid");
        usernameError.innerHTML = '<i class="bi bi-person-check-fill text-success">UserName</i>';
      }
    });
  
    email.addEventListener('change', ()=> {
      if (!emailPattern.test(email.value)) {
        email.classList.add("is-invalid");
        requiredEmail.innerHTML='*';
        emailError.innerHTML = "<i class='bi bi-x-circle-fill text-danger'> Invalid email address.</i>";
      } else {
        email.classList.replace("is-invalid","is-valid");
        emailError.innerHTML = '<i class="bi bi-check-circle-fill text-success">&nbsp Email</i>';
      }
    });
    mobile.addEventListener('change', ()=> {
      if (!mobilePattern.test(mobile.value)) {
    
        requiredMobile.innerHTML='*';
        mobile.classList.add("is-invalid");
        mobileError.innerHTML = "<i class='bi bi-x-circle-fill text-danger'> Invalid mobile number.</i>";
      } else {
       mobile.classList.replace("is-invalid","is-valid");
        mobileError.innerHTML = '<i class="bi bi-check-circle-fill text-success">&nbsp Mobile Number</i>';
      }
    });
    password.addEventListener('change', ()=> {
      if (!passwordPattern.test(password.value)) {
        requiredPassword.innerHTML='*';
        password.classList.add("is-invalid");
        passwordError.innerHTML = '<i class="bi bi-x-circle-fill text-danger">Invalid password. At least 8 characters with at least one digit, one lowercase and one uppercase letter.</i>';
      } else {
        password.classList.replace("is-invalid","is-valid");
        passwordError.innerHTML = '<i class="bi bi-check-circle-fill text-success">Password</i>';
      }
    });
  
    confirmPassword.addEventListener('change', ()=> {
      if (password.value !== confirmPassword.value ) {
        requiredMark.innerHTML='*';
        confirmPassword.classList.add("is-invalid");
        confirmPasswordError.innerHTML = '<i class="bi bi-x-circle-fill text-danger">Passwords do not match.</i>';
      } else {
        confirmPassword.classList.replace("is-invalid","is-valid");
        confirmPasswordError.innerHTML = '<i class="bi bi-check-circle-fill  text-success">Password Matched</i>';
      }
    });
  
    form.addEventListener('submit', (event)=> {
      if (!usernamePattern.test(username.value)) {
        requiredUser.innerHTML='*';
        username.classList.add("is-invalid");
        usernameError.innerHTML = '<i class="bi bi-x-circle-fill text-danger">Enter UserName</i>';
        event.preventDefault();
      }
  
      if (!emailPattern.test(email.value)) {
        email.classList.add("is-invalid");
        requiredEmail.innerHTML='*';
        emailError.innerHTML = '<i class="bi bi-x-circle-fill text-danger">Enter Your Email Address.</i>';
        event.preventDefault();
      }
      if (!mobilePattern.test(mobile.value)) {
        requiredMobile.innerHTML='*';
        mobile.classList.add("is-invalid");
        mobileError.innerHTML = '<i class="bi bi-x-circle-fill text-danger">Enter Your Mobile Number</i>';
        event.preventDefault();
      }
  
      if (!passwordPattern.test(password.value)) {
        password.classList.add("is-invalid");
        requiredPassword.innerHTML='*';
        passwordError.innerHTML = '<i class="bi bi-x-circle-fill text-danger">Please Enter Your Password</i>';
        event.preventDefault();
      }
  
      if (password.value !== confirmPassword.value || confirmPassword.value=='') {
        confirmPassword.classList.add("is-invalid");
        requiredMark.innerHTML='*';
        confirmPasswordError.innerHTML = '<i class="bi bi-x-circle-fill text-danger">Please Confirm Your Password.</i>';
        event.preventDefault();
      }
    });
  });
  