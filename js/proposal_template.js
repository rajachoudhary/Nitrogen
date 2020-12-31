//code for proposals tab
proposalstab = document.getElementById('proposals');
proposalstab.addEventListener('click', createProposalTemplate);

function createProposalTemplate(e) {
	e.preventDefault();
	window.location.replace('../html/proposals.html');
}
