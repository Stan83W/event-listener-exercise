// TODO: React to a click on the button
// Open the index.html file. You can see we are using Bootstrap.
// Also, there is a big button in the <body />.
// Your goal is to implement some JavaScript in the app.js file.
// You should react to the click on the blue button.
// When clicked, we want:
// The button to be disabled. This can be done by adding the .disabled class.
// The button text to change from "Click me!" to "Bingo!"


const button = document.querySelector('#clickme');
const audio = new Audio('sound.mp3');

button.addEventListener('click', (e) => {
  e.currentTarget.classList.add('disabled');
  e.currentTarget.innerText = 'Bingo!';
  audio.play();
});
