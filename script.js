const form = document.querySelector('#credit-card');

const cardNumber = document.querySelector('#card-number');
const cardHolder = document.querySelector('#card-holder');
const cardExpiration = document.querySelector('#card-expiration');
const cardCcv = document.querySelector('#card-ccv');

const cardNumberText = document.querySelector('#card-number-text');
const cardHolderText = document.querySelector('#card-holder-text');
const cardExpirationText = document.querySelector('#card-expiration-text');

// const cardCcvText = document.querySelector('#card-ccv-text');

cardNumber.addEventListener('input', e => {
	const remark = e.target.nextElementSibling;
	if (e.target.value.length < 19) {
		remark.classList.add('_incomplete');
		e.target.classList.add('_incomplete');
		e.target.classList.remove('_complete')
	} else {
		remark.classList.remove('_incomplete');
		e.target.classList.remove('_incomplete');
		e.target.classList.add('_complete')
	}
});


cardHolder.addEventListener('input', e => {
	const remark = e.target.nextElementSibling;
	if (e.target.value.length < 1) {
		remark.classList.add('_incomplete');
		e.target.classList.add('_incomplete');
		e.target.classList.remove('_complete')
	} else {
		remark.classList.remove('_incomplete');
		e.target.classList.remove('_incomplete');
		e.target.classList.add('_complete')
	}
});

cardExpiration.addEventListener('input', e => {
	const remark = e.target.nextElementSibling;
	if (e.target.value.length <= 4) {
		remark.classList.add('_incomplete');
		e.target.classList.add('_incomplete');
		e.target.classList.remove('_complete')
	} else {
		remark.classList.remove('_incomplete');
		e.target.classList.remove('_incomplete');
		e.target.classList.add('_complete')
	}
});

cardCcv.addEventListener('input', e => {
	const remark = e.target.nextElementSibling;
	if (e.target.value.length < 3) {
		remark.classList.add('_incomplete');
		e.target.classList.add('_incomplete');
		e.target.classList.remove('_complete')
	} else {
		remark.classList.remove('_incomplete');
		e.target.classList.remove('_incomplete');
		e.target.classList.add('_complete')
	}
});

cardNumber.addEventListener('keyup', e => {
	if (!e.target.value) {
		cardNumberText.innerHTML = '**** **** **** ****';
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

cardHolder.addEventListener('keyup', e => {
	if (!e.target.value) {
		cardHolderText.innerHTML = 'FULL NAME';
	} else {
		cardHolderText.innerHTML = e.target.value.toUpperCase();
	}
});

cardExpiration.addEventListener('keyup', e => {
	if (!e.target.value) {
		cardExpirationText.innerHTML = 'MM/YY';
	} else {
		const valueOfInput = e.target.value.replace("/", "");

		if (e.target.value.length > 2) {
			e.target.value = valueOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
			cardExpirationText.innerHTML = valueOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
		} else {
			cardExpirationText.innerHTML = valueOfInput;
		}
	}
});

cardCcv.addEventListener('keyup', e => {
	let value = e.target.value;
	e.target.value = value.replaceAll(/\w+/g, '*');
});