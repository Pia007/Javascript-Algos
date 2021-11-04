// PALINDROME CHECKER
document.addEventListener("DOMContentLoaded", () => {
    // DOM Element
    const cardHolder = document.getElementById('dashboard-holder');
    const palHomeBtn = document.getElementById("pal-btn-close");
    
    // Palindrome Container
    const palDash = document.getElementById('palindrome');

    
    function showHome() {
        palDash.style.display = "none";
        cardHolder.style.display = "block";

    }
    palHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    palHomeBtn.addEventListener('click', showHome);




    const palForm = document.getElementById("pal-form");
    const palOutcome = document.getElementById("palResponse");
    const buttonCheckPal = document.getElementById("pal-check-string");


    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
    buttonCheckPal.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonCheckPal.addEventListener('click', palindromeChecker);

    function hidePalOutcome() {
        palOutcome.style.display ="none";
    }

    function clearPalForm() {
        setTimeout(function() {
            palForm.reset();
            hidePalOutcome();
        }, 3500);
    };

    function palindromeChecker(str) {
        let words = document.getElementById("pal-text").value;

        // Use regex to search for occurences of only letters and numbers
        let regEx = /[^a-z0-9]/gi;
        // 
        let newStrArr = words.replace(regEx,'').toLowerCase().split('');
        // 
        let newStr = newStrArr.join('');
        // 
        let revNewStr = newStrArr.reverse().join('');
        if( newStr === revNewStr ) {
            palOutcome.style.display = "block";
            palOutcome.style.color = "#00FF2A";
            palOutcome.innerHTML ="' " + `${words}`+ " '"  + " is a palindrome"; 
        }else {
            palOutcome.style.display = "block";
            palOutcome.style.color = "#FFA500";
            palOutcome.innerHTML = "' " + `${words}`+ " '"  +  " is not palindrome";
        }
        clearPalForm()
    }

    

});