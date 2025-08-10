document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    const AdmoneyInput = document.getElementById('input-Admoney').value;
         AdmoneyNumber = parseFloat(AdmoneyInput);
        
    const AdmoneyPassword = document.getElementById('Admoney-pass').value;
        AdmoneyNumberPass= parseFloat(AdmoneyPassword);
        // console.log(typeof AdmoneyNumberPass);
    

    if(AdmoneyPassword === '12345'){
        Admoney = document.getElementById('Amount-number').innerText;
         CurentMoney = parseFloat(Admoney);
        

        NewBalance = CurentMoney + AdmoneyNumber;
        
        document.getElementById('Amount-number').innerText = NewBalance;

    }

    else{
        alert("Faild to Admoney. Please try again");
    }
    
})