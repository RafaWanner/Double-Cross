function format(inputText) {
    var outputText = inputText.value;
    outputText = outputText.replace(/\s+/g, ''); // teste de tirar o espaço

    return outputText;
}

const buttonSubmit = document.querySelector('.buttonSubmit');
const inputText = document.querySelector('.inputText');
const outputText = document.querySelector('.outputText');

(buttonSubmit === null) ? console.log("deu null") : buttonSubmit.addEventListener('click', function() {
    (outputText === null) ? null : outputText.textContent = format(inputText);
});