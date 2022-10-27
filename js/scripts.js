window.onload = () => {
	function validEmail(email, label, containLabel=false) {
		if (!regexEmail.test(email.value)) {
			email.style.border = "1px solid red";
			if (containLabel) {
				label.innerHTML = "Please check your email";
				label.style.color = "red";
			}
			return;
		}
		email.style.border = "hsl(243, 87%, 12%)";
		if (containLabel) {
			label.innerHTML = "Enter your email";
			label.style.color = "hsl(224, 93%, 58%)";
		}
	}

	const regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

	// VALIDACIONES EMAIL HERO

	const formHero = document.querySelector(".form-hero");

	formHero.addEventListener("submit", () => {
		const labelEmail = document.getElementById("labelTxtEmail");
		const emailHero = document.getElementById("txtEmail");

		validEmail(emailHero, labelEmail, true);
	});

	// VALIDACIONES EMAIL SIGN UP

	const formSignUp = document.querySelector(".signUp__form");

	formSignUp.addEventListener("submit", () => {
		const emailSignUp = document.getElementById("txtEmailSignUp");

		validEmail(emailSignUp);
	});

	// ANIMACIONES
	const startAnimation = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			}
		});
	};

	const observer = new IntersectionObserver(startAnimation, {
		root: null,
		rootMargin: "0px",
		threshold: 0.1,
	});

	observer.observe(formHero);
};
