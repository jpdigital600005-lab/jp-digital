/* =========================================
   JP DIGITAL
   Main JavaScript
========================================= */


/* ================= YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ================= MOBILE MENU ================= */

const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("mobile-active");

        if (navMenu.classList.contains("mobile-active")) {

            navMenu.style.display = "flex";
            navMenu.style.position = "absolute";
            navMenu.style.top = "82px";
            navMenu.style.left = "4%";
            navMenu.style.right = "4%";
            navMenu.style.padding = "25px";
            navMenu.style.flexDirection = "column";
            navMenu.style.background = "#111";
            navMenu.style.border = "1px solid rgba(255,255,255,.1)";
            navMenu.style.borderRadius = "15px";

        } else {

            navMenu.removeAttribute("style");

        }

    });

}


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 950) {

            navMenu.classList.remove("mobile-active");
            navMenu.removeAttribute("style");

        }

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-menu a");


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    },
    {
        passive: true
    }
);


/* ================= NAVBAR SHADOW ================= */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            header.style.background =
                "rgba(7,7,7,.92)";

        } else {

            header.style.background =
                "rgba(7,7,7,.78)";

        }

    },
    {
        passive: true
    }
);


/* ================= ESC KEY ================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            if (navMenu) {

                navMenu.classList.remove("mobile-active");
                navMenu.removeAttribute("style");

            }

        }

    }
);