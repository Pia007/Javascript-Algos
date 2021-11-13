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
        input = document.getElementById("rome-text").value;
        input = input.toUpperCase();
        console.log(input);

        let roman = /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/;
        let numbers = /^[0-9]/;
        let specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        if (specialChar.test(input) && numbers.test(input)) {
          romeOutcome.innerHTML = "Please enter a whole number";
          showRomeOutcome();
          
          // return 'roman';
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

    function toRoman(num) {
      num = Number(document.getElementById("rome-text").value);
      if (!num || num <= 0) {
        // ADD A POSITIVE NUMBER HERE
        return 0;
      }

      let map = new Map([[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], 
                          [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], 
                          [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]);

      let roman = '';
      while (num > 0) {
        for (let [key, value] of map) {
          if (num >= key) {
            roman += value;
            num -= key;
            break;
          }
        }
        showRomeOutcome();
    romeOutcome.innerHTML = roman;
    console.log(roman);
      }
    
  }

    function toInt(str) {
        str = document.getElementById("rome-text").value.toUpperCase();
        str = str.toUpperCase();
        let map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], 
            ['D', 500], ['M', 1000]]);
        if (!str || str.length === 0) {
          //ADD AN ERROR MESSAGE HERE
          return 0;
        }
        let i = str.length - 1;
        let int = map.get(str[i]);

        while (i > 0) {
          const curr = map.get(str[i]);
          const prev = map.get(str[i - 1]);

          if (prev >= curr) {
              int += prev;
          } else {
            int -= prev;
          }
          i--;
        }
      showRomeOutcome()
      romeOutcome.innerHTML = int;
      console.log(int);
    };
    


    
});