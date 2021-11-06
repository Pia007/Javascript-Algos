document.addEventListener("DOMContentLoaded", () => {
    // DOM Element

    // Header Elements
    const menu = document.getElementById('menu-icon');
    const title = document.getElementById('header-title');
    const clock = document.getElementById('clock');

    // Cardholder
    const cardHolder = document.getElementById('dashboard-holder');
    const spinHomeBtn = document.getElementById('spin-btn-close');
    
    // Two Sum Container
    const spinDash = document.getElementById('spin-words');

    
    function showHome() {
        spinDash.style.display = "none";
        cardHolder.style.display = "block";
        menu.style.fill = '#c32abbc9';  
        title.style.color= '#c32abbc9';  
        clock.style.color= '#c32abbc9';

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
    function showSwOutcome() {
        swOutcome.style.display ="block";
        swOutcome.style.color = "#e0e5ec";
    }
    function clearSwForm() {
        setTimeout(function() {
            swForm.reset();
            hideSwOutcome();
        }, 5000);
    };

    function checkSwInput(str, num) {
        var str = document.getElementById("sw-text").value;
        var num = Number(document.getElementById("sw-num").value);
        doFirst(str, num);

        function doFirst(str, num) {
            if (num == "0" && str == "") {
                showSwOutcome();
                swOutcome.innerHTML = "Please enter a word/words and a number greater than 0";
                
                // clearSwForm();
           
            }else if(num =="0" && str != "") {
                showSwOutcome();
                swOutcome.innerHTML = "Please enter a number greater than 0";
                
                // clearSwForm();
            }else if ( num != "0" && str == "") {
                showSwOutcome();
                swOutcome.innerHTML = "Please enter a word/words";
                
                // clearSwForm();

            }else{
                checkValues()
            
            }
            clearSwForm();
        }   
        
    
            
        function checkValues() {
            
            for (let i = 0; i < str.length-1; i++){
                // regex for letter and special characters or just special characters
                let specialChar = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
                let letters = /[A-Za-z]/
                //regev for letters and numbers or just numbers
                let numbers = /[A-Za-z]\d|\d/
    
                
                //check if either regex pattern is present in the string
                if(specialChar.test(str) || numbers.test(str)) {
                    // if yes, user gets prompted to enter the correct data type
                    swOutcome.innerHTML = "Enter only letters in the text field";
                    showSwOutcome();

                } else if (letters.test(num) || specialChar.test(num)) {
                    // if yes, user gets prompted to enter the correct data type
                    swOutcome.innerHTML = "Enter only numbers in the number field";
                    showSwOutcome();
                } else{
                    //otherwise, call spin words function
                    spinWords()
                }
                // clear the form after the function runs
            }
            clearSwForm()
        }   
    

        function spinWords() {

            //convert the string to an array
            let words = document.getElementById("sw-text").value.toLowerCase().split(" ");
            let userNum = document.getElementById("sw-num").value;
            

            //using a for loop, check each word, i, in the array
            for(let i = 0; i < words.length; i++){
                //if a word in the array has "userNum" or more letters
                if(words[i].length >= userNum) {
                    // split the word, reverse it, then join the letters
                    console.log(words[i].length)
                    console.log(words[i])
                    words[i] = words[i].toLowerCase().split("").reverse().join("");
                    // convert the array to a string 
                    let spin = words.join("  ");
                    // user feedback
                    swOutcome.style.display = "block";
                    swOutcome.style.color = "#e0e5ec";
                    swOutcome.innerHTML = `${spin}`;   
                    
                } else {
                    // the array has no words with 5 or more letters
                    // convert the original array to a string and assign it locally
                    let original = words.join("  ")
                    //user feedback
                    swOutcome.style.display = "block";
                    swOutcome.style.color = "#e0e5ec";
                    swOutcome.innerHTML = "There are NO words that are " + `${userNum}`+ " characters  long";    
                }
            }
        }
    }

});