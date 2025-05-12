document.addEventListener('DOMContentLoaded', function () {
	const HeaderSearchOpen = document.querySelector('#search-open');
	const SearchForm = document.querySelector('#header-search-form');

	HeaderSearchOpen.addEventListener('click', () => {
		SearchForm.classList.toggle('search-form--open');
	});
});

const burger = document.querySelector('#menu-toggle'); // это твоя кнопка
const menuNav = document.querySelector('#header-menu'); // это меню

burger?.addEventListener('click', function () {
	burger.classList.toggle('open'); // анимация бургер-кнопки
	menuNav?.classList.toggle('active'); // показать/скрыть меню
});
