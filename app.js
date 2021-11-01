let guessNumber = document.querySelector("#input_guess");
let guessButton = document.querySelector("#input_button");
let result = document.querySelector("#result");
let tryButton = document.querySelector(".tryagain")
let randomNumber = Math.floor(Math.random() * 100 + 1);
let guessCount = 0;

console.log(randomNumber);

guessButton.addEventListener("click", checkNum);

function checkNum() {
    let numb = guessNumber.value;
    guessCount++;
    if (parseInt(numb) === randomNumber) {
        result.innerText = `CONGRATULATİONS!!! 
        You guessed the number right in ${guessCount}.`;
        guessNumber.value = '';
        tryButton.innerText = 'Try Again!';
    } else if (parseInt(numb) < randomNumber) {
        result.innerText = `Sorry! Try a HIGHER number`;
        guessNumber.value = '';
    } else if (parseInt(numb) > randomNumber) {
        result.innerText = `Sorry! Try a LOWER number`;
        guessNumber.value = '';
    } else if (perseInt(numb) < 0 || parseInt(numb) > 100) {
        result.innerText = `Please Write From 1 to 100!`;
        guessNumber.value = '';
    }
};


tryButton.addEventListener("click", () => {
    result.innerText = '';
    guessNumber.value = '';
    guessCount = 0;
    location.reload();
});