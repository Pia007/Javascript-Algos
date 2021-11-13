document.addEventListener("DOMContentLoaded", () => {
    // Header Elements
    const info = document.getElementById('info-icon');
    const title = document.getElementById('header-title');
    const clock = document.getElementById('clock');
    const mobileTitle = document.getElementById('mb-header-title');
    
    // Body Element
    const cardHolder = document.getElementById('dg-holder');
    const mainDash = document.getElementById('algo-dash');
    const sqrCubeHomeBtn = document.getElementById('sqr-cube-btn-close');
    
    // Two Sum Container
    const sqrCubeDash = document.getElementById('sqr-cube');

    
    function showHome() {
        sqrCubeDash.style.display = "none";
        mainDash.style.display = "none";
        cardHolder.style.display = "block";
        info.style.color= '#c32abbc9';  
        title.style.color= '#c32abbc9';  
        clock.style.color= '#c32abbc9';
        mobileTitle.style.color= '#c32abbc9';
    }
    sqrCubeHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    sqrCubeHomeBtn.addEventListener('click', showHome);


    // DOM Elements
    const sqrForm = document.getElementById("sqr-cube-form");
    const sqrOutcome = document.getElementById("sqrCubeResponse");
    const buttonSqrC = document.getElementById("sqr-cube-btn");
    
    // Hides outcome when form is cleared
    function hideSqrOutcome() {
        sqrOutcome.style.display ="none";
        buttonSqrC.style.display = "block";
    }
    function showSqrOutcome() {
        sqrOutcome.style.display ="block";
        sqrOutcome.style.color = "#e0e5ec";
        buttonSqrC.style.display = "none";
    }

    // Reset Form
    function clearSqrForm() {
        setTimeout(function(e) {
            sqrForm.reset();
            hideSqrOutcome();
        }, 3000);
    };

    // PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
    // Check It Button
    buttonSqrC.addEventListener('click', function(e) {
        e.preventDefault();
    });
    buttonSqrC.addEventListener('click', isSquareOrCube);


    // const sqrInput = document.getElementById("sqr-cube-text").value;
    // const sqrInputNum = parseInt(sqrInput);

    function sqrCubeInput() {

        // Get the input value
        // let sqrInput = document.getElementById("sqr-cube-text").value;
        // let sqrInputNum = parseInt(sqrInput);

        // Check if input is empty
        if (sqrInput === "") {
            sqrOutcome.innerHTML = "Please enter a number";
            showSqrOutcome();
           
        } else if (sqrInputNum === NaN) {
            sqrOutcome.innerHTML = "Please enter a number";
            showSqrOutcome();
            
        } else {
            // Check if input is a number
            if (sqrInputNum === 0) {
                sqrOutcome.innerHTML = "0 is not a square number";
                showSqrOutcome();
                
            } else if (sqrInputNum < 0) {
                sqrOutcome.innerHTML = "Please enter a positive number";
                // Check if input is a square number
            } else {
                // sqrOutcome.innerHTML = "The number " + sqrInput + " is a square number";
                isSquareOrCube();
                
            }
        }
        clearSqrForm();

    }    



    
  
    function isSquareOrCube() {
        let num = document.getElementById("sqr-cube-text").value;
        square = Math.sqrt(num);
        console.log(num);
        sqrOutcome.innerHTML = "The number " + num + " is the square of " + square;
        // let ind = 1;
        
        
        // isCube()
        
        // function isCube() {
        //     let ind = 1;
        //     while(ind * ind * ind <= num){
        //         if(ind * ind * ind !== num){
        //             ind++;
        //             continue;
        //         };
        //         cubeIs = true;
        //         cubeNum = ind
        //     };
        //     cubeNot = true;
           
        // }
        // printOutcome();
        // function printOutcome() {
            // if (sqrtIs == true && cubeIs == true) {
            //     sqrOutcome.innerHTML = num + " is a perfect square and cube of " + sqrtNum + " and " + cubeNum;
            //     showSqrOutcome();
            // } else if (sqrtIs ==true && cubeIs == false) {
            //     sqrOutcome.innerHTML = num + " is a perfect square of " + sqrtNum;
            //     showSqrOutcome();
            // } else {
            //     sqrOutcome.innerHTML = num + " is a perfect cube of " + cubeNum;
            //     showSqrOutcome();
            // } 
           
        // }
        // if (sqrNum == Math.floor(sqrNum) && cubeNum == Math.floor(cubeNum)) {
        //     showSqrOutcome();
        //     sqrOutcome.innerHTML = sqrInputNum + " is the square of " + sqrNum + " and the cube of " +cubeNum;  
        // }else if (sqrNum == Math.floor(sqrNum) && cubeNum != Math.floor(cubeNum)) {
        //     showSqrOutcome();
        //     sqrOutcome.innerHTML = sqrInputNum + " is the square of " + sqrNum;
        // }else if (sqrNum != Math.floor(sqrNum) && cubeNum == Math.floor(cubeNum)) {
        //     showSqrOutcome();
        //     sqrOutcome.innerHTML = sqrInputNum + " is the cube of " + cubeNum;
        // }else{
        //     showSqrOutcome();
        //     sqrOutcome.innerHTML = sqrInputNum + " is neither a square nor a cube";
        // }
         clearSqrForm();   
    }

});
// console.log(isSquareOrCube("9"));
// console.log(isSquareOrCube("-9"));
// console.log(isSquareOrCube("1"));
// console.log(isSquareOrCube("81"));
// console.log(isSquareOrCube("27"));
// console.log(isSquareOrCube("125"));
// console.log(squareOrCube(1.25));
// console.log(squareOrCube(-1.25));
// console.log(squareOrCube(10));
// console.log(isSquareOrCube(25));
// console.log(squareOrCube(0));