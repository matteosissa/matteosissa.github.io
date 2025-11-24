// Auto-close mobile menu when a menu item is clicked
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (navToggle && navMenu) {
    // Get all navigation links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    
    // Add click event listener to each link
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        // Uncheck the checkbox to close the menu
        navToggle.checked = false;
      });
    });
  }
});
