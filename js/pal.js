// PALINDROME CHECKER
document.addEventListener("DOMContentLoaded", () => {
    // DOM Element
    // Header Elements
    const info = document.getElementById('info-icon');
    const title = document.getElementById('header-title');
    const clock = document.getElementById('clock');
    const mobileTitle = document.getElementById('mb-header-title');


    //Body Elements
    const cardHolder = document.getElementById('dg-holder');
    const mainDash = document.getElementById('algo-dash');
    const palHomeBtn = document.getElementById("pal-btn-close");
    
    // Palindrome Container
    const palDash = document.getElementById('palindrome');
   

    
    function showHome() {
        palDash.style.display = "none";
        mainDash.style.display = "none";
        cardHolder.style.display = "block";
        info.style.color = '#c32abbc9';  
        title.style.color= '#c32abbc9';  
        clock.style.color= '#c32abbc9';
        mobileTitle.style.color= '#c32abbc9';
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
    function showPalOutcome() {
        palOutcome.style.display ="block";
        palOutcome.style.color = "#FFA500";
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
            showPalOutcome();
            palOutcome.innerHTML ="' " + `${words}`+ " '"  + " IS a palindrome"; 
        }else {
            showPalOutcome();
            palOutcome.innerHTML = "' " + `${words}`+ " '"  +  " is NOT a palindrome";
        }
        clearPalForm()
    }

    

});