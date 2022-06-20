//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку".
// Форма должна собирать полученные данные в массив, а затем формировать карточки работников с полученной информацией.

//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату.
//Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.

//Добавьте к форме поле ввода почты. Карточки должны включать отображение фотографии.

//Добавьте к форме поле ввода прогресса. Выведите прогресс в карточку.

const work_form_elem = document.querySelector('.work_form');
const works = [];

function render() {
	const container = document.querySelector('.work-container');
	container.innerText = '';
	works.forEach(
		({ username, surname, age, rate, days, email, photo, progress }) => {
			const product = document.createElement('div');
			const usernameElem = document.createElement('p');
			const surnameElem = document.createElement('p');
			const ageElem = document.createElement('p');
			const rateElem = document.createElement('p');
			const daysElem = document.createElement('p');
			const salaryElem = document.createElement('p');
			const emailElem = document.createElement('a');
			const photoElem = document.createElement('img');
			const progressContainer = document.createElement('div');
			const progressLine = document.createElement('div');
			const progressValue = document.createElement('p');

			usernameElem.innerText = `Username: ${username}`;
			surnameElem.innerText = `Surname: ${surname}`;
			ageElem.innerText = `Age: ${age}`;
			rateElem.innerText = `Rate: ${rate}`;
			daysElem.innerText = `Days: ${days}`;
			salaryElem.innerText = `Salary: ${rate * days}`;
			emailElem.innerText = email;
			progressValue.innerText = progress + '%';

			emailElem.setAttribute('href', `mailto: ${email}`);
			photoElem.setAttribute('src', photo);
			photoElem.setAttribute('alt', 'photo of worker');

			progressContainer.classList.add('progress-container');
			progressLine.classList.add('progress-line');
			progressValue.classList.add('progress-value');

			setTimeout(() => {
				progressLine.style.opacity = 1;
				progressLine.style.width = progress + '%';
			}, 1500);

			progressContainer.append(progressLine, progressValue);
			product.append(
				usernameElem,
				surnameElem,
				ageElem,
				rateElem,
				daysElem,
				salaryElem,
				emailElem,
				photoElem,
				progressContainer
			);
			container.append(product);
			product.classList.add('works');
		}
	);
}

work_form_elem.addEventListener('submit', (event) => {
	event.preventDefault();
	const { username, surname, age, rate, days, email, photo, progress } =
		event.target;
	works.push({
		username: username.value,
		surname: surname.value,
		age: age.value,
		rate: rate.value,
		days: days.value,
		email: email.value,
		photo: photo.value,
		progress: progress.value,
	});
	username.value = '';
	surname.value = '';
	age.value = '';
	rate.value = '';
	days.value = '';
	email.value = '';
	photo.value = '';
	progress.value = '';

	render();
});
