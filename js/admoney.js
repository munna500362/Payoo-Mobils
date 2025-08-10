document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    const AdmoneyInput = document.getElementById('input-Admoney').value;
         AdmoneyNumber = parseFloat(AdmoneyInput);
         console.log(AdmoneyNumber);
        
    const AdmoneyPassword = document.getElementById('Admoney-pass').value;
        AdmoneyNumberPass= parseFloat(AdmoneyPassword);
        console.log(AdmoneyPassword);
        // console.log(typeof AdmoneyNumberPass);
    

    if(AdmoneyPassword === '123'){
        let Admoney = document.getElementById('Amount-number').innerText;
         CurentMoney = parseFloat(Admoney);
        

        NewBalance = CurentMoney + AdmoneyNumber;
        console.log(NewBalance);
        document.getElementById('Amount-number').innerText = NewBalance;

    }

    else{
        alert("Faild to Admoney. Please try again");
    }
    
})