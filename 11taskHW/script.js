let age = document.getElementById('age');

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
let showUserVasya = showUser.bind(age, 'Vasya', 'Ivanov');

showUserVasya();