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
