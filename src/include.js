// Load Navbar
fetch("/src/components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // ===== Mobile Menu Toggle =====
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));

    // ===== Active Link Highlight =====
    const links = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    links.forEach(link => {
      const route = link.getAttribute('data-route');

      // Normalize paths to compare
      const normalizedRoute = new URL(route, window.location.origin).pathname;

      if (normalizedRoute === currentPath) {
        link.classList.add('text-blue-500'); // Active color
        link.classList.remove('text-primary'); // Remove default color
      }

      // Click navigation
      link.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = route; // Navigate to page
      });
    });
  });

// Load Footer
fetch("/src/components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

 function initDarkMode() {
  // Select both buttons and icons
  const btnDesktop = document.getElementById('dark-desktop');
  const moonDesktop = document.getElementById('moonIconDesktop');
  const sunDesktop  = document.getElementById('sunIconDesktop');

  const btnMobile = document.getElementById('dark-mobile');
  const moonMobile = document.getElementById('moonIconMobile');
  const sunMobile  = document.getElementById('sunIconMobile');

  // Function to apply theme
  function setTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.theme = isDark ? 'dark' : 'light';

    // Update icons on both buttons
    [moonDesktop, moonMobile].forEach(el => el && (el.style.opacity = isDark ? '0' : '1'));
    [sunDesktop, sunMobile].forEach(el => el && (el.style.opacity = isDark ? '1' : '0'));
  }

  // Initialize theme based on localStorage or system preference
  let isDark = localStorage.theme === 'dark' ||
               (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

  setTheme(isDark);

  // Toggle function for both buttons
  [btnDesktop, btnMobile].forEach(btn => {
    if(btn) btn.addEventListener('click', () => {
      isDark = !isDark;
      setTheme(isDark);
    });
  });
}

// Wait for dynamically loaded buttons
const checkExist = setInterval(() => {
  if (document.getElementById('dark-desktop') || document.getElementById('dark-mobile')) {
    initDarkMode();
    clearInterval(checkExist);
  }
}, 60);

  const button = document.getElementById("scroll-to-mentor");
  const mentorSection = document.getElementById("mentor-section");

  button.addEventListener("click", () => {
    mentorSection.scrollIntoView({ behavior: "smooth" });
  });




