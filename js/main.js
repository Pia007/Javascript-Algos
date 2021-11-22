// HOME PAGE 
document.addEventListener("DOMContentLoaded", () => {
    // DOM ELEMENTS
    const cardHolder = document.getElementById('dg-holder');
    const mainDash = document.getElementById('algo-dash');
    const infoDash = document.getElementById('info-dash');
    // const btnHome = document.querySelectorAll('algo-dash');

    // Header Elements
    const info = document.getElementById('info-icon');
    const infoBtn = document.getElementById('info-btn');
    const title = document.getElementById('header-title');
    const clock = document.getElementById('clock');
    const mobileTitle = document.getElementById('mb-header-title');

    // Footer Elements
    const linkedIn = document.getElementById('linkedin');
    const github = document.getElementById('github');
    const twitter = document.getElementById('twitter');
    const mbLinkedin = document.getElementById('mb-linkedin');
    const mbGithub = document.getElementById('mb-github');
    const mbTwitter = document.getElementById('mb-twitter');

    //***********************  INFORMATION DASH ****************************/
    function openInfo() {
        infoDash.style.display = 'block';
        isoDash.style.display = "none";
        palDash.style.display = "none";
        twoDash.style.display = "none";
        spinDash.style.display = "none";
        llwDash.style.display = "none";
        factDash.style.display = "none";
        palNumDash.style.display = "none";
        revIntDash.style.display = "none";
        lnsDash.style.display = "none";
        revWordDash.style.display = "none";
        sumAllDash.style.display = "none";
        toRomeDash.style.display = "none";
        mainDash.style.display = "none";
        cardHolder.style.display = "none";
        info.style.color = '#6d88c8'; 
        title.style.color= '#6d88c8';  
        clock.style.color= '#6d88c8'; 
        mobileTitle.style.color= '#6d88c8';
        linkedIn.style.border = ' 2px solid #6d88c8';
        github.style.border = '2px solid #6d88c8';
        twitter.style.border = '2px solid #6d88c8';
        // mbLinkedin.style.border = '2px solid #6d88c8';
        // mbGithub.style.border = '2px solid #6d88c8';
        // mbTwitter.style.border = '2px solid #6d88c8';
    }
    infoBtn.addEventListener('click', function(e) {
        e.preventDefault();
    });
    infoBtn.addEventListener('click', openInfo);

    const closeInfo = document.getElementById('info-btn-close');
    closeInfo.addEventListener('click', function(e) {
        e.preventDefault();
    });
    closeInfo.addEventListener('click', showHome);
    //***********************  /INFORMATION DASH ****************************/

    //***************************CLOCK ********************/
    function Time() {
        // Creating object of the Date class
        var date = new Date();
        // Get current hour
        var hour = date.getHours();
        // Get current minute
        var minute = date.getMinutes();
        // Get current second
        var second = date.getSeconds();
        
    
        // Updating hour, minute, and second
        // if they are less than 10
        hour = update(hour);
        minute = update(minute);
        second = update(second);
        // Adding time elements to the div
        document.getElementById("clock").innerHTML = hour + " : " + minute + " : " + second;
        // Set Timer to 1 sec (1000 ms)
        setTimeout(Time, 1000);
    
        function update(t) {
            if (t < 10) {
                return "0" + t;
            } else {
                return t;
            }
        }
    }
    // Function to update time elements if they are less than 10
    // Append 0 before time elements if they are less than 10
    
    Time();
    //***************************CLOCK ********************/

    //***************************DASHBOARD ********************/
    // SHOW HOME PAGE
    function showHome() {
        infoDash.style.display = 'none';
        isoDash.style.display = "none";
        palDash.style.display = "none";
        twoDash.style.display = "none";
        spinDash.style.display = "none";
        llwDash.style.display = "none";
        factDash.style.display = "none";
        palNumDash.style.display = "none";
        revIntDash.style.display = "none";
        lnsDash.style.display = "none";
        revWordDash.style.display = "none";
        sumAllDash.style.display = "none";
        toRomeDash.style.display = "none";
        mainDash.style.display = "none";
        cardHolder.style.display = "block";
        info.style.color = '#c32abbc9';  
        title.style.color= '#c32abbc9';  
        clock.style.color= '#c32abbc9'; 
        mobileTitle.style.color= '#c32abbc9';
        linkedIn.style.border = ' 2px solid #c32abbc9';
        github.style.border = '2px solid #c32abbc9';
        twitter.style.border = '2px solid #c32abbc9';
        // mbLinkedin.style.border = '2px solid #c32abbc9';
        // mbGithub.style.border = '2px solid #c32abbc9';
        // mbTwitter.style.border = '2px solid #c32abbc9';

    }
    // ******************ISOGRAM******************************

    // ISOGRAM CONTAINER
    const isoDash = document.getElementById('iso-container');
    const isoBtn = document.getElementById('iso-play-btn');
    const isoHomeBtn = document.getElementById("iso-btn-close");
    const isoLinkedin = document.getElementById('mb-linkedin-iso');
    const isoGithub = document.getElementById('mb-github-iso');
    const isoTwitter = document.getElementById('mb-twitter-iso');
    
    // SHOW ISOGRAM FROM HOMEPAGE
    function showIso() {
        isoDash.style.display = 'block';
        palDash.style.display = "none";
        twoDash.style.display = "none";
        spinDash.style.display = "none";
        llwDash.style.display = "none";
        factDash.style.display = "none";
        palNumDash.style.display = "none";
        revIntDash.style.display = "none";
        lnsDash.style.display = "none";
        revWordDash.style.display = "none";
        sumAllDash.style.display = "none";
        toRomeDash.style.display = "none";
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none'; 
        info.style.color = '#37A4C8';  
        title.style.color= '#37A4C8';  
        clock.style.color= '#37A4C8';
        mobileTitle.style.color= '#37A4C8';
        linkedIn.style.border = '2px solid #37A4C8';
        github.style.border = '2px solid #37A4C8';
        twitter.style.border = '2px solid #37A4C8';
        isoLinkedin.style.border = '2px solid #37A4C8';
        isoGithub.style.border = '2px solid #37A4C8';
        isoTwitter.style.border = '2px solid #37A4C8';
    }
    // PLAY ISOGRAM FROM HOMEPAGE
    isoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    isoBtn.addEventListener('click', showIso);

    // ISOGRAM FORM ELEMENTS
    const form = document.getElementById("form");
    const button = document.getElementById("check-input");
    const response = document.getElementById("eval");

    // ISOGRAM RESPONSE FUNCTIONS
    function hideRes() {
        response.style.display = "none"
        button.style.display = "block"
    }
    function showRes() {
        response.style.display = "block"
        response.style.color = "#37A4C8"
        button.style.display = "none"
    }
    // CLEARS ISOGRAM FORM
    function clearForm() {
        setTimeout(function() {
            form.reset();
            hideRes();
        }, 2500);
    };

    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON AND CALL ISOGRAM CRITERIA EVALUATION FUNCTION
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    button.addEventListener('click', evalString);

    // EVALUATE THE STRING AGAINST CRITERIA
    function evalString(str) {
        
        str = document.getElementById("isogramText").value;

        // ISOGRAM CRITERIA
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
                // CALL THE ISOGRAM FUNCTION
                isIsogram();
            }     
            clearForm();
        };
        
    };    

    // DETERMINING IF THE STRING IS AN ISOGRAM
    function isIsogram() {
        // get the user input
        var str = document.getElementById("isogramText").value;
        // convert the string to a lowercase array
        var letters = str.toLowerCase().split('');
        
        // initialize an empty array for comparison to letters array 
        var newLetters = [];
        
        
       
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
                    // resulting in newLettersLength < letterLength
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

    // CLOSE ISOGRAM 
    isoHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    isoHomeBtn.addEventListener('click', showHome);


    // ******************PALINDROME******************************

    // PALINDROME DASH ELEMENTS
    const palDash = document.getElementById('palindrome');
    const palBtn = document.getElementById('pal-play-btn');
    const palHomeBtn = document.getElementById("pal-btn-close");
    const palLinkedin = document.getElementById("mb-linkedin-pal");
    const palGithub = document.getElementById("mb-github-pal");
    const palTwitter = document.getElementById("mb-twitter-pal");

    // OPEN PALINDROME DASH FROM HOMEPAGE
    function showPal() {
        palDash.style.display = 'block';
        isoDash.style.display = "none";
        twoDash.style.display = "none";
        spinDash.style.display = "none";
        llwDash.style.display = "none";
        factDash.style.display = "none";
        palNumDash.style.display = "none";
        revIntDash.style.display = "none";
        lnsDash.style.display = "none";
        revWordDash.style.display = "none";
        sumAllDash.style.display = "none";
        toRomeDash.style.display = "none";
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none';
        info.style.color = '#FFA500';  
        title.style.color= '#FFA500';  
        clock.style.color= '#FFA500';
        mobileTitle.style.color= '#FFA500';
        linkedIn.style.border = '2px solid #FFA500';
        github.style.border = '2px solid #FFA500';
        twitter.style.border = '2px solid #FFA500';
        palLinkedin.style.border = '2px solid #FFA500';
        palGithub.style.border = '2px solid #FFA500';
        palTwitter.style.border = '2px solid #FFA500';
    }
    // PLAY BUTTON TO OPEN PALINDROME DASH
    palBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    palBtn.addEventListener('click', showPal);

    // PALINDROME FORM ELEMENTS
    const palForm = document.getElementById("pal-form");
    const palOutcome = document.getElementById("palResponse");
    const buttonCheckPal = document.getElementById("pal-check-string");

    // PALINDROME RESPONSE FUNCTIONS
    function hidePalOutcome() {
        palOutcome.style.display ="none";
        buttonCheckPal.style.display = "block";
    }
    function showPalOutcome() {
        palOutcome.style.display ="block";
        palOutcome.style.color = "#FFA500";
        buttonCheckPal.style.display = "none";

    }
    
    // CLEAR PALINDROME FORM
    function clearPalForm() {
        setTimeout(function() {
            palForm.reset();
            hidePalOutcome();
        }, 3500);
    };

    // BUTTON TO CHECK PALINDROME STRING INPUT
    buttonCheckPal.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonCheckPal.addEventListener('click', palindromeChecker);


    // PALINDROME CHECK STRING FUNCTION
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

    // CLOSE PALINDROME DASH
    palHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    palHomeBtn.addEventListener('click', showHome);


    /****************************TWO SUM********************************************/
    
    // TWO SUM CONTAINER ELEMENTS
    const twoDash = document.getElementById('two-sum');
    const twoBtn = document.getElementById('two-play-btn');
    const twoHomeBtn = document.getElementById("ts-btn-close");
    const twoLinkedin = document.getElementById("mb-linkedin-two");
    const twoGithub = document.getElementById("mb-github-two");
    const twoTwitter = document.getElementById("mb-twitter-two");

    // OPEN TWO SUM DASH FROM HOMEPAGE
    function showTwo() {
        twoDash.style.display = 'block';
        isoDash.style.display = "none";
        palDash.style.display = "none";
        spinDash.style.display = "none";
        llwDash.style.display = "none";
        factDash.style.display = "none";
        palNumDash.style.display = "none";
        revIntDash.style.display = "none";
        lnsDash.style.display = "none";
        revWordDash.style.display = "none";
        sumAllDash.style.display = "none";
        toRomeDash.style.display = "none";
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none'; 
        info.style.color = '#5b0eeb';  
        title.style.color= '#5b0eeb';  
        clock.style.color= '#5b0eeb'; 
        mobileTitle.style.color= '#5b0eeb'; 
        linkedIn.style.border = '2px solid #5b0eeb';
        github.style.border = '2px solid #5b0eeb';
        twitter.style.border = '2px solid #5b0eeb';
        twoLinkedin.style.border = '2px solid #5b0eeb';
        twoGithub.style.border = '2px solid #5b0eeb';
        twoTwitter.style.border = '2px solid #5b0eeb';
    }

    // PLAY BUTTON TO OPEN TWO SUM DASH
    twoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    twoBtn.addEventListener('click', showTwo);

    // TWO SUM FORM ELEMENTS
    const tsForm = document.getElementById("ts-form");
    const sumOutcome = document.getElementById("sumResponse");
    const buttonSum = document.getElementById("check-sum");


    // TWO SUM RESPONSE FUNCTIONS
    function hideOutcome() {
        sumOutcome.style.display ="none";
        buttonSum.style.display = "block";
    }
    function showOutcome() {
        sumOutcome.style.display ="block";
        sumOutcome.style.color = "#e0e5ec";
        buttonSum.style.display = "none";
    }

    // TWO SUM CLEAR FORM
    function clearTsForm() {
        setTimeout(function(e) {
            tsForm.reset();
            hideOutcome();
        }, 3000);
    };

    // TWO SUM BUTTON TO CHECK INPUT
    buttonSum.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonSum.addEventListener('click', checkTsInput);

    // CHECK TWO SUM CONDITION
    // CHECK THE ARRAY
    function checkTsInput(arr) {
        arr = document.getElementById("randomNumbers").value;
        // Loop through the arr
        for (let i = 0; i < arr.length - 1; i++){

            // regex for letter and special characters or just letters or just special characters
            let specialCases = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[A-Za-z]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            
            //if the array contains letters or special characters
            if(specialCases.test(arr)) {

                // if yes, user gets prompted to enter the correct data type
                showOutcome();
                sumOutcome.innerHTML = "Enter only numbers";
    
            }else{
                //otherwise, check if target is a number
                checkTarget()
            }
            // clear the form after the function runs
            clearTsForm()
        }   
    }

    // CHECK TARGET NUMBER
    function checkTarget(target) {
        target = document.getElementById("targetNumber").value;

        // regex for letter and special characters or just special characters
        let specialCases = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[A-Za-z]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            
        // if the target contains letters or special characters
        if(specialCases.test(target)) {
            showOutcome();
            sumOutcome.innerHTML = "Enter a number";
            
        } else{
        //otherwise, call length of twoSum function
            twoSum()
        }
        // clear the form after the function runs
        clearTsForm()
    }

    // TWO SUM FUNCTION       
    function twoSum(arr, target) {
        // var twoSum = true
        // get value of target 
        target = document.getElementById("targetNumber").value;

        // get DOM input and separates at each space between numbers
        arr = document.getElementById("randomNumbers").value.split(" ");

        // makes sure array is numbers
        arr = arr.map(Number)

        // create an object/hash map to store key-value pairs
        let numsObj = {};

        // use a loop to check if the two numbers are present
        for (let i = 0; i < arr.length; i++) {
            //assign someNum to the first number found in the array
            let someNum = arr[i];

            // find the second value and assign it to numDifference
            let numDifference = target - someNum;
            
            // in the object, if the value of the first number is in the object, its NOT undefined
            if (numsObj[someNum] !== undefined ) {
                //get the index of the first number from the original array and assign it
                let indexOne = numsObj[someNum];
                // get the index of the second number and assign it
                let indexTwo = i;
                
                // the two sums were found
                showOutcome();
                sumOutcome.innerHTML = `${target}` + " is the sum of the values at indices ["+`${indexOne}`+", " +`${indexTwo}`+"]."
                break;
            }else { 
                // the two sums were not found
                numsObj[numDifference] = i
                let newArr = arr.join(", ")
                showOutcome();
                sumOutcome.innerHTML = "The sum of  " + `${target}` + " is NOT in [" + `${newArr}` + "]";
                
            }
            clearTsForm()
        }
    } 

    // CLOSE TWO SUM DASH
    twoHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    twoHomeBtn.addEventListener('click', showHome);

    // **************************************SPIN WORDS****************************************************
    // SPIN WORDS DASH ELEMENTS
    const spinDash = document.getElementById('spin-words');
    const spinBtn = document.getElementById('spin-play-btn');
    const spinHomeBtn = document.getElementById('spin-btn-close');
    const spinLinkedIn = document.getElementById('mb-linkedin-spin');
    const spinGithub = document.getElementById('mb-github-spin');
    const spinTwitter = document.getElementById('mb-twitter-spin');
    

    // OPEN SPIN WORDS DASH FUNCTION
    function showSpin() {
        spinDash.style.display = 'block';
        isoDash.style.display = "none";
        palDash.style.display = "none";
        twoDash.style.display = "none";
        llwDash.style.display = "none";
        factDash.style.display = "none";
        palNumDash.style.display = "none";
        revIntDash.style.display = "none";
        lnsDash.style.display = "none";
        revWordDash.style.display = "none";
        sumAllDash.style.display = "none";
        toRomeDash.style.display = "none";
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none'; 
        info.style.color = '#f89898';  
        title.style.color= '#f89898';  
        clock.style.color= '#f89898'; 
        mobileTitle.style.color= '#f89898'; 
        linkedIn.style.border = '2px solid #f89898';
        github.style.border = '2px solid #f89898';
        twitter.style.border = '2px solid #f89898';
        spinLinkedIn.style.border = '2px solid #f89898';
        spinGithub.style.border = '2px solid #f89898';
        spinTwitter.style.border = '2px solid #f89898';
    }
    // PLAY BUTTON TO OPEN SPIN WORDS DASHBOARD
    spinBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    spinBtn.addEventListener('click', showSpin);

    // SPIN WORD FORM ELEMENTS
    const swForm = document.getElementById("sw-form");
    const swOutcome = document.getElementById("swResponse");
    const buttonSpin = document.getElementById("sw-spin");

    // SPIN RESPONSE FUNCTIONS
    function hideSwOutcome() {
        swOutcome.style.display ="none";
        buttonSpin.style.display = "block";
    }
    function showSwOutcome() {
        swOutcome.style.display ="block";
        swOutcome.style.color = "#e0e5ec";
        buttonSpin.style.display = "none";
    }

    // SPIN WORDS FORM FUNCTION
    function clearSwForm() {
        setTimeout(function() {
            swForm.reset();
            hideSwOutcome();
        }, 5000);
    };

    // CHECK SPIN INPUT 
    buttonSpin.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonSpin.addEventListener('click', checkSwInput);

    // CHECK SPIN INPUT FUNCTION
    function checkSwInput(str, num) {
        var str = document.getElementById("sw-text").value;
        var num = Number(document.getElementById("sw-num").value);
        doFirst(str, num);

        // CHECK STRING FUNCTION
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
        
    
        // CHECK VALUES FUNCTION   
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
    
        // SPIN WORDS FUNCTION
        function spinWords() {

            //convert the string to an array
            let words = document.getElementById("sw-text").value.toLowerCase().split(" ");
            let userNum = document.getElementById("sw-num").value;

            //using a for loop, check each word, i, in the array
            for(let i = 0; i < words.length; i++){
                //if a word in the array has "userNum" or more letters
                if(words[i].length >= userNum) {
                    // split the word, reverse it, then join the letters
                    
                    words[i] = words[i].toLowerCase().split("").reverse().join("");
                    // convert the array to a string 
                    let spin = words.join("  ");
                    // user feedback
                    showSwOutcome();
                    swOutcome.innerHTML = `${spin}`;   
                    
                } else {
                    // the array has no words with 5 or more letters
                    // convert the original array to a string and assign it locally
                    let original = words.join("  ")
                    //user feedback
                    showSwOutcome();
                    swOutcome.innerHTML = "There are NO words that are " + `${userNum}`+ " characters  long";    
                }
            }
        }
    }

    // CLOSE SPIN WORDS DASH
    spinHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    spinHomeBtn.addEventListener('click', showHome);


    //****************************************LENGTH OF THE LONGEST WORD****************************************************************** */

    // LENGTH OF THE LONGEST WORD DASHBOARD ELEMENTS
    const llwDash = document.getElementById('longest-word');
    const llwBtn = document.getElementById('llw-play-btn');
    const llwHomeBtn = document.getElementById('lw-btn-close');
    const llwLinkedin = document.getElementById('mb-linkedin-llw');
    const llwGithub = document.getElementById('mb-github-llw');
    const llwTwitter = document.getElementById('mb-twitter-llw');
    

    // OPEN LENGTH OF THE LONGEST WORD DASHBOARD
    function showLength() {
        llwDash.style.display = 'block';
        isoDash.style.display = "none";
        palDash.style.display = "none";
        twoDash.style.display = "none";
        spinDash.style.display = "none";
        factDash.style.display = "none";
        palNumDash.style.display = "none";
        revIntDash.style.display = "none";
        lnsDash.style.display = "none";
        revWordDash.style.display = "none";
        sumAllDash.style.display = "none";
        toRomeDash.style.display = "none";
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none'; 
        info.style.color = '#35c048';  
        title.style.color= '#35c048';  
        clock.style.color= '#35c048';  
        mobileTitle.style.color= '#35c048'; 
        linkedIn.style.border = '2px solid #35c048';
        github.style.border = '2px solid #35c048';
        twitter.style.border = '2px solid #35c048';
        llwLinkedin.style.border = '2px solid #35c048';
        llwGithub.style.border = '2px solid #35c048';
        llwTwitter.style.border = '2px solid #35c048';
    }

    // PLAY LENGTH OF THE LONGEST WORD BUTTON
    llwBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    llwBtn.addEventListener('click', showLength);

    // LENGTH OF THE LONGEST WORD FORM ELEMENTS
    const lwForm = document.getElementById("lw-form");
    const lwOutcome = document.getElementById("lwResponse");
    const buttonCheckLongest = document.getElementById("lw-check-string");

    // LENGTH OF THE LONGEST WORD RESPONSE FUNCTIONS
    function hideLwOutcome() {
        lwOutcome.style.display ="none";
        buttonCheckLongest.style.display = "block";
    }
    function showLwOutcome() {
        lwOutcome.style.display = "block";
        lwOutcome.style.color = "#35c048";
        buttonCheckLongest.style.display = "none";
    }
    // CLEAR LENGTH OF THE LONGEST WORD FORM
    function clearLwForm() {
        setTimeout(function() {
            lwForm.reset();
            hideLwOutcome();
        }, 5000);
    };

    // CHECK LENGTH OF THE LONGEST WORD BUTTON
    buttonCheckLongest.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonCheckLongest.addEventListener('click', checkLwInput);

    // CHECK LENGTH OF THE LONGEST WORD INPUT FUNCTION
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

    // FIND LONGEST WORD FUNCTION
    function findLongestWord(str) {
        let strArr = document.getElementById("lw-text").value.split(' ');
        let longestWordLength = 0;
        
        for(let i = 0; i < strArr.length; i++) {
            if(strArr[i].length > longestWordLength) {
                longestWordLength = strArr[i].length;
                theWord = strArr[i]
                
                showLwOutcome();
                lwOutcome.innerHTML = "'" +`${theWord}`+"': " + `${longestWordLength}`;
            }
        }
    }
    // CLOSE LENGTH OF THE LONGEST WORD DASH
    llwHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    llwHomeBtn.addEventListener('click', showHome);

    /* *************************    FACTORIALIZE    ******************************************************* */


    // Factorialize a Number Container
    const factDash = document.getElementById('factorialize');
    const factBtn = document.getElementById('fact-play-btn');
    const factHomeBtn = document.getElementById('fact-btn-close');
    const factLinkedin = document.getElementById('mb-linkedin-fact');
    const factGithub = document.getElementById('mb-github-fact');
    const factTwitter = document.getElementById('mb-twitter-fact');

    // OPEN FACTORIALIZE DASHBOARD
    function showFact() {
        factDash.style.display = 'block';
        mainDash.style.display = 'block';
        isoDash.style.display = "none";
        palDash.style.display = "none";
        twoDash.style.display = "none";
        spinDash.style.display = "none";
        llwDash.style.display = "none";
        palNumDash.style.display = "none";
        revIntDash.style.display = "none";
        lnsDash.style.display = "none";
        revWordDash.style.display = "none";
        sumAllDash.style.display = "none";
        toRomeDash.style.display = "none";
        cardHolder.style.display = 'none';
        info.style.color = '#eb0e96';  
        title.style.color= '#eb0e96';  
        clock.style.color= '#eb0e96';   
        mobileTitle.style.color= '#eb0e96';
        linkedIn.style.border = '2px solid #eb0e96';
        github.style.border = '2px solid #eb0e96';
        twitter.style.border = '2px solid #eb0e96';
        factLinkedin.style.border = '2px solid #eb0e96';
        factGithub.style.border = '2px solid #eb0e96';
        factTwitter.style.border = '2px solid #eb0e96';
    }

    // PLAY FACTORIALIZE BUTTON
    factBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    factBtn.addEventListener('click', showFact);

    // FACTOIRALIZE FORM ELEMENTS
    const factForm = document.getElementById("fact-form");
    const factOutcome = document.getElementById("factResponse");
    const buttonGetFact = document.getElementById("fact-btn");

    // FACTOIRALIZE RESPONSE FUNCTIONS
    function hideFactOutcome() {
        factOutcome.style.display ="none";
        buttonGetFact.style.display = "block";
    }
    function showFactOutcome() {
        factOutcome.style.color = "#e0e5ec";
        factOutcome.style.display ="block";
        buttonGetFact.style.display = "none";
    }
    // CLEAR FACTOIRALIZE FORM
    function clearFactForm() {
        setTimeout(function() {
            factForm.reset();
            hideFactOutcome();
        }, 3500);
    };
    // FACTOIRALIZE BUTTON
    buttonGetFact.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonGetFact.addEventListener('click', Factorial);

    // FACTORIALIZE FUNCTION
    function Factorial() {
        //get input from form
        var num = document.getElementById("fact-text").value;
        // console.log(num);
        let integer = Number(num);
        // console.log(integer);
        // assign conditions to variables
        let decimalCheck = /^[+-]?([0-9]+\.[0-9]*|\.[0-9]+)$/
        let fact = 1
        
        
        if (integer === 1 || integer === 0) {
            showFactOutcome()
            factOutcome.innerHTML ="The factorial of " +`${integer}`+ " is 1";
            //clearFactForm();

        }else if (integer < 0 && decimalCheck.test(integer)) {
            showFactOutcome()
            factOutcome.innerHTML = `${integer}`+ " is NOT an integer";
            //clearFactForm();
        }else if (integer < 0) {
            showFactOutcome()
            factOutcome.innerHTML = "The factorial of " +`${integer}`+ " is UNDEFINED";
            //clearFactForm();
        }else if (decimalCheck.test(integer)) {
            showFactOutcome()
            factOutcome.innerHTML = `${integer}` + " is NOT a whole number";
            //clearFactForm();
        } else {
            for(let i = 1; i <= integer; i++) {
                fact *= i;
                showFactOutcome()
                factOutcome.innerHTML = `${fact}` + " is the factorial of " + `${integer}`;
                
            }
        }
        clearFactForm();
    }

    // CLOSE FACTORIALIZE DASH
    factHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    factHomeBtn.addEventListener('click', showHome);


    // ****************************************   PALINDROME NUMBER    *********************************************

    // PALINDROME NUMBER DASHBOARD ELEMENTS
    const palNumDash = document.getElementById('pal-num');
    const palNumBtn = document.getElementById('pn-play-btn');
    const palNumHomeBtn = document.getElementById('pn-btn-close');
    const palNumLinkedin = document.getElementById('mb-linkedin-pn');
    const palNumGithub = document.getElementById('mb-github-pn');
    const palNumTwitter = document.getElementById('mb-twitter-pn');
    

    // OPEN PALINDROME NUMBER DASHBOARD
    function showPalNum() {
        palNumDash.style.display = 'block';
        mainDash.style.display = 'block';
        isoDash.style.display = "none";
        palDash.style.display = "none";
        twoDash.style.display = "none";
        spinDash.style.display = "none";
        llwDash.style.display = "none";
        factDash.style.display = "none";
        revIntDash.style.display = "none";
        lnsDash.style.display = "none";
        revWordDash.style.display = "none";
        sumAllDash.style.display = "none";
        toRomeDash.style.display = "none";
        cardHolder.style.display = 'none'; 
        info.style.color = '#0b7c739d';  
        title.style.color= '#0b7c739d';  
        clock.style.color= '#0b7c739d';  
        mobileTitle.style.color= '#0b7c739d';
        linkedIn.style.border = '2px solid #0b7c739d';
        github.style.border = '2px solid #0b7c739d';
        twitter.style.border = '2px solid #0b7c739d';
        palNumLinkedin.style.border = '2px solid #0b7c739d';
        palNumGithub.style.border = '2px solid #0b7c739d';
        palNumTwitter.style.border = '2px solid #0b7c739d';
    }
    // PLAY PALINDROME NUMBER BUTTON
    palNumBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    palNumBtn.addEventListener('click', showPalNum);


    // PALINDROME NUMBER FORM ELEMENTS
    const palNumForm = document.getElementById("pn-form");
    const palNumOutcomeHolder = document.getElementById("pnRepoHolder");
    const palNumOutcome = document.getElementById("pnResponse");
    const buttonIsPalNum = document.getElementById("pn-btn");
    

    // PALINDROME NUMBER RESPONSE FUNCTIONS
    function hidePalNumOutcome() {
        palNumOutcomeHolder.style.display ="none";
        palNumOutcome.style.display ="none";
        buttonIsPalNum.style.display ="block";
    }
    function showPalNumOutcome() {
        palNumOutcomeHolder.style.display ="block";
        palNumOutcome.style.display ="block";
        palNumOutcome.style.color = "#e0e5ec";
        buttonIsPalNum.style.display ="none";
    }
    // CLEAR PALINDROME NUMBER FORM
    function clearPalNumForm() {
        setTimeout(function() {
            palNumForm.reset();
            hidePalNumOutcome();
        }, 3500);
    };

    // PALINDROME NUMBER BUTTON
    buttonIsPalNum.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonIsPalNum.addEventListener('click', isPalNum);

    // PALINDROME NUMBER FUNCTION
    function isPalNum(num) {
        // get input from form
        var num = document.getElementById("pn-text").value;
        // convert input to an array, reverse it, and join it back together
        let intArr =  parseInt(num.toString().split("").reverse().join(""))
        
        // regex for non-whole numbers
        let decimalCheck = /^[+-]?([0-9]+\.[0-9]*|\.[0-9]+)$/
    
        // check for input conditions and challenge constraints
        if (decimalCheck.test(num)) {
            showPalNumOutcome();
            palNumOutcome.innerHTML = `${num}`+ " is NOT an integer";
            clearPalNumForm();

        } else if(num >= Math.pow(2, 31)-1 || num <= Math.pow(-2,31)) {
            showPalNumOutcome();
            palNumOutcome.innerHTML = `${num}`+ " is not within the constraints";
            clearPalNumForm();
        }else if(intArr == num ) {
            showPalNumOutcome();
            palNumOutcome.innerHTML = `${num}`+ " is a Palindrome Number";
            clearPalNumForm();
        }else {
            showPalNumOutcome();
            palNumOutcome.innerHTML = `${num}`+ " is NOT a Palindrome Number";
            clearPalNumForm();
        }
    }

    // CLOSE PALINDROME NUMBER DASH
    palNumHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
    });
    palNumHomeBtn.addEventListener('click', showHome);


    // ********************************     REVERSE INTEGER       ********************************************************

    // REVERSE INTEGER DASHBOARD ELEMENTS
    const revIntDash = document.getElementById('reverse-int');
    const revIntBtn = document.getElementById('rev-play-btn');
    const revIntHomeBtn = document.getElementById('rev-int-btn-close');
    const revIntLinkedin = document.getElementById('mb-linkedin-rev');
    const revIntGithub = document.getElementById('mb-github-rev');
    const revIntTwitter = document.getElementById('mb-twitter-rev');
    

    // OPEN REVERSE INTEGER DASHBOARD
    function showRevInt() {
        revIntDash.style.display = 'block';
        mainDash.style.display = 'block';
        isoDash.style.display = "none";
        palDash.style.display = "none";
        twoDash.style.display = "none";
        spinDash.style.display = "none";
        llwDash.style.display = "none";
        factDash.style.display = "none";
        palNumDash.style.display = "none";
        lnsDash.style.display = "none";
        revWordDash.style.display = "none";
        sumAllDash.style.display = "none";
        toRomeDash.style.display = "none";
        cardHolder.style.display = 'none'; 
        lnsDash.style.display = 'none';
        info.style.color = '#8790e0';  
        title.style.color= '#8790e0';  
        clock.style.color= '#8790e0';   
        mobileTitle.style.color= '#8790e0'; 
        linkedIn.style.border = '2px solid #8790e0';
        github.style.border = '2px solid #8790e0';
        twitter.style.border = '2px solid #8790e0';
        revIntLinkedin.style.border = '2px solid #8790e0';
        revIntGithub.style.border = '2px solid #8790e0';
        revIntTwitter.style.border = '2px solid #8790e0';
    }
    // PLAY REVERSE INTEGER BUTTON
    revIntBtn.addEventListener('click', function(e) {
        e.preventDefault();
    });
    revIntBtn.addEventListener('click', showRevInt);

    // REVERSE INTEGER FORM ELEMENTS
    const revIntForm = document.getElementById("rev-int-form");
    const revIntOutcome = document.getElementById("revResponse");
    const buttonRevInt = document.getElementById("rev-int-btn");

    
    // REVERSE INTEGER RESPONSE FUNCTIONS
    function hideRevIntOutcome() {
        revIntOutcome.style.display ="none";
        buttonRevInt.style.display = "block";
    }
    function showRevIntOutcome() {
        revIntOutcome.style.display ="block";
        revIntOutcome.style.color = "#e0e5ec";
        buttonRevInt.style.display = "none";
    }
    // CLEAR REVERSE INTEGER FORM
    function clearRevIntForm() {
        setTimeout(function() {
            revIntForm.reset();
            hideRevIntOutcome();
        }, 3000);
    };

    // REVERSE INTEGER BUTTON
    buttonRevInt.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonRevInt.addEventListener('click', reverseInt);

    // REVERSE INTEGER FUNCTION
    function reverseInt(num) {
        // Get the input value
        var num = document.getElementById("rev-int-text").value;

        // Check if the input is empty
        let intArr =  parseInt(num.toString().split("").reverse().join(""))
        
        // regex to check for non whole numbers
        let decimalCheck = /^[+-]?([0-9]+\.[0-9]*|\.[0-9]+)$/

        // regex for letter and special characters or just special characters
        let specialChar = /[A-Za-z][!@#$%^&*()_+\=\[\]{};':"\\|,<>\/?]|[!@#$%^&*()_+\=\[\]{};':"\\|,<>\/?]/
        
        // regex for letts only
        let letters = /[A-Za-z]/  
        
        
        // check for input conditions and challenge constraints
        if (num === "" || specialChar.test(num) || letters.test(num)) {
            showRevIntOutcome();
            revIntOutcome.innerHTML = "Please enter a number";
            
        } else if (num == "0"){
            showRevIntOutcome();
            revIntOutcome.innerHTML = `${num}`;
            
        }else if (decimalCheck.test(num)) {
            showRevIntOutcome();
            revIntOutcome.innerHTML = `${num}`+ " is not an integer";
           

        } else if(num >= Math.pow(2, 31)-1 || num <= Math.pow(-2,31)) {
            showRevIntOutcome();
            revIntOutcome.innerHTML = `${num}`+ " is not within the constraints";
            
        }else if(num < 0 ) {
            // Consider -/+ inputs using
            let negInt = -Math.abs(intArr)

            showRevIntOutcome();
            revIntOutcome.innerHTML = `${negInt}`;
            
        }else {
            num > 0 ? showRevIntOutcome() : showRevIntOutcome();
            // showRevIntOutcome
            let revInt = Math.abs(intArr)
            revIntOutcome.innerHTML = `${revInt}`;
            
        }
        clearRevIntForm();
    }


    // CLOSE REVERSE INTEGER DASH
    revIntHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    revIntHomeBtn.addEventListener('click', showHome);

    // ********************************  LONGEST NON-REPEATING SUBSTRING      ********************************************************

    // Longest Non-Repeating Substring Container
    const lnsDash = document.getElementById('lnr');
    const lnsBtn = document.getElementById('lnr-play-btn');
    const lnsHomeBtn = document.getElementById('lnr-btn-close');
    const lnsLinkedin = document.getElementById('mb-linkedin-lnr');
    const lnsGithub = document.getElementById('mb-github-lnr');
    const lnsTwitter = document.getElementById('mb-twitter-lnr');
    

    // OPEN LONGEST NON-REPEATING SUBSTRING DASHBOARD
    function showLns() {
        lnsDash.style.display = 'block';
        mainDash.style.display = 'block';
        isoDash.style.display = "none";
        palDash.style.display = "none";
        twoDash.style.display = "none";
        spinDash.style.display = "none";
        llwDash.style.display = "none";
        factDash.style.display = "none";
        palNumDash.style.display = "none";
        revIntDash.style.display = "none";
        revWordDash.style.display = "none";
        sumAllDash.style.display = "none";
        toRomeDash.style.display = "none";
        cardHolder.style.display = 'none'; 
        info.style.color = '#ff0000';  
        title.style.color= '#ff0000';  
        clock.style.color= '#ff0000'; 
        mobileTitle.style.color= '#ff0000'; 
        linkedIn.style.border = '2px solid #ff0000';
        github.style.border = '2px solid #ff0000';
        twitter.style.border = '2px solid #ff0000';
        lnsLinkedin.style.border = '2px solid #ff0000';
        lnsGithub.style.border = '2px solid #ff0000';
        lnsTwitter.style.border = '2px solid #ff0000';
    }
    // PLAY LONGEST NON-REPEATING SUBSTRING BUTTON
    lnsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    lnsBtn.addEventListener('click', showLns);

    // DOM Elements
    const lnsForm = document.getElementById("lns-form");
    const lnsOutcome = document.getElementById("lnsResponse");
    const buttonCheckStr = document.getElementById("lns-btn");
   
    // LONGEST NON-REPEATING SUBSTRING RESPONSE FUNCTIONS
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
    // CLEAR LONGEST NON-REPEATING SUBSTRING FORM
    function clearLnsForm() {
        setTimeout(function() {
            lnsForm.reset();
            hideLsOutcome();
        }, 3000);
    };

    // CHECK LONGEST NON-REPEATING SUBSTRING BUTTON
    buttonCheckStr.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonCheckStr.addEventListener('click', checkLsInput);


    // CHECK LONGEST NON-REPEATING SUBSTRING INPUT FUNCTION
    function checkLsInput(str) {
        // Get the input value
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

    // LONGEST NON-REPEATING SUBSTRING FUNCTION
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
    
        // loop through the string
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
        // GET LONGEST NON-REPEATING SUBSTRING AND ITS LENGTH
        let longestUniqueSub =  str.substr(maxLengthStart,maxLength);
        let lengthOfUniqueSub = longestUniqueSub.length;

        showLsOutcome();
        lnsOutcome.innerHTML = "'"+ longestUniqueSub + "'" + " is " + lengthOfUniqueSub + " letters long" 
    }
    clearLnsForm();

    // CLOSE LONGEST NON-REPEATING SUBSTRING 
    lnsHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    lnsHomeBtn.addEventListener('click', showHome);


    // ********************************  REVERSE WORD/S     ********************************************************


    // REVERSE WORD/S DASHBOARD ELEMENTS
    const revWordDash = document.getElementById('rev-word');
    const revWordBtn = document.getElementById('rw-play-btn');
    const revWordHomeBtn = document.getElementById('rev-word-btn-close');
    const revWordLinkedin = document.getElementById('mb-linkedin-rev-word');
    const revWordGithub = document.getElementById('mb-github-rev-word');
    const revWordTwitter = document.getElementById('mb-twitter-rev-word');

    // OPEN REVERSE WORD/S DASHBOARD
    function showRevWord() {
        revWordDash.style.display = 'block';
        mainDash.style.display = 'block';
        isoDash.style.display = "none";
        palDash.style.display = "none";
        twoDash.style.display = "none";
        spinDash.style.display = "none";
        llwDash.style.display = "none";
        factDash.style.display = "none";
        palNumDash.style.display = "none";
        revIntDash.style.display = "none";
        lnsDash.style.display = "none";
        sumAllDash.style.display = "none";
        toRomeDash.style.display = "none";
        cardHolder.style.display = 'none';
        info.style.color = '#8e06fdda';  
        title.style.color= '#8e06fdda';  
        clock.style.color= '#8e06fdda'; 
        mobileTitle.style.color= '#8e06fdda'; 
        linkedIn.style.border = '2px solid #8e06fdda';
        github.style.border = '2px solid #8e06fdda';
        twitter.style.border = '2px solid #8e06fdda';
        revWordLinkedin.style.border = '2px solid #8e06fdda';
        revWordGithub.style.border = '2px solid #8e06fdda';
        revWordTwitter.style.border = '2px solid #8e06fdda';
    }

    // PLAY BUTTON FOR REVERSE WORD/S DASHBOARD
    revWordBtn.addEventListener('click', function(e) {
        e.preventDefault();
    });
    revWordBtn.addEventListener('click', showRevWord);

    // REVERSE WORD/S FORM ELEMENTS
    const revWordForm = document.getElementById("rev-word-form");
    const revWordOutcome = document.getElementById("revWordResponse");
    const buttonRevWord = document.getElementById("rev-word-btn");

    

    // REVERSE WORD/S RESPONSE FUNCTION
    function hideRevWordOutcome() {
        revWordOutcome.style.display ="none";
        buttonRevWord.style.display = "block";
    }
    function showRevWordOutcome() {
        revWordOutcome.style.color = "#e0e5ec";
        revWordOutcome.style.display ="block";
        buttonRevWord.style.display = "none";
    }
    // CLEAR REVERSE WORD/S FORM
    function clearRevWordForm() {
        setTimeout(function() {
            revWordForm.reset();
            hideRevWordOutcome();
        }, 3500);
    };
    // REVERSE WORD/S BUTTON
    buttonRevWord.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonRevWord.addEventListener('click', reverseWords);


    // REVERSE WORD/S FUNCTION
    function reverseWords() {
        //convert string to array, reverse it and assign it 
        let arr = document.getElementById("rev-word-text").value.split(" ").reverse();
    
        // get the length of the reversed array
        let lengthArr = arr.length;
        // initialize an empty array to store reversed words that are not empty
        let newArr = [];
        
        // let specialChar = /[A-Za-z][@$%^&*()_+\=\[\]{};':"\\|,<>\/]|[#%^&*()_+\=\[\]{};':"\\|,<>\/?]/
        // let letNum = /[a-zA-Z ]/
        // if (letNum.test(arr)) {
        //     console.log("true");
        // }else {
        //     console.log("false");
        // }

        // if the array satisfies the constraints
        
        if(lengthArr <= Math.pow(10, 4) || arr >= 1) {
                
            // loop through the array
            for (let i = lengthArr - 1; i >= 0; i--) {

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

    // CLOSE REVERSE WORD/S DASHBOARD
    revWordHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
    });
    revWordHomeBtn.addEventListener('click', showHome);

    // ********************************  SUM ALL IN A RANGE    ********************************************************

    // SUM ALL IN A RANGE DASHBOARD ELEMENTS
    const sumAllDash = document.getElementById('sm-all');
    const sumAllBtn = document.getElementById('sum-all-play-btn');
    const sumAllHomeBtn = document.getElementById('sm-all-btn-close');
    const sumAllLinkedin = document.getElementById('mb-linkedin-sm-all');
    const sumAllGithub = document.getElementById('mb-github-sm-all');
    const sumAllTwitter = document.getElementById('mb-twitter-sm-all');

    // OPEN SUM ALL IN A RANGE DASHBOARD
    function showSumAll() {  
       
        sumAllDash.style.display = 'block';
        mainDash.style.display = 'block';
        isoDash.style.display = "none";
        palDash.style.display = "none";
        twoDash.style.display = "none";
        spinDash.style.display = "none";
        llwDash.style.display = "none";
        factDash.style.display = "none";
        palNumDash.style.display = "none";
        revIntDash.style.display = "none";
        lnsDash.style.display = "none";
        revWordDash.style.display = "none";
        toRomeDash.style.display = "none";
        cardHolder.style.display = 'none';
        info.style.color = '#f36c36ed';  
        title.style.color= '#f36c36ed';  
        clock.style.color= '#f36c36ed'; 
        mobileTitle.style.color= '#f36c36ed'; 
        linkedIn.style.border = '2px solid #f36c36ed';
        github.style.border = '2px solid #f36c36ed';
        twitter.style.border = '2px solid #f36c36ed';
        sumAllLinkedin.style.border = '2px solid #f36c36ed';
        sumAllGithub.style.border = '2px solid #f36c36ed';
        sumAllTwitter.style.border = '2px solid #f36c36ed';
        
    }
    sumAllBtn.addEventListener('click', function(e) {
        e.preventDefault();
    });
    sumAllBtn.addEventListener('click', showSumAll);

    // SUM ALL IN A RANGE FORM ELEMENTS
    const sumAllForm = document.getElementById("sm-all-form");
    const sumAllOutcome = document.getElementById("sumAllResponse");
    const buttonSumAll = document.getElementById("sm-all-btn");

    // SUM ALL IN A RANGE RESPONSE FUNCTION
    
    function hideSumAllOutcome() {
        sumAllOutcome.style.display ="none";
        buttonSumAll.style.display = "block";
    }
    function showSumAllOutcome() {
        sumAllOutcome.style.display ="block";
        sumAllOutcome.style.color = "#e0e5ec";
        buttonSumAll.style.display = "none";
    }

    // CLEAR SUM ALL IN A RANGE FORM
    function clearSumAllForm() {
        setTimeout(function(e) {
            sumAllForm.reset();
            hideSumAllOutcome();
        }, 3000);
    };

    // SUM ALL IN A RANGE BUTTON
    buttonSumAll.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonSumAll.addEventListener('click', checkSumAllInput);

    // SUM ALL IN A RANGE CHECK INPUT FUNCTION
    function checkSumAllInput(arr) {
        // get the input value and convert it to an array
        arr = document.getElementById("sm-all-text").value;

        // loop through the array
        for (let i = 0; i < arr.length - 1; i++){

            // regex for letter and special characters or just letters or just special characters
            let specialCases = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[A-Za-z]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            
            //if the array contains letters or special characters
            if(specialCases.test(arr)) {
                // if yes, user gets prompted to enter the correct data type
                showSumAllOutcome();
                sumAllOutcome.innerHTML = "Enter only numbers";
            }else{
                //otherwise, check if target is a number
                sumAll();
            }
            // clear the form after the function runs
            clearSumAllForm();
        }   
    }

    // SUM ALL IN A RANGE FUNCTION
    function sumAll(arr) {
        // get DOM input and separates at each space between numbers
        arr = document.getElementById("sm-all-text").value.split(" ");

        // makes sure array is numbers
        arr = arr.map(Number)

        // find the largest number in the array
        let max = Math.max(arr[0], arr[1]);
        // find the smallest number in the array
        let min = Math.min(arr[0], arr[1]);
        // sum between the min and max
        let sum = 0;
        // loop through the array
        for (let i = min; i <= max; i++) {
            sum += i;
        }
        showSumAllOutcome();
        sumAllOutcome.innerHTML = sum + " is the sum of all numbers between " + min + " and " + max;
        clearSumAllForm();
    }
    
    // CLOSES SUM ALL IN A RANGE DASHBOARD
    sumAllHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
    });
    sumAllHomeBtn.addEventListener('click', showHome);


    // ********************************  TO ROME AND BACK   ********************************************************

    // To Rome and Back Container
    const toRomeDash = document.getElementById('rome');
    const toRomeBtn = document.getElementById('rome-play-btn');
    const toRomeHomeBtn = document.getElementById('rome-btn-close');
    const romeLinkedIn = document.getElementById('mb-linkedin-rome');
    const romeGithub = document.getElementById('mb-github-rome');   
    const romeTwitter = document.getElementById('mb-twitter-rome');
    // const romanPdf = document.getElementById("romepdf");

    // To Rome and Back Dashboard
    function showToRome() {
        toRomeDash.style.display = 'block';
        mainDash.style.display = 'block';
        isoDash.style.display = "none";
        palDash.style.display = "none";
        twoDash.style.display = "none";
        spinDash.style.display = "none";
        llwDash.style.display = "none";
        factDash.style.display = "none";
        palNumDash.style.display = "none";
        revIntDash.style.display = "none";
        lnsDash.style.display = "none";
        revWordDash.style.display = "none";
        sumAllDash.style.display = "none";
        cardHolder.style.display = 'none';
        info.style.color = '#05c0c7';  
        title.style.color= '#05c0c7';  
        clock.style.color= '#05c0c7'; 
        mobileTitle.style.color= '#05c0c7'; 
        linkedIn.style.border = '2px solid #05c0c7';
        github.style.border = '2px solid #05c0c7';
        twitter.style.border = '2px solid #05c0c7';
        romeLinkedIn.style.border = '2px solid #05c0c7';
        romeGithub.style.border = '2px solid #05c0c7';
        romeTwitter.style.border = '2px solid #05c0c7';
        // PDFObject.embed("pdf/Rome.pdf", "#romanpdf")
    };
    // OPEN TO ROME AND BACK DASHBOARD
    toRomeBtn.addEventListener('click', function(e){
        e.preventDefault();
    })
    toRomeBtn.addEventListener('click', showToRome);

    // TO ROME AND BACK FORM ELEMENTS
    const romeForm = document.getElementById("rome-form");
    const romeOutcome = document.getElementById("romeResponse");
    const romeOutcomeHolder = document.getElementById("romeRepoHolder");
    const buttonRome = document.getElementById("rome-btn");
    

    // TO ROME AND BACK RESPONSE FUNCTION
    function hideRomeOutcome() {
        romeOutcomeHolder.style.display = "none";
        romeOutcome.style.display ="none";
        buttonRome.style.display = "block";
    }
    function showRomeOutcome() {
        romeOutcomeHolder.style.display = "block";
        romeOutcome.style.color = "#e0e5ec";
        romeOutcome.style.display ="block";
        buttonRome.style.display = "none";
    }
    // CLEAR TO ROME AND BACK FORM
    function clearRomeForm() {
        setTimeout(function() {
            romeForm.reset();
            hideRomeOutcome();
        }, 3500);
    };

    // CHECK TO ROME AND BACK INPUT FUNCTION 
    buttonRome.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonRome.addEventListener('click', checkRome);

    // TO ROME AND BACK CHECK INPUT FUNCTION
    function checkRome(input) {
        // get the value of the input
        input = document.getElementById("rome-text").value;
        // convert the input to upper case
        input = input.toUpperCase();
        // check case
        console.log(input);

        // regex for roman numerals
        let roman = /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/;
        // regex for numbers
        let numbers = /^[0-9]/;
        // regex for special characters
        let specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

        // check if the input contains special characters & numbers
        if (specialChar.test(input) && numbers.test(input)) {
            romeOutcome.innerHTML = "Please enter a whole number";
            showRomeOutcome();
            // return 'roman';

          // is input a roman numeral if so convert to number
        } else if (roman.test(input)) {
            console.log("Roman");
            toInt();

          // is input a number if so convert to roman numeral
        } else if(numbers.test(input)) {
            console.log("Numbers")
            toRoman();

          // otherwise input is invalid
        }else {
            romeOutcome.innerHTML = "Please enter a valid roman number or number";
            showRomeOutcome();
        }
        clearRomeForm();
    };

    // CONVERT TO ROMAN NUMERALS FUNCTION
    function toRoman(num) {
            // convert the input to a number
            num = Number(document.getElementById("rome-text").value);
        // check constraints
        if (num <= 0 || num > 3999) {
            showRomeOutcome();
            romeOutcome.innerHTML = "Please enter a number from 1 to 3999";

            // satifies contraints, convert to roman numeral
        } else {
            // create a map of key value pairs to convert to roman numerals
            const intMap = new Map([[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], 
                                [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], 
                                [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]);
            // assign 'roman' to an empty string
            let roman = '';
            // loop through the map object
            while (num > 0) {
            // access the key-value pairs of the map
                for (let [key, value] of intMap) {
                    // if the value of the key is less than or equal to the num
                    if (num >= key) {
                        // add the value to the roman string
                        roman += value;
                        // subtract the value from the num
                        num -= key;
                        // break out of the loop
                        break;
                    }
                }
                //return roman;
                showRomeOutcome();
                romeOutcome.innerHTML = roman;
                console.log(roman);
            }
            
        }
    }

    // CONVERT TO INTEGER FUNCTION
    function toInt(str) {
        // assign the input to a variable
        str = document.getElementById("rome-text").value.toUpperCase();
        
        // assign the length of the string to a variable;
        strLength = str.length;
        // create a map that contains the key - value pairs of roman numerals - integers
        const romanMap = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], 
            ['D', 500], ['M', 1000]]);

        // check constraints
        if (strLength <= 0 || strLength > 15) {
            // return 'invalid';
            showRomeOutcome();
            romeOutcome.innerHTML = "Please enter a valid roman numeral";

            // satifies contraints, convert to integer  
        } else {
            // assign the difference of the string's length and 1 to a variable
            let i = strLength - 1;
            // assign the value at that key to a variable
            let int = romanMap.get(str[i]);
            console.log(int);
            // loop through the string as long as the length is greater than 0
            while (i > 0) {
                // assign the value at the key to a variable to get the current value
                const curr = romanMap.get(str[i]);
                // assign the value at map key-1 to a variable to get the previous value
                const prev = romanMap.get(str[i - 1]);

            // if the current value is less than the previous value
            if (prev >= curr) {
                // add the previous value to the integer
                int += prev;
            } else {
                // otherwise, subtract the previous value from the integer
                int -= prev;
            }
            // decrement by 1 for each loop
                i--;
            }
            // contraints - check the returned integer 
            if (int > 3999) {
                showRomeOutcome();
                romeOutcome.innerHTML = "Please a roman numeral between I and  MMMCMXCIX";
            } else {
                showRomeOutcome()
                romeOutcome.innerHTML = int;
            }
        }
    };

    // var romanpdf = $("romanpdf");
    //     PDFObject.embed("pdf/Rome.pdf", "#romanpdf");

    // CLOSE TO ROME AND BACK DASHBOARD
    toRomeHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
    });
    toRomeHomeBtn.addEventListener('click', showHome);
});