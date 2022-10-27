window.onload = () => {
	const regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

	// VALIDACIONES EMAIL HERO
	const emailHero = document.getElementById("txtEmail");
	const labelEmail = document.getElementById("labelTxtEmail");

	const formHero = document.querySelector(".form-hero");
	
	formHero.addEventListener("submit", () => {
		if (!regexEmail.test(emailHero.value)) {
			labelEmail.innerHTML = "Please check your email";
			labelEmail.style.color = "red";
			emailHero.style.border = "1px solid red";
			return;
		}
		labelEmail.innerHTML = "Enter your email";
		labelEmail.style.color = "hsl(224, 93%, 58%)";
		emailHero.style.border = "1px solid hsl(243, 87%, 12%)"; 
	});

	// VALIDACIONES EMAIL SIGN UP
	const emailSignUp = document.getElementById("txtEmailSignUp");

	const formSignUp= document.querySelector(".signUp__form");
	
	formSignUp.addEventListener("submit", () => {
		if (!regexEmail.test(emailSignUp.value)) {
			emailSignUp.style.border = "1px solid red";
			return;
		}
		emailSignUp.style.border = "hsl(243, 87%, 12%)";
	});
};
