document.addEventListener("DOMContentLoaded", () => {
    // Header Elements
    const info = document.getElementById('info-icon');
    const title = document.getElementById('header-title');
    const clock = document.getElementById('clock');
    const mobileTitle = document.getElementById('mb-header-title');
    
    // Body Element
    const cardHolder = document.getElementById('dg-holder');
    const mainDash = document.getElementById('algo-dash');
    const twoHomeBtn = document.getElementById('ts-btn-close');
    
    // Two Sum Container
    const twoDash = document.getElementById('two-sum');

    
    function showHome() {
        twoDash.style.display = "none";
        mainDash.style.display = "none";
        cardHolder.style.display = "block";
        info.style.color= '#c32abbc9';  
        title.style.color= '#c32abbc9';  
        clock.style.color= '#c32abbc9';
        mobileTitle.style.color= '#c32abbc9';
    }
    twoHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    twoHomeBtn.addEventListener('click', showHome);


    // DOM Elements
    const tsForm = document.getElementById("ts-form");
    const sumOutcome = document.getElementById("sumResponse");
    const buttonSum = document.getElementById("check-sum");


    // Hides outcome when form is cleared
    function hideOutcome() {
        sumOutcome.style.display ="none";
        buttonSum.style.display = "block";
    }
    function showOutcome() {
        sumOutcome.style.display ="block";
        sumOutcome.style.color = "#e0e5ec";
        buttonSum.style.display = "none";
    }

    // Reset Form
    function clearTsForm() {
        setTimeout(function(e) {
            tsForm.reset();
            hideOutcome();
        }, 3000);
    };

    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
    // Check It Button
    buttonSum.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonSum.addEventListener('click', checkTsInput);

    // Check if input is only numbers
    function checkTsInput(arr) {
        arr = document.getElementById("randomNumbers").value;
        // Loop through the arr
        for (let i = 0; i < arr.length - 1; i++){

            // regex for letter and special characters or just letters or just special characters
            let specialCases = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[A-Za-z]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            
            //if the array contains letters or special characters
            if(specialCases.test(arr)) {

                // if yes, user gets prompted to enter the correct data type
                showOutcome();
                sumOutcome.innerHTML = "Enter only numbers";
                
    
            }else{
                //otherwise, check if target is a number
                checkTarget()
            }
            // clear the form after the function runs
            clearTsForm()
        }   
    }
    function checkTarget(target) {
        target = document.getElementById("targetNumber").value;

        // regex for letter and special characters or just special characters
        let specialCases = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[A-Za-z]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            
        // if the target contains letters or special characters
        if(specialCases.test(target)) {
            showOutcome();
            sumOutcome.innerHTML = "Enter a number";
            
        } else{
        //otherwise, call length of twoSum function
            twoSum()
        }
        // clear the form after the function runs
        clearTsForm()
    }

    // Two Sum function        
    function twoSum(arr, target) {
        // var twoSum = true
        // get value of target 
        target = document.getElementById("targetNumber").value;

        // get DOM input and separates at each space between numbers
        arr = document.getElementById("randomNumbers").value.split(" ");

        // makes sure array is numbers
        arr = arr.map(Number)

        // create an object/hash map to store key-value pairs
        let numsObj = {};

        // use a loop to check if the two numbers are present
        for (let i = 0; i < arr.length; i++) {
            //assign someNum to the first number found in the array
            let someNum = arr[i];

            // find the second value and assign it to numDifference
            let numDifference = target - someNum;
            
            // in the object, if the value of the first number is in the object, its NOT undefined
            if (numsObj[someNum] !== undefined ) {
                //get the index of the first number from the original array and assign it
                let indexOne = numsObj[someNum];
                // get the index of the second number and assign it
                let indexTwo = i;
                
                // the two sums were found
                showOutcome();
                sumOutcome.innerHTML = `${target}` + " is the sum of the values at indices ["+`${indexOne}`+", " +`${indexTwo}`+"]."
                break;
            }else { 
                // the two sums were not found
                numsObj[numDifference] = i
                let newArr = arr.join(", ")
                showOutcome();
                sumOutcome.innerHTML = "The sum of  " + `${target}` + " is NOT in [" + `${newArr}` + "]";
                
            }
            clearTsForm()
        }
    } 
});