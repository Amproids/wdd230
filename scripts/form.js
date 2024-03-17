//Password Elements
const p1 = document.querySelector("#password");
const p2 = document.querySelector("#confirm-password");

//Rating Elements
const rangevalue = document.querySelector("#rangevalue");
const range = document.querySelector("#rating");


// Confirm Password Event Listener
p2.addEventListener("focusout", confirmPassword);

// Rating Event Listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);


function confirmPassword() {
	if (p1.value !== p2.value) {
		p1.placeholder = "Passwords do not match";
		p2.placeholder = "Passwords do not match";
		p1.value = "";
		p2.value = "";
		p1.focus();
	} else {
		p2.style.backgroundColor = "#fff";
		p2.style.color = "#000";
	}
}

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}