const homeClick = document.querySelector('.home__click');
const aboutClick = document.querySelector('.about__click');
const projectClick = document.querySelector('.project__click');
const contactClick = document.querySelector('.contact__click');
const projectBtn = document.querySelector('.project__btn');
const homeSection = document.querySelector('#home__section');
const aboutSection = document.querySelector('#about__section');
const projectSection = document.querySelector('#project__section');
const contactSection = document.querySelector('#contact__section');
const closeBtn = document.querySelector('.xmark');
const openBtn = document.querySelector('.bars');
const menuBar = document.querySelector('.sub__header');

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



const smoothScroll = (click, section) => {
    click.addEventListener('click', function () {
        section.scrollIntoView({ behavior: 'smooth' });
    });
}

smoothScroll(homeClick, homeSection);
smoothScroll(aboutClick, aboutSection);
smoothScroll(projectClick, projectSection);
smoothScroll(projectBtn, projectSection);
smoothScroll(contactClick, contactSection);
