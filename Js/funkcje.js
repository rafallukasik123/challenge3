

document.addEventListener("DOMContentLoaded", function(event) {

    window.onscroll = function () {
        myFunction()
    };

    var navbar = document.querySelector(".main_nav");

    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }


    var menu=document.querySelector('.icon');
    var nav=document.querySelector('.nav_nav');

        menu.addEventListener('click',function () {

            if (nav.classList.contains("nav_nav")){

                nav.classList.remove("nav_nav");
                nav.classList.add("nav_nav_small");
            }
            else{
                nav.classList.add("nav_nav");
                nav.classList.remove("nav_nav_small");
            }

    })





});



