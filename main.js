

var scrolltrigger = 60;

function handleHeader(){

    var links = document.getElementById('links');
    var logo = document.getElementById('logo');
    var hamBtn = document.getElementById('hamMenu');
    var closebtn = document.getElementById('menuButton');
    var social = document.getElementById('social');

    if(window.scrollY >= scrolltrigger){
       
        links.classList.add('lateralMenu');
        links.style.transform = 'translateX(100vw)';
        links.style.transition = "all .5s ease";

        logo.src = './assets/BLogo.png'
        logo.classList.add('BStyle');

        lupa.classList.add('whiteColor');

        hamBtn.style.display = 'block';
        social.style.display = 'flex';

    }else{

        links.classList.remove('lateralMenu');
        links.style.transform = 'none';
        links.style.transition = "none";

        logo.src = './assets/BoronLogo.png'
        logo.classList.remove('BStyle');

        lupa.classList.remove('whiteColor');

        hamBtn.style.display = 'none'
        social.style.display = 'none';
        
    }
}

var close = true;

function onMenuClick(){

    var links = document.getElementById('links');
    var closebtn = document.getElementById('menuButton');
    var lupa = document.getElementById('lupa');
    var social = document.getElementById('social');

    console.log(closebtn);

    if(close){

        links.style.transform = 'none';
        
        closebtn.style.display = 'flex';

        social.style.display = 'flex';
        lupa.classList.add('whiteColor');

        close = false;

    }else{

        links.style.transform = 'translateX(100vw)';

        closebtn.style.display = 'none';

        social.style.display = 'none'
        lupa.classList.remove('whiteColor');

        close = true;

    }
    
}

function changeResolution(matches) {
    
    var links = document.getElementById('links');
    var logo = document.getElementById('logo');
    
    if (matches) {
        window.removeEventListener("scroll", handleHeader, false);
        var hamBtn = document.getElementById('hamMenu');
        hamBtn.style.display = 'flex';
        logo.classList.remove('BStyle');
        console.log('celu');
    } else {
        window.addEventListener("scroll", handleHeader, false);
        console.log('compu');
    }

}

const query = window.matchMedia("(max-width: 1024px)");
query.addEventListener("change", ({ matches }) => changeResolution(matches));
changeResolution(query.matches);


 
function onClickBeforeButton(){
    var visor = document.getElementsByClassName('slider')[0];
    visor.style.transform = "translateX(0%)";
}

function onClickNextButton(){
    var visor = document.getElementsByClassName('slider')[0];
    visor.style.transform = "translateX(-100%)";
}