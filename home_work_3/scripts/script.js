// Создать генератор бросаемых костей (рандомно вычисляется два числа от 1 до 6 и выводятся в интерфейс).
let images = [
	'dice1.png',
	'dice2.png',
	'dice3.png',
	'dice4.png',
	'dice5.png',
	'dice6.png',
];
let dice = document.querySelectorAll('img');

function roll() {
	dice.forEach(function (die) {
		die.classList.add('shake');
	});
	setTimeout(function () {
		dice.forEach(function (die) {
			die.classList.remove('shake');
		});
		let dieOneValue = Math.floor(Math.random() * 6);
		let dieTwoValue = Math.floor(Math.random() * 6);
		console.log(dieOneValue, dieTwoValue);
		document.querySelector('#die-1').setAttribute('src', images[dieOneValue]);
		document.querySelector('#die-2').setAttribute('src', images[dieTwoValue]);
		document.querySelector('#total').innerHTML =
			'Your roll is' + (dieOneValue + 1 + (dieTwoValue + 1));
	}, 1000);
}
roll();

// Cоздать кнопку с размерами 30 на 30 пикселей, при каждом нажатии увеличивать ее на 10 пикселей.
const resize_btn = document.querySelector('.zoom_btn');
const container_btn = document.querySelector('.container');
let size = 400;
resize_btn.addEventListener('click', () => {
	size += 10;
	container_btn.style.width = size + 'px';
	container_btn.style.height = size + 'px';
});

// Cоздать кнопку, у которой при клике рандомно меняется цвет заднего фона
const background_color_btn = document.querySelector('.background_color');

function backgroundColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
background_color_btn.addEventListener('click', () => {
	background_color_btn.style.backgroundColor = backgroundColor(); //background_color_btn//document.body
});
const changeColorButton = (color) => {
	resize_btn.style.backgroundColor = backgroundColor();
	skins_btn.style.backgroundColor = backgroundColor();
};
background_color_btn.addEventListener('click', () => changeColorButton());

// Создать слайдер фотографий (при клике на фото оно должно меняться на одно из массива).
const skins_btn = document.querySelector('.skins_btn');
const pictures_btn = document.querySelector('.container');
const photos = [
	'https://clck.ru/s5GL3',
	'https://clck.ru/s5FUT',
	'https://clck.ru/s5Fjt',
	'https://clck.ru/s5FtF',
	'https://clck.ru/s5G4p',
];
let skins_index = 0;

function nextPic() {
	skins_index += 1;
	if (skins_index > photos.length - 1) {
		skins_index = 0;
	}
	pictures_btn.style.backgroundImage = 'url(' + photos[skins_index] + ')';
}

skins_btn.addEventListener('click', nextPic);
skins_index -= 1;
nextPic();
