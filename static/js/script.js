document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functionality
    initNavbar();
    initSeeMoreButtons();
    initSmoothScroll();
});

// ===== NAVBAR SCROLL EFFECT =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== SCROLL ANIMATIONS WITH GSAP =====
function initScrollAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out'
        });
    });

    // Parallax effect for hero decoration
    const heroDecoration = document.querySelector('.hero-decoration');
    if (heroDecoration) {
        gsap.to(heroDecoration, {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: 200,
            opacity: 0.3,
            ease: 'none'
        });
    }

    // Stagger animation for cards
    animateCards('.skill-card', 0.15);
    animateCards('.project-card', 0.1);
    animateCards('.cert-card', 0.1);
    animateCards('.activity-card', 0.1);
    animateCards('.achievement-card', 0.2);
    animateCards('.hobby-card', 0.15);
}

function animateCards(selector, stagger) {
    const cards = document.querySelectorAll(selector);
    
    gsap.from(cards, {
        scrollTrigger: {
            trigger: cards[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        stagger: stagger,
        duration: 0.8,
        ease: 'power2.out'
    });
}

// ===== SEE MORE BUTTONS =====
function initSeeMoreButtons() {
    // Projects See More
    const projectsSeeMore = document.getElementById('projectsSeeMore');
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (projectsSeeMore && projectsGrid) {
        projectsSeeMore.addEventListener('click', () => {
            const hiddenProjects = projectsGrid.querySelectorAll('.project-card:nth-child(n+7)');
            
            hiddenProjects.forEach((card, index) => {
                card.style.display = 'flex';
                gsap.from(card, {
                    opacity: 0,
                    y: 30,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'power2.out'
                });
            });
            
            projectsSeeMore.style.display = 'none';
        });
    }

    // Certifications See More
    const certsSeeMore = document.getElementById('certsSeeMore');
    const certsGrid = document.getElementById('certificationsGrid');
    
    if (certsSeeMore && certsGrid) {
        certsSeeMore.addEventListener('click', () => {
            const hiddenCerts = certsGrid.querySelectorAll('.hidden-cert');
            
            hiddenCerts.forEach((cert, index) => {
                cert.classList.remove('hidden-cert');
                cert.style.display = 'block';
                gsap.from(cert, {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: 'power2.out'
                });
            });
            
            certsSeeMore.style.display = 'none';
        });
    }

    // Activities See More (if needed)
    const activitiesSeeMore = document.getElementById('activitiesSeeMore');
    const activitiesGrid = document.getElementById('activitiesGrid');
    
    if (activitiesSeeMore && activitiesGrid) {
        const hiddenActivities = activitiesGrid.querySelectorAll('.activity-card:nth-child(n+7)');
        if (hiddenActivities.length > 0) {
            activitiesSeeMore.style.display = 'block';
            
            activitiesSeeMore.addEventListener('click', () => {
                hiddenActivities.forEach((card, index) => {
                    card.style.display = 'block';
                    gsap.from(card, {
                        opacity: 0,
                        x: -20,
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: 'power2.out'
                    });
                });
                
                activitiesSeeMore.style.display = 'none';
            });
        }
    }

    // Achievements See More (if needed)
    const achievementsSeeMore = document.getElementById('achievementsSeeMore');
    const achievementsGrid = document.getElementById('achievementsGrid');
    
    if (achievementsSeeMore && achievementsGrid) {
        const hiddenAchievements = achievementsGrid.querySelectorAll('.achievement-card:nth-child(n+3)');
        if (hiddenAchievements.length > 0) {
            achievementsSeeMore.style.display = 'block';
            
            achievementsSeeMore.addEventListener('click', () => {
                hiddenAchievements.forEach((card, index) => {
                    card.style.display = 'block';
                    gsap.from(card, {
                        opacity: 0,
                        scale: 0.95,
                        duration: 0.6,
                        delay: index * 0.15,
                        ease: 'power2.out'
                    });
                });
                
                achievementsSeeMore.style.display = 'none';
            });
        }
    }

    // Hobbies See More
    const hobbiesSeeMore = document.getElementById('hobbiesSeeMore');
    const hobbiesGrid = document.getElementById('hobbiesGrid');
    
    if (hobbiesSeeMore && hobbiesGrid) {
        hobbiesSeeMore.addEventListener('click', () => {
            const hiddenHobbies = hobbiesGrid.querySelectorAll('.hidden-hobby');
            
            hiddenHobbies.forEach((hobby, index) => {
                hobby.classList.remove('hidden-hobby');
                hobby.style.display = 'block';
                gsap.from(hobby, {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'power2.out'
                });
            });
            
            hobbiesSeeMore.style.display = 'none';
        });
    }
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scroll for CTA buttons
    const ctaButtons = document.querySelectorAll('.hero-cta a');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const href = button.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===== INTERSECTION OBSERVER FOR FADE-IN EFFECTS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('[class*="card"]').forEach(el => {
    observer.observe(el);
});

// ===== CURSOR TRAIL EFFECT (OPTIONAL LUXURY TOUCH) =====
let cursorTrail = [];
const trailLength = 5;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// ===== TYPING EFFECT FOR HERO TAGLINE (OPTIONAL) =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
const heroTagline = document.querySelector('.hero-tagline');
if (heroTagline) {
    const originalText = heroTagline.textContent;
    typeWriter(heroTagline, originalText, 80);
}

// ===== CONTACT FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function () {
    const emailContactBtn = document.getElementById('emailContactBtn');

    if (!emailContactBtn) return;

    emailContactBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(6px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            `;


        modal.innerHTML = `
  <div style="
    background:#ffffff;
    padding:2rem;
    border-radius:14px;
    width:90%;
    max-width:480px;
    box-shadow:0 20px 40px rgba(0,0,0,0.3);
    animation:scaleIn 0.25s ease;
    font-family: 'Segoe UI', sans-serif;
  ">
    <h3 style="
      margin-bottom:1.5rem;
      text-align:center;
      color:#14213d;
      font-size:1.4rem;
    ">📩 Send Me a Message</h3>

    <form id="contactForm">

      <div style="margin-bottom:1rem;">
        <label style="display:block;margin-bottom:0.4rem;color:#555;font-size:0.85rem;">
          Name
        </label>
        <input id="contactName" type="text" required placeholder="Your full name"
          style="
            width:100%;
            padding:0.75rem;
            border-radius:8px;
            border:1px solid #ddd;
            font-size:0.95rem;
          "
        />
      </div>

      <div style="margin-bottom:1rem;">
        <label style="display:block;margin-bottom:0.4rem;color:#555;font-size:0.85rem;">
          Email
        </label>
        <input id="contactEmail" type="email" required placeholder="your@email.com"
          style="
            width:100%;
            padding:0.75rem;
            border-radius:8px;
            border:1px solid #ddd;
            font-size:0.95rem;
          "
        />
      </div>

      <div style="margin-bottom:1.4rem;">
        <label style="display:block;margin-bottom:0.4rem;color:#555;font-size:0.85rem;">
          Message
        </label>
        <textarea id="contactMessage" rows="5" required placeholder="Write your message..."
          style="
            width:100%;
            padding:0.75rem;
            border-radius:8px;
            border:1px solid #ddd;
            font-size:0.95rem;
            resize:vertical;
          "
        ></textarea>
      </div>

      <div style="display:flex;justify-content:flex-end;gap:1rem;">
        <button type="button" id="cancelContact"
          style="
            background:transparent;
            border:1px solid #ccc;
            padding:0.65rem 1.4rem;
            border-radius:8px;
            cursor:pointer;
            color:#555;
          "
        >Cancel</button>

        <button type="submit"
          style="
            background:#14213d;
            color:white;
            border:none;
            padding:0.65rem 1.6rem;
            border-radius:8px;
            cursor:pointer;
            font-size:0.95rem;
          "
        >Send</button>
      </div>

    </form>
  </div>
`;


        document.body.appendChild(modal);

        // NOW elements exist
const form = modal.querySelector('#contactForm');
const cancelBtn = modal.querySelector('#cancelContact');

// Cancel button works
cancelBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
});

        // Submit handler (REAL email sending)
    form.addEventListener('submit', function (e) {
    e.preventDefault();

    const payload = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        message: document.getElementById('contactMessage').value
    };

    emailjs.send(
        "service_o5oezaj",
        "template_853c8ft",
        payload
    ).then(() => {
        alert("✅ Message sent successfully!");
        document.body.removeChild(modal);
    }).catch((error) => {
        console.error(error);
        alert("❌ Failed to send message. Try again.");
    });
});
});
});
