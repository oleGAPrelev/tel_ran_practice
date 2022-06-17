// Примените стили к карточкам: width, padding, border, background - color.

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
		email: 'olga.petrova@MediaList.ru',
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
		email: 'petr.ivanov@MediaList.ru',
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
		email: 'oleg.orlov@MediaList.ru',
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
		email: 'irina.medvedeva@MediaList.ru',
	},
];

const rootElem = document.querySelector('#root');
workers.forEach(function ({
	id,
	first_name,
	last_name,
	age,
	salary,
	rate,
	days,
	photo,
	progress,
}) {
	const container = document.createElement('div');
	const idElem = document.createElement('p');
	const firstNameElem = document.createElement('p');
	const lastNameElem = document.createElement('p');
	const ageElem = document.createElement('p');
	const salaryElem = document.createElement('p');
	const photoElem = document.createElement('img');
	photoElem.setAttribute('src', photo);
	photoElem.setAttribute('alt', 'photo of worker');
	const progrElem = document.createElement('progress');
	progrElem.setAttribute('value', progress);
	progrElem.setAttribute('max', '100');
	container.style.cssText = `
    background-color: #FFE4C4;
    border: 2px solid black;
    width: 200px;
    padding: 20px;
    margin-bottom: 15px;
    `;
	progrElem.style.cssText = `
    width: 80%;
    height: 20px;
    border: 2px solid black;
    margin-top: 10px;
    background-color: #FFE4C4;
    `;
	idElem.innerText = `iD: ${id}`;
	firstNameElem.innerText = `First name: ${first_name}`;
	lastNameElem.innerText = `Last name: ${last_name}`;
	ageElem.innerText = `Age: ${age}`;
	salaryElem.innerText = `Salary: ${rate * days}`;
	container.append(
		idElem,
		firstNameElem,
		lastNameElem,
		ageElem,
		salaryElem,
		photoElem,
		progrElem
	);
	rootElem.append(container);
});
