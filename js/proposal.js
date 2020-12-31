tasktab = document.getElementById('tasks');
tasktab.addEventListener('click', createTemplate);

function createTemplate(e) {
	//let ulTag = document.createElement('ul');
	e.preventDefault();
	let liTag = document.createElement('li');

	let aTag = document.createElement('a');
	aTag.href = '../html/template.html';
	liTag.textContent = 'Templates';
	aTag.appendChild(liTag);
	liTag.id = 'templates';

	//ulTag.appendChild(liTag);
	tasktab.appendChild(aTag);

	templatetab = document.getElementById('templates');
	templatetab.addEventListener('click', function () {
		// console.log('hellow');
		window.location.replace('../html/template.html');
	});
}

//code for proposals tab
proposalstab = document.getElementById('proposals');
proposalstab.addEventListener('click', createProposalTemplate);

function createProposalTemplate(e) {
	//let ulTag = document.createElement('ul');
	e.preventDefault();
	let liTag = document.createElement('li');

	let aTag = document.createElement('a');
	aTag.href = '../html/proposal_template.html';
	liTag.textContent = 'Templates';
	aTag.appendChild(liTag);
	liTag.id = 'proposal_templates';

	//ulTag.appendChild(liTag);
	proposalstab.appendChild(aTag);

	proposaltemplatetab = document.getElementById('proposal_templates');
	proposaltemplatetab.addEventListener('click', function () {
		// console.log('hellow');
		window.location.replace('../html/proposal_template.html');
	});
}

//code for generating li inside accountings tab
accountingtab = document.getElementById('accounting');
accountingtab.addEventListener('click', createAccountingLists);
function createAccountingLists(e) {
	e.preventDefault();
	// let ulTag = document.createElement('ul');
	let firstLiTag = document.createElement('li');
	let secondLiTag = document.createElement('li');
	firstLiTag.id = 'expenses';
	secondLiTag.id = 'income';
	let expensesATag = document.createElement('a');
	let incomeATag = document.createElement('a');
	expensesATag.href = '../html/expenses.html';
	incomeATag.href = '../html/income.html';
	firstLiTag.textContent = 'Expenses';
	secondLiTag.textContent = 'Income';
	expensesATag.appendChild(firstLiTag);
	incomeATag.appendChild(secondLiTag);
	// ulTag.appendChild(expensesATag, incomeATag);
	accountingtab.appendChild(expensesATag);
	accountingtab.appendChild(incomeATag);

	expensestab = document.getElementById('expenses');
	expensestab.addEventListener('click', function () {
		// console.log('hellow');
		window.location.replace('../html/expenses.html');
	});

	incometab = document.getElementById('income');
	incometab.addEventListener('click', function () {
		// console.log('hellow');
		window.location.replace('../html/income.html');
	});
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

// timer div dropdown
// let timerdropDownBtn = document.getElementById('timer_dropbtn');
// timerdropDownBtn.addEventListener('click', timerFunction);
// function timerFunction() {
// 	document.getElementById('timer_main-div').classList.toggle('show');
// }
// Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
// 	if (!event.target.matches('.timer_dropbtn')) {
// 		let timerdropdowns = document.getElementsByClassName('timer_main-div');
// 		let i;
// 		for (i = 0; i < timerdropdowns.length; i++) {
// 			var opentimerDropdown = timerdropdowns[i];
// 			if (opentimerDropdown.classList.contains('show')) {
// 				opentimerDropdown.classList.remove('show');
// 			}
// 		}
// 	}
// };
// let timerDiv = document.getElementById('timer_dropbtn');
// timerDiv.addEventListener('click', noBorder);
// function noBorder() {
// 	timerDiv.textDec
// }

//timer code
timerbtn = document.getElementById('timer_dropbtn');
timerDiv = document.getElementById('timer_dropdown');
timerbtn.addEventListener('click', getTimer);
function getTimer(event) {
	console.log('Hello');
	let MaindivTag = document.createElement('div');
	let firstDivInsideMainDiv = document.createElement('div');
	let SecondDivInsideMainDiv = document.createElement('div');
	MaindivTag.id = 'timer_main-div';
	firstDivInsideMainDiv.id = 'first_div_inside_timer_main_div';
	SecondDivInsideMainDiv.id = 'second_div_inside_timer_main_div';

	MaindivTag.class = 'timer_main-div';
	firstDivInsideMainDiv.class = 'first_div_inside_timer_main_div';
	SecondDivInsideMainDiv.class = 'second_div_inside_timer_main_div';

	MaindivTag.appendChild(firstDivInsideMainDiv);
	MaindivTag.appendChild(SecondDivInsideMainDiv);
	timerDiv.appendChild(MaindivTag);

	//toggling divs
	document.getElementById('timer_main-div').classList.toggle('show-timer');
	if (!event.target.matches('.timer_dropbtn')) {
		let timerdropdowns = document.getElementsByClassName('timer_main-div');
		let i;
		for (i = 0; i < timerdropdowns.length; i++) {
			let openDropdown = timerdropdowns[i];
			if (openDropdown.classList.contains('show-timer')) {
				openDropdown.classList.remove('show-timer');
			}
		}
	}
}

//Timer functionality code
// var hrs = document.getElementById('hours');
// var minutes = document.getElementById('minutes');
// var seconds = document.getElementById('seconds');
// var mili = document.getElementById('mili');

// var miliSec = 0;
// var sec = 0;
// var minute = 0;
// var hours = 0;
// var stopWatch = null;
// function display(hours, minute, sec, miliSec) {
// 	hrs.textContent = hours;
// 	minutes.textContent = minute;
// 	seconds.textContent = sec;
// 	mili.textContent = miliSec;
// }
// document.getElementById('start').addEventListener('click', startSW);
// function startSW() {
// 	stopWatch = setInterval(function () {
// 		miliSec += 1;
// 		if (miliSec >= 100) {
// 			sec += 1;
// 			miliSec = 0;
// 		}
// 		if (sec >= 60) {
// 			minute += 1;
// 			sec = 0;
// 		}
// 		if (minute >= 60) {
// 			hours += 1;
// 			minute = 0;
// 		}
// 		display(hours, minute, sec, miliSec);
// 	}, 10);
// }

// document.getElementById('stop').addEventListener('click', stopTimer);
// function stopTimer() {
// 	clearInterval(stopWatch);
// }

// document.getElementById('reset').addEventListener('click', resetTimer);
// function resetTimer() {
// 	stopTimer();
// 	display(0, 0, 0, 0);
// }
