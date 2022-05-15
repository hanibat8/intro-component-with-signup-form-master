const form=document.getElementsByTagName('form')[0];

const firstName=document.getElementById('first-name');
const lastName=document.getElementById('last-name');
const email=document.getElementById('email');
const pass=document.getElementById('pass');

const firstError=document.querySelector('#first-name + span.error');
const lastError=document.querySelector('#last-name + span.error');
const emailError=document.querySelector('#email + span.error');
const passError=document.querySelector('#pass + span.error');

email.addEventListener('input',function(){
    if(email.validity.valid){
        emailError.innerHTML='';
        emailError.classList='error';
    }
    else{
        showError();
    }
});

firstName.addEventListener('input',function(){
    if(firstName.validity.valid){
        firstError.innerHTML='';
        firstError.classList='error';
    }
});

lastName.addEventListener('input',function(){
    if(lastName.validity.valid){
        lastError.innerHTML='';
        lastError.classList='error';
    }
});

pass.addEventListener('input',function(){
    if(pass.validity.valid){
        passError.innerHTML='';
        passError.classList='error';
    }
});

form.addEventListener('submit',function(event){
    if(!email.validity.valid){
        showError();
        if(email.validity.valueMissing){
            emailError.textContent='This field is required.'
            email.className='active';
            emailError.className = 'error active';
        }
        event.preventDefault();
    }

    if(!firstName.validity.valid){
        if(firstName.validity.valueMissing){
            firstError.textContent='This field is required.'
            firstName.className='active';
             firstError.className = 'error active';
         }
        event.preventDefault();
    }

    if(!lastName.validity.valid){
        if(lastName.validity.valueMissing){
            lastError.textContent='This field is required.'
            lastName.className='active';
             lastError.className = 'error active';
         }
        event.preventDefault();
    }

    if(!pass.validity.valid){
        if(pass.validity.valueMissing){
            passError.textContent='This field is required.'
             pass.className='active';
             passError.className = 'error active';
         }    
        event.preventDefault();
    }
});

function showError(){
    if(email.validity.typeMismatch){
        emailError.textContent='Please provide a valid email address.'
        emailError.className = 'error active';
        email.className='active';
    }
}