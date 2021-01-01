//code for proposals tab
proposalstab = document.getElementById('proposals');
proposalstab.addEventListener('click', createProposalTemplate);

function createProposalTemplate(e) {
	e.preventDefault();
	window.location.replace('../html/proposals.html');
}

//code for home page
img = document.getElementById('img');
img.addEventListener('click', takeToHomePage);
function takeToHomePage() {
	window.location.replace('../html/index.html');
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
