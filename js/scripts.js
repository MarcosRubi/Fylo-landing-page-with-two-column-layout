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
	const header = document.querySelector('header')

	const sectionHeroTitle = document.querySelector('.hero h1')
	const sectionHeroParagraph = document.querySelector('.hero p')
	const sectionHeroFormInputGroup= document.querySelector('.form-hero .input-group')
	const sectionHeroFormSubmit= document.querySelector('.form-hero button')
	const sectionHeroImg= document.querySelector('.hero__img')

	const sectionProductiveTitle = document.querySelector('.productive h2')
	const sectionProductiveParagraphs = document.querySelectorAll('.productive p')
	const sectionProductiveLink = document.querySelector('.productive .link')
	const sectionProductiveQuote = document.querySelector('.productive .quote')
	const sectionProductiveImg = document.querySelector('.productive__img')

	const sectionSignUpTitle = document.querySelector('.signUp__content h2')
	const sectionSignUpParagraph = document.querySelector('.signUp__content p')
	const sectionSignUpInput = document.querySelector('.signUp__form input')
	const sectionSignUpButton = document.querySelector('.signUp__form button')

	const footerColumn1 = document.querySelector('footer .column-1')
	const footerColumn2 = document.querySelector('footer .column-2')
	const footerColumn3 = document.querySelector('footer .column-3')
	const footerColumn4 = document.querySelector('footer .column-4')

	const attribution = document.querySelector('.attribution span')


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

	observer.observe(header);

	observer.observe(sectionHeroTitle);
	observer.observe(sectionHeroParagraph);
	observer.observe(sectionHeroFormInputGroup);
	observer.observe(sectionHeroFormSubmit);
	observer.observe(sectionHeroImg);

	observer.observe(sectionProductiveTitle)
	sectionProductiveParagraphs.forEach(paragraph => {
		observer.observe(paragraph)
	});
	observer.observe(sectionProductiveLink)
	observer.observe(sectionProductiveQuote)
	observer.observe(sectionProductiveImg)

	observer.observe(sectionSignUpTitle)
	observer.observe(sectionSignUpParagraph)
	observer.observe(sectionSignUpInput)
	observer.observe(sectionSignUpButton)

	observer.observe(footerColumn1)
	observer.observe(footerColumn2)
	observer.observe(footerColumn3)
	observer.observe(footerColumn4)

	observer.observe(attribution)
};
