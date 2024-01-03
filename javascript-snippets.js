const text = document.getElementById('inner-text');

text.innerText = "This is an innerText example."

function showText() {
	const hiddenText = document.getElementById('hidden-text');
	hiddenText.innerText = "This was it";
}

function newButton() {
	const divContainer = document.getElementById('insert-button');
	divContainer.innerHTML = "<button>Another Button</button>"
}