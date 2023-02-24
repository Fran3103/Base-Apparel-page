const form = document.querySelector('.formulario');
const email = document.querySelector('.email');
const error = document.querySelector('.txt_error');

form.addEventListener('submit', (event) =>{
   
    const regExp= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;


    if (regExp.test(email.value) == true) {
        email.style.border = ' 1px solid hsl(0, 36%, 70%)';
        email.style.backgroundImage = 'url("")'
        error.innerHTML= '';
        

    } else{
        event.preventDefault();
        email.style.border = ' 1px solid hsl(0, 93%, 68%)';
        email.style.backgroundImage = 'url("/images/icon-error.svg")';
        error.innerHTML= 'Please provide a valid email ';
        

    }
})