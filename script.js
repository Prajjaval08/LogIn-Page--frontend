// Ripple Effect for CTA Button
const ctaBtn = document.querySelector('.cta-btn');

ctaBtn.addEventListener('click', function(e) {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    
    let ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Demo Form Submission
const form = document.querySelector('.login-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const originalText = ctaBtn.textContent;
    ctaBtn.innerHTML = 'CONNECTING...';
    
    setTimeout(() => {
        ctaBtn.innerHTML = originalText;
        alert('Welcome to Pulse! Your best run starts now.');
    }, 1500);
});
