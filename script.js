const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

const home = document.querySelector('#checkbox-home');
const about = document.querySelector('#checkbox-about');
const project = document.querySelector('#checkbox-project');
const contact = document.querySelector('#checkbox-contact');

const containHome = document.querySelector('#container-home');
const contantBorder = document.querySelector('.contants');
const contants2 = document.querySelector('.contants2');
const contants3 = document.querySelector('.contants3');
const hf = document.querySelector('.hf');
const fl2 = document.querySelector('.fl2');

const aboutPage = document.querySelector('.about-contant');
const projectPage = document.querySelector('.project-contant');
const contactPage = document.querySelector('.contact-contant');

const slider = document.querySelector('.slider');

// tl.to(aboutC, {y: '0%', duration: 0.2});

home.addEventListener('change', () => {
    if (!home.checked) {
        fl2.classList.remove('flicker2');
        hf.classList.remove('highFreq');

        contantBorder.classList.remove('contant-border');
        contantBorder.classList.remove('highFreq');
        contants2.classList.remove('contant-name');
        contants3.classList.remove('sub-contant');

        contants2.classList.add('contant-name-off');
        contants3.classList.add('sub-contant-off');
        contantBorder.classList.add('contant-border-off');

        document.body.classList.remove('aboutC');
        document.body.classList.remove('projectC');
        document.body.classList.remove('contactC');

        tl.to(aboutPage, { y: '0%', duration: 0.3 });
        tl.to(projectPage, { y: '0%', duration: 0.3 }, "-=.3");
        tl.to(contactPage, { y: '0%', duration: 0.3 }, "-=.3");

        fadeIn();

        about.checked = false;
        project.checked = false;
        contact.checked = false;

    } else {

        //remove nav page and neon light off class
        document.body.classList.remove('aboutC');
        document.body.classList.remove('projectC');
        document.body.classList.remove('contactC');

        contantBorder.classList.remove('contant-border-off');
        contants2.classList.remove('contant-name-off');
        contants3.classList.remove('sub-contant-off');

        //add back glow and flicker effect
        contantBorder.classList.add('contant-border');
        contantBorder.classList.add('highFreq');
        contants2.classList.add('contant-name');
        contants3.classList.add('sub-contant');

        fl2.classList.add('flicker2');
        hf.classList.add('highFreq');

        about.checked = false;
        project.checked = false;
        contact.checked = false;

        fadeIn()

        tl.to(aboutPage, { y: '0%', duration: 0.3 });
        tl.to(projectPage, { y: '0%', duration: 0.3 }, "-=.3");
        tl.to(contactPage, { y: '0%', duration: 0.3 }, "-=.3");

    }
});

about.addEventListener('change', () => {
    if (about.checked) {
        fadeout();
        tl.to(aboutPage, { y: '-120%', duration: 0.3 });
        tl.to(projectPage, { y: '0%', duration: 0.3 }, '-=.3');
        tl.to(contactPage, { y: '0%', duration: 0.3 }, "-=.3");

        document.body.classList.toggle('aboutC');
        document.body.classList.remove('projectC');
        document.body.classList.remove('contactC');

        project.checked = false;
        contact.checked = false;
    }
    else {

        fadeIn()

        tl.to(aboutPage, { y: '0%', duration: 0.3 });
        document.body.classList.toggle('aboutC');
    }
});

project.addEventListener('change', () => {
    if (project.checked) {

        fadeout();

        tl.to(projectPage, { y: '-120%', duration: 0.3 });
        tl.to(aboutPage, { y: "0%", duration: 0.3 }, '-=.3');
        tl.to(contactPage, { y: "0%", duration: 0.3 }, '-=.3');

        document.body.classList.toggle('projectC');
        document.body.classList.remove('aboutC');
        document.body.classList.remove('contactC');

        about.checked = false;
        contact.checked = false;
    }
    else {

        fadeIn();

        tl.to(projectPage, { y: '0%', duration: 0.3 });
        document.body.classList.toggle('projectC');
    }
});

contact.addEventListener('change', () => {
    if (contact.checked) {

        fadeout();

        tl.to(contactPage, { y: '-120%', duration: 0.3 });
        tl.to(projectPage, { y: '0%', duration: 0.3 }, '-=.3');
        tl.to(aboutPage, { y: '0%', duration: 0.3 }, "-=.3");

        document.body.classList.toggle('contactC');
        document.body.classList.remove('projectC');
        document.body.classList.remove('aboutC');

        about.checked = false;
        project.checked = false;
    }
    else {

        fadeIn();

        tl.to(contactPage, { y: '0%', duration: 0.3 });
        document.body.classList.toggle('contactC');
    }
});


function fadeout() {
    var fade = containHome;
    var fade2 = contants3;

    var intervalID = setInterval(function () {

        if (!fade.style.opacity && !fade2.style.opacity) {
            fade.style.opacity = 1;
            fade2.style.opacity = 1;
        }

        if (fade.style.opacity > 0 && fade2.style.opacity > 0) {
            fade.style.opacity -= 0.1;
            fade2.style.opacity -= 0.1;
        }

        else {
            clearInterval(intervalID);
        }

    }, 10);
}

function fadeIn() {
    var fade = containHome;
    var fade2 = contants3;

    var opacity = 0;
    var intervalID = setInterval(function () {

        if (opacity < 1) {
            opacity = opacity + 0.1
            fade.style.opacity = opacity;
            fade2.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 10);
}
// console.log("connected");