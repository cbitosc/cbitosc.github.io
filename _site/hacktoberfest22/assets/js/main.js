/**
 * Template Name: Impact - v1.1.1
 * Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /**
     * Preloader
     */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
        window.addEventListener("load", () => {
            preloader.remove();
        });
    }

    /**
     * Sticky Header on Scroll
     */
    const selectHeader = document.querySelector("#header");
    if (selectHeader) {
        let headerOffset = selectHeader.offsetTop;
        let nextElement = selectHeader.nextElementSibling;

        const headerFixed = () => {
            if (headerOffset - window.scrollY <= 0) {
                selectHeader.classList.add("sticked");
                if (nextElement)
                    nextElement.classList.add("sticked-header-offset");
            } else {
                selectHeader.classList.remove("sticked");
                if (nextElement)
                    nextElement.classList.remove("sticked-header-offset");
            }
        };
        window.addEventListener("load", headerFixed);
        document.addEventListener("scroll", headerFixed);
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = document.querySelectorAll("#navbar a");

    function navbarlinksActive() {
        navbarlinks.forEach((navbarlink) => {
            if (!navbarlink.hash) return;

            let section = document.querySelector(navbarlink.hash);
            if (!section) return;

            let position = window.scrollY + 200;

            if (
                position >= section.offsetTop &&
                position <= section.offsetTop + section.offsetHeight
            ) {
                navbarlink.classList.add("active");
            } else {
                navbarlink.classList.remove("active");
            }
        });
    }
    window.addEventListener("load", navbarlinksActive);
    document.addEventListener("scroll", navbarlinksActive);

    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector(".mobile-nav-show");
    const mobileNavHide = document.querySelector(".mobile-nav-hide");

    document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
        el.addEventListener("click", function (event) {
            event.preventDefault();
            mobileNavToogle();
        });
    });

    function mobileNavToogle() {
        document.querySelector("body").classList.toggle("mobile-nav-active");
        mobileNavShow.classList.toggle("d-none");
        mobileNavHide.classList.toggle("d-none");
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll("#navbar a").forEach((navbarlink) => {
        if (!navbarlink.hash) return;

        let section = document.querySelector(navbarlink.hash);
        if (!section) return;

        navbarlink.addEventListener("click", () => {
            if (document.querySelector(".mobile-nav-active")) {
                mobileNavToogle();
            }
        });
    });

    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

    navDropdowns.forEach((el) => {
        el.addEventListener("click", function (event) {
            if (document.querySelector(".mobile-nav-active")) {
                event.preventDefault();
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("dropdown-active");

                let dropDownIndicator = this.querySelector(
                    ".dropdown-indicator"
                );
                dropDownIndicator.classList.toggle("bi-chevron-up");
                dropDownIndicator.classList.toggle("bi-chevron-down");
            }
        });
    });

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
        selector: ".glightbox",
    });

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
        const togglescrollTop = function () {
            window.scrollY > 100
                ? scrollTop.classList.add("active")
                : scrollTop.classList.remove("active");
        };
        window.addEventListener("load", togglescrollTop);
        document.addEventListener("scroll", togglescrollTop);
        scrollTop.addEventListener(
            "click",
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        );
    }

    /**
     * Initiate Pure Counter
     */
    new PureCounter();

    /**
     * Clients Slider
     */
    new Swiper(".clients-slider", {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 60,
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 80,
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 120,
            },
        },
    });

    /**
     * Init swiper slider with 1 slide at once in desktop view
     */
    new Swiper(".slides-1", {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    /**
     * Init swiper slider with 3 slides at once in desktop view
     */
    new Swiper(".slides-3", {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 40,
            },

            1200: {
                slidesPerView: 3,
            },
        },
    });

    /**
     * Porfolio isotope and filter
     */
    let portfolionIsotope = document.querySelector(".portfolio-isotope");

    if (portfolionIsotope) {
        let portfolioFilter = portfolionIsotope.getAttribute(
            "data-portfolio-filter"
        )
            ? portfolionIsotope.getAttribute("data-portfolio-filter")
            : "*";
        let portfolioLayout = portfolionIsotope.getAttribute(
            "data-portfolio-layout"
        )
            ? portfolionIsotope.getAttribute("data-portfolio-layout")
            : "masonry";
        let portfolioSort = portfolionIsotope.getAttribute(
            "data-portfolio-sort"
        )
            ? portfolionIsotope.getAttribute("data-portfolio-sort")
            : "original-order";

        window.addEventListener("load", () => {
            let portfolioIsotope = new Isotope(
                document.querySelector(".portfolio-container"),
                {
                    itemSelector: ".portfolio-item",
                    layoutMode: portfolioLayout,
                    filter: portfolioFilter,
                    sortBy: portfolioSort,
                }
            );

            let menuFilters = document.querySelectorAll(
                ".portfolio-isotope .portfolio-flters li"
            );
            menuFilters.forEach(function (el) {
                el.addEventListener(
                    "click",
                    function () {
                        document
                            .querySelector(
                                ".portfolio-isotope .portfolio-flters .filter-active"
                            )
                            .classList.remove("filter-active");
                        this.classList.add("filter-active");
                        portfolioIsotope.arrange({
                            filter: this.getAttribute("data-filter"),
                        });
                        if (typeof aos_init === "function") {
                            aos_init();
                        }
                    },
                    false
                );
            });
        });
    }

    /**
     * Animation on scroll function and init
     */
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }
    window.addEventListener("load", () => {
        aos_init();
    });
});

const countToDate = new Date(2022, 9, 29, 19);
let previousTimeBetweenDates;
setInterval(() => {
    const currentDate = new Date();
    const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);

    flipAllCards(timeBetweenDates);

    previousTimeBetweenDates = timeBetweenDates;
}, 1000);

function flipAllCards(time) {
    const tot_days = time / (3600 * 24);
    const days = Math.floor(time / (3600 * 24));
    const rem_hrs = (time / 3600) % 24;
    const hours = Math.floor(rem_hrs);
    const rem_min = (time / 60) % 60;
    const minutes = Math.floor(rem_min);
    const seconds = Math.floor(time % 60);

    flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10));
    flip(document.querySelector("[data-days-ones]"), days % 10);
    flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
    flip(document.querySelector("[data-hours-ones]"), hours % 10);
    flip(
        document.querySelector("[data-minutes-tens]"),
        Math.floor(minutes / 10)
    );
    flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
    flip(
        document.querySelector("[data-seconds-tens]"),
        Math.floor(seconds / 10)
    );
    flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
}

function flip(flipCard, newNumber) {
    const topHalf = flipCard.querySelector(".top");
    const startNumber = parseInt(topHalf.textContent);
    if (newNumber === startNumber) return;

    const bottomHalf = flipCard.querySelector(".bottom");
    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");

    top.textContent = startNumber;
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener("animationstart", (e) => {
        topHalf.textContent = newNumber;
    });
    topFlip.addEventListener("animationend", (e) => {
        topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", (e) => {
        bottomHalf.textContent = newNumber;
        bottomFlip.remove();
    });
    flipCard.append(topFlip, bottomFlip);
}
