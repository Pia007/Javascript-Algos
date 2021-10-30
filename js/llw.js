document.addEventListener("DOMContentLoaded", () => {
    // DOM Element
    const cardHolder = document.getElementById('dashboard-holder');
    const llwHomeBtn = document.getElementById('lw-btn-close');
    
    // Two Sum Container
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
                lwOutcome.innerHTML = "Enter only letters";
                lwOutcome.style.color = "#FF1919";
                lwOutcome.style.display = "block";
    
            }else{
                //otherwise, call spin words function
                findLongestWord()
            }
            // clear the form after the function runs
            clearLwForm()
        }   
    }
    function findLongestWord(str) {
        let newArr = document.getElementById("lw-text").value.split(' ');
        let longestWord = 0;

        for(let i = 0; i < newArr.length; i++) {
          if(newArr[i].length > longestWord) {
            let longestWordLength = newArr[i].length;
            longestWord = newArr[i];
            lwOutcome.style.display = "block";
            lwOutcome.style.color = "#2b923c";
            lwOutcome.innerHTML = "The longest word is " + `${longestWordLength}` + " characters long";
          }
        }
        
    }

});
