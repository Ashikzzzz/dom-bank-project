document.getElementById('submit-btn').addEventListener('click',function(){
    // getting email input value 
    const emailField = document.getElementById('email-field');
    const email = emailField.value ;
    // console.log(email)

//   getting password input value 
const passField = document.getElementById('pass-field');
const password= passField.value ;
// console.log(password)
if(email==='ashikuremon5@gmail.com'&& password==='secret'){
   window.location.href='bank.html';
}
else{
    alert('this is not your account')
}

})