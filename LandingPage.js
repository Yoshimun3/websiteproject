 // Function to check if an element is in the viewport
 function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to trigger the animation when skills section is in viewport
function animateSkills() {
    var skillsSection = document.getElementById('skills');
    var skillLevels = document.querySelectorAll('.skill-level .level');
    if (isInViewport(skillsSection) && skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
        skillLevels.forEach(function(level) {
            level.style.animation = 'slideIn 1s ease-out forwards';
        });
        // Remove the event listener once the animation is triggered
        window.removeEventListener('scroll', animateSkills);
    }
}

// Event listener for scrolling to trigger the animation
window.addEventListener('scroll', animateSkills);

// Initial check for animation on page load
animateSkills();
    // Function to set the height of each section to full viewport height
    function setSectionHeight() {
        var sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            section.style.height = window.innerHeight + 'px';
        });
    }

    // Set section height when the page loads and when it's resized
    window.addEventListener('load', setSectionHeight);
    window.addEventListener('resize', setSectionHeight);

   
// Smooth scroll to the top of each section when clicking on a navigation link
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1); // Get the ID of the target section
    const targetSection = document.getElementById(targetId); // Get the target section
    
    // Scroll to the top of the target section
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });
});
});



// Smooth scroll to the top of the page when clicking on the "Home" link
document.querySelector('.navbar a[href="#home"]').addEventListener('click', function(event) {
event.preventDefault();

window.scrollTo({
top: 0,
behavior: 'smooth'
});
});


    // Animation to swap the main text with fade-in effect
    const mainText = document.getElementById('home');
    const mainTexts = ["I AM JULIUS EMMANUEL B. RAMOS", "LEARN MORE ABOUT ME!", "CHECK OUT MY SKILLS","THIS IS MY WEBSITE"
];
    let currentIndex = 1; // Start from the second text

    setInterval(() => {
        mainText.style.opacity = 0;
        setTimeout(() => {
            mainText.textContent = mainTexts[currentIndex];
            mainText.style.opacity = 1;
        }, 500); // Wait for fade-out transition to complete
        currentIndex = (currentIndex + 1) % mainTexts.length;
    }, 2000); // Change text every 3 seconds
    