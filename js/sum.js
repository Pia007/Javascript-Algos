document.addEventListener("DOMContentLoaded", () => {
    // Header Elements
    const info = document.getElementById('info-icon');
    const title = document.getElementById('header-title');
    const clock = document.getElementById('clock');
    const mobileTitle = document.getElementById('mb-header-title');
    
    // Body Element
    const cardHolder = document.getElementById('dg-holder');
    const mainDash = document.getElementById('algo-dash');
    const sumAllHomeBtn = document.getElementById('sm-all-btn-close');
    
    // Two Sum Container
    const sumAllDash = document.getElementById('sm-all');

    
    function showHome() {
        sumAllDash.style.display = "none";
        mainDash.style.display = "none";
        cardHolder.style.display = "block";
        info.style.color= '#c32abbc9';  
        title.style.color= '#c32abbc9';  
        clock.style.color= '#c32abbc9';
        mobileTitle.style.color= '#c32abbc9';
    }
    sumAllHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    sumAllHomeBtn.addEventListener('click', showHome);


    // DOM Elements
    const sumAllForm = document.getElementById("sm-all-form");
    const sumAllOutcome = document.getElementById("sumAllResponse");
    const buttonSumAll = document.getElementById("sm-all-btn");
    
    // Hides outcome when form is cleared
    function hideSumAllOutcome() {
        sumAllOutcome.style.display ="none";
        buttonSumAll.style.display = "block";
    }
    function showSumAllOutcome() {
        sumAllOutcome.style.display ="block";
        sumAllOutcome.style.color = "#e0e5ec";
        buttonSumAll.style.display = "none";
    }

    // Reset Form
    function clearSumAllForm() {
        setTimeout(function(e) {
            sumAllForm.reset();
            hideSumAllOutcome();
        }, 3000);
    };

    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
    // Check It Button
    buttonSumAll.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonSumAll.addEventListener('click', checkSumAllInput);


    // const sqrInput = document.getElementById("sm-all-text").value;
    // const sqrInputNum = parseInt(sqrInput);
    function checkSumAllInput(arr) {
        arr = document.getElementById("sm-all-text").value;
    
        for (let i = 0; i < arr.length - 1; i++){

            // regex for letter and special characters or just letters or just special characters
            let specialCases = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[A-Za-z]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            
            //if the array contains letters or special characters
            if(specialCases.test(arr)) {

                // if yes, user gets prompted to enter the correct data type
                showSumAllOutcome();
                sumAllOutcome.innerHTML = "Enter only numbers";
                
    
            }else{
                //otherwise, check if target is a number
                sumAll();
            }
            // clear the form after the function runs
            clearSumAllForm();
        }   
    }
    function sumAll(arr) {
        // get DOM input and separates at each space between numbers
        arr = document.getElementById("sm-all-text").value.split(" ");

        // makes sure array is numbers
        arr = arr.map(Number)

        // find the largest number in the array
        let max = Math.max(arr[0], arr[1]);
        // find the smallest number in the array
        let min = Math.min(arr[0], arr[1]);
        // sum between the min and max
        let sum = 0;
        for (let i = min; i <= max; i++) {
            sum += i;
        }
        showSumAllOutcome();
        sumAllOutcome.innerHTML = sum + " is the sum of all numbers between " + min + " and " + max;
        clearSumAllForm();
    }
    

});