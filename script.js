document.querySelectorAll('.menu-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const menuId = button.getAttribute('data-target');
        const menu = document.getElementById(menuId);
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex'; // Ajuste para grid layout
            menu.style.opacity = 0;
            setTimeout(() => menu.style.opacity = 1, 10); // Animação de fade-in
        } else {
            menu.style.opacity = 0;
            setTimeout(() => menu.style.display = 'none', 300); // Animação de fade-out
        }
    });
});
