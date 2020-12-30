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
