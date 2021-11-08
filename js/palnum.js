document.addEventListener("DOMContentLoaded", () => {
    //  BODY ELEMENTS

     // Header Elements
     const info = document.getElementById('info-icon');
     const title = document.getElementById('header-title');
     const clock = document.getElementById('clock');
     const mobileTitle = document.getElementById('mb-header-title');
    //  const menuIconOne = document.getElementById('icon-1');
    // const menuIconTwo = document.getElementById('icon-2');
    // const menuIconThree = document.getElementById('icon-3');
    // const menuText = document.getElementById('sb-btn-text');


    // Cardholder
    const cardHolder = document.getElementById('dg-holder');
    const mainDash = document.getElementById('algo-dash');

    // Palindrome Number 
    const palNumHomeBtn = document.getElementById('pn-btn-close');
    const palNumDash = document.getElementById('pal-num');

    // Return to Cardholder
    function showHome() {
        palNumDash.style.display = "none";
        mainDash.style.display = "none";
        cardHolder.style.display = "block";
        info.style.color = '#c32abbc9';  
        title.style.color= '#c32abbc9';  
        clock.style.color= '#c32abbc9';
        mobileTitle.style.color= '#c32abbc9';
        // menuText.style.color= '#c32abbc9';
        // menuIconOne.style.fill = '#c32abbc9';
        // menuIconTwo.style.fill = '#c32abbc9';
        // menuIconThree.style.fill = '#c32abbc9';


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
        buttonIsPalNum.style.display ="block";
    }
    function showPalNumOutcome() {
        palNumOutcomeHolder.style.display ="block";
        palNumOutcome.style.display ="block";
        palNumOutcome.style.color = "#e0e5ec";
        buttonIsPalNum.style.display ="none";
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
        
        // regex for non-whole numbers
        let decimalCheck = /^[+-]?([0-9]+\.[0-9]*|\.[0-9]+)$/
    
        // check for input conditions and challenge constraints
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