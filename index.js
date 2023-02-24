// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded!")
    changeText();
});

const changeText = () => document.querySelector('#text').textContent = "This is really cool!";