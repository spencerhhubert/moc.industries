function genNumOptionsHTML(id, low, high) {
	let node = document.getElementById(id)
	let output = ``
	for (i = low; i < high; i++) {
		output += `<option value="${i}">${i}</option>`
	}
	node.innerHTML += output
}

