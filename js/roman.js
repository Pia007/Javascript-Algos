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
    const buttonRome = document.getElementById("rome-btn");


    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
    buttonRome.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonRome.addEventListener('click', checkRome);

    function hideRomeOutcome() {
        romeOutcome.style.display ="none";
        buttonRome.style.display = "block";
        
    }
    function showRomeOutcome() {
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
        let roman = /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/;
        // let numbers = /^[0-9]/;
        if (roman.test(input)) {
          toRoman();
          // return 'roman';
        } else {
          
          toInt();
        } 
    };


    function toInt(input) {
    if (!input || input.length === 0) {
      return 0;
    }

    const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], 
            ['D', 500], ['M', 1000]]);

    let i = input.length - 1;
    let result = map.get(input[i]);

    while (i > 0) {
      const curr = map.get(input[i]);
      const prev = map.get(input[i - 1]);

      if (prev >= curr) {
          result += prev;
      } else {
        result -= prev;
      }

      i--;
    }

    return result;
    };
    


    function toRoman(input) {
    if (!input || input <= 0) {
      return 0;
    }

    const map = new Map([[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], 
                        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], 
                        [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]);

    let result = '';
    while (input > 0) {
      for (let [key, value] of map) {
        if (input >= key) {
          result += value;
          input -= key;
          break;
        }
      }
    }



    // for (let [value, letter] of map) {
    //   while (num >= value) {
    //     result += letter;
    //     num -= value;
    //   }
    // }

    return result;
    }
});