document.addEventListener("DOMContentLoaded", () => {
    // DOM Element
    const cardHolder = document.getElementById('dashboard-holder');
    const spinHomeBtn = document.getElementById('spin-btn-close');
    
    // Two Sum Container
    const spinDash = document.getElementById('spin-words');

    
    function showHome() {
        spinDash.style.display = "none";
        cardHolder.style.display = "block";

    }
    spinHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    spinHomeBtn.addEventListener('click', showHome);


    // DOM Elements
    const swForm = document.getElementById("sw-form");
    const swOutcome = document.getElementById("swResponse");
    const buttonCheckSpin = document.getElementById("sw-check-string");


    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
    buttonCheckSpin.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonCheckSpin.addEventListener('click', checkSwInput);

    function hideSwOutcome() {
        swOutcome.style.display ="none";
    }

    function clearSwForm() {
        setTimeout(function() {
            swForm.reset();
            hideSwOutcome();
        }, 5000);
    };

    function checkSwInput(str) {
        var str = document.getElementById("sw-text").value;

        // Loop through the string
        for (let i = 0; i < str.length - 1; i++){
            // regex for letter and special characters or just special characters
            let specialChar = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            
            //regev for letters and numbers or just numbers
            let numbers = /[A-Za-z]\d|\d/

            //check if either regex pattern is present in the string
            if(specialChar.test(str) || numbers.test(str)) {

                // if yes, user gets prompted to enter the correct data type
                swOutcome.innerHTML = "Enter only letters";
                swOutcome.style.color = "#FF1919";
                swOutcome.style.display = "block";
    
            }else{
                //otherwise, call spin words function
                spinWords()
            }
            // clear the form after the function runs
            clearSwForm()
        }   
    }

    function spinWords(str) {

        //convert the string to an array
        let words = document.getElementById("sw-text").value.split(" ");

        // confirm that the input is now an array
        // console.log(words)
        
        //get the length of the array 
        let lengthOfWords = words.length
        // console.log(lengthOfWords)

        //using a for loop, check each word, i, in the array
        for(let i = 0; i < lengthOfWords; i++){
            //if a word the array has 5 or more letters
            if(words[i].length >= 5) {
                // split the word, reverse it, then join the letters
                words[i] = words[i].toLowerCase().split("").reverse().join("");
                // assign convert the array to a string and assign it to  locally
                let spin = words.join("  ");
                // user feedback
                swOutcome.style.display = "block";
                swOutcome.style.color = "#2b923c";
                swOutcome.innerHTML = `${spin}`;   
                
            } else {
                // the array has no words with 5 or more letters
                // convert the original array to a string and assign it locally
                let original = words.join("  ")
                //user feedback
                swOutcome.style.display = "block";
                swOutcome.style.color = "#ED8200";
                swOutcome.innerHTML = `${original}`;    
            }
        }
        
    }

});