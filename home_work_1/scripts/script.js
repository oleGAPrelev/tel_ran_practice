// 1. Задан массив объектов workers.

// 2. Выведите на экран карточки со следующей информацией по всем
// работникам: ID, Имя, Фамилия, Возраст, Зарплата, фото.

// 3. Зарплата рассчитывается через умножение ставки на количество дней.

// 4. Карточки должны включать отображение фотографии.

// 5. Примените стили к карточкам: width, padding, border, background - color.

// 1
const workers = [
	{
		id: 1,
		first_name: 'Olga',
		last_name: 'Petrova',
		age: 18,
		rate: 100,
		days: 15,
		photo: 'https://reqres.in/img/faces/12-image.jpg',
		progress: 50,
		// email: 'aprelev.o@MediaList.ru',
	},

	{
		id: 2,
		first_name: 'Petr',
		last_name: 'Ivanov',
		age: 46,
		rate: 70,
		days: 22,
		photo: 'https://reqres.in/img/faces/4-image.jpg',
		progress: 10,
		// email: 'aprelev.o@MediaList.ru',
	},

	{
		id: 3,
		first_name: 'Oleg',
		last_name: 'Orlov',
		age: 32,
		rate: 34,
		days: 10,
		photo: 'https://reqres.in/img/faces/10-image.jpg',
		progress: 75,
		// email: 'aprelev.o@MediaList.ru',
	},

	{
		id: 4,
		first_name: 'Irina',
		last_name: 'Medvedeva',
		age: 22,
		rate: 85,
		days: 17,
		photo: 'https://reqres.in/img/faces/2-image.jpg',
		progress: 30,
		// email: 'aprelev.o@MediaList.ru',
	},
];

// 2
const rootElem = document.querySelector('#root');
workers.forEach(function ({
	id,
	first_name,
	last_name,
	age,
	rate,
	days,
	photo,
	progress,
	// email,
}) {
	const container = document.createElement('div');
	const idElem = document.createElement('p');
	const fristNameElem = document.createElement('p');
	const lastNameElemr = document.createElement('p');
	const ageElem = document.createElement('p');
	const salaryElem = document.createElement('p');
	// const emailElem = document.createElement('a');
	const textElem = document.createElement('p');
	const photoElem = document.createElement('img');
	const progressContainer = document.createElement('div');
	const progressLine = document.createElement('div');
	const progressValue = document.createElement('p');

	idElem.innerText = `id: ${id}`;
	fristNameElem.innerText = `First name: ${first_name}`;
	lastNameElemr.innerText = `Last name: ${last_name}`;
	ageElem.innerText = `Age: ${age}`;
	salaryElem.innerText = `Salary: ${rate * days}`;
	progressValue.innerText = progress + '%';
	// emailElem.innerText = email;
	// textElem.innerText = `Email: ${email}`;

	photoElem.setAttribute('src', photo);
	photoElem.setAttribute('alt', 'photo of worker');
	// emailElem.setAttribute('href', `mailto: ${email}`);

	container.classList.add('container');
	progressContainer.classList.add('progress-container');
	progressLine.classList.add('progress-line');
	progressValue.classList.add('progress-value');

	setTimeout(() => {
		progressLine.style.opacity = 1;
		progressLine.style.width = progress + '%';
	}, 1500);

	progressContainer.append(progressLine, progressValue);

	container.append(
		idElem,
		fristNameElem,
		lastNameElemr,
		ageElem,
		salaryElem,
		// emailElem,
		textElem,
		photoElem,
		progressContainer
	);
	rootElem.append(container);
});
