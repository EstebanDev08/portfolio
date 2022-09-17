/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')



/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function closeMenu() {
    navMenu.classList.remove('show-menu')
}

navLink.forEach(item => {
    item.addEventListener('click', closeMenu)
})

/*==================== ACCORDION SKILLS ====================*/
const skillsConent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')


function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsConent.length; i++) {

        skillsConent[i].className = 'skills__content skills__close'

    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach(item => {
    item.addEventListener("click", toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/



/*==================== PORTFOLIO SWIPER  ====================*/

let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    lopp: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


});

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrolly = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectiontop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrolly > sectiontop && scrolly <= sectiontop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })

}

window.addEventListener('scroll', scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header')
    } else {
        nav.classList.remove('scroll-header')
    }
}

window.addEventListener("scroll", scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrolltop = document.getElementById('scroll-up');
    if (this.scrollY >= 560) {
        scrolltop.classList.add('show-scroll')
    } else {
        scrolltop.classList.remove('show-scroll')

    }
}

window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button'),
    darkTheme = 'dark-theme',
    iconTheme = "uil-sun";


//previusly selected topic
const selectedTheme = localStorage.getItem('selected-theme'),
    selectIcon = localStorage.getItem('selected-icon')


//we obtain the current theme that the interface has by validating the dark-theme class
const getcurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getcurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

//we validated if the user previusly chose a topiv
if (selectedTheme) {
    //if the validation is fulfilled, we ask what issue was to know if activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//active / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {

    //add or remove the theme / icon
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getcurrentTheme())
    localStorage.setItem('selected-icon', getcurrentIcon())
})

