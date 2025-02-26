if (typeof instances == 'undefined') {
	instances = $window.instances;
} else {
	let instances = $window.instances;
}

if (typeof tbinst == 'undefined') {
	tbinst = instances.find(inst => inst?.cfg?.title === "Trollbox");
} else {
	let tbinst = instances.find(inst => inst?.cfg?.title === "Trollbox");
}

if (tbinst) {
	fetch('https://bensav8.github.io/tbjb-tampermonkey/userscript.js')
		.then(response => response.text())
		.then(script => {
			tbinst.el.iframe.contentWindow.eval(script)
			$alert('TBJB injected!')
		})
} else {
	$alert('Trollbox is not running; could not inject TBJB.')
}