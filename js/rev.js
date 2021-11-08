document.addEventListener("DOMContentLoaded", () => {

    // Header Elements
    const info = document.getElementById('info-icon');
    const title = document.getElementById('header-title');
    const clock = document.getElementById('clock');
    const mobileTitle = document.getElementById('mb-header-title');
    // const menuIconOne = document.getElementById('icon-1');
    // const menuIconTwo = document.getElementById('icon-2');
    // const menuIconThree = document.getElementById('icon-3');
    // const menuText = document.getElementById('sb-btn-text');

    // Cardholder
    const cardHolder = document.getElementById('dg-holder');
    const mainDash = document.getElementById('algo-dash');

    // Reverse an Integer
    const revIntHomeBtn = document.getElementById('rev-int-btn-close');
    const revIntDash = document.getElementById('reverse-int');

    // Return to Cardholder
    function showHome() {
        revIntDash.style.display = "none";
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
        buttonRevInt.style.display = "block";
    }
    // Showing the output text
    function showRevIntOutcome() {
        revIntOutcome.style.display ="block";
        revIntOutcome.style.color = "#e0e5ec";
        buttonRevInt.style.display = "none";
    }
    // Clearing the form
    function clearRevIntForm() {
        setTimeout(function() {
            revIntForm.reset();
            hideRevIntOutcome();
        }, 3000);
    };

    // Reverse the integer
    function reverseInt(num) {
        // Get the input value
        var num = document.getElementById("rev-int-text").value;

        // Check if the input is empty
        let intArr =  parseInt(num.toString().split("").reverse().join(""))
        
        // regex to check for non whole numbers
        let decimalCheck = /^[+-]?([0-9]+\.[0-9]*|\.[0-9]+)$/
        
        // check for input conditions and challenge constraints
        if (num === "") {
            showRevIntOutcome();
            revIntOutcome.innerHTML = "Please enter a number";
            
        } else if (num == "0"){
            showRevIntOutcome();
            revIntOutcome.innerHTML = `${num}`;
            
        }else if (decimalCheck.test(num)) {
            showRevIntOutcome();
            revIntOutcome.innerHTML = `${num}`+ " is not an integer";
           

        } else if(num >= Math.pow(2, 31)-1 || num <= Math.pow(-2,31)) {
            showRevIntOutcome();
            revIntOutcome.innerHTML = `${num}`+ " is not within the constraints";
            
        }else if(num < 0 ) {
            // Consider -/+ inputs using
            let negInt = -Math.abs(intArr)

            showRevIntOutcome();
            revIntOutcome.innerHTML = `${negInt}`;
            
        }else {
            showRevIntOutcome
            let revInt = Math.abs(intArr)
            revIntOutcome.innerHTML = `${revInt}`;
            
        }
        clearRevIntForm();
    }
});