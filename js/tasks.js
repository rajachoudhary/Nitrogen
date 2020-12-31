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

taskButton = document.getElementById('add_a_task');
taskButton.addEventListener('click', addTask);
function addTask(e) {
	e.preventDefault();
	window.location.replace('../html/task1.html');
}

// showTask();
// var addTaskInput = document.getElementById('addTaskInput');
// var addTaskButton = document.getElementById('addTaskButton');
// addTaskButton.addEventListener('click', function () {
// 	var addTaskInputValue = addTaskInput.value;
// 	if (addTaskInputValue.trim()) {
// 		var task = localStorage.getItem('localtask');
// 		if (task === null) {
// 			taskObj = [];
// 		} else {
// 			taskObj = JSON.parse(task);
// 		}
// 		taskObj.push({ task_name: addTaskInputValue });
// 		localStorage.setItem('localtask', JSON.stringify(taskObj));
// 		addTaskInput.value = '';
// 	}
// 	showTask();
// });

// function showTask() {
// 	var task = localStorage.getItem('localtask');
// 	if (task === null) {
// 		taskObj = [];
// 	} else {
// 		taskObj = JSON.parse(task);
// 	}

// 	var html = '';
// 	var taskList = document.getElementById('taskList');
// 	taskObj.forEach(function (item, index) {
// 		html += `<tr class="row">
//         <td>${index + 1}</td>
//         <td>${item.task_name}</td>
//         <td><button onClick="deleteItem(${index})">DELETE</button></td>
//         </tr>`;
// 	});
// 	taskList.innerHTML = html;
// }

// function deleteItem(index) {
// 	var task = localStorage.getItem('localtask');
// 	var task = JSON.parse(task);
// 	taskObj.splice(index, 1);
// 	localStorage.setItem('localtask', JSON.stringify(taskObj));
// 	showTask();
// }
