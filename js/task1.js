showTask();
let Div = document.getElementById('box');
let addTaskBtn = document.getElementById('new_task');
addTaskBtn.addEventListener('click', addTask);
function addTask() {
	let generateP = document.createElement('p');
	let generateP1 = document.createElement('p');
	let generateP2 = document.createElement('p');
	let generateP3 = document.createElement('p');
	generateP.textContent = 'TASKS';
	generateP.style.marginRight = '200px';
	generateP.style.marginTop = '25px';
	generateP.style.marginLeft = '0px';
	generateP1.textContent = 'PROJECT';
	generateP1.style.margin = '20px';
	generateP1.style.marginLeft = '200px';
	generateP2.textContent = 'CLIENTS';
	generateP2.style.margin = '20px';
	generateP3.textContent = 'DUE DATE';
	generateP3.style.margin = '20px';
	let generateInputTag = document.createElement('input');
	generateInputTag.type = 'text';
	generateInputTag.id = 'add_task';
	generateInputTag.class = 'add_task';
	generateInputTag.style.height = '50px';
	generateInputTag.style.width = '900px';
	generateInputTag.style.marginTop = '5px';
	generateInputTag.style.marginLeft = '45px';
	generateInputTag.style.cursor = 'pointer';
	generateInputTag.style.zIndex = '1';
	generateInputTag.style.outlineWidth = '2px';
	Div.class = 'box1';
	Div.appendChild(generateP);
	Div.appendChild(generateP1);
	Div.appendChild(generateP2);
	Div.appendChild(generateP3);
	Div.appendChild(generateInputTag);

	var addTaskInput = document.getElementById('add_task');
	var addTaskButton = document.getElementById('add_task');
	// let addTask = false;
	addTaskButton.addEventListener('click', function () {
		var addTaskInputValue = addTaskInput.value;
		if (addTaskInputValue.trim()) {
			var task = localStorage.getItem('localtask');
			if (task === null) {
				taskObj = [];
			} else {
				taskObj = JSON.parse(task);
			}
			taskObj.push({ task_name: addTaskInputValue });
			localStorage.setItem('localtask', JSON.stringify(taskObj));
			addTaskInput.value = '';
			alert('Your task is saved');
		}
	});
}
function showTask() {
	var task = localStorage.getItem('localtask');
	if (task === null) {
		taskObj = [];
	} else {
		taskObj = JSON.parse(task);
	}

	var html = '';
	var taskList = document.getElementById('add_projects');
	taskObj.forEach(function (item, index) {
		html += `<option>${item.task_name}</option>`;
	});
	taskList.innerHTML += html;
}

// function deleteItem(index) {
// 	var task = localStorage.getItem('localtask');
// 	var task = JSON.parse(task);
// 	taskObj.splice(index, 1);
// 	localStorage.setItem('localtask', JSON.stringify(taskObj));
// 	showTask();
// }
// top nav profile dropdown
let dropDownBtn = document.getElementById('dropbtn');
dropDownBtn.addEventListener('click', myFunction);
function myFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		let dropdowns = document.getElementsByClassName('dropdown-content');
		let i;
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};
img = document.getElementById('img');
img.addEventListener('click', takeToHomePage);
function takeToHomePage() {
	window.location.replace('../html/index.html');
}
