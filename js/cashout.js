document.getElementById('btn-cashout').addEventListener('click', function(event){
    event.preventDefault();
// console.log('This is Cashout Section');
    const CashoutAmount = document.getElementById('input-Cashout-value').value;
        
    const CashoutPin = document.getElementById('Cashout-pass').value;

    if(CashoutPin === '123'){
        AmountNumberText = document.getElementById('Amount-number').innerText;
        AmountNumber = parseFloat(AmountNumberText);

        CashoutNumber = parseFloat(CashoutAmount);

        TotalAmountNumber = AmountNumber - CashoutNumber;
        document.getElementById('Amount-number').innerText = TotalAmountNumber;
        console.log(TotalAmountNumber);

        
    }
    else{
        alert('Faild to Cashout. Please Try again');
    }
}
)