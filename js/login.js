let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let errorMsg = document.createElement('p');
errorMsg.style.color='red';
console.log(form)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let user = localStorage.getItem(email.value);
    console.log(user);
    

    if (user == null) {
        errorMsg.innerHTML = `Email is not present`;
        email.insertAdjacentElement('afterend', errorMsg);
    } else {
        let parseUser = JSON.parse(user);
        if (password.value === parseUser.password) {
            form.submit();
        }else{
            errorMsg.innerHTML=`Password is incorrect`;
            password.insertAdjacentElement('afterend',errorMsg);
        }

    }

})