const linkSocial = {
    linkInstagram: '',
    linkFacebook: '',
    linkYoutube: '',
    linkLinkedin: '',
}

const sociales = document.querySelectorAll('.social');
const disables = document.querySelectorAll('.internet .data');

const btnGithub = document.querySelectorAll('#github ~ .btn');
const btnInstagram = document.querySelectorAll('#instagram ~ .btn');
const btnFacebook = document.querySelectorAll('#facebook ~ .btn');
const btnYoutube = document.querySelectorAll('#youtube ~ .btn');
const btnLinkedin = document.querySelectorAll('#linkedin ~ .btn');

const title = document.querySelector('h1');

function typeWrite(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, index) => {
        setTimeout(() => element.innerHTML += letter, 75 * index);
    });
}

function activeDisabled() {
    sociales.forEach((social, index) => social.setAttribute('disabled', true));
    disables.forEach((camp, index) => camp.classList.add('disabled'));
}

function removeDisabled() {
    sociales.forEach((social, index) => social.removeAttribute('disabled'));
    disables.forEach((camp, index) => camp.classList.remove('disabled'));
}

function implementGithub(url) {
    const apiUrl = url.replace('https://github.com/', '');
    fetch(`https://api.github.com/users/${apiUrl}`)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('avatar', data.avatar_url);
            localStorage.setItem('name', data.name);
            localStorage.setItem('bio', data.bio);
            localStorage.setItem('link', data.html_url);
            localStorage.setItem('username', data.login);
        });
}

function constructBadge() {
    userImage.src = localStorage.getItem('avatar');
    userName.textContent = localStorage.getItem('name');
    userBio.textContent = localStorage.getItem('bio');
    userLink.href = localStorage.getItem('link');
    userNameLogin.textContent = localStorage.getItem('username');
}

function initBadge() {
    const urlGithub = String(github.value)

    if (urlGithub.substring(0, 19) === 'https://github.com/') {
        removeDisabled()
        implementGithub(urlGithub);
        localStorage.setItem('init', true);
        setTimeout(() => { location.reload() }, 1000)
    } else {
        alert('Digite um link válido')
        github.value = ''
    }
}

function deleteBadge() {
    localStorage.removeItem('avatar');
    localStorage.removeItem('name');
    localStorage.removeItem('bio');
    localStorage.removeItem('link');
    localStorage.removeItem('username');
    localStorage.setItem('init', false);
    github.value = '';
    activeDisabled();
    location.reload();
}

function modelSocial(social, url) {
    let model =
        `<li class="${social}">
         <a href="${url}" target="_blank" rel="noopener noreferrer">
            <img src="assets/img/${social}.svg" alt="ícone do ${social}">
        </a>
    </li>`
    socialLinks.innerHTML += model;
}

// REDES SOCIAIS
function insertInstagram() {
    linkSocial.linkInstagram = instagram.value;
    if (linkSocial.linkInstagram.substring(0, 26) === 'https://www.instagram.com/' || linkSocial.linkInstagram.substring(0, 22) === 'https://instagram.com/') {
        modelSocial('instagram', linkSocial.linkInstagram)
        localStorage.setItem('activeInstagram', true)
        instagram.setAttribute('disabled', true)
        btnInstagram[0].classList.add('hide')
        btnInstagram[1].classList.remove('hide')

    }
    else {
        alert('Digite um link válido');
        instagram.value = '';
    }
}

function removeInstagram() {
    const instagramList = document.querySelector('.instagram');
    localStorage.setItem('activeInstagram', false)
    instagram.removeAttribute('disabled')
    socialLinks.removeChild(instagramList);
    btnInstagram[0].classList.remove('hide');
    btnInstagram[1].classList.add('hide');
    instagram.value = '';
}

function insertFacebook() {
    linkSocial.linkFacebook = facebook.value;
    if (linkSocial.linkFacebook.substring(0, 25) === 'https://www.facebook.com/' || linkSocial.linkFacebook.substring(0, 21) === 'https://facebook.com/') {
        modelSocial('facebook', linkSocial.linkFacebook)
        localStorage.setItem('activeFacebook', true)
        facebook.setAttribute('disabled', true)
        btnFacebook[0].classList.add('hide')
        btnFacebook[1].classList.remove('hide')
    }
    else {
        alert('Digite um link válido');
        facebook.value = '';
    }
}

function removeFacebook() {
    const facebookList = document.querySelector('.facebook');
    localStorage.setItem('activeFacebook', false)
    facebook.removeAttribute('disabled')
    socialLinks.removeChild(facebookList);
    btnFacebook[0].classList.remove('hide');
    btnFacebook[1].classList.add('hide');
    facebook.value = '';
}

function insertYoutube() {
    linkSocial.linkYoutube = youtube.value;
    if (linkSocial.linkYoutube.substring(0, 24) === 'https://www.youtube.com/' || linkSocial.linkYoutube.substring(0, 20) === 'https://youtube.com/') {
        modelSocial('youtube', linkSocial.linkYoutube)
        localStorage.setItem('activeYoutube', true)
        youtube.setAttribute('disabled', true)
        btnYoutube[0].classList.add('hide')
        btnYoutube[1].classList.remove('hide')
    }
    else {
        alert('Digite um link válido');
        youtube.value = '';
    }
}

function removeYoutube() {
    const youtubeList = document.querySelector('.youtube');
    localStorage.setItem('activeYoutube', false)
    youtube.removeAttribute('disabled')
    socialLinks.removeChild(youtubeList);
    btnYoutube[0].classList.remove('hide');
    btnYoutube[1].classList.add('hide');
    youtube.value = '';
}

function insertLinkedin() {
    linkSocial.linkLinkedin = linkedin.value;
    if (linkSocial.linkLinkedin.substring(0, 28) === 'https://www.linkedin.com/in/' || linkSocial.linkLinkedin.substring(0, 25) === 'https://linkedin.com/in/') {
        modelSocial('linkedin', linkSocial.linkLinkedin)
        localStorage.setItem('activeLinkedin', true)
        linkedin.setAttribute('disabled', true)
        btnLinkedin[0].classList.add('hide')
        btnLinkedin[1].classList.remove('hide')
    }
    else {
        alert('Digite um link válido');
        linkedin.value = '';
    }
}

function removeLinkedin() {
    const linkedinList = document.querySelector('.linkedin');
    localStorage.setItem('activeLinkedin', false)
    linkedin.removeAttribute('disabled')
    socialLinks.removeChild(linkedinList);
    btnLinkedin[0].classList.remove('hide');
    btnLinkedin[1].classList.add('hide');
    linkedin.value = '';
}

if (localStorage.getItem('init') === 'true') {
    removeDisabled();
    btnGithub[0].classList.add('hide')
    btnGithub[1].classList.remove('hide')
    constructBadge();
} else {
    activeDisabled();
}

if (localStorage.getItem('activeInstagram') === 'true') {
    modelSocial('instagram', linkSocial.linkInstagram)
    btnInstagram[0].classList.add('hide');
    btnInstagram[1].classList.remove('hide');
} else {
    btnInstagram[0].classList.remove('hide');
    btnInstagram[1].classList.add('hide');
}

if (localStorage.getItem('activeFacebook') === 'true') {
    modelSocial('facebook', linkSocial.linkFacebook)
    btnFacebook[0].classList.add('hide');
    btnFacebook[1].classList.remove('hide');
} else {
    btnFacebook[0].classList.remove('hide');
    btnFacebook[1].classList.add('hide');
}

if (localStorage.getItem('activeYoutube') === 'true') {
    modelSocial('youtube', linkSocial.linkYoutube)
    btnYoutube[0].classList.add('hide');
    btnYoutube[1].classList.remove('hide');
} else {
    btnYoutube[0].classList.remove('hide');
    btnYoutube[1].classList.add('hide');
}

if (localStorage.getItem('activeLinkedin') === 'true') {
    modelSocial('linkedin', linkSocial.linkLinkedin)
    btnLinkedin[0].classList.add('hide');
    btnLinkedin[1].classList.remove('hide');
} else {
    btnLinkedin[0].classList.remove('hide');
    btnLinkedin[1].classList.add('hide');
}
typeWrite(title);