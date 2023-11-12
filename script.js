// const form = document.querySelector('#credit-card');

const cardInner = document.querySelector('.card__inner');

const cardNumber = document.querySelector('#card-number');
const cardHolder = document.querySelector('#card-holder');
const cardValidity = document.querySelector('#card-validity');
const cardCvv = document.querySelector('#card-cvv');
const cardEmail = document.querySelector('#card-email');

const cardNumberText = document.querySelector('#card-number-text');
const cardHolderText = document.querySelector('#card-holder-text');
const cardValidityText = document.querySelector('#card-validity-text');
const cardCvvText = document.querySelector('#card-cvv-text');

const cardNumberLength = 19;
const cardValidityLength = 5;
const cardCvvLength = 3;

cardNumber.addEventListener('input', e => {
	const msg = e.target.nextElementSibling;
	const isCorrectLength = e.target.value.length === cardNumberLength;

	validateField(msg, e.target, isCorrectLength);

	if (!e.target.value) {
		cardNumberText.innerHTML = '●●●● ●●●● ●●●● ●●●●';
	} else {
		const valueOfInput = e.target.value.replaceAll(" ", "");
		if (e.target.value.length > 14) {
			e.target.value = valueOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
			cardNumberText.innerHTML = valueOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
		} else if (e.target.value.length > 9) {
			e.target.value = valueOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
			cardNumberText.innerHTML = valueOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
		} else if (e.target.value.length > 4) {
			e.target.value = valueOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
			cardNumberText.innerHTML = valueOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
		} else {
			cardNumberText.innerHTML = valueOfInput;
		}
	}
});

cardHolder.addEventListener('input', e => {
	const msg = e.target.nextElementSibling;
	const isCorrectLength = e.target.value.length > 0;

	validateField(msg, e.target, isCorrectLength);

	if (!e.target.value) {
		cardHolderText.innerHTML = 'FULL NAME';
	} else {
		cardHolderText.innerHTML = e.target.value.toUpperCase();
	}
});

cardValidity.addEventListener('input', e => {
	const msg = e.target.nextElementSibling;
	const isCorrectLength = e.target.value.length === cardValidityLength;

	validateField(msg, e.target, isCorrectLength);

	if (!e.target.value) {
		cardValidityText.innerHTML = 'MM/YY';
	} else {
		const valueOfInput = e.target.value.replace("/", "");
		if (e.target.value.length > 2) {
			e.target.value = valueOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
			cardValidityText.innerHTML = valueOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
		} else {
			cardValidityText.innerHTML = valueOfInput;
		}
	}
});

cardCvv.addEventListener('input', e => {
	const msg = e.target.nextElementSibling;
	const isCorrectLength = e.target.value.length === cardCvvLength;

	validateField(msg, e.target, isCorrectLength);

	e.target.value = e.target.value.replaceAll(/\d/g, '*');
	cardCvvText.innerHTML = e.target.value;
});

cardCvv.addEventListener('click', () => {
	cardInner.classList.add('active');
});

document.addEventListener('click', e => {
	if (e.target != cardCvv) {
		cardInner.classList.remove('active');
	}
});

cardEmail.addEventListener('input', e => {
	const msg = e.target.nextElementSibling;
	const isCorrectLength = e.target.value.slice(-10) === '@gmail.com';

	validateField(msg, e.target, isCorrectLength);
});

function validateField(msg, currentField, length) {
	msg.classList.toggle('has-error', !length);
	currentField.classList.toggle('has-error', !length);
	currentField.classList.toggle('is-correct', length);
}

function moveToNextField(currentField, nextFieldId) {
	const maxLength = currentField.maxLength;

	if (currentField.value.length === maxLength) {
		document.getElementById(nextFieldId).focus();
	}
}