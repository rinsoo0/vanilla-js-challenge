const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY = "username";


const savedUsername = localStorage.getItem(USERNAME_KEY);



function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

if (savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}
else {
    loginInput.value = savedUsername;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}




function onLoginSubmit(event) {

    event.preventDefault();

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    loginForm.classList.add(HIDDEN_CLASSNAME);

    paintGreetings(username);

}

loginForm.addEventListener("submit", onLoginSubmit);
