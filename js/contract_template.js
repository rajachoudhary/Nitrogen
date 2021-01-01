//code for contracts
contractstab = document.getElementById('contracts');
contractstab.addEventListener('click', createcontractTemplate);

function createcontractTemplate(e) {
	window.location.replace('../html/contracts.html');
}
img = document.getElementById('img');
img.addEventListener('click', takeToHomePage);
function takeToHomePage() {
	window.location.replace('../html/index.html');
}
