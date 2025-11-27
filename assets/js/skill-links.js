// Handle skill card clicks with link validation
document.addEventListener('DOMContentLoaded', function() {
  // Find all skill cards with URLs
  const skillCards = document.querySelectorAll('[data-skill-url]');
  
  // Get the translated message from the skills grid container
  const skillsGrid = document.querySelector('.skills-grid');
  const noProjectsMessage = skillsGrid ? skillsGrid.getAttribute('data-skill-no-projects-msg') : 'No projects available for this skill yet';
  
  skillCards.forEach(card => {
    const url = card.getAttribute('data-skill-url');
    if (!url) return;
    
    // Make the card look clickable
    card.style.cursor = 'pointer';
    
    // Variables to track touch/scroll behavior
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let isTouchMoved = false;
    
    const handleClick = async function(e) {
      e.preventDefault();
      
      try {
        // Check if the URL exists (returns 200, not 404)
        const response = await fetch(url, { method: 'HEAD' });
        
        if (response.ok) {
          // Page exists, navigate to it
          window.location.href = url;
        } else {
          // Page doesn't exist (404), show tooltip
          showTooltip(card, noProjectsMessage);
        }
      } catch (error) {
        // Network error, try to navigate anyway
        window.location.href = url;
      }
    };
    
    // Handle desktop click
    card.addEventListener('click', handleClick);
    
    // Handle mobile touch with scroll detection
    card.addEventListener('touchstart', function(e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
      isTouchMoved = false;
    }, { passive: true });
    
    card.addEventListener('touchmove', function(e) {
      // Mark as moved if user dragged more than 10px
      const touchMoveX = e.touches[0].clientX;
      const touchMoveY = e.touches[0].clientY;
      const deltaX = Math.abs(touchMoveX - touchStartX);
      const deltaY = Math.abs(touchMoveY - touchStartY);
      
      if (deltaX > 10 || deltaY > 10) {
        isTouchMoved = true;
      }
    }, { passive: true });
    
    card.addEventListener('touchend', function(e) {
      const touchEndTime = Date.now();
      const touchDuration = touchEndTime - touchStartTime;
      
      // Only trigger if:
      // 1. Touch didn't move much (not a scroll)
      // 2. Touch was quick (less than 300ms, indicating a tap not a long press)
      if (!isTouchMoved && touchDuration < 300) {
        e.preventDefault();
        handleClick(e);
      }
    });
  });
});

function showTooltip(element, message) {
  // Create tooltip element
  const tooltip = document.createElement('div');
  tooltip.textContent = message;
  tooltip.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 14px 28px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    animation: fadeInOut 2s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  `;
  
  // Add animation keyframes if not already added
  if (!document.querySelector('#tooltip-animation-style')) {
    const style = document.createElement('style');
    style.id = 'tooltip-animation-style';
    style.textContent = `
      @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(tooltip);
  
  // Remove after animation completes (2 seconds)
  setTimeout(() => {
    tooltip.remove();
  }, 2000);
}
