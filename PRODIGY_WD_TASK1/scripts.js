document.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222'; // Darker background on scroll
        navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.backgroundColor = '#333'; // Original background
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});
