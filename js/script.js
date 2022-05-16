const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
	btn.classList.toggle('open-hamburger');
	nav.classList.toggle('flex');
	nav.classList.toggle('hidden');
});
