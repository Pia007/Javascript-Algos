document.addEventListener("DOMContentLoaded", () => {
    // DOM Element
    const cardHolder = document.getElementById('dashboard-holder');
    const llwHomeBtn = document.getElementById('lw-btn-close');
    
    // Longest Word Container
    const llwDash = document.getElementById('longest-word');

    
    function showHome() {
        llwDash.style.display = "none";
        cardHolder.style.display = "block";

    }
    llwHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    llwHomeBtn.addEventListener('click', showHome);

    // DOM Elements
    const lwForm = document.getElementById("lw-form");
    const lwOutcome = document.getElementById("lwResponse");
    const buttonCheckLongest = document.getElementById("lw-check-string");


    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
    buttonCheckLongest.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonCheckLongest.addEventListener('click', checkLwInput);

    function hideLwOutcome() {
        lwOutcome.style.display ="none";
    }

    function showLwOutcome() {
        lwOutcome.style.display = "block";
        lwOutcome.style.color = "#35c048";
    }
    function clearLwForm() {
        setTimeout(function() {
            lwForm.reset();
            hideLwOutcome();
        }, 5000);
    };

    function checkLwInput(str) {
        var str = document.getElementById("lw-text").value;

        // Loop through the string
        for (let i = 0; i < str.length - 1; i++){
            // regex for letter and special characters or just special characters
            let specialChar = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            
            //regev for letters and numbers or just numbers
            let numbers = /[A-Za-z]\d|\d/

            //check if either regex pattern is present in the string
            if(specialChar.test(str) || numbers.test(str)) {

                // if yes, user gets prompted to enter the correct data type
                showLwOutcome();
                lwOutcome.innerHTML = "Enter only letters";
                
    
            }else{
                //otherwise, call spin words function
                findLongestWord()
            }
            // clear the form after the function runs
            clearLwForm()
        }   
    }
    function findLongestWord(str) {
        let strArr = document.getElementById("lw-text").value.split(' ');
        let longestWordLength = 0;
        
        for(let i = 0; i < strArr.length; i++) {
          if(strArr[i].length > longestWordLength) {
            longestWordLength = strArr[i].length;
            theWord = strArr[i]
            
            showLwOutcome();
            lwOutcome.innerHTML = "The longest word is " + "'" +`${theWord}`+"'" + " and it's length is  " + `${longestWordLength}`;
          }
        }
        
    }

});
