tasktab = document.getElementById('tasks');
tasktab.addEventListener('click', createTemplate);
function createTemplate() {
	for (let i = 0; i < 1; i++) {
		let ulTag = document.createElement('ul');
		let liTag = document.createElement('li');
		let aTag = document.createElement('a');
		aTag.href = '../html/template.html';
		aTag.textContent = 'Templates';
		liTag.appendChild(aTag);
		liTag.id = 'templates';
		ulTag.appendChild(liTag);
		tasktab.appendChild(ulTag);
	}
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
