function modelSocial(social, url) {
    let model =
        `<li class="${social}">
         <a href="${url}" target="_blank" rel="noopener noreferrer">
            <img src="assets/img/${social}.svg" alt="ícone do ${social}">
        </a>
    </li>`
    socialLinks.innerHTML += model;
}

userImage.src = localStorage.getItem('avatar');
userName.textContent = localStorage.getItem('name');
userBio.textContent = localStorage.getItem('bio');
userLink.href = localStorage.getItem('linkGithub');
userNameLogin.textContent = localStorage.getItem('username');

if (localStorage.getItem('activeInstagram') === 'true') {
    modelSocial('instagram', localStorage.getItem('linkInstagram'))
}

if (localStorage.getItem('activeFacebook') === 'true') {
    modelSocial('facebook', localStorage.getItem('linkFacebook'))
}

if (localStorage.getItem('activeYoutube') === 'true') {
    modelSocial('youtube', localStorage.getItem('linkYoutube'))
}


if (localStorage.getItem('activeLinkedin') === 'true') {
    modelSocial('linkedin', localStorage.getItem('linkLinkedin'))
}