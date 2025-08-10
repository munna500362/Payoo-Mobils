const Admoney = document.getElementById('admoney-btn');



document.getElementById('cashout-btn').addEventListener('click', function(){
    document.getElementById('cashout-form').classList.remove('hidden');
    document.getElementById('admoney-form').classList.add('hidden');
    
})

// console.log('This is Fiture file');

document.getElementById('admoney-btn').addEventListener('click', function(){
    document.getElementById('admoney-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    
})