document.addEventListener("DOMContentLoaded", () => {

    // Header Elements
    const info = document.getElementById('info-icon');
    const title = document.getElementById('header-title');
    const clock = document.getElementById('clock');
    const mobileTitle = document.getElementById('mb-header-title');

    // Cardholder
    const cardHolder = document.getElementById('dg-holder');
    const mainDash = document.getElementById('algo-dash');

      // To Roman and Back  Container
      const toRomeHomeBtn = document.getElementById('rome-btn-close');
      const toRomeDash = document.getElementById('rome');
     

    // Return to Cardholder
    function showHome() {
        toRomeDash.style.display = "none";
        mainDash.style.display = "none";
        cardHolder.style.display = "block";
        info.style.color = '#c32abbc9';  
        title.style.color= '#c32abbc9';  
        clock.style.color= '#c32abbc9';
        mobileTitle.style.color= '#c32abbc9';
    }
    toRomeHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    toRomeHomeBtn.addEventListener('click', showHome);

    // To Rome Dashboard Elements
    const romeForm = document.getElementById("rome-form");
    const romeOutcome = document.getElementById("romeResponse");
    const romeOutcomeHolder = document.getElementById("romeRepoHolder");
    const buttonRome = document.getElementById("rome-btn");


    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
    buttonRome.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonRome.addEventListener('click', checkRome);

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

    function clearRomeForm() {
        setTimeout(function() {
            romeForm.reset();
            hideRomeOutcome();
        }, 3500);
    };


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

    // Convert to Roman - the input is an integer
    function toRoman(num) {
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

    // Convert to Integer - the input is a roman numeral
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
});