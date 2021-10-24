const LinksSocialMedia = {
    github: 'yta-ux',
    youtube: 'jakelinygracielly',
    facebook: 'italogustavo.demelo',
    instagram: 'ita_gustavo',
    linkedin: 'in/ítalo-gustavo'
};

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');
        console.log(social);

        console.log(li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`);
    }
}

changeSocialMediaLinks()

function getUser() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userImage.src = data.avatar_url;
        userName.textContent = data.name;
        userBio.textContent = data.bio
        userLink.href = data.html_url;
        userNameLogin.textContent = data.login;
    })
}

getUser()