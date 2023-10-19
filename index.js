document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.querySelector('.celsius input');
    const fahrenheitInput = document.querySelector('.fahrenheit input');
    const kelvinInput = document.querySelector('.kelvin input');
    const clearButton = document.querySelector('.button button');

    function roundNumber(number) {
        return Math.round(number * 100) / 100;
    }

    function convertCelsius() {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            const kelvin = celsius + 273.15;
            fahrenheitInput.value = roundNumber(fahrenheit);
            kelvinInput.value = roundNumber(kelvin);
        } else {
            fahrenheitInput.value = '';
            kelvinInput.value = '';
        }
    }


    function convertFahrenheit() {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            const celsius = (fahrenheit - 32) * 5/9;
            const kelvin = (fahrenheit - 32) * 5/9 + 273.15;
            celsiusInput.value = roundNumber(celsius);
            kelvinInput.value = roundNumber(kelvin);
        } else {
            celsiusInput.value = '';
            kelvinInput.value = '';
        }
    }


    function clearInputs() {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        kelvinInput.value = '';
    }

    celsiusInput.addEventListener('input', convertCelsius);
    fahrenheitInput.addEventListener('input', convertFahrenheit);
    kelvinInput.addEventListener('input', function() {
        const kelvin = parseFloat(kelvinInput.value);
        if (!isNaN(kelvin)) {
            const celsius = kelvin - 273.15;
            const fahrenheit = (celsius * 9/5) + 32;
            celsiusInput.value = roundNumber(celsius);
            fahrenheitInput.value = roundNumber(fahrenheit);
        } else {
            celsiusInput.value = '';
            fahrenheitInput.value = '';
        }
    });
    clearButton.addEventListener('click', clearInputs);
});
