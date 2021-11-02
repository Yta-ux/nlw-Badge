const sociales = document.querySelectorAll('.social');
const disables = document.querySelectorAll('.internet .data');

const btnGithub = document.querySelectorAll('#github ~ .btn');

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
    localStorage.setItem('linkGithub', urlGithub)

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
    localStorage.clear();
    localStorage.setItem('init', false);
    activeDisabled();
    github.value = '';
    location.reload();
}

if (localStorage.getItem('init') === 'true') {
    removeDisabled();
    btnGithub[0].classList.add('hide')
    btnGithub[1].classList.remove('hide')
    constructBadge();
    github.value = localStorage.getItem('linkGithub');
} else {
    activeDisabled();
}

typeWrite(title);