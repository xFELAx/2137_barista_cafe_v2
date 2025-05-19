// Game nav active script - Makes the Coffee Game nav item active when on the game page
$(document).ready(function() {
    // Check if we're on the game page
    if (window.location.pathname.includes('game.html')) {
        // Remove active class from all nav items
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $('.navbar-nav .nav-item .nav-link').addClass('inactive');
        
        // Add active class to Coffee Game nav item
        $('.navbar-nav .nav-item .nav-link[href="game.html"]').addClass('active');
        $('.navbar-nav .nav-item .nav-link[href="game.html"]').removeClass('inactive');
    }
});