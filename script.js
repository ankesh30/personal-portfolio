document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    let isDarkMode = true;

    themeToggle.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            body.classList.remove('light-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            body.classList.add('light-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav__link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('.nav__container').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const navMenu = document.getElementById('nav-menu');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (!navMenu.contains(e.target) && e.target !== menuToggle && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
    
    // Scroll down button
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
        scrollDown.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Animate elements when they come into view
   const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate__animated');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                const animation = element.getAttribute('data-animation') || 'fadeInUp';
                element.classList.add('animate__' + animation);
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Create a cool submission effect
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.innerHTML = '<i class="fas fa-check"></i> Sent!';
            submitButton.classList.add('success');
            
            // Reset after animation
            setTimeout(() => {
                submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                submitButton.classList.remove('success');
                this.reset();
            }, 2000);
        });
    }
    
    // Add random animation delays to project cards
    const animatedCards = document.querySelectorAll('.project-card, .cert-card');
    animatedCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.setAttribute('data-animation', 'fadeInUp');
    });
    
    // Add floating effect to orbs
  setInterval(() => {
        const orbs = document.querySelectorAll('.project-orb, .contact-orb');
        orbs.forEach(orb => {
            const currentX = parseInt(orb.style.left) || 0;
            const currentY = parseInt(orb.style.top) || 0;
            const newX = currentX + (Math.random() * 20 - 10);
            const newY = currentY + (Math.random() * 20 - 10);
            
            orb.style.left = `${newX}px`;
            orb.style.top = `${newY}px`;
        });
    }, 100);
    
    // Initialize skill bar animations
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});