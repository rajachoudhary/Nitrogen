//code for generating li inside accountings tab
accountingtab = document.getElementById('accounting');
accountingtab.addEventListener('click', createAccountingLists);
function createAccountingLists(e) {
	e.preventDefault();
	window.location.replace('../html/accounting.html');
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
img = document.getElementById('img');
img.addEventListener('click', takeToHomePage);
function takeToHomePage() {
	window.location.replace('../html/index.html');
}

upgradePlanBtn = document.getElementById('upgrade_plan');
upgradePlanBtn.addEventListener('click', takeToHomePage);
function takeToHomePage() {
	window.location.replace('../html/free_trial_for_expenses.html');
}
