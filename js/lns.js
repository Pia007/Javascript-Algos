document.addEventListener("DOMContentLoaded", () => {

     // Header Elements
     const info = document.getElementById('info-icon');
     const title = document.getElementById('header-title');
     const clock = document.getElementById('clock');
     const mobileTitle = document.getElementById('mb-header-title');
    //  const menuIconOne = document.getElementById('icon-1');
    //  const menuIconTwo = document.getElementById('icon-2');
    //  const menuIconThree = document.getElementById('icon-3');
    //  const menuText = document.getElementById('sb-btn-text');

    // Cardholder
    const cardHolder = document.getElementById('dg-holder');
    const mainDash = document.getElementById('algo-dash');

    // Longest Non-Repeating Substring
    const lnsHomeBtn = document.getElementById('lnr-btn-close');
    const lnsDash = document.getElementById('lnr');

    // Return to Cardholder
    function showHome() {
        lnsDash.style.display = "none";
        mainDash.style.display = "none";
        cardHolder.style.display = "block";
        info.style.color = '#c32abbc9';  
        title.style.color= '#c32abbc9';  
        clock.style.color= '#c32abbc9';
        mobileTitle.style.color= '#c32abbc9';
        // menuText.style.color= '#c32abbc9';
        // menuIconOne.style.fill= '#c32abbc9';
        // menuIconTwo.style.fill= '#c32abbc9';
        // menuIconThree.style.fill= '#c32abbc9';
        

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
    // reset the output 
    function hideLsOutcome() {
        lnsOutcome.style.display ="none";
        buttonCheckStr.style.display = "block";
    }
    // show the output text
    function showLsOutcome() {
        lnsOutcome.style.display ="block";
        lnsOutcome.style.color = "#e0e5ec";
        buttonCheckStr.style.display = "none";
    };
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
        if (str != ""){
            for (let i = 0; i < str.length - 1; i++){
                // regex for letter and special characters or just special characters
                let specialChar = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
                
                //regev for letters and numbers or just numbers
                let numbers = /[A-Za-z]\d|\d/

                //check if either regex pattern is present in the string
                if(specialChar.test(str) || numbers.test(str)) {

                    // if yes, user gets prompted to enter the correct data type
                    lnsOutcome.innerHTML = "Enter only letters";
                    showLsOutcome();
                
                }else{
                    //otherwise, call length of string function
                    getLongestSubstring()
                }
                // clear the form after the function runs
                clearLnsForm()
            } 
        }else{
            showLsOutcome();
            lnsOutcome.innerHTML = "0";
            clearLnsForm()
        }  
    }


    function getLongestSubstring(str) {
        var str = document.getElementById("lns-text").value;
        
        
        let i;
        let strLength = str.length;
    
        // assign the starting point of current substring.
        let currentStart = 0;
    
        // assign the length of current substring.
        let currentLength;
    
        // assign the max length substring without repeating characters.
        let maxLength = 0;
    
        // assign the starting index of max length substring.
        let maxLengthStart;
    
        // create a Hash Map to store last instance of each
            // visited letter.
        let visitedMap = new Map();
    
        // index the last instance of the first letter at 0;
        visitedMap.set(str[0], 0);
    
        for (let i = 1; i < strLength; i++) {
    
            
            // use Map.has() to check if the letter is NOT in the visited map,
                // if true, use Map.set() to add it to the visited map.
            if (!visitedMap.has(str[i])) {
                visitedMap.set(str[i], i) ;
    
            }else if (visitedMap.get(str[i]) >= currentStart){
                // if the letter IS in visited map, then
                    // use Map.get() to check if is was before
                    // or after the start of the current substring.

                // find length of current substring
                currentLength = i - currentStart;
                    if (maxLength < currentLength) {
                        //if the maxLength is less than currentLength,
                            // update maxLength and maxLengthStart
                        maxLength = currentLength;
                        maxLengthStart = currentStart;
                    }
                // update currentStart to the last instance of
                    // the current letter.
                currentStart = visitedMap.get(str[i]) + 1;
            }
            // Update last instance of current letter in visited map.
            visitedMap.set(str[i], i);
        }
    
        // Compare length of last substring with maxLength 
            // update maxLength and maxLengthStart
        if (maxLength < i - currentStart) {
            maxLength = i - currentStart;
            maxLengthStart = currentStart;
        }
    
        // longest non-repeating substring is str[maxLengthStart] to
            // to str[maxLengthStart+maxLength-1]
        // use substr() to extract the substring and
        // get the length of the substring
        
        
        let longestUniqueSub =  str.substr(maxLengthStart,maxLength);
        let lengthOfUniqueSub = longestUniqueSub.length;

        showLsOutcome();
        lnsOutcome.innerHTML = "'"+ longestUniqueSub + "'" + " is " + lengthOfUniqueSub + " letters long" 
    }
    clearLnsForm();
});