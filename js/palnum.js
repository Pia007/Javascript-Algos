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
    const palNumOutcomeHolder = document.getElementById("pnRepoHolder");
    const palNumOutcome = document.getElementById("pnResponse");

    const buttonIsPalNum = document.getElementById("pn-btn");


    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
    buttonIsPalNum.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonIsPalNum.addEventListener('click', isPalNum);

    function hidePalNumOutcome() {
        palNumOutcomeHolder.style.display ="none";
        palNumOutcome.style.display ="none";
    }
    function showPalNumOutcome() {
        palNumOutcomeHolder.style.display ="block";
        palNumOutcome.style.display ="block";
        palNumOutcome.style.color = "#e0e5ec";
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
            showPalNumOutcome();
            palNumOutcome.innerHTML = `${num}`+ " is NOT an integer";
            clearPalNumForm();

        } else if(num >= Math.pow(2, 31)-1 || num <= Math.pow(-2,31)) {
            showPalNumOutcome();
            palNumOutcome.innerHTML = `${num}`+ " is not within the constraints";
            clearPalNumForm();
        }else if(intArr == num ) {
            showPalNumOutcome();
            palNumOutcome.innerHTML = `${num}`+ " is a Palindrome Number";
            clearPalNumForm();
        }else {
            showPalNumOutcome();
            palNumOutcome.innerHTML = `${num}`+ " is NOT a Palindrome Number";
            clearPalNumForm();
        }
    }

});