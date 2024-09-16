// Smooth scrolling between sections
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Collapsible sections
const collapsibleHeaders = document.querySelectorAll('section > h2');
collapsibleHeaders.forEach(header => {
  header.addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

// Search functionality
const searchInput = document.getElementById('search');
const resourceLinks = document.querySelectorAll('main a');

searchInput.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  resourceLinks.forEach(link => {
    const linkText = link.textContent.toLowerCase();
    if (linkText.includes(searchTerm)) {
      link.parentElement.style.display = 'block';
    } else {
      link.parentElement.style.display = 'none';
    }
  });
});

// Hover animations
const links = document.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
    this.style.backgroundColor = '#007bff';
    this.style.color = '#fff';
  });
  link.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    this.style.backgroundColor = '#f1f1f1';
    this.style.color = '#007bff';
  });
});
