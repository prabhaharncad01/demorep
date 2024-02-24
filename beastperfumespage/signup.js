const form =document.querySelector('#form');
const username =document.querySelector('#username');
const email =document.querySelector('#email');
const password =document.querySelector('#password');
const cpassword =document.querySelector('#cpassword');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateinputs();
})

function validateinputs(){
    const usernameVal= username.value.trim();
    const emailVal= email.value.trim();
    const passwordVal= password.value.trim();
    const cpasswordVal1= cpassword.value.trim();
}



function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;

    inputGroup.classList.add('.error')
    inputGroup.classList.remove('.error')


}
function setSuccess(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText ='';

    inputGroup.classList.add('.success')
    inputGroup.classList.remove('.error')


}

const ValidateEmail=(email)=> 
{
return String(email)
.toLowerCase()
.match (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}$//^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}$//^[^\s@]+@[^\s@]+\.[^\s@]+$/);

};