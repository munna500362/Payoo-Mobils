

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log('This is Login Button');

    const number = document.getElementById('data').value;
    console.log(number);

})