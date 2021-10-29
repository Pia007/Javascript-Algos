document.addEventListener("DOMContentLoaded", () => {
    // Cardholder
    const cardHolder = document.getElementById('dashboard-holder');

    // Reverse an Integer
    const revIntHomeBtn = document.getElementById('rev-int-btn-close');
    const revIntDash = document.getElementById('reverse-int');

    // Return to Cardholder
    function showHome() {
        revIntDash.style.display = "none";
        cardHolder.style.display = "block";

    }
    revIntHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    revIntHomeBtn.addEventListener('click', showHome);


    // Dom elements
    const revIntForm = document.getElementById("rev-int-form");
    const revIntOutcome = document.getElementById("revResponse");
    const buttonRevInt = document.getElementById("rev-int-btn");


    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
    buttonRevInt.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonRevInt.addEventListener('click', reverseInt);

    // Resetting the output text
    function hideRevIntOutcome() {
        revIntOutcome.style.display ="none";
    }

    // Clearing the form
    function clearRevIntForm() {
        setTimeout(function() {
            revIntForm.reset();
            hideRevIntOutcome();
        }, 3500);
    };

    // Reverse the integer
    function reverseInt(num) {
        // Get the input value
        var num = document.getElementById("rev-int-text").value;

        // num = Number(num);

        // Check if the input is empty
        let intArr =  parseInt(num.toString().split("").reverse().join(""))
        // console.log(num);
        // let integer = Number(num);
        console.log(intArr);
        let decimalCheck = /^[+-]?([0-9]+\.[0-9]*|\.[0-9]+)$/
        if (num === "") {
            revIntOutcome.style.display = "block";
            revIntOutcome.style.color = "#FF1919";
            revIntOutcome.innerHTML = "Please enter a number";
            clearRevIntForm();
        } else if (num == "0"){
            revIntOutcome.style.display = "block";
            revIntOutcome.style.color = "#2b923c";
            revIntOutcome.innerHTML = `${num}`;
            clearRevIntForm();
        }else if (decimalCheck.test(num)) {
            revIntOutcome.style.display = "block";
            revIntOutcome.style.color = "#FF1919";
            revIntOutcome.innerHTML = `${num}`+ " is not an integer";
            clearRevIntForm();

        } else if(num >= Math.pow(2, 31)-1 || num <= Math.pow(-2,31)) {
            revIntOutcome.style.display = "block";
            revIntOutcome.style.color = "#FF1919";
            revIntOutcome.innerHTML = `${num}`+ " is not within the constraints";
            clearRevIntForm();
        }else if(num < 0 ) {
            let negInt = -Math.abs(intArr)
            revIntOutcome.style.display = "block";
            revIntOutcome.style.color = "#2b923c";
            revIntOutcome.innerHTML = `${negInt}`;
            clearRevIntForm();
        }else {
            revIntOutcome.style.display = "block";
            revIntOutcome.style.color = "#2b923c";
            revIntOutcome.innerHTML = `${intArr}`;
            clearRevIntForm();
        }
        // Consider -/+ inputs using ternay operator
        // If the user intArr is < 0, place - in front of absolute value of input and return the input
        // return intArr<0?-Math.abs(num):num

    }
});