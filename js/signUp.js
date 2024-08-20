

let name = document.querySelector("#name")
let email = document.querySelector("#email");


let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let errorMsg = document.createElement('p');


let form = document.querySelector("form");

form.addEventListener('submit', (event) => {
   event.preventDefault();

   if (password.value !== confirmPassword.value) {
      errorMsg.innerHTML = 'Password does not match.';
      confirmPassword.insertAdjacentElement('afterend', errorMsg);
      errorMsg.style.color = 'red';
   }
   else if ((password.value).length < 8) {
      errorMsg.innerHTML = 'Password must be at least 8 characters long.';
      confirmPassword.insertAdjacentElement('afterend', errorMsg);
      errorMsg.style.color = 'red';
   }
   else {
      console.log('Passwords match and are valid.');
      let user = {
         "name": name.value,
         "email": email.value,
         "password": password.value

      }

      console.log(user)

      localStorage.setItem(email.value, JSON.stringify(user));
      sessionStorage.setItem(email.value,JSON.stringify(user));

       form.submit();

   }

})