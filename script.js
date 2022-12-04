const homeClick = document.querySelector('.home__click');
const homeClick2 = document.querySelector('.home__click2');
const aboutClick = document.querySelector('.about__click');
const aboutClick2 = document.querySelector('.about__click2');
const projectClick = document.querySelector('.project__click');
const projectClick2 = document.querySelector('.project__click2');
const contactClick = document.querySelector('.contact__click');
const contactClick2 = document.querySelector('.contact__click2');
const projectBtn = document.querySelector('.project__btn');
const homeSection = document.querySelector('#home__section');
const aboutSection = document.querySelector('#about__section');
const projectSection = document.querySelector('#project__section');
const contactSection = document.querySelector('#contact__section');
const closeBtn = document.querySelector('.xmark');
const openBtn = document.querySelector('.bars');
const menuBar = document.querySelector('.sub__header');
const menuBarClick = document.querySelector('.sub__header-content');

openBtn.addEventListener('click', () => {
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    menuBar.style.display = 'block'
})
closeBtn.addEventListener('click', () => {
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
    menuBar.style.display = 'none'
})

menuBarClick.addEventListener('click', () => {
    menuBar.style.display = 'none';
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
})

const smoothScroll = (click, section) => {
    click.addEventListener('click', function () {
        section.scrollIntoView({ behavior: 'smooth' });
    });
}

smoothScroll(homeClick, homeSection);
smoothScroll(homeClick2, homeSection);
smoothScroll(aboutClick, aboutSection);
smoothScroll(aboutClick2, aboutSection);
smoothScroll(projectClick, projectSection);
smoothScroll(projectClick2, projectSection);
smoothScroll(projectBtn, projectSection);
smoothScroll(contactClick, contactSection);
smoothScroll(contactClick2, contactSection);
