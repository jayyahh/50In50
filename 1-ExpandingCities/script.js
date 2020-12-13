const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => panel.addEventListener('click', () => {
	removeSelectedPanel()
	panel.classList.add('selected')
}));

const removeSelectedPanel = () => {
	panels.forEach((panel) => {
		panel.classList.remove('selected')
	})
}