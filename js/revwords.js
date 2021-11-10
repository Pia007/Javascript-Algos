// REVERSE WORDS IN A STRING

document.addEventListener("DOMContentLoaded", () => {

    // Header Elements
    const info = document.getElementById('info-icon');
    const title = document.getElementById('header-title');
    const clock = document.getElementById('clock');
    const mobileTitle = document.getElementById('mb-header-title');

    // Cardholder
    const cardHolder = document.getElementById('dg-holder');
    const mainDash = document.getElementById('algo-dash');

    // Reverse a Word  Container
    const revWordHomeBtn = document.getElementById('rev-word-btn-close');
    const revWordDash = document.getElementById('rev-word');

    // Return to Cardholder
    function showHome() {
        revWordDash.style.display = "none";
        mainDash.style.display = "none";
        cardHolder.style.display = "block";
        info.style.color = '#c32abbc9';  
        title.style.color= '#c32abbc9';  
        clock.style.color= '#c32abbc9';
        mobileTitle.style.color= '#c32abbc9';
    }
    revWordHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    revWordHomeBtn.addEventListener('click', showHome);

    // Factorialize Dashboard Elements
    const revWordForm = document.getElementById("rev-word-form");
    const revWordOutcome = document.getElementById("revWordResponse");
    const buttonRevWord = document.getElementById("rev-word-btn");


    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
    buttonRevWord.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonRevWord.addEventListener('click', reverseWords);

    function hideRevWordOutcome() {
        revWordOutcome.style.display ="none";
        buttonRevWord.style.display = "block";
        
    }
    function showRevWordOutcome() {
        revWordOutcome.style.color = "#e0e5ec";
        revWordOutcome.style.display ="block";
        buttonRevWord.style.display = "none";
        
    }

    function clearRevWordForm() {
        setTimeout(function() {
            revWordForm.reset();
            hideRevWordOutcome();
        }, 3500);
    };

    function reverseWords() {
        //convert string to array
        let arr = document.getElementById("rev-word-text").value.split(" ");
        
        //reverse array
        arr = arr.reverse();
        // initialize an empty array to store reversed words that are not empty
        let newArr = [];

        // if the array satifies the constraints
        if(arr.length <= Math.pow(10, 4) || arr >= 1) {
            // loop through the array
            for (let i = arr.length - 1; i >= 0; i--) {

                // if a word is not empty
                if (arr[i].length > 0) {
                    // push the word to the new array
                    newArr.push(arr[i]);
                }
            }
            // convert the new array to a string
            showRevWordOutcome();
            revWordOutcome.innerHTML = newArr.reverse().join(" ");
            // return newArr.reverse().join(' ');
        }else{
            // the array does not satify the constraints 
            revWordDash.innerHTML = "The string must be 1-10,000 characters";
        }
        clearRevWordForm();
    }
});

// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords(" hello world "));
// console.log(reverseWords("a good  example"));
// console.log(reverseWords("  Bob    Loves  Alice   ?"));
// console.log(reverseWords("Alice does not even like bob"));