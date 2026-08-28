/* =================================================
   PAGE LOADING
================================================= */

document.body.classList.add("loading");

const loader = document.getElementById("loader");
const progress = document.getElementById("loaderProgress");
const percent = document.getElementById("loaderPercent");

let loadingValue = 0;

const loadingInterval = setInterval(() => {

    loadingValue += Math.floor(Math.random() * 5) + 1;

    if (loadingValue >= 100) {

        loadingValue = 100;

        clearInterval(loadingInterval);

        setTimeout(() => {

            loader.classList.add("hide");
            document.body.classList.remove("loading");

        }, 500);

    }

    progress.style.width = `${loadingValue}%`;
    percent.textContent = `${loadingValue}%`;

}, 55);


/* =================================================
   MOBILE MENU
================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-active");

});


/* =================================================
   CLOSE MOBILE MENU
================================================= */

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-active");

    });

});


/* =================================================
   SCROLL REVEAL
================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =================================================
   COUNTER ANIMATION
================================================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target =
                Number(counter.dataset.target);

            const duration = 1800;

            const startTime =
                performance.now();


            function updateCounter(currentTime) {

                const progress =
                    Math.min(
                        (currentTime - startTime) / duration,
                        1
                    );

                const current =
                    Math.floor(progress * target);

                counter.textContent = current;

                if (progress < 1) {

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target;

                }

            }


            requestAnimationFrame(updateCounter);

            counterObserver.unobserve(counter);

        });

    },

    {
        threshold: 0.5
    }

);


counters.forEach((counter) => {

    counterObserver.observe(counter);

});


/* =================================================
   CONTACT FORM → WHATSAPP
================================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        contactForm.querySelector(
            'input[type="text"]'
        ).value.trim();


    const phone =
        contactForm.querySelector(
            'input[type="tel"]'
        ).value.trim();


    const email =
        contactForm.querySelector(
            'input[type="email"]'
        ).value.trim();


    const requirement =
        contactForm.querySelector(
            "textarea"
        ).value.trim();


    /*
       JP DIGITAL WHATSAPP NUMBER
    */

    const whatsappNumber =
        "919884102642";


    const whatsappMessage =
`Hello JP Digital 👋

📩 NEW ENQUIRY

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}

📝 Requirement:
${requirement}

Thank you.`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(
        whatsappURL,
        "_blank"
    );

});


/* =================================================
   FLOATING WHATSAPP
================================================= */

const whatsappBtn =
    document.getElementById("whatsappBtn");


whatsappBtn.addEventListener("click", (event) => {

    event.preventDefault();


    const whatsappNumber =
        "919884102642";


    const message =
        "Hello JP Digital 👋, I would like to know more about your services.";


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    window.open(
        whatsappURL,
        "_blank"
    );

});


/* =================================================
   SOCIAL LINKS
================================================= */

const instagramURL =
    "https://www.instagram.com/_jp_digital_/?igsh=MWsxNHF5OXh3dmM2eQ==";


const youtubeURL =
    "https://youtube.com/@jpdigitaltriplicane?si=DPj7QR-N8WvVaQpl";


const whatsappURL =
    "https://wa.me/919884102642";


document.querySelectorAll(".social-icon").forEach(
    (button, index) => {

        button.addEventListener("click", (event) => {

            event.preventDefault();


            if (index === 0) {

                window.open(
                    whatsappURL,
                    "_blank"
                );

            }


            if (index === 1) {

                window.open(
                    instagramURL,
                    "_blank"
                );

            }


            if (index === 2) {

                window.open(
                    youtubeURL,
                    "_blank"
                );

            }

        });

    }
);
