// HOME PAGE 
document.addEventListener("DOMContentLoaded", () => {
    // DOM Element
    const cardHolder = document.getElementById('dashboard-holder');
    // const btnHome = document.querySelectorAll('btn-home');

    // function showHome() {
    //     cardHolder.style.display = 'block';
    //     isoDash.style.display = 'none';
    //     palDash.style.display = 'none';
    //     twoDash.style.display = 'none';
    //     spinDash.style.display = 'none';
    //     llwDash.style.display = 'none';
    //     factDash.style.display = 'none';
    //     palNumDash.style.display = 'none';  
    //     revIntDash.style.display = 'none';
    //     lnsDash.style.display = 'none';  
    // }


    // Isogram Container
    const isoDash = document.getElementById('iso-container');
    const isoBtn = document.getElementById('iso-play-btn');

    
    // isoDash.style.display = 'none';
    function showIso() {
        isoDash.style.display = 'block';
        cardHolder.style.display = 'none';  
        
    }
    isoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    isoBtn.addEventListener('click', showIso);

    // Palin Container
    const palDash = document.getElementById('palindrome');
    const palBtn = document.getElementById('pal-play-btn');
    // const palHomeBtn = document.getElementById("pal-btn-close");

    // Open Palindrome Dashboard
    function showPal() {
        palDash.style.display = 'block';
        cardHolder.style.display = 'none';  
        
    }
    palBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    palBtn.addEventListener('click', showPal);
    
    // Two Sum Container
    const twoDash = document.getElementById('two-sum');
    const twoBtn = document.getElementById('two-play-btn');
    // const twoHomeBtn = document.getElementById("two-btn-close");

    // Open Two Sum Dashboard
    function showTwo() {
        twoDash.style.display = 'block';
        cardHolder.style.display = 'none';  
        
    }
    twoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    twoBtn.addEventListener('click', showTwo);


    // Spin Words Container
    const spinDash = document.getElementById('spin-words');
    const spinBtn = document.getElementById('spin-play-btn');
    

    // Open Spin Words Dashboard
    function showSpin() {
        spinDash.style.display = 'block';
        cardHolder.style.display = 'none';  
        
    }
    spinBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    spinBtn.addEventListener('click', showSpin);


    // Length of Longest Word Container
    const llwDash = document.getElementById('longest-word');
    const llwBtn = document.getElementById('llw-play-btn');
    

    // Open Length of Longest Word Dashboard
    function showLength() {
        llwDash.style.display = 'block';
        cardHolder.style.display = 'none';  
        
    }
    llwBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    llwBtn.addEventListener('click', showLength);


    // Factorialize a Number Container
    const factDash = document.getElementById('factorialize');
    const factBtn = document.getElementById('fact-play-btn');
    

    // Factorialize a Number Dashboard
    function showFact() {
        factDash.style.display = 'block';
        cardHolder.style.display = 'none';  
        
    }
    factBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    factBtn.addEventListener('click', showFact);

    // Palindrome Number Container
    const palNumDash = document.getElementById('pal-num');
    const palNumBtn = document.getElementById('pn-play-btn');
    

    // Palindrome Number Dashboard
    function showPalNum() {
        palNumDash.style.display = 'block';
        cardHolder.style.display = 'none';  
        
    }
    palNumBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    palNumBtn.addEventListener('click', showPalNum);


    // Reverse Integer Container
    const revIntDash = document.getElementById('reverse-int');
    const revIntBtn = document.getElementById('rev-play-btn');
    

    // Reverse Integer Dashboard
    function showRevInt() {
        revIntDash.style.display = 'block';
        cardHolder.style.display = 'none';  
        
    }
    revIntBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    revIntBtn.addEventListener('click', showRevInt);


    // Longest Non-Repeating Substring Container
    const lnsDash = document.getElementById('lnr');
    const lnsBtn = document.getElementById('lnr-play-btn');
    

    // Longest Non-Repeating Substring Dashboard
    function showLns() {
        lnsDash.style.display = 'block';
        cardHolder.style.display = 'none';  
        
    }
    lnsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    lnsBtn.addEventListener('click', showLns);




    

});