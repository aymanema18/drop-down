import './style.css';

const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    const menu = btn.nextElementSibling;
    btn.addEventListener('mouseover', () => {
        menu.classList = 'menu';
        menu.classList.add('visible');
        menu.addEventListener('mouseover', () => {
            menu.classList = 'menu';
            menu.classList.add('visible');
        });

        menu.addEventListener('mouseout', () => {
            menu.classList = 'menu';
            menu.classList.add('hidden');
        });
    });

    btn.addEventListener('mouseout', () => {
        menu.classList = 'menu';
        menu.classList.add('hidden');
    });
});
