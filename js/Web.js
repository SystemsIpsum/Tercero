let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

//Barra de navegacion//
btnMenu.addEventListener('click', () => {

    document.querySelector('.btn-menu i').classList.toggle('fa-times')

    if(activador){

        menu.style.left = "0";
        menu.style.transition = "0.5s"

        activador = false;

    }else{

        activador = false;

        menu.style.left = "-100%";
        menu.style.transition = "0.5s"

        activador = true;

    }
});
//Barra de navegacion//

//Ocultar barra//

let prevScrollPos = window.pageYOffset;

window.onscroll = () => {

    let currenScrollPos = window.pageYOffset

    if (prevScrollPos > currenScrollPos) {

        containerMenu.style.top = '0';
        containerMenu.style.transition = '0.5s';
    }else{

        containerMenu.style.top = '-60px';
        containerMenu.style.transition = '0.5s';
    }

    prevScrollPos = currenScrollPos;

    //Barra verde de menu//
    
    let arriba = window.pageXOffset;
    
    if(arriba <= 600)
    {
        containerMenu.style.borderBottom = "2px solid #03c4a1";        
    }

    //Barra verde de menu//

}
//Ocultar barra//

//Boton arriba//

let goTop =document.querySelector('.go-top')

goTop.addEventListener('click' , () => {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
//Boton arriba//




