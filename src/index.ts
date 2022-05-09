import { CAPITAL_LETTERS, LETTERS, NUMBERS, SYMBOLS } from "./constants";

const inputPasswordLength =
    document.querySelector<HTMLInputElement>("[data-length]");
const spanCurrentLength = document.querySelector<HTMLSpanElement>(
    "[data-current-length]"
);
const inputCapitalLetters = document.querySelector<HTMLInputElement>(
    "[data-capital-letters]"
);
const inputNumbers = document.querySelector<HTMLInputElement>("[data-numbers]");
const inputSymbols = document.querySelector<HTMLInputElement>("[data-symbols]");
const form = document.querySelector<HTMLFormElement>("form");
const spanPassword = document.querySelector<HTMLSpanElement>("[data-password]");
const button = document.querySelector<HTMLButtonElement>("form button");

inputPasswordLength.addEventListener("input", (e) => {
    const target = <HTMLInputElement>e.target;
    const value = target.value;
    spanCurrentLength.innerText = value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const length = parseInt(inputPasswordLength.value);
    const useCapitals = inputCapitalLetters.checked;
    const useNumbers = inputNumbers.checked;
    const useSymbols = inputSymbols.checked;
    spanPassword.innerText = createPassword(
        length,
        useCapitals,
        useNumbers,
        useSymbols
    );
});

function createPassword(
    length: number,
    useCapitals: boolean,
    useNumbers: boolean,
    useSymbols: boolean
): string {
    let returnable = "";
    let options = LETTERS;
    if (useCapitals) options += CAPITAL_LETTERS;
    if (useNumbers) options += NUMBERS;
    if (useSymbols) options += SYMBOLS;

    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * options.length);
        returnable += options[random];
    }

    return returnable;
}

button.click();
