document.addEventListener("DOMContentLoaded", () => {
    // Cardholder
    const cardHolder = document.getElementById('dashboard-holder');

    // Factorial  Container
    const factHomeBtn = document.getElementById('fact-btn-close');
    const factDash = document.getElementById('factorialize');

    // Return to Cardholder
    function showHome() {
        factDash.style.display = "none";
        cardHolder.style.display = "block";

    }
    factHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    factHomeBtn.addEventListener('click', showHome);

    // Factorialize Dashboard Elements
    const factForm = document.getElementById("fact-form");
    const factOutcome = document.getElementById("factResponse");
    const buttonGetFact = document.getElementById("fact-btn");


    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
    buttonGetFact.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonGetFact.addEventListener('click', Factorial);

    function hideFactOutcome() {
        factOutcome.style.display ="none";
    }

    function clearFactForm() {
        setTimeout(function() {
            factForm.reset();
            hideFactOutcome();
        }, 3500);
    };

    function Factorial() {
        var num = document.getElementById("fact-text").value;
        console.log(num);
        let integer = Number(num);
        console.log(integer);

        let decimalCheck = /^[+-]?([0-9]+\.[0-9]*|\.[0-9]+)$/
        let base = 1
        
        
        if (integer === 1 || integer === 0) {
            factOutcome.style.display = "block";
            factOutcome.style.color = "#2b923c";

            factOutcome.innerHTML ="The factorial of " +`${integer}`+ " is 1";
            clearFactForm();

        }else if (integer < 0 && decimalCheck.test(integer)) {
            factOutcome.style.display = "block";
            factOutcome.style.color = "#FF1919";
            factOutcome.innerHTML = `${integer}`+ " is negative and not an integer";
            clearFactForm();
        }else if (integer < 0) {
            factOutcome.style.display = "block";
            factOutcome.style.color = "#2b923c";
            factOutcome.innerHTML = "The factorial of " +`${integer}`+ " is -1";
            clearFactForm();
        }else if (decimalCheck.test(integer)) {
            factOutcome.style.display = "block";
            factOutcome.style.color = "#FF1919";
            factOutcome.innerHTML = `${integer}` + " is not a whole number";
            clearFactForm();
        } else {
            for(let i = 1; i <= integer; i++) {
                base *= i;
                factOutcome.style.display = "block";
                factOutcome.style.color = "#2b923c";
                factOutcome.innerHTML = `${base}` + " is the factorial of " + `${integer}`;
                clearFactForm();
            }
        }
    }

});