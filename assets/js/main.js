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


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/ 