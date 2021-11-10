document.addEventListener("DOMContentLoaded", () => {
    const cardHolder = document.getElementById('dg-holder');
    const mainDash = document.getElementById('algo-dash');
    
    // Header Elements
    const info = document.getElementById('info-icon');
    const title = document.getElementById('header-title');
    const clock = document.getElementById('clock');
    const mobileTitle = document.getElementById('mb-header-title');
    

    // Isogram Container
    const isoDash = document.getElementById('iso-container');
    const isoHomeBtn = document.getElementById("iso-btn-close");
      
    
    function showHome() {
        isoDash.style.display = "none";
        mainDash.style.display = "none";
        cardHolder.style.display = "block";
        info.style.color = '#c32abbc9';  
        title.style.color= '#c32abbc9';  
        clock.style.color= '#c32abbc9'; 
        mobileTitle.style.color= '#c32abbc9';

    }
    isoHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    isoHomeBtn.addEventListener('click', showHome);



    const form = document.getElementById("form");
    const button = document.getElementById("check-input");

    //RESPONSE
    const response = document.getElementById("eval");


    function hideRes() {
        response.style.display = "none"
        button.style.display = "block"

    }

    function showRes() {
        response.style.display = "block"
        response.style.color = "#37A4C8"
        button.style.display = "none"
    }
    // CLEARS the form 2.5sec after submission
    function clearForm() {
        setTimeout(function() {
            form.reset();
            hideRes();
        }, 2500);
    };

    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON AND CALL CRITERIA EVALUATION FUNCTION
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    button.addEventListener('click', evalString);



    // EVALUATE THE STRING AGAINST CRITERIA

    // EVALUATE THE STRING AGAINST CRITERIA
    function evalString(str) {
        
        str = document.getElementById("isogramText").value;

        // Use a For Loop to check the string for special char, spaces and numbers prior to evaluating the string using isIsogram()
            // Starting at index 0, as long as the index is less than the length of the string minus 1, add 1 to the index and continue the loop
                // assign variables to regex expression for special characters and numbers

            // IF any character in the string matches the regex pattern for special characters, numbers and has a space after the first character, the string will not be evaluated
                // ELSE IF CONDITONS:
                    // STRING WILL NOT BE EVALUATED IF:
                        //  string has a space after the 1st character and at least one special character.
                        //  string has a space after the 1st character and at least one number.
                        //  string has and at least one special character and at least one number.
                        //  string has a space after the 1st character.
                        //  string has at least one number.
                        //  string has at least one special character.
                    // If any condition is met, the users gets an alert and the form resets after 3sec
                    // Otherwise, the users input meets the requirement and isIsogram() is called.

        for (let i = 0; i < str.length - 1; i++){
            let specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            let numbers = /\d/
            
            if(specialChar.test(str) && numbers.test(str) && str.indexOf(' ') >= 1 ){
                showRes();
                response.innerHTML = "Try again! " + `${str}` + " is not a single word and has atleast one number and special character."
                

            }else if(str.indexOf(' ') >= 1 && specialChar.test(str)){
                showRes();
                response.innerHTML = "Try again! "+ "'"+`${str}`+"'" +  " is not a single word and has atleast one special character."
            

            }else if(str.indexOf(' ') >= 1 && numbers.test(str)){
                showRes();
                response.innerHTML = "Try again! " + "'"+`${str}`+"'" + " is not a single word and has atleast one number."
                

            }else if(specialChar.test(str) && numbers.test(str)){
                showRes();
                response.innerHTML = "Try again! " + "'"+`${str}`+"'" + " has atleast one number and special character."
                

            }else if(str.indexOf(' ') >= 0){
                showRes();
                response.innerHTML = "Try again! " + "'"+`${str}`+"'" + " is not a single word."


            }else if(specialChar.test(str)) {
                showRes();
                response.innerHTML = "Try again! " + "'"+`${str}`+"'" + " has atleast one special character."
                

            }else if(numbers.test(str)) {
                showRes();
                response.innerHTML = "Try again! " + "'"+`${str}`+"'" + " has atleast one number."
                
            }
            else {
                isIsogram();
            }     
            clearForm();
        };
        
    };    

    // DETERMINING IF THE STRING IS AN ISOGRAM
    function isIsogram() {
        var str = document.getElementById("isogramText").value;

        // create an empty array for comparison to letters array
        var newLetters = [];
        var letters = str.toLowerCase().split('');

        // Use ForEach() to iterate over each substring in the letters array and compare it to the newLetters array.
            // if the substring does not exist(indexOf -1) in the newLetters array, then add it.
        letters.forEach(function(item, i, arr){
            if (newLetters.indexOf(item) === -1) {
                newLetters.push(item);
            }
        });

        // Compare the length the arrays
            // If they are strictly equal, then the word IS an isogram
            // Else, the length is not strictly equal, then the word is NOT an isogram
                //WHY? Substrings that repeat, will not have an index of -1 and not be added to newLetters array, 
                    // resulting in newLetters.length < letter.length
        if(newLetters.length === letters.length) {
            // return true;
            showRes();
            response.innerHTML = "'"+`${str}`+"'" + " IS an isogram."
           
        }else {
            // return false;
            showRes();
            response.innerHTML = "'"+`${str}`+"'" + " is NOT an isogram."
        }
        
    };

});




