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

//popup code
// $(document).ready(function () {
// 	$('.start-btn').click(function () {
// 		$('.modal-box').toggleClass('show-modal');
// 		$('.start-btn').toggleClass('show-modal');
// 	});
// 	$('.fa-times').click(function () {
// 		$('.modal-box').toggleClass('show-modal');
// 		$('.start-btn').toggleClass('show-modal');
// 	});
// });

// let draft_proposal_card = document.getElementById('draft_a_proposal');
// draft_proposal_card.addEventListener('click', takeToAnotherPage);
// function takeToAnotherPage() {
// 	draft_proposal_card.classList.add('draft_a_proposal');
// 	let generateModelDiv = document.createElement('div');
// 	generateModelDiv.classList.add('center');
// 	generateModelDiv.classList.add('modal-box');
// 	let generateTimesDiv = document.createElement('div');
// 	generateTimesDiv.classList.add('fas');
// 	generateTimesDiv.classList.add('fa-times');
// 	let generateEnvelopDiv = document.createElement('div');
// 	generateEnvelopDiv.classList.add('fas');
// 	generateEnvelopDiv.classList.add('fa-envelope');
// 	generateEnvelopDiv.classList.add('icon1');
// 	let generateP = document.createElement('P');
// 	generateP.textContent =
// 		'Set your currency and country where your business legally operates';
// 	let formTag = document.createElement('form');
// 	let generateIcon2Div = document.createElement('div');
// 	generateIcon2Div.classList.add('fas');
// 	generateIcon2Div.classList.add('fa-envelope');
// 	generateIcon2Div.classList.add('icon2');
// 	let input = document.createElement('input');
// 	input.type = 'email';
// 	input.placeholder = 'abc@example.com';
// 	let button = document.createElement('button');
// 	button.textContent = 'Continue';
// 	formTag.appendChild(generateIcon2Div);
// 	formTag.appendChild(input);
// 	formTag.appendChild(button);
// 	draft_proposal_card.appendChild(generateModelDiv);
// 	draft_proposal_card.appendChild(generateTimesDiv);
// 	draft_proposal_card.appendChild(generateEnvelopDiv);
// 	draft_proposal_card.appendChild(generateP);
// 	draft_proposal_card.appendChild(formTag);

// 	//popup
// 	$(document).ready(function () {
// 		$('.draft_a_proposal').click(function () {
// 			$('.modal-box').toggleClass('show-modal');
// 			$('.draft_a_proposal').toggleClass('show-modal');
// 		});
// 		$('.fa-times').click(function () {
// 			$('.modal-box').toggleClass('show-modal');
// 			$('.draft_a_proposal').toggleClass('show-modal');
// 		});
// 	});
// }
