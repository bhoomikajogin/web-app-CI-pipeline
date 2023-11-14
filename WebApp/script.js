document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('myButton');
    var output = document.getElementById('output');

    button.addEventListener('click', function () {
        output.innerHTML = 'Happy Coding :) !';
    });
});
