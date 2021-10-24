const linkSocial={linkInstagram:"",linkFacebook:"",linkYoutube:"",linkLinkedin:""},btnInstagram=document.querySelectorAll("#instagram ~ .btn"),btnFacebook=document.querySelectorAll("#facebook ~ .btn"),btnYoutube=document.querySelectorAll("#youtube ~ .btn"),btnLinkedin=document.querySelectorAll("#linkedin ~ .btn");function modelSocial(e,t){let i=`<li class="${e}">\n         <a href="${t}" target="_blank" rel="noopener noreferrer">\n            <img src="assets/img/${e}.svg" alt="ícone do ${e}">\n        </a>\n    </li>`;socialLinks.innerHTML+=i}function insertInstagram(){localStorage.setItem("linkInstagram",instagram.value),linkSocial.linkInstagram=localStorage.getItem("linkInstagram"),"https://www.instagram.com/"===linkSocial.linkInstagram.substring(0,26)||"https://instagram.com/"===linkSocial.linkInstagram.substring(0,22)?(modelSocial("instagram",linkSocial.linkInstagram),localStorage.setItem("activeInstagram",!0),instagram.setAttribute("disabled",!0),btnInstagram[0].classList.add("hide"),btnInstagram[1].classList.remove("hide")):(alert("Digite um link válido"),instagram.value="")}function removeInstagram(){const e=document.querySelector(".instagram");localStorage.removeItem("activeInstagram"),localStorage.removeItem("linkInstagram"),instagram.removeAttribute("disabled"),socialLinks.removeChild(e),btnInstagram[0].classList.remove("hide"),btnInstagram[1].classList.add("hide"),instagram.value=""}function insertFacebook(){localStorage.setItem("linkFacebook",facebook.value),linkSocial.linkFacebook=localStorage.getItem("linkFacebook"),"https://www.facebook.com/"===linkSocial.linkFacebook.substring(0,25)||"https://facebook.com/"===linkSocial.linkFacebook.substring(0,21)?(modelSocial("facebook",linkSocial.linkFacebook),localStorage.setItem("activeFacebook",!0),facebook.setAttribute("disabled",!0),btnFacebook[0].classList.add("hide"),btnFacebook[1].classList.remove("hide")):(alert("Digite um link válido"),facebook.value="")}function removeFacebook(){const e=document.querySelector(".facebook");localStorage.removeItem("activeFacebook"),localStorage.removeItem("linkFacebook"),facebook.removeAttribute("disabled"),socialLinks.removeChild(e),btnFacebook[0].classList.remove("hide"),btnFacebook[1].classList.add("hide"),facebook.value=""}function insertYoutube(){localStorage.setItem("linkYoutube",youtube.value),linkSocial.linkYoutube=localStorage.getItem("linkYoutube"),"https://www.youtube.com/"===linkSocial.linkYoutube.substring(0,24)||"https://youtube.com/"===linkSocial.linkYoutube.substring(0,20)?(modelSocial("youtube",linkSocial.linkYoutube),localStorage.setItem("activeYoutube",!0),youtube.setAttribute("disabled",!0),btnYoutube[0].classList.add("hide"),btnYoutube[1].classList.remove("hide")):(alert("Digite um link válido"),youtube.value="")}function removeYoutube(){const e=document.querySelector(".youtube");localStorage.removeItem("activeYoutube"),localStorage.removeItem("linkYoutube"),youtube.removeAttribute("disabled"),socialLinks.removeChild(e),btnYoutube[0].classList.remove("hide"),btnYoutube[1].classList.add("hide"),youtube.value=""}function insertLinkedin(){localStorage.setItem("linkLinkedin",linkedin.value),linkSocial.linkLinkedin=localStorage.getItem("linkLinkedin"),"https://www.linkedin.com/in/"===linkSocial.linkLinkedin.substring(0,28)||"https://linkedin.com/in/"===linkSocial.linkLinkedin.substring(0,25)?(modelSocial("linkedin",linkSocial.linkLinkedin),localStorage.setItem("activeLinkedin",!0),linkedin.setAttribute("disabled",!0),btnLinkedin[0].classList.add("hide"),btnLinkedin[1].classList.remove("hide")):(alert("Digite um link válido"),linkedin.value="")}function removeLinkedin(){const e=document.querySelector(".linkedin");localStorage.removeItem("activeLinkedin"),localStorage.removeItem("linkLinkedin"),linkedin.removeAttribute("disabled"),socialLinks.removeChild(e),btnLinkedin[0].classList.remove("hide"),btnLinkedin[1].classList.add("hide"),linkedin.value=""}"true"===localStorage.getItem("activeInstagram")&&"true"===localStorage.getItem("init")?(modelSocial("instagram",localStorage.getItem("linkInstagram")),btnInstagram[0].classList.add("hide"),btnInstagram[1].classList.remove("hide"),instagram.value=localStorage.getItem("linkInstagram")):(btnInstagram[0].classList.remove("hide"),btnInstagram[1].classList.add("hide"),instagram.value=""),"true"===localStorage.getItem("activeFacebook")&&"true"===localStorage.getItem("init")?(modelSocial("facebook",localStorage.getItem("linkFacebook")),btnFacebook[0].classList.add("hide"),btnFacebook[1].classList.remove("hide"),facebook.value=localStorage.getItem("linkFacebook")):(btnFacebook[0].classList.remove("hide"),btnFacebook[1].classList.add("hide"),facebook.value=""),"true"===localStorage.getItem("activeYoutube")&&"true"===localStorage.getItem("init")?(modelSocial("youtube",localStorage.getItem("linkYoutube")),btnYoutube[0].classList.add("hide"),btnYoutube[1].classList.remove("hide"),youtube.value=localStorage.getItem("linkYoutube")):(btnYoutube[0].classList.remove("hide"),btnYoutube[1].classList.add("hide"),youtube.value=""),"true"===localStorage.getItem("activeLinkedin")&&"true"===localStorage.getItem("init")?(modelSocial("linkedin",localStorage.getItem("linkLinkedin")),btnLinkedin[0].classList.add("hide"),btnLinkedin[1].classList.remove("hide"),linkedin.value=localStorage.getItem("linkLinkedin")):(btnLinkedin[0].classList.remove("hide"),btnLinkedin[1].classList.add("hide"),linkedin.value="");