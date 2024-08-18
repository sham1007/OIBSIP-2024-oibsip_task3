function convertTemperature() {
    let temperature = document.getElementById('temperatureInput').value;
    let unit = document.querySelector('input[name="unit"]:checked');
    let result = document.getElementById('result');

    if (isNaN(temperature)) {
        result.textContent = 'Please enter a valid number';
        return;
    }

    if (!unit) {
        result.textContent = 'Please select a unit';
        return;
    }

    temperature = parseFloat(temperature);
    let convertedTemp;
    let convertedUnit;

    switch (unit.value) {
        case 'Celsius':
            convertedTemp = `Fahrenheit: ${(temperature * 9/5) + 32}°F, Kelvin: ${temperature + 273.15}K`;
            break;
        case 'Fahrenheit':
            convertedTemp = `Celsius: ${(temperature - 32) * 5/9}°C, Kelvin: ${(temperature - 32) * 5/9 + 273.15}K`;
            break;
        case 'Kelvin':
            convertedTemp = `Celsius: ${temperature - 273.15}°C, Fahrenheit: ${(temperature - 273.15) * 9/5 + 32}°F`;
            break;
    }

    result.innerHTML = convertedTemp;
}