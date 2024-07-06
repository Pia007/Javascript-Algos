// HOME PAGE 
document.addEventListener("DOMContentLoaded", () => {
    // Header Elements
    const info = document.getElementById('info-icon');
    const infoBtn = document.getElementById('info-btn');
    const closeInfo = document.getElementById('info-btn-close');
    const title = document.getElementById('header-title');
    const clock = document.getElementById('clock');
    const mobileTitle = document.getElementById('mb-header-title');

    // Dashboards
    const cardHolder = document.getElementById('dg-holder');
    const mainDash = document.getElementById('algo-dash');
    const infoDash = document.getElementById('info-dash');
    const isoDash = document.getElementById('iso-container');
    const palDash = document.getElementById('palindrome');
    const twoDash = document.getElementById('two-sum');
    const spinDash = document.getElementById('spin-words');
    const llwDash = document.getElementById('longest-word');
    const factDash = document.getElementById('factorialize');
    const palNumDash = document.getElementById('pal-num');
    const revIntDash = document.getElementById('reverse-int');
    const lnsDash = document.getElementById('lnr');
    const revWordDash = document.getElementById('rev-word');
    const sumAllDash = document.getElementById('sm-all');
    const toRomeDash = document.getElementById('rome');

    // Dash Open Buttons 
    const isoBtn = document.getElementById('iso-play-btn');
    const palBtn = document.getElementById('pal-play-btn');
    const twoBtn = document.getElementById('two-play-btn');
    const spinBtn = document.getElementById('spin-play-btn');
    const llwBtn = document.getElementById('llw-play-btn');
    const factBtn = document.getElementById('fact-play-btn');
    const palNumBtn = document.getElementById('pn-play-btn');
    const revIntBtn = document.getElementById('rev-play-btn');
    const lnsBtn = document.getElementById('lnr-play-btn');
    const revWordBtn = document.getElementById('rw-play-btn');
    const sumAllBtn = document.getElementById('sum-all-play-btn');
    const toRomeBtn = document.getElementById('rome-play-btn');

    // Dash Close Buttons
    const isoHomeBtn = document.getElementById("iso-btn-close");
    const palHomeBtn = document.getElementById("pal-btn-close");
    const twoHomeBtn = document.getElementById("ts-btn-close");
    const spinHomeBtn = document.getElementById('spin-btn-close');
    const llwHomeBtn = document.getElementById('lw-btn-close');
    const factHomeBtn = document.getElementById('fact-btn-close');
    const palNumHomeBtn = document.getElementById('pn-btn-close');
    const revIntHomeBtn = document.getElementById('rev-int-btn-close');
    const lnsHomeBtn = document.getElementById('lnr-btn-close');
    const revWordHomeBtn = document.getElementById('rev-word-btn-close');
    const sumAllHomeBtn = document.getElementById('sm-all-btn-close');
    const toRomeHomeBtn = document.getElementById('rome-btn-close');


    // Footer Elements
    const socialBtns = document.querySelectorAll('.social-btn-item');
    const copy = document.getElementById('cp');   
    const year = new Date().getFullYear();

    //***************************CLOCK ********************/
    function Time() {
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        
        hour = update(hour);
        minute = update(minute);
        second = update(second);
        document.getElementById("clock").innerHTML = hour + " : " + minute + " : " + second;
        setTimeout(Time, 1000);
    
        function update(t) {
            if (t < 10) {
                return "0" + t;
            } else {
                return t;
            }
        }
    }
    Time();

    // Create an array of dashboard
    const dashboards = [
        infoDash,isoDash, palDash, twoDash, spinDash,
        llwDash, factDash, palNumDash, revIntDash,
        lnsDash, revWordDash, sumAllDash, toRomeDash,
        mainDash, cardHolder
    ];

    // create a reusable function to show a specifc dash board and hide others. For example show the infodash and hide the rest
    function showDash(dash, color) {
        dashboards.forEach(function(dashboard) {
            dashboard.style.display = 'none';
        })
        if (dash === cardHolder || dash === infoDash) {
            dash.style.display = 'block';
            updateColor(color);
        } else {
            dash.style.display = 'block';
            mainDash.style.display = 'block';
            updateColor(color);
        }
    }

    function changeSocBtnColor(color) {
        socialBtns.forEach(function(btn) {
            btn.style.border = `2px solid ${color}`;
        })
    }

    function updateColor(color) {    
        info.style.color = color;  
        title.style.color= color;  
        clock.style.color= color; 
        mobileTitle.style.color= color;
        copy.style.color = color;
        changeSocBtnColor(color);
    }

    function hideResponse(res, btn) {
        res.style.display = "none";
        btn.style.display = "block";
    }

    function showResponse(res, btn) {
        res.style.display = "block";
        btn.style.display = "none";
    }

    function clearForm(dashForm, res, btn) {
        setTimeout(function() {
            if(dashForm) {
                dashForm.reset();
                hideResponse(res, btn);
            } else {
                console.error('Form not found');
            }
        }, 2500);
    }

    
    //*************************** HOME ********************/
    // SHOW HOME PAGE
    showDash(cardHolder, '#c32abbc9');
    

    //***********************  INFORMATION DASH ****************************/
    infoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(infoDash,  '#6d88c8');
    });

    closeInfo.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(cardHolder, '#c32abbc9');
    });

    // ******************ISOGRAM******************************
    
    // PLAY ISOGRAM FROM HOMEPAGE
    isoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(isoDash, '#37A4C8');
        
    });

    const isoForm = document.getElementById("form");
    const isoSubmitBtn = document.getElementById("check-input");
    const isoResponse = document.getElementById("eval");

    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON AND CALL ISOGRAM CRITERIA EVALUATION FUNCTION
    isoSubmitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    isoSubmitBtn.addEventListener('click', evalString);

    // EVALUATE THE STRING AGAINST CRITERIA
    function evalString(str) {
        str = document.getElementById("isogramText").value;
        // ISOGRAM CRITERIA
        for (let i = 0; i < str.length - 1; i++){
            let specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            let numbers = /\d/
            
            if(specialChar.test(str) && numbers.test(str) && str.indexOf(' ') >= 1 ){
                showResponse(isoResponse, isoSubmitBtn);
                response.innerHTML = "Try again! " + `${str}` + " is not a single word and has atleast one number and special character."
            }else if(str.indexOf(' ') >= 1 && specialChar.test(str)){
                showResponse(isoResponse, isoSubmitBtn);
                response.innerHTML = "Try again! "+ "'"+`${str}`+"'" +  " is not a single word and has atleast one special character."
            }else if(str.indexOf(' ') >= 1 && numbers.test(str)){
                showResponse(isoResponse, isoSubmitBtn);
                response.innerHTML = "Try again! " + "'"+`${str}`+"'" + " is not a single word and has atleast one number."
            }else if(specialChar.test(str) && numbers.test(str)){
                showResponse(isoResponse, isoSubmitBtn);
                response.innerHTML = "Try again! " + "'"+`${str}`+"'" + " has atleast one number and special character."
            }else if(str.indexOf(' ') >= 0){
                showResponse(isoResponse, isoSubmitBtn);
                response.innerHTML = "Try again! " + "'"+`${str}`+"'" + " is not a single word."
            }else if(specialChar.test(str)) {
                showResponse(isoResponse, isoSubmitBtn);
                response.innerHTML = "Try again! " + "'"+`${str}`+"'" + " has atleast one special character."
            }else if(numbers.test(str)) {
                showResponse(isoResponse, isoSubmitBtn);
                response.innerHTML = "Try again! " + "'"+`${str}`+"'" + " has atleast one number."
            }
            else {
                // CALL THE ISOGRAM FUNCTION
                isIsogram();
            }     
            clearForm(isoForm, isoResponse, isoSubmitBtn);
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
            showResponse(isoResponse, isoSubmitBtn);
            isoResponse.innerHTML = "'"+`${str}`+"'" + " IS an isogram."
        }else {
            showResponse(isoResponse, isoSubmitBtn);
            isoResponse.innerHTML = "'"+`${str}`+"'" + " is NOT an isogram."
        }
        
    };

    // CLOSE ISOGRAM 
    isoHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(cardHolder, '#c32abbc9');
    });

    // ******************PALINDROME******************************

    // PLAY BUTTON TO OPEN PALINDROME DASH
    palBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(palDash, '#FFA500');
        
    });

    // PALINDROME FORM ELEMENTS
    const palForm = document.getElementById("pal-form");
    const palOutcome = document.getElementById("palResponse");
    const buttonCheckPal = document.getElementById("pal-check-string");


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
            showResponse(palOutcome, buttonCheckPal);
            palOutcome.innerHTML ="' " + `${words}`+ " '"  + " IS a palindrome"; 
        }else {
            showResponse(palOutcome, buttonCheckPal);
            palOutcome.innerHTML = "' " + `${words}`+ " '"  +  " is NOT a palindrome";
        }
        clearForm(palForm, palOutcome, buttonCheckPal);
    }

    // CLOSE PALINDROME DASH
    palHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(cardHolder, '#c32abbc9');
    });


    /****************************TWO SUM********************************************/
    // PLAY BUTTON TO OPEN TWO SUM DASH
    twoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(twoDash, '#5b0eeb');
    });
    // twoBtn.addEventListener('click', showTwo);

    // TWO SUM FORM ELEMENTS
    const tsForm = document.getElementById("ts-form");
    const sumOutcome = document.getElementById("sumResponse");
    const buttonSum = document.getElementById("check-sum");


    // TWO SUM RESPONSE FUNCTIONS
    // function hideOutcome() {
    //     sumOutcome.style.display ="none";
    //     buttonSum.style.display = "block";
    // }
    // function showOutcome() {
    //     sumOutcome.style.display ="block";
    //     sumOutcome.style.color = "#e0e5ec";
    //     buttonSum.style.display = "none";
    // }

    // // TWO SUM CLEAR FORM
    // function clearTsForm() {
    //     setTimeout(function(e) {
    //         tsForm.reset();
    //         hideOutcome();
    //     }, 3000);
    // };

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
                showResponse(sumOutcome, buttonSum);
                sumOutcome.innerHTML = "Enter only numbers";
    
            }else{
                //otherwise, check if target is a number
                checkTarget()
            }
            // clear the form after the function runs
            clearForm(tsForm, sumOutcome, buttonSum);
        }   
    }

    // CHECK TARGET NUMBER
    function checkTarget(target) {
        target = document.getElementById("targetNumber").value;

        // regex for letter and special characters or just special characters
        let specialCases = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[A-Za-z]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            
        // if the target contains letters or special characters
        if(specialCases.test(target)) {
            showResponse(sumOutcome, buttonSum);
            sumOutcome.innerHTML = "Enter a number";
        } else{
        //otherwise, call length of twoSum function
            twoSum()
        }
        // clear the form after the function runs
        clearForm(tsForm, sumOutcome, buttonSum);
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
                showResponse(sumOutcome, buttonSum);
                sumOutcome.innerHTML = `${target}` + " is the sum of the values at indices ["+`${indexOne}`+", " +`${indexTwo}`+"]."
                break;
            }else { 
                // the two sums were not found
                numsObj[numDifference] = i
                let newArr = arr.join(", ")
                showResponse(sumOutcome, buttonSum);
                sumOutcome.innerHTML = "The sum of  " + `${target}` + " is NOT in [" + `${newArr}` + "]";
                
            }
            clearForm(tsForm, sumOutcome, buttonSum);
        }
    } 

    // CLOSE TWO SUM DASH
    twoHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(cardHolder, '#c32abbc9');
    });

    // **************************************SPIN WORDS****************************************************

    // PLAY BUTTON TO OPEN SPIN WORDS DASHBOARD
    spinBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(spinDash, '#f89898');
    });
    // spinBtn.addEventListener('click', showSpin);

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
            }else if(num =="0" && str != "") {
                showSwOutcome();
                swOutcome.innerHTML = "Please enter a number greater than 0";
                
                // clearSwForm();
            }else if ( num != "0" && str == "") {
                showSwOutcome();
                swOutcome.innerHTML = "Please enter a word/words";
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
        showDash(cardHolder, '#c32abbc9');
    });

    //****************************************LENGTH OF THE LONGEST WORD****************************************************************** */
    // PLAY LENGTH OF THE LONGEST WORD BUTTON
    llwBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(llwDash, '#35c048');
    });

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
        showDash(cardHolder, '#c32abbc9');
    });

    /* *************************    FACTORIALIZE    ******************************************************* */

    // PLAY FACTORIALIZE BUTTON
    factBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(factDash, '#eb0e96');
    });

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
        }else if (integer < 0 && decimalCheck.test(integer)) {
            showFactOutcome()
            factOutcome.innerHTML = `${integer}`+ " is NOT an integer";
        }else if (integer < 0) {
            showFactOutcome()
            factOutcome.innerHTML = "The factorial of " +`${integer}`+ " is UNDEFINED";
        }else if (decimalCheck.test(integer)) {
            showFactOutcome()
            factOutcome.innerHTML = `${integer}` + " is NOT a whole number";
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
        showDash(cardHolder, '#c32abbc9');
    });

    // ****************************************   PALINDROME NUMBER    *********************************************
    
    // PLAY PALINDROME NUMBER BUTTON
    palNumBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(palNumDash, '#0b7c739d');
    });
    // palNumBtn.addEventListener('click', showPalNum);


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
        showDash(cardHolder, '#c32abbc9');
    });

    // ********************************     REVERSE INTEGER       ********************************************************
    
    // PLAY REVERSE INTEGER BUTTON
    revIntBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(revIntDash, '#8790e0');
    });
    // revIntBtn.addEventListener('click', showRevInt);

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
        showDash(cardHolder, '#c32abbc9');
    });

    // ********************************  LONGEST NON-REPEATING SUBSTRING      ********************************************************
    
    // PLAY LONGEST NON-REPEATING SUBSTRING BUTTON
    lnsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(lnsDash, '#ff0000');
    });
    // lnsBtn.addEventListener('click', showLns);

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
        showDash(cardHolder, '#c32abbc9');
    });

    // ********************************  REVERSE WORD/S     ********************************************************

    // PLAY BUTTON FOR REVERSE WORD/S DASHBOARD
    revWordBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(revWordDash, '#8e06fdda');
    });

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
        
        // if the array satisfies the constraints
        if(lengthArr <= Math.pow(10, 4) || arr >= 1 ) {
                
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
        showDash(cardHolder, '#c32abbc9');
    });

    // ********************************  SUM ALL IN A RANGE    ********************************************************

    sumAllBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(sumAllDash, '#f36c36ed');
    });
    // sumAllBtn.addEventListener('click', showSumAll);

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
        showDash(cardHolder, '#c32abbc9');
    });

    // ********************************  TO ROME AND BACK   ********************************************************

    // OPEN TO ROME AND BACK DASHBOARD
    toRomeBtn.addEventListener('click', function(e){
        e.preventDefault();
        showDash(toRomeDash, '#05c0c7');
    })

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
          // is input a roman numeral if so convert to number
        } else if (roman.test(input)) {
            console.log("Roman");
            toInt();
        } else if(numbers.test(input)) {
            console.log("Numbers")
            toRoman();
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

    // CLOSE TO ROME AND BACK DASHBOARD
    toRomeHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(cardHolder, '#c32abbc9');
    });
});