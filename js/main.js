// HOME PAGE 
document.addEventListener("DOMContentLoaded", () => {
    // DOM ELEMENTS
    const cardHolder = document.getElementById('dg-holder');
    const mainDash = document.getElementById('algo-dash');
    // const btnHome = document.querySelectorAll('algo-dash');

    // Header Elements
    const info = document.getElementById('info-icon');
    const title = document.getElementById('header-title');
    const clock = document.getElementById('clock');
    const mobileTitle = document.getElementById('mb-header-title');


    // Isogram Container
    const isoDash = document.getElementById('iso-container');
    const isoBtn = document.getElementById('iso-play-btn');

    
    // isoDash.style.display = 'none';
    function showIso() {
        isoDash.style.display = 'block';
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none'; 
        info.style.color = '#37A4C8';  
        title.style.color= '#37A4C8';  
        clock.style.color= '#37A4C8';
        mobileTitle.style.color= '#37A4C8';
    }
    isoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    isoBtn.addEventListener('click', showIso);

    // Palin Container
    const palDash = document.getElementById('palindrome');
    const palBtn = document.getElementById('pal-play-btn');

    // Open Palindrome Dashboard
    function showPal() {
        palDash.style.display = 'block';
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none';
        info.style.color = '#FFA500';  
        title.style.color= '#FFA500';  
        clock.style.color= '#FFA500';
        mobileTitle.style.color= '#FFA500';
    }
    palBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    palBtn.addEventListener('click', showPal);
    
    // Two Sum Container
    const twoDash = document.getElementById('two-sum');
    const twoBtn = document.getElementById('two-play-btn');

    // Open Two Sum Dashboard
    function showTwo() {
        twoDash.style.display = 'block';
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none'; 
        info.style.color = '#5b0eeb';  
        title.style.color= '#5b0eeb';  
        clock.style.color= '#5b0eeb'; 
        mobileTitle.style.color= '#5b0eeb'; 
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
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none'; 
        info.style.color = '#f89898';  
        title.style.color= '#f89898';  
        clock.style.color= '#f89898'; 
        mobileTitle.style.color= '#f89898'; 
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
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none'; 
        info.style.color = '#35c048';  
        title.style.color= '#35c048';  
        clock.style.color= '#35c048';  
        mobileTitle.style.color= '#35c048'; 
 
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
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none';
        info.style.color = '#eb0e96';  
        title.style.color= '#eb0e96';  
        clock.style.color= '#eb0e96';   
        mobileTitle.style.color= '#eb0e96';
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
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none'; 
        info.style.color = '#0b7c739d';  
        title.style.color= '#0b7c739d';  
        clock.style.color= '#0b7c739d';  
        mobileTitle.style.color= '#0b7c739d';
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
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none'; 
        info.style.color = '#8790e0';  
        title.style.color= '#8790e0';  
        clock.style.color= '#8790e0';   
        mobileTitle.style.color= '#8790e0'; 
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
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none'; 
        info.style.color = '#ff0000';  
        title.style.color= '#ff0000';  
        clock.style.color= '#ff0000'; 
        mobileTitle.style.color= '#ff0000'; 
    }
    lnsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    lnsBtn.addEventListener('click', showLns);


    // Reverse A Word In A String Container
    const revWordDash = document.getElementById('rev-word');
    const revWordBtn = document.getElementById('rw-play-btn');

    // Reverse A Word In A String Dashboard
    function showRevWord() {
        revWordDash.style.display = 'block';
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none';
        info.style.color = '#8e06fdda';  
        title.style.color= '#8e06fdda';  
        clock.style.color= '#8e06fdda'; 
        mobileTitle.style.color= '#8e06fdda'; 
    }
    revWordBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    revWordBtn.addEventListener('click', showRevWord);

    // To Rome and Back Container
    const toRomeDash = document.getElementById('rome');
    const toRomeBtn = document.getElementById('rome-play-btn');

    // To Rome and Back Dashboard
    function showToRome() {
        toRomeDash.style.display = 'block';
        mainDash.style.display = 'block';
        cardHolder.style.display = 'none';
        info.style.color = '#05c0c7';  
        title.style.color= '#05c0c7';  
        clock.style.color= '#05c0c7'; 
        mobileTitle.style.color= '#05c0c7'; 
    };
    toRomeBtn.addEventListener('click', function(e){
        e.preventDefault();
    })
    toRomeBtn.addEventListener('click', showToRome);

});