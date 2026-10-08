/* =====================================================
   IVELLE BEAUTY
   JavaScript
===================================================== */


/* =====================================================
   WAIT FOR PAGE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       ELEMENTS
    ================================================== */

    const navbar = document.getElementById("mainNavbar");

    const backToTop = document.getElementById("backToTop");

    const currentYear = document.getElementById("currentYear");

    const navLinks = document.querySelectorAll(".navbar .nav-link");

    const sections = document.querySelectorAll("section[id]");

    const revealElements = document.querySelectorAll(
        ".reveal, .reveal-section"
    );



    /* =================================================
       CURRENT YEAR
    ================================================== */

    if (currentYear) {

        currentYear.textContent = new Date().getFullYear();

    }



    /* =================================================
       NAVBAR ON SCROLL
    ================================================== */

    function handleNavbar() {

        if (window.scrollY > 70) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        handleNavbar
    );


    handleNavbar();



    /* =================================================
       BACK TO TOP
    ================================================== */

    function handleBackToTop() {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }


    window.addEventListener(
        "scroll",
        handleBackToTop
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );



    /* =================================================
       SMOOTH SCROLL
    ================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();


                    const navbarHeight =
                        navbar.offsetHeight;


                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        navbarHeight;


                    window.scrollTo({

                        top: targetPosition,

                        behavior: "smooth"

                    });


                    /* Close Bootstrap mobile menu */

                    const mobileMenu =
                        document.getElementById("mainNav");


                    if (
                        mobileMenu.classList.contains("show")
                    ) {

                        const bootstrapCollapse =
                            bootstrap.Collapse.getInstance(
                                mobileMenu
                            );


                        if (bootstrapCollapse) {

                            bootstrapCollapse.hide();

                        }

                    }

                }

            }
        );

    });



    /* =================================================
       ACTIVE NAVIGATION LINK
    ================================================== */

    function updateActiveLink() {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop -
                navbar.offsetHeight -
                100;


            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");


            const linkTarget =
                link.getAttribute("href");


            if (
                linkTarget ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveLink
    );


    updateActiveLink();



    /* =================================================
       SCROLL REVEAL
    ================================================== */

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });



    /* =================================================
       PRODUCT ORDER BUTTONS
    ================================================== */

    const productButtons =
        document.querySelectorAll(
            ".product-order"
        );


    productButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const product =
                    this.dataset.product;


                const message =
                    `Hello IVELLE BEAUTY, I'd like to order the ${product} lip gloss.`;


                const whatsappURL =
                    "https://wa.me/256785240603?text=" +
                    encodeURIComponent(message);


                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    });



    /* =================================================
       IMAGE HOVER EFFECT
    ================================================== */

    const products =
        document.querySelectorAll(".product");


    products.forEach(function (product) {

        product.addEventListener(
            "mouseenter",
            function () {

                this.classList.add("product-active");

            }
        );


        product.addEventListener(
            "mouseleave",
            function () {

                this.classList.remove(
                    "product-active"
                );

            }
        );

    });



    /* =================================================
       PAGE LOADING
    ================================================== */

    document.body.classList.add("page-loaded");


});