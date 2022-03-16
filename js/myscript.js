const { isWindows } = require("nodemon/lib/utils");

const form = {...document.querySelector('form').childer};

form.forEach((item, i) =>{
    setTimeout(() => {
        item.style.opacity = 1;
    }, i*100)
})

window.onload = () =>{
    if(sessionStorage.name){
            location.href = '/'
    }
}

//form validation

const name = document.querySelector('.name') || null;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-btn');

if(name == null){ //means login page is open
    submitBtn.addEventListener('click', () => {
        fetch('/login-user', {
            method: 'post',
            hearders: new Headers({'Content-Type': 'applications/json'}),
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            validateData(data);
        })
    })
}else{

    submitBtn.addEventListener('click', () => {
        fetch('/register-user', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                passsword: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            validateData(data);
        })
    })
}

const validatData = (data) => {
    if(!data.name){
        alertBox(data);
    } else{
        sessionStorage.name = data.name;
        sessionStorage.email = data.email;
        location.href = '/home'
    }
}

const alertBox= (data) => {
    const alertContainer = document.querySelector('.alert_box');
    const alertMsg = document.querySelector('.alert');
    alertMsg.interHTML = data;

    alertContainer.style.top = '5%';
    setTimeout(() =>{
        alertContainer.style.top = null;
    }, 5000)
}