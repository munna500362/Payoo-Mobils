

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('This is Login Button');

    const AccountNumber = document.getElementById('Input-mobile-number').value;
    // console.log(AccountNumber);

    const AccountPin = document.getElementById('Input-pin-number').value;
    // console.log(AccountPin);

    if(AccountNumber =='12345' && AccountPin=='123'){
        window.location.href = "account.html";
    }
    else{
        alert("Kiccu tik nai")
    }
})