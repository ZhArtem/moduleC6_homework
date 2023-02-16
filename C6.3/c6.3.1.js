const btn = document.querySelector('.btn');
const icon1 = btn.querySelector('.icon1');
const icon2 = btn.querySelector('.icon2');
btn.addEventListener('click', () => {
    icon1.classList.toggle('hidden');
    icon2.classList.toggle('hidden');
})