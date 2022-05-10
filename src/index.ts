import { CAPITAL_LETTERS, LETTERS, NUMBERS, SYMBOLS } from "./constants";

const spanPassword = document.querySelector<HTMLSpanElement>("[data-password]");
const form = document.querySelector<HTMLFormElement>("form");
const inputLength = document.querySelector<HTMLInputElement>("[data-length]");
const spanLength = document.querySelector<HTMLSpanElement>(
    "[data-current-length]"
);
const inputCapitalLetters = document.querySelector<HTMLInputElement>(
    "[data-capital-letters]"
);
const inputNumbers = document.querySelector<HTMLInputElement>("[data-numbers]");
const inputSymbols = document.querySelector<HTMLInputElement>("[data-symbols]");
const button = form.querySelector<HTMLButtonElement>("button");

inputLength.addEventListener("input", (e) => {
    const target = <HTMLInputElement>e.target;
    spanLength.innerText = target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    createAndSetNewPassword();
});

function createAndSetNewPassword() {
    console.log(inputLength.value), (spanPassword.innerText = getNewPassword());
    console.log(spanPassword.innerHTML.length);
}

function getNewPassword(): string {
    let returnable = "";
    const length = parseInt(inputLength.value);
    const useCapitalLetters = inputCapitalLetters.checked;
    const useNumbers = inputNumbers.checked;
    const useSymbols = inputSymbols.checked;
    let pool = LETTERS;
    if (useCapitalLetters) pool += CAPITAL_LETTERS;
    if (useNumbers) pool += NUMBERS;
    if (useSymbols) pool += SYMBOLS;

    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * pool.length);
        returnable += pool[random];
    }

    return returnable;
}

createAndSetNewPassword();
