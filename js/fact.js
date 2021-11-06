document.addEventListener("DOMContentLoaded", () => {

    // Header Elements
    const menu = document.getElementById('menu-icon');
    const title = document.getElementById('header-title');
    const clock = document.getElementById('clock');
    const mobileTitle = document.getElementById('mb-header-title');
    
    // Menu Elements
    const menuIconOne = document.getElementById('icon-1');
    const menuIconTwo = document.getElementById('icon-2');
    const menuIconThree = document.getElementById('icon-3');
    const menuText = document.getElementById('sb-btn-text');

    // Cardholder
    const cardHolder = document.getElementById('dg-holder');

    // Factorial  Container
    const factHomeBtn = document.getElementById('fact-btn-close');
    const factDash = document.getElementById('factorialize');

    // Return to Cardholder
    function showHome() {
        factDash.style.display = "none";
        cardHolder.style.display = "block";
        menu.style.fill = '#c32abbc9';  
        title.style.color= '#c32abbc9';  
        clock.style.color= '#c32abbc9';
        mobileTitle.style.color= '#c32abbc9';
        menuText.style.color= '#c32abbc9';
        menuIconOne.style.fill = '#c32abbc9';
        menuIconTwo.style.fill = '#c32abbc9';
        menuIconThree.style.fill = '#c32abbc9';

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
    function showFactOutcome() {
        factOutcome.style.color = "#e0e5ec";
        factOutcome.style.display ="block";
        
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
        let fact = 1
        
        
        if (integer === 1 || integer === 0) {
            showFactOutcome()
            factOutcome.innerHTML ="The factorial of " +`${integer}`+ " is 1";
            //clearFactForm();

        }else if (integer < 0 && decimalCheck.test(integer)) {
            showFactOutcome()
            factOutcome.innerHTML = `${integer}`+ " is NOT an integer";
            //clearFactForm();
        }else if (integer < 0) {
            showFactOutcome()
            factOutcome.innerHTML = "The factorial of " +`${integer}`+ " is UNDEFINED";
            //clearFactForm();
        }else if (decimalCheck.test(integer)) {
            showFactOutcome()
            factOutcome.innerHTML = `${integer}` + " is NOT a whole number";
            //clearFactForm();
        } else {
            for(let i = 1; i <= integer; i++) {
                fact *= i;
                showFactOutcome()
                factOutcome.innerHTML = `${fact}` + " is the factorial of " + `${integer}`;
                
            }
        }
        clearFactForm();
    }

});