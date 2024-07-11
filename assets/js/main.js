// HOME PAGE 
document.addEventListener("DOMContentLoaded", () => {
    // Header Elements
    const infoIcon = document.getElementById('info-icon');
    const infoBtn = document.getElementById('info-btn');
    const closeInfo = document.getElementById('info-btn-close');
    const webTitle = document.getElementById('header-title');
    const appClock = document.getElementById('clock');
    const mobileTitle = document.getElementById('mb-header-title');

    // Dashboards
    const homepage = document.getElementById('dg-holder');
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
    const copyDev = document.getElementById('cp'); 
    const footerYear = document.getElementById('year');  
    footerYear.innerHTML = new Date().getFullYear(); 

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

    const headerAndFooterElements = [
        infoIcon, webTitle, appClock, mobileTitle, copyDev
    ];

    function updateColor(arr=headerAndFooterElements, color) {
        arr.forEach(function(tag) { 
            tag.style.color = color;
        })
        changeSocBtnColor(color);
    }

    const dashboards = [
        infoDash,isoDash, palDash, twoDash, spinDash,
        llwDash, factDash, palNumDash, revIntDash,
        lnsDash, revWordDash, sumAllDash, toRomeDash,
        mainDash, homepage
    ];

    // function to show a particular dashboard
    function showDash(dash, color) {
        dashboards.forEach(function(dashboard) {
            dashboard.style.display = 'none';
        })
        if (dash === homepage || dash === infoDash) {
            dash.style.display = 'block';
            updateColor(arr=headerAndFooterElements, color);
        } else {
            dash.style.display = 'block';
            mainDash.style.display = 'block';
            updateColor(arr=headerAndFooterElements, color);   
        }
    }

    function changeSocBtnColor(color) {
        socialBtns.forEach(function(btn) {
            btn.style.border = `2px solid ${color}`;
        })
    }

    function hideResponse(res, btn) {
        res.style.display = "none";
        btn.style.display = "block";
    }

    // add an optional third parameter to the function to show the response
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
        }, 3000);
    }

    //*************************** HOME ********************/
    showDash(homepage, '#c32abbc9');
    

    //***********************  INFORMATION DASH ****************************/
    infoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(infoDash,  '#6d88c8');
    });

    closeInfo.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(homepage, '#c32abbc9');
    });

    // ******************ISOGRAM******************************

    isoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(isoDash, '#37A4C8');
    });

    const isoForm = document.getElementById("form");
    const isoSubmitBtn = document.getElementById("check-input");
    const isoResponse = document.getElementById("eval");

    isoSubmitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        evalString();
    });

    // validate the input
    function evalString(str) {
        str = document.getElementById("isogramText").value;

        let evaluation = showResponse(isoResponse, isoSubmitBtn);
    
        for (let i = 0; i < str.length - 1; i++){
            let specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            let numbers = /\d/
            
            if(specialChar.test(str) && numbers.test(str) && str.indexOf(' ') >= 1 ){
                evaluation;
                isoResponse.innerHTML = "Try again! " + `${str}` + " is not a single word and has atleast one number and special character."
            } else if(str.indexOf(' ') >= 1 && specialChar.test(str)){
                evaluation;
                isoResponse.innerHTML = "Try again! "+ "'"+`${str}`+"'" +  " is not a single word and has atleast one special character."
            } else if(str.indexOf(' ') >= 1 && numbers.test(str)){
                evaluation;
                isoResponse.innerHTML = "Try again! " + "'"+`${str}`+"'" + " is not a single word and has atleast one number."
            } else if(specialChar.test(str) && numbers.test(str)){
                evaluation;
                isoResponse.innerHTML = "Try again! " + "'"+`${str}`+"'" + " has atleast one number and special character."
            } else if(str.indexOf(' ') >= 0){
                evaluation;
                isoResponse.innerHTML = "Try again! " + "'"+`${str}`+"'" + " is not a single word."
            } else if(specialChar.test(str)) {
                evaluation;
                isoResponse.innerHTML = "Try again! " + "'"+`${str}`+"'" + " has atleast one special character."
            } else if(numbers.test(str)) {
                evaluation;
                isoResponse.innerHTML = "Try again! " + "'"+`${str}`+"'" + " has atleast one number."
            } else {
                isIsogram();
            }     
            clearForm(isoForm, isoResponse, isoSubmitBtn);
        };
        
    };    

    // isogram function
    function isIsogram() {
        var str = document.getElementById("isogramText").value;
        var letters = str.toLowerCase().split('');
        
        var newLetters = [];
        
        // interating  over each substring in the letters array and compare it to the newLetters array.
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

    isoHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(homepage, '#c32abbc9');
    });

    // ******************PALINDROME******************************

    palBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(palDash, '#FFA500');
        
    });

    const palForm = document.getElementById("pal-form");
    const palOutcome = document.getElementById("palResponse");
    const buttonCheckPal = document.getElementById("pal-check-string");

    buttonCheckPal.addEventListener('click', function(e) {
        e.preventDefault();
        palindromeChecker();
    });

    // palindrome function
    function palindromeChecker(str) {
        let words = document.getElementById("pal-text").value;

        // Use regex to search for occurences of only upper and lower case letters
        let regEx = /[^a-zA-Z]/gi;
        let newStrArr = words.replace(regEx,'').toLowerCase().split('');
        let newStr = newStrArr.join('');
        let revNewStr = newStrArr.reverse().join('');

        // check for numbers
        if (/\d/.test(words)) {
            showResponse(palOutcome, buttonCheckPal);
            palOutcome.innerHTML = "Enter only letters";
        } else if (words === "") {
            showResponse(palOutcome, buttonCheckPal);
            palOutcome.innerHTML = "Please enter a word/words";
        } else if (newStr === revNewStr ) {
            showResponse(palOutcome, buttonCheckPal);
            palOutcome.innerHTML ="' " + `${words}`+ " '"  + " IS a palindrome"; 
        } else {
            showResponse(palOutcome, buttonCheckPal);
            palOutcome.innerHTML = "' " + `${words}`+ " '"  +  " is NOT a palindrome";
        }
        clearForm(palForm, palOutcome, buttonCheckPal);
    }

    palHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(homepage, '#c32abbc9');
    });

    //****************************TWO SUM********************************************/

    twoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(twoDash, '#5b0eeb');
    });

    const tsForm = document.getElementById("ts-form");
    const sumOutcome = document.getElementById("sumResponse");
    const buttonSum = document.getElementById("check-sum");

    buttonSum.addEventListener('click', function(e) {
        e.preventDefault();
        checkTsInput();
    });

    // validate the input
    function checkTsInput() {
        let arr = document.getElementById("randomNumbers").value;
        // regex for letters and special characters or just letters or just special characters
        let specialCases = /[A-Za-z]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

        if (specialCases.test(arr)) {
            showResponse(sumOutcome, buttonSum);
            sumOutcome.innerHTML = "Enter only numbers";
        } else {
            checkTarget();
        }
    }

    // check the target number
    function checkTarget() {
        let target = document.getElementById("targetNumber").value;
        // regex for letters and special characters or just special characters
        let specialCases = /[A-Za-z]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

        // if the target contains letters or special characters
        if (specialCases.test(target)) {
            showResponse(sumOutcome, buttonSum);
            sumOutcome.innerHTML = "Enter a number";
        } else {
            twoSum();
        }
    }

    // two sum function
    function twoSum() {
        let target = Number(document.getElementById("targetNumber").value);
        let arr = document.getElementById("randomNumbers").value.split(" ").map(Number);

        // create an object/hash map to store key-value pairs
        let numsObj = {};

        // use a loop to check if the two numbers are present
        for (let i = 0; i < arr.length; i++) {
            let someNum = arr[i];
            let numDifference = target - someNum;

            // in the object, if the value of the first number is in the object, it's NOT undefined
            if (numsObj[someNum] !== undefined) {
                // get the index of the first number from the original array and assign it
                let indexOne = numsObj[someNum];
                // get the index of the second number and assign it
                let indexTwo = i;

                // the two sums were found
                showResponse(sumOutcome, buttonSum);
                sumOutcome.innerHTML = `${target} is the sum of the values at indices [${indexOne}, ${indexTwo}], values ${arr[indexOne]} and ${arr[indexTwo]}.`;
                clearForm(tsForm, sumOutcome, buttonSum); // Move the clearForm call outside the loop
                return;
            } else {
                numsObj[numDifference] = i;
            }
        }

        // the two sums were not found
        let newArr = arr.join(", ");
        showResponse(sumOutcome, buttonSum);
        sumOutcome.innerHTML = `The sum of ${target} is NOT in [${newArr}].`;
        clearForm(tsForm, sumOutcome, buttonSum);
    }

    twoHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(homepage, '#c32abbc9');
    });


    // **************************************SPIN WORDS****************************************************

    spinBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(spinDash, '#f89898');
    });

    const swForm = document.getElementById("sw-form");
    const swOutcome = document.getElementById("swResponse");
    const buttonSpin = document.getElementById("sw-spin");

    buttonSpin.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonSpin.addEventListener('click', checkSwInput);

    function checkSwInput(str, num) {
        var str = document.getElementById("sw-text").value;
        var num = Number(document.getElementById("sw-num").value);
        doFirst(str, num);

        // check if string is empty, 0 
        function doFirst(str, num) {
            if (num == "0" && str == "") {
                showResponse(swOutcome, buttonSpin);
                swOutcome.innerHTML = "Please enter a word/words and a number greater than 0";
            } else if(num =="0" && str != "") {
                showResponse(swOutcome, buttonSpin);
                swOutcome.innerHTML = "Please enter a number greater than 0";
            } else if ( num != "0" && str == "") {
                showResponse(swOutcome, buttonSpin);
                swOutcome.innerHTML = "Please enter a word/words";
            } else{
                checkValues()
            }
            clearForm(swForm, swOutcome, buttonSpin);
        }   
        
        // check values for letters and numbers 
        function checkValues() {
            
            for (let i = 0; i < str.length-1; i++){
                // regex for letter and special characters or just special characters
                let specialChar = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]/
                let letters = /[A-Za-z]/
                //regev for letters and numbers or just numbers
                let numbers = /[A-Za-z]\d|\d/
    
                //check if either regex pattern is present in the string
                if(specialChar.test(str) || numbers.test(str)) {
                    swOutcome.innerHTML = "Enter only letters in the text field";
                    showResponse(swOutcome, buttonSpin);
                } else if (letters.test(num) || specialChar.test(num)) {
                    swOutcome.innerHTML = "Enter only numbers in the number field";
                    showResponse(swOutcome, buttonSpin);
                } else {
                    spinWords()
                }
            }
            clearForm(swForm, swOutcome, buttonSpin);
        }   

        // spin words function
        function spinWords() {
            let words = document.getElementById("sw-text").value.toLowerCase().split(" ");
            let userNum = parseInt(document.getElementById("sw-num").value);
            let wordsSpun = false

            for(let i = 0; i < words.length; i++){
                // if a word in the array has "userNum" or more letters
                if(words[i].length >= userNum) {
                    // split the word, reverse it, then join the letters
                    words[i] = words[i].toLowerCase().split("").reverse().join("");
                    wordsSpun = true;
                }
            }
            let output  = ""
            if(wordsSpun) {
                output = words.join("  ");
            }   else {
                output = "There are NO words that are " + `${userNum}`+ " characters  long";
            }
            showResponse(swOutcome, buttonSpin);
            swOutcome.innerHTML = `${output}`;
        }
    }

    // CLOSE SPIN WORDS DASH
    spinHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(homepage, '#c32abbc9');
    });

    //****************************************LENGTH OF THE LONGEST WORD****************************************************************** */

    llwBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(llwDash, '#35c048');
    });

    const lwForm = document.getElementById("lw-form");
    const lwOutcome = document.getElementById("lwResponse");
    const buttonCheckLongest = document.getElementById("lw-check-string");

    buttonCheckLongest.addEventListener('click', function(e) {
        e.preventDefault();
        checkLwInput();
    });

    // validate the input
    function checkLwInput(str) {
        var str = document.getElementById("lw-text").value;

        for (let i = 0; i < str.length - 1; i++){
            // regex does not inlude ' and - they are allowed in words
            // let specialChar = /[A-Za-z][@#$%^&*()_+\=\[\]{};:\\|<>\/?]|[!@#$%^&*()_+\=\[\]{};:\\|<>\/]/
            let specialChar = /[A-Za-z][@#$%^&*_+\=\[\]{}\\|<>\]|[@#$%^&*_+\=\[\]{};:\\|<>\/]/;

            //regev for letters and numbers or just numbers
            let numbers = /[A-Za-z]\d|\d/

            // check for regex matches
            if(specialChar.test(str) || numbers.test(str)) {
                showResponse(lwOutcome, buttonCheckLongest);
                lwOutcome.innerHTML = "Enter only letters";
            } else {
                findLongestWord(str);
            }
            clearForm(lwForm, lwOutcome, buttonCheckLongest);
        }   
    }

    // find the longest word
    function findLongestWord(str) {
        let strArr = document.getElementById("lw-text").value.split(' ');
        console.log(strArr)
        let longestWordLength = 0;
        let allowedChar = /['"?,.:;!\-()]/;
        
        for(let i = 0; i < strArr.length; i++) {
            if(strArr[i].length > longestWordLength) {
                // replacing commont punctuation marks
                strArr[i] = strArr[i].replace(/['"?,.:;!\-()]/g, '');
                longestWordLength = strArr[i].length;
                theWord = strArr[i]
                showResponse(lwOutcome, buttonCheckLongest);
                lwOutcome.innerHTML = `${theWord}` +":" + `${longestWordLength}`;
            }
        }
    }

    llwHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(homepage, '#c32abbc9');
    });

    //* *************************    FACTORIALIZE    ******************************************************* */

    factBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(factDash, '#eb0e96');
    });

    const factForm = document.getElementById("fact-form");
    const factOutcome = document.getElementById("factResponse");
    const buttonGetFact = document.getElementById("fact-btn");

    buttonGetFact.addEventListener('click', function(e) {
        e.preventDefault();
        getFactorial();
    });

    // factorialize
    function getFactorial() {
        var num = document.getElementById("fact-text").value;
        // check if num contains a /
        if (num.includes("/")) {
            showResponse(factOutcome, buttonGetFact);
            factOutcome.innerHTML = "Please enter a whole number";
        } else {
            let integer = Number(num);
            let decimalCheck = /^[+-]?([0-9]+\.[0-9]*|\.[0-9]+)$/;
            let fact = 1;

            let factorialOutcome = showResponse(factOutcome, buttonGetFact);
            
            if (integer === 1 || integer === 0) {
                factorialOutcome;
                factOutcome.innerHTML = "The factorial of " + `${integer}` + " is 1";
            } else if (integer < 0 && decimalCheck.test(num)) {
                factorialOutcome;
                factOutcome.innerHTML = `${integer}` + " is NOT an integer";
            } else if (integer < 0) {
                factorialOutcome;
                factOutcome.innerHTML = `${integer}` + " is NOT a positive integer";
            } else if (decimalCheck.test(num)) {
                factorialOutcome;
                factOutcome.innerHTML = `${integer}` + " is NOT a whole number";
            } else if (integer >= Math.pow(2, 31) - 1 || integer <= -Math.pow(2, 31)) {
                factorialOutcome;
                factOutcome.innerHTML = `${integer}` + " is not within the constraints";
            } else {
                for (let i = 1; i <= integer; i++) {
                    fact *= i;
                }
                factorialOutcome;
                factOutcome.innerHTML = `${fact}` + " is the factorial of " + `${integer}`;
            }
        }
        clearForm(factForm, factOutcome, buttonGetFact);
    }

    factHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(homepage, '#c32abbc9');
    });

    // ****************************************   PALINDROME NUMBER    *********************************************
    
    palNumBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(palNumDash, '#0b7c739d');
    });

    const palNumForm = document.getElementById("pn-form");
    const palNumOutcome = document.getElementById("pnResponse");
    const buttonIsPalNum = document.getElementById("pn-btn");
    
    buttonIsPalNum.addEventListener('click', function(e) {
        e.preventDefault();
        isPalNum();
    });

    // palindrome number function
    function isPalNum(num) {
        var num = document.getElementById("pn-text").value;
        let intArr =  parseInt(num.toString().split("").reverse().join(""))
        // regex for non-whole numbers
        let decimalCheck = /^[+-]?([0-9]+\.[0-9]*|\.[0-9]+)$/

        let palNumResponse = showResponse(palNumOutcome, buttonIsPalNum)
    
        // check for input conditions and challenge constraints
        if (decimalCheck.test(num)) {
            palNumResponse
            palNumOutcome.innerHTML = `${num}`+ " is NOT an integer";
            clearForm(palNumForm, palNumOutcome, buttonIsPalNum);
        } else if(num >= Math.pow(2, 31)-1 || num <= Math.pow(-2,31)) {
            palNumResponse
            palNumOutcome.innerHTML = `${num}`+ " is not within the constraints";
            clearForm(palNumForm, palNumOutcome, buttonIsPalNum);
        } else if(intArr == num ) {
            palNumResponse
            palNumOutcome.innerHTML = `${num}`+ " is a Palindrome Number";
            clearForm(palNumForm, palNumOutcome, buttonIsPalNum);
        } else {
            palNumResponse
            palNumOutcome.innerHTML = `${num}`+ " is NOT a Palindrome Number";
            clearForm(palNumForm, palNumOutcome, buttonIsPalNum);
        }
    }

    palNumHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(homepage, '#c32abbc9');
    });

    // ********************************     REVERSE INTEGER       ********************************************************
    
    revIntBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(revIntDash, '#8790e0');
    });

    const revIntForm = document.getElementById("rev-int-form");
    const revIntOutcome = document.getElementById("revResponse");
    const buttonRevInt = document.getElementById("rev-int-btn");

    buttonRevInt.addEventListener('click', function(e) {
        e.preventDefault();
        reverseInt();
    });

    // reverse integer function
    function reverseInt(num) {
        var num = document.getElementById("rev-int-text").value;
        let intArr =  parseInt(num.toString().split("").reverse().join(""))
        
        // regex to check for non whole numbers
        let decimalCheck = /^[+-]?([0-9]+\.[0-9]*|\.[0-9]+)$/

        // regex for letter and special characters or just special characters
        let specialChar = /[A-Za-z][!@#$%^&*()_+\=\[\]{};':"\\|,<>\/?]|[!@#$%^&*()_+\=\[\]{};':"\\|,<>\/?]/
        
        // regex for letts only
        let letters = /[A-Za-z]/  
        
        let outcome = showResponse(revIntOutcome, buttonRevInt);

        // check for input conditions and challenge constraints
        if (num === "" || specialChar.test(num) || letters.test(num)) {
            outcome;
            revIntOutcome.innerHTML = "Please enter a number";
        } else if (num == "0"){
            outcome;
            revIntOutcome.innerHTML = `${num}`;
        } else if (decimalCheck.test(num)) {
            outcome;
            revIntOutcome.innerHTML = `${num}`+ " is not an integer";
        } else if(num >= Math.pow(2, 31)-1 || num <= Math.pow(-2,31)) {
            outcome;
            revIntOutcome.innerHTML = `${num}`+ " is not within the constraints";
        } else if(num < 0 ) {
            outcome;
            revIntOutcome.innerHTML = `Please try a positive number: ${num} is negative`;
        } else {
            num > 0 ? outcome : outcome;
            let revInt = Math.abs(intArr)
            revIntOutcome.innerHTML = `${revInt}`;
        }
        clearForm(revIntForm, revIntOutcome, buttonRevInt);
    }

    revIntHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(homepage, '#c32abbc9');
    });

    // ********************************  LONGEST NON-REPEATING SUBSTRING      ********************************************************
    
    lnsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(lnsDash, '#ff0000');
    });

    const lnsForm = document.getElementById("lns-form");
    const lnsOutcome = document.getElementById("lnsResponse");
    const buttonCheckStr = document.getElementById("lns-btn");

    buttonCheckStr.addEventListener('click', function(e) {
        e.preventDefault();
        checkLsInput();
    });

    function checkLsInput(str) {
        var str = document.getElementById("lns-text").value;
        let lnsResult = showResponse(lnsOutcome, buttonCheckStr);
        let clearLnsForm = clearForm(lnsForm, lnsOutcome, buttonCheckStr);

        if (str != ""){
            for (let i = 0; i < str.length - 1; i++){
                // regex for letter and special characters or just special characters
                let specialChar = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
                //regev for letters and numbers or just numbers
                let numbers = /[A-Za-z]\d|\d/
                //check if either regex pattern is present in the string
                if(specialChar.test(str) || numbers.test(str)) {
                    lnsOutcome.innerHTML = "Enter only letters";
                    showResponse(lnsOutcome, buttonCheckStr);
                    // lnsResult;
                } else {
                    getLongestSubstring()
                }
                clearLnsForm
            } 
        }else{
            // lnsResult;
            showResponse(lnsOutcome, buttonCheckStr);
            lnsOutcome.innerHTML = "0";
            clearLnsForm
        }  
    }

    // longest non-repeating substring function
    function getLongestSubstring(str) {
        var str = document.getElementById("lns-text").value;
        let i;
        let strLength = str.length;
        let currentStart = 0;
        let currentLength;
        let maxLength = 0;
        let maxLengthStart;
    
        // create a Hash Map to store last instance of each visited letter.
        let visitedMap = new Map();
    
        // index the last instance of the first letter at 0;
        visitedMap.set(str[0], 0);
    
        for (let i = 1; i < strLength; i++) {
            // use Map.has() to check if the letter is NOT in the visited map,
                // if true, use Map.set() to add it to the visited map.
            if (!visitedMap.has(str[i])) {
                visitedMap.set(str[i], i) ;
            } else if (visitedMap.get(str[i]) >= currentStart){
                // if the letter IS in visited map, then use Map.get() to check if is was before or after the start of the current substring.

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
    
        // Compare length of last substring with maxLength, update maxLength and maxLengthStart
        if (maxLength < i - currentStart) {
            maxLength = i - currentStart;
            maxLengthStart = currentStart;
        }
        // get the longest unique substring
        let longestUniqueSub =  str.substr(maxLengthStart,maxLength);
        let lengthOfUniqueSub = longestUniqueSub.length;

        showResponse(lnsOutcome, buttonCheckStr);
        lnsOutcome.innerHTML = "'"+ longestUniqueSub + "'" + " is " + lengthOfUniqueSub + " letters long" 
    }
    clearForm(lnsForm, lnsOutcome, buttonCheckStr);

    lnsHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(homepage, '#c32abbc9');
    });

    // ********************************  REVERSE WORD/S     ********************************************************

    revWordBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(revWordDash, '#8e06fdda');
    });

    const revWordForm = document.getElementById("rev-word-form");
    const revWordOutcome = document.getElementById("revWordResponse");
    const buttonRevWord = document.getElementById("rev-word-btn");

    buttonRevWord.addEventListener('click', function(e) {
        e.preventDefault();
        reverseWords();
    });

    // reverse words function
    function reverseWords() {
        let rwResults = showResponse(revWordOutcome, buttonRevWord);
        let clearRwForm = clearForm(revWordForm, revWordOutcome, buttonRevWord);
        let arr = document.getElementById("rev-word-text").value.split(" ").reverse();
    
        let lengthArr = arr.length;
        let newArr = [];
        
        // if the array satisfies the constraints, check if the word is not empty and add it to the new array if it is not
        if(lengthArr <= Math.pow(10, 4) || arr >= 1 ) {
            for (let i = lengthArr - 1; i >= 0; i--) {
                if (arr[i].length > 0) {
                    newArr.push(arr[i]);
                }
            }
            // convert the new array to a string
            rwResults
            revWordOutcome.innerHTML = newArr.reverse().join(" ");
        }else {
            revWordDash.innerHTML = "The string must be 1-10,000 characters";
        }
        clearRwForm
    }

    revWordHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(homepage, '#c32abbc9');
    });

    // ********************************  SUM ALL IN A RANGE    ********************************************************

    sumAllBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(sumAllDash, '#f36c36ed');
    });
    
    const sumAllForm = document.getElementById("sm-all-form");
    const sumAllOutcome = document.getElementById("sumAllResponse");
    const buttonSumAll = document.getElementById("sm-all-btn");

    buttonSumAll.addEventListener('click', function(e) {
        e.preventDefault();
        checkSumAllInput();
    });

    // validate the input
    function checkSumAllInput(arr) {
        arr = document.getElementById("sm-all-text").value;

        // does array meet the constraints
        for (let i = 0; i < arr.length - 1; i++){
            // regex for letter and special characters or just letters or just special characters
            let specialCases = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[A-Za-z]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

            if(specialCases.test(arr)) {
                showResponse(sumAllOutcome, buttonSumAll);
                sumAllOutcome.innerHTML = "Enter only positive numbers";
            } else {
                sumAll();
            }
            clearForm(sumAllForm, sumAllOutcome, buttonSumAll);
        }   
    }

    // sum all in range function
    function sumAll(arr) {
        arr = document.getElementById("sm-all-text").value.split(" ");
        arr = arr.map(Number)
        let max = Math.max(arr[0], arr[1]);
        let min = Math.min(arr[0], arr[1]);

        // sum between the min and max
        let sum = 0;
        for (let i = min; i <= max; i++) {
            sum += i;
        }
        showResponse(sumAllOutcome, buttonSumAll)
        sumAllOutcome.innerHTML = sum + " is the sum of all numbers between " + min + " and " + max;
        clearForm(sumAllForm, sumAllOutcome, buttonSumAll)
    }

    sumAllHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(homepage, '#c32abbc9');
    });

    // ********************************  TO ROME AND BACK   ********************************************************

    toRomeBtn.addEventListener('click', function(e){
        e.preventDefault();
        showDash(toRomeDash, '#05c0c7');
    })

    const romeForm = document.getElementById("rome-form");
    const romeOutcome = document.getElementById("romeResponse");
    const buttonRome = document.getElementById("rome-btn");

    buttonRome.addEventListener('click', function(e) {
        e.preventDefault();
        checkRome();
    });

    // validate the input
    function checkRome(input) {
        input = document.getElementById("rome-text").value;
        input = input.toUpperCase();

        // regex for roman numerals
        let roman = /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/;
        // regex for numbers
        let numbers = /^[0-9]/;
        // regex for special characters
        let specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

        // check if the input contains special characters & numbers
        if (specialChar.test(input) && numbers.test(input)) {
            romeOutcome.innerHTML = "Please enter a whole number";
            showResponse(romeOutcome, buttonRome)
        } else if (roman.test(input)) {
            toInt();
        } else if(numbers.test(input)) {
            toRoman();
        }else {
            romeOutcome.innerHTML = "Please enter a valid roman number or number";
            showResponse(romeOutcome, buttonRome)
        }
        clearForm(romeForm, romeOutcome, buttonRome)
    };

    // convert to roman numeral function
    function toRoman(num) {
            num = Number(document.getElementById("rome-text").value);
        if (num <= 0 || num > 3999) {
            showResponse(romeOutcome, buttonRome);
            romeOutcome.innerHTML = "Please enter a number from 1 to 3999";
        } else {
            // create a map of key value pairs to convert to roman numerals
            const intMap = new Map([[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], 
                                [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], 
                                [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]);
            let roman = '';
            while (num > 0) {
            // access the key-value pairs of the map
                for (let [key, value] of intMap) {
                    if (num >= key) {
                        roman += value;
                        num -= key;
                        break;
                    }
                }
                showResponse(romeOutcome, buttonRome)
                romeOutcome.innerHTML = roman;
                console.log(roman);
            }
        }
    }

    // convert to integer function
    function toInt(str) {
        str = document.getElementById("rome-text").value.toUpperCase();
        strLength = str.length;
        // create a map that contains the key - value pairs of roman numerals - integers
        const romanMap = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], 
            ['D', 500], ['M', 1000]]);

        // check constraints
        if (strLength <= 0 || strLength > 15) {
            showResponse(romeOutcome, buttonRome)
            romeOutcome.innerHTML = "Please enter a valid roman numeral";
        } else {
            let i = strLength - 1;
            let int = romanMap.get(str[i]);
            // loop through the string as long as the length is greater than 0
            while (i > 0) {
                const curr = romanMap.get(str[i]);
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
                showResponse(romeOutcome, buttonRome);
                romeOutcome.innerHTML = "Please a roman numeral between I and  MMMCMXCIX";
            } else {
                showResponse(romeOutcome, buttonRome);
                romeOutcome.innerHTML = int;
            }
        }
    };

    toRomeHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDash(homepage, '#c32abbc9');
    });
});