function convertTemperature() {
    var celsiusInput = document.getElementById("celsius").value;
    var result = document.getElementById("result");
    
    if (!isNaN(celsiusInput)) {
        var fahrenheit = (parseFloat(celsiusInput) * 9 / 5) + 32;
        result.innerHTML = celsiusInput + "°C = " + fahrenheit.toFixed(2) + "°F";
    } else {
        result.innerHTML = "Please enter a valid number";
    }
}
