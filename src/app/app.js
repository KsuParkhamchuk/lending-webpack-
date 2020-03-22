import './app.scss';

import $ from 'jquery'

window.jQuery = $;

burgerMenu = () =>{
    let menu = document.getElementById('burger__menu');
    let burgerBtn = document.getElementById('burgerBtn');
    let links = document.getElementsByClassName('nav__link');
    let overlay = document.getElementById('overlay');


    burgerBtn.onclick = (e) => {
        e.preventDefault();
        toggleMenu();
    }

    links.onclick = () => toggleMenu();
    overlay.onclick = () => toggleMenu();

    toggleMenu = () => {
        menu.classList.toggle('burger__menu--active');
    }
}

let teamMembers = document.getElementsByClassName('team__member');


for(let i=0;i<teamMembers.length; i++){
    teamMembers[i].addEventListener("mouseover", function(){
        let memberDescription = this.querySelector('.team__member--description--wrapper');
        console.log(memberDescription);
        memberDescription.style.display = 'block';
    })

    teamMembers[i].addEventListener("mouseout", function(){
        let memberDescription = this.querySelector('.team__member--description--wrapper');
        console.log(memberDescription);
        memberDescription.style.display = 'none';
    })
}

burgerMenu();