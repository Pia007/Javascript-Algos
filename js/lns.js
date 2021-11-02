document.addEventListener("DOMContentLoaded", () => {
    // Cardholder
    const cardHolder = document.getElementById('dashboard-holder');

    // Longest Non-Repeating Substring
    const lnsHomeBtn = document.getElementById('lnr-btn-close');
    const lnsDash = document.getElementById('lnr');

    // Return to Cardholder
    function showHome() {
        lnsDash.style.display = "none";
        cardHolder.style.display = "block";

    }
    lnsHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    lnsHomeBtn.addEventListener('click', showHome);

    // DOM Elements
    const lnsForm = document.getElementById("lns-form");
    const lnsOutcome = document.getElementById("lnsResponse");
    const buttonCheckStr = document.getElementById("lns-btn");
    
    
    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
    buttonCheckStr.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonCheckStr.addEventListener('click', checkLsInput);

    function hideLsOutcome() {
        lnsOutcome.style.display ="none";
    }

    // CLEAR Form
    function clearLnsForm() {
        setTimeout(function() {
            lnsForm.reset();
            hideLsOutcome();
        }, 3000);
    };

    // Check format of input
    function checkLsInput(str) {
        var str = document.getElementById("lns-text").value;

        // Loop through the string
        for (let i = 0; i < str.length - 1; i++){
            // regex for letter and special characters or just special characters
            let specialChar = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            
            //regev for letters and numbers or just numbers
            let numbers = /[A-Za-z]\d|\d/

            //check if either regex pattern is present in the string
            if(specialChar.test(str) || numbers.test(str)) {

                // if yes, user gets prompted to enter the correct data type
                lnsOutcome.innerHTML = "Enter only letters";
                lnsOutcome.style.color = "#FF1919";
                lnsOutcome.style.display = "block";
            
            }else{
                //otherwise, call length of string function
                lengthOfLongestSubstring()
            }
            // clear the form after the function runs
            clearLnsForm()
        }   
    }


    function lengthOfLongestSubstring(str) {
        var str = document.getElementById("lns-text").value;
        
        // create a set to store the longest substring
            //Why? JS set cannot contain duplicate elements i.e. it keeps unique elements only.
        let longestStrLength = 0;
        
        
        // Loop through the string
        for (let i = 0; i < str.length; i++) {
            // Use a set to store the string created from the current point
            let stringSet = new Set();

            // Use an internal loop to evaluate the letters starting at the current point
            for (let x = i; x < str.length; x++) {
                // Use has() to check if the current letter exists in the current Set
                if (stringSet.has(str[x])) {
                    // If it does, stop because it already exists in the set
                    break;
                } else {
                    // Otherwise the letter is added to the set because it's not found
                    stringSet = stringSet.add(str[x]);
                    
                   
                }
            }
            
            // assign longestStrLength to the greater numerical value(longestStrLength or stringSet)
            longestStrLength = Math.max(
                longestStrLength,
                stringSet.size
            );
    
            lnsOutcome.innerHTML =  "The length of the longest non-repeating string is " +  `${longestStrLength}`
            lnsOutcome.style.color = "#e0e5ec";
            lnsOutcome.style.display ="block";
        }
        // Outputs the length of the longest non-repeating string
        
    
    };


});