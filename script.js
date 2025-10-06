// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Плавный фон хедера при скролле
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Логика для кнопок прокрутки каруселей
    const scrollButtons = document.querySelectorAll('.scroll-btn');
    scrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.parentElement.querySelector('.content-row-inner');
            const scrollAmount = row.clientWidth * 0.8; // Прокручивать на 80% ширины видимой области

            if (button.classList.contains('left')) {
                row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });
    });
});
