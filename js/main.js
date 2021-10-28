// HOME PAGE 
document.addEventListener("DOMContentLoaded", () => {
    // DOM Element
    const dashHolder = document.getElementById('dashboard-holder');

    // Isogram Container
    const isoDash = document.getElementById('iso-container');
    const isoBtn = document.getElementById('iso-play-btn');

    
    // isoDash.style.display = 'none';
    function showIso() {
        isoDash.style.display = 'block';
        dashHolder.style.display = 'none';  
        
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
        dashHolder.style.display = 'none';  
        
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
        dashHolder.style.display = 'none';  
        
    }
    twoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    twoBtn.addEventListener('click', showTwo);




    

});