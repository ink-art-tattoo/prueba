// js/include-header.js
document.addEventListener('DOMContentLoaded', function() {
    // Crear contenedor para el header
    const headerContainer = document.createElement('div');
    headerContainer.id = 'header-container';
    document.body.insertBefore(headerContainer, document.body.firstChild);
    
    // Cargar el header
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html;
            initHeaderFunctions(); // Inicializar funciones del header
        })
        .catch(error => {
            console.error('Error cargando el header:', error);
            headerContainer.innerHTML = '<p>Error cargando el encabezado</p>';
        });
});

 // Función para inicializar todas las funciones del header
function initHeaderFunctions() {



                // Theme Management
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        // Check for saved theme or set dark mode as default
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });

        // Mobile Menu Management
        const menuBtn = document.getElementById('menuBtn');
        const closeBtn = document.getElementById('closeBtn');
        const mobileNav = document.getElementById('mobileNav');

        menuBtn.addEventListener('click', () => {
            mobileNav.classList.add('active');
            menuBtn.style.display = 'none';
            closeBtn.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            menuBtn.style.display = 'flex';
            closeBtn.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        // Close menu when clicking on links
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                menuBtn.style.display = 'flex';
                closeBtn.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Efecto scroll en header
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('active') && 
                !nav.contains(e.target) && 
                e.target !== menuBtn) {
                nav.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        }