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
