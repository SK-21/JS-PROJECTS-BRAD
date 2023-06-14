const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("pass")
const cPassword = document.getElementById("cpass")
const form = document.getElementById('my-form')

form.addEventListener('submit', submitF)

function submitF(e) {
    e.preventDefault()

  // Remove existing error messages
  var existingErrorMessages = document.getElementsByClassName('error');
  while (existingErrorMessages.length > 0) {
    existingErrorMessages[0].remove();
  }

  var usernameErrorDisplayed = false;
  var emailErrorDisplayed = false;
  var passwordErrorDisplayed = false;
  var cPasswordErrorDisplayed = false;

    if (username.value === '' || username.value.length === 2) {
        username.className = 'input-error';
        let user = document.createElement('p')
        user.textContent = "Username must be at least 3 characters"
        user.className = 'error'
        username.style.margin = '10px 0 5px 0'
        username.insertAdjacentElement('afterend', user)


    } if (email.value === '') {
        email.className = 'input-error';
        let user = document.createElement('p')
        user.textContent = "Email is not valid"
        user.className = 'error'
        email.style.margin = '10px 0 5px 0'
        email.insertAdjacentElement('afterend', user)


    } if (password.value === '' || password.value.length === 5) {
        password.className = 'input-error';
        let user = document.createElement('p')
        user.textContent = "Password must be at least 6 characters "
        user.className = 'error'
        password.style.margin = '10px 0 5px 0'
        password.insertAdjacentElement('afterend', user)

    } if (cPassword.value === '' || cPassword.value !== password.value) {
        cPassword.className = 'input-error';
        let user = document.createElement('p')
        user.textContent = "Passwords do not match"
        user.className = 'error'
        cPassword.style.margin = '10px 0 5px 0'
        cPassword.insertAdjacentElement('afterend', user)

    } else {
        e.target.reset()
    }

    // inputF.className='input-error';

    //     console.log(e.target)
    //     console.log("target")
    // }else{
    //     console.log('false')
    // }
}

