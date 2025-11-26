// Handle skill card clicks with link validation
document.addEventListener('DOMContentLoaded', function() {
  // Find all skill cards with URLs
  const skillCards = document.querySelectorAll('[data-skill-url]');
  
  skillCards.forEach(card => {
    const url = card.getAttribute('data-skill-url');
    if (!url) return;
    
    // Make the card look clickable
    card.style.cursor = 'pointer';
    
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
          showTooltip(card, 'No projects available for this skill yet');
        }
      } catch (error) {
        // Network error, try to navigate anyway
        window.location.href = url;
      }
    };
    
    // Handle both click (desktop) and touchend (mobile) events
    card.addEventListener('click', handleClick);
    card.addEventListener('touchend', function(e) {
      e.preventDefault();
      handleClick(e);
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
