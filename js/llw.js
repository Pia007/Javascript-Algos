document.addEventListener("DOMContentLoaded", () => {
    // DOM Element
    const dashHolder = document.getElementById('dashboard-holder');
    const llwHomeBtn = document.getElementById('lw-btn-close');
    
    // Two Sum Container
    const llwDash = document.getElementById('longest-word');

    
    function showHome() {
        llwDash.style.display = "none";
        dashHolder.style.display = "block";

    }
    llwHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    llwHomeBtn.addEventListener('click', showHome);

});
