tasktab = document.getElementById('tasks');
tasktab.addEventListener('click', createTemplate);

function createTemplate(e) {
	//let ulTag = document.createElement('ul');
	// window.location.replace('../html/tasks.html');

	let liTag = document.createElement('li');

	let aTag = document.createElement('a');
	// aTag.href = '../html/template.html';
	liTag.textContent = 'Templates';
	aTag.appendChild(liTag);
	liTag.id = 'templates';

	//ulTag.appendChild(liTag);
	tasktab.appendChild(aTag);
	templatetab = document.getElementById('templates');
	templatetab.addEventListener('click', function () {
		window.location.replace('../html/template.html');
	});
	e.preventDefault();
}

// top nav profile dropdown
let dropDownBtn = document.getElementById('dropbtn');
dropDownBtn.addEventListener('click', myFunction);
function myFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName('dropdown-content');
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};

// let timerDiv = document.getElementById('timer_dropbtn');
// timerDiv.addEventListener('click', noBorder);
// function noBorder() {
// 	timerDiv.textDec
// }
