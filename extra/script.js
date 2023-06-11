const user = document.getElementById("username")
const form = document.getElementById("my-form")
const email = document.getElementById("email")
const btn = document.getElementById("btn")
const data = document.getElementById("data")
const error = document.getElementById("error")

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (user.value === "" || email.value === "") {
        error.classList.add('error')
error.innerHTML="<h5>You have not enetered you username or email</h5>"
setTimeout(()=> error.remove(),3000)
    }else{
        const list = document.createElement('li')
        list.appendChild(document.createTextNode(`${user.value}  ${email.value} `)) 
        data.appendChild(list)
        user.value=""
        email.value=""
    }

}