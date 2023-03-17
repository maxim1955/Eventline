"use strict";

$ (document).ready(function() {
    $ ('.header_burger').click(function(event) {
        $ ('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})
const buttons = document.querySelectorAll('.btn'); // нашли элемент по которому кликнем
const servicelogo = document.querySelector("#photo_service") // куда вставим

function handleClick(a) {

    servicelogo.src = a

}