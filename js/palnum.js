document.addEventListener("DOMContentLoaded", () => {
    // Cardholder
    const cardHolder = document.getElementById('dashboard-holder');

    // Palindrome Number 
    const palNumHomeBtn = document.getElementById('pn-btn-close');
    const palNumDash = document.getElementById('pal-num');

    // Return to Cardholder
    function showHome() {
        palNumDash.style.display = "none";
        cardHolder.style.display = "block";

    }
    palNumHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    palNumHomeBtn.addEventListener('click', showHome);

    // Palindrome Number Dashboard Elements
    const palNumForm = document.getElementById("pn-form");
    const palNumOutcome = document.getElementById("pnResponse");
    const buttonIsPalNum = document.getElementById("pn-btn");


    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
    buttonIsPalNum.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonIsPalNum.addEventListener('click', isPalNum);

    function hidePalNumOutcome() {
        palNumOutcome.style.display ="none";
    }

    function clearPalNumForm() {
        setTimeout(function() {
            palNumForm.reset();
            hidePalNumOutcome();
        }, 3500);
    };

    function isPalNum(num) {
        var num = document.getElementById("pn-text").value;
        let intArr =  parseInt(num.toString().split("").reverse().join(""))
        // console.log(num);
        // let integer = Number(num);
        console.log(intArr);
        let decimalCheck = /^[+-]?([0-9]+\.[0-9]*|\.[0-9]+)$/
        if (decimalCheck.test(num)) {
            palNumOutcome.style.display = "block";
            palNumOutcome.style.color = "#FF1919";
            palNumOutcome.innerHTML = `${num}`+ " is not an integer";
            clearPalNumForm();

        } else if(num >= Math.pow(2, 31)-1 || num <= Math.pow(-2,31)) {
            palNumOutcome.style.display = "block";
            palNumOutcome.style.color = "#FF1919";
            palNumOutcome.innerHTML = `${num}`+ " is not within the constraints";
            clearPalNumForm();
        }else if(intArr == num ) {
            palNumOutcome.style.display = "block";
            palNumOutcome.style.color = "#2b923c";
            palNumOutcome.innerHTML = `${num}`+ " is a Palindrome Number";
            clearPalNumForm();
        }else {
            palNumOutcome.style.display = "block";
            palNumOutcome.style.color = "#FF1919";
            palNumOutcome.innerHTML = `${num}`+ " is not a Palindrome Number";
            clearPalNumForm();
        }
    }

});