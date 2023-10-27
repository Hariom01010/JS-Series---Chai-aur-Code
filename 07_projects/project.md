# Projects Related to DOm

### Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-kqqpqk?file=index.html)

### Project 1: Color Changer 🟥
A simple JS project which changes the background color as you click on the color tiles.

JS Code:
```javascript 
const body = document.querySelector('body');

function changeBgGrey() {
  body.style.backgroundColor = 'grey';
}

function changeBgWhite() {
  body.style.backgroundColor = 'white';
}

function changeBgBlue() {
  body.style.backgroundColor = 'blue';
}

function changeBgYellow() {
  body.style.backgroundColor = 'yellow';
}

document.querySelector('#grey').addEventListener('click', changeBgGrey);
document.querySelector('#white').addEventListener('click', changeBgWhite);
document.querySelector('#blue').addEventListener('click', changeBgBlue);
document.querySelector('#yellow').addEventListener('click', changeBgYellow);

```

### Project 2: BMI Generator 🏋️‍♀️
This is a BMI Calculator which helps you calculate your Body Mass Index.

JS Code: 
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let weight = parseInt(document.querySelector('#weight').value);
  let height = parseInt(document.querySelector('#height').value);
  if (height == '' || height < 0 || isNaN(height)) {
    document.querySelector(
      '#results'
    ).innerHTML = `<h3>Please enter valid height</h3>`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    document.querySelector(
      '#results'
    ).innerHTML = `<h3>Please enter valid weight</h3>`;
  } else {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    let result;

    if (bmi < 18.6) {
      result = 'Under Weight';
    } else if (bmi > 18.6 && bmi < 24.9) {
      result = 'Normal Range';
    } else {
      result = 'Over Weight';
    }
    document.querySelector('#results').innerHTML = `<h3>${bmi}: ${result}</h3>`;
  }
});

```


### Project 3: Digital Clock ⌚
A digital clock which shows time in IST zone

JS Code:
```javascript
const clock = document.getElementById('clock');

setInterval(() => {
  let date = new Date();

  clock.innerHTML = `<p>${date.toLocaleTimeString()}</p>`;
});

```


### Project 4: Guess the Number 🔢
A traditional guess the number game where you have 10 tries to guess the number

JS Code:
```javascript
const form = document.querySelector('form');
let guesses = 10;
const randomNumber = Math.floor(Math.random() * 100 + 1);
let prevGuesses = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (guesses > 0) {
    const guess = parseInt(document.querySelector('#guessField').value);
    prevGuesses.push(guess);

    const prevGuessesString = prevGuesses.join();
    document.querySelector('.guesses').innerHTML = `${prevGuessesString}`;

    if (randomNumber == guess) {
      document.querySelector('.lowOrHi').innerHTML = 'CORRECT GUESS';
      document.querySelector('#subt').setAttribute('disabled', 'true');
    } else if (randomNumber > guess) {
      document.querySelector('.lowOrHi').innerHTML = 'GO Higher';
      guesses--;
      document.querySelector(
        '.lastResult'
      ).innerHTML = `<span>${guesses}</span>`;
    } else {
      document.querySelector('.lowOrHi').innerHTML = 'GO Lower';
      guesses--;
      document.querySelector(
        '.lastResult'
      ).innerHTML = `<span>${guesses}</span>`;
    }
  } else {
    document.querySelector('#subt').setAttribute('disabled', 'true');
  }
});


```

### Project 5: Keyboard Check ⌨
A project which shows what key was pressed by the user.

JS Code:
```javascript
const insertDiv = document.getElementById('insert');
const key = document.getElementsByClassName('insertKey');

window.addEventListener('keydown', (e) => {
  key[0].innerHTML = `<td style="border: 1px solid white; margin: 12px; padding: 6px 12px">${e.code}</td><td>${e.keyCode}</td>`;
});

```


### Project 6: Unlimited Color 🧠
A simple project where background changes after every second when you click the button.

JS Code:
```javascript
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let intervalId;

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeColor = function () {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};

const stopChangeColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

start.addEventListener('click', changeColor);
stop.addEventListener('click', stopChangeColor);

```