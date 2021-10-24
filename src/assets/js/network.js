const linkSocial = {
    linkInstagram: '',
    linkFacebook: '',
    linkYoutube: '',
    linkLinkedin: '',
}

const btnInstagram = document.querySelectorAll('#instagram ~ .btn');
const btnFacebook = document.querySelectorAll('#facebook ~ .btn');
const btnYoutube = document.querySelectorAll('#youtube ~ .btn');
const btnLinkedin = document.querySelectorAll('#linkedin ~ .btn');

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
    localStorage.setItem('linkInstagram', instagram.value)
    linkSocial.linkInstagram = localStorage.getItem('linkInstagram');
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
    localStorage.removeItem('activeInstagram')
    localStorage.removeItem('linkInstagram')
    instagram.removeAttribute('disabled')
    socialLinks.removeChild(instagramList);
    btnInstagram[0].classList.remove('hide');
    btnInstagram[1].classList.add('hide');
    instagram.value = '';
}

function insertFacebook() {
    localStorage.setItem('linkFacebook', facebook.value)
    linkSocial.linkFacebook = localStorage.getItem('linkFacebook');
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
    localStorage.removeItem('activeFacebook');
    localStorage.removeItem('linkFacebook');
    facebook.removeAttribute('disabled');
    socialLinks.removeChild(facebookList);
    btnFacebook[0].classList.remove('hide');
    btnFacebook[1].classList.add('hide');
    facebook.value = '';
}

function insertYoutube() {
    localStorage.setItem('linkYoutube', youtube.value)
    linkSocial.linkYoutube = localStorage.getItem('linkYoutube');
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
    localStorage.removeItem('activeYoutube');
    localStorage.removeItem('linkYoutube');
    youtube.removeAttribute('disabled');
    socialLinks.removeChild(youtubeList);
    btnYoutube[0].classList.remove('hide');
    btnYoutube[1].classList.add('hide');
    youtube.value = '';
}

function insertLinkedin() {
    localStorage.setItem('linkLinkedin', linkedin.value)
    linkSocial.linkLinkedin = localStorage.getItem('linkLinkedin');
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
    localStorage.removeItem('activeLinkedin');
    localStorage.removeItem('linkLinkedin');
    linkedin.removeAttribute('disabled');
    socialLinks.removeChild(linkedinList);
    btnLinkedin[0].classList.remove('hide');
    btnLinkedin[1].classList.add('hide');
    linkedin.value = '';
}

// CONDICIONAIS DE PERSISTÊNCIA
if (localStorage.getItem('activeInstagram') === 'true' && localStorage.getItem('init') === 'true') {
    modelSocial('instagram', localStorage.getItem('linkInstagram'))
    btnInstagram[0].classList.add('hide');
    btnInstagram[1].classList.remove('hide');
    instagram.value = localStorage.getItem('linkInstagram');
} else {
    btnInstagram[0].classList.remove('hide');
    btnInstagram[1].classList.add('hide');
    instagram.value = '';
}

if (localStorage.getItem('activeFacebook') === 'true' && localStorage.getItem('init') === 'true') {
    modelSocial('facebook', localStorage.getItem('linkFacebook'))
    btnFacebook[0].classList.add('hide');
    btnFacebook[1].classList.remove('hide');
    facebook.value = localStorage.getItem('linkFacebook');
} else {
    btnFacebook[0].classList.remove('hide');
    btnFacebook[1].classList.add('hide');
    facebook.value = '';
}

if (localStorage.getItem('activeYoutube') === 'true' && localStorage.getItem('init') === 'true') {
    modelSocial('youtube', localStorage.getItem('linkYoutube'))
    btnYoutube[0].classList.add('hide');
    btnYoutube[1].classList.remove('hide');
    youtube.value = localStorage.getItem('linkYoutube');
} else {
    btnYoutube[0].classList.remove('hide');
    btnYoutube[1].classList.add('hide');
    youtube.value = '';
}

if (localStorage.getItem('activeLinkedin') === 'true' && localStorage.getItem('init') === 'true') {
    modelSocial('linkedin', localStorage.getItem('linkLinkedin'))
    btnLinkedin[0].classList.add('hide');
    btnLinkedin[1].classList.remove('hide');
    linkedin.value = localStorage.getItem('linkLinkedin');
} else {
    btnLinkedin[0].classList.remove('hide');
    btnLinkedin[1].classList.add('hide');
    linkedin.value = '';
}