const input = document.getElementById('username');
const button = document.getElementById('my-button');

button.addEventListener( 'click', say_hello );

function say_hello () {
    alert( 'Hello ' + input.value + '!' );
}
