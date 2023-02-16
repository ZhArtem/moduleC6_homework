const btn = document.querySelector('.btn');

const windowWidth = window.screen.width;
const windowHeight = window.screen.height;

btn.addEventListener('click', () => {
    const clientInnerWidth = window.innerWidth;
    const clientInnerHeight = window.innerHeight;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    alert(`Размеры экрана: ${windowWidth} x ${windowHeight}.
Размер окна браузера с учётом полосы прокрутки: ${clientInnerWidth} x ${clientInnerHeight}.
Размер окна браузера без учёта полосы прокрутки: ${clientWidth} x ${clientHeight}.
    `);
});


