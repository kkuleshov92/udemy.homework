$(document).ready(function(){
    let btns = [],
        btn1 = $('a[href="#sheldure"]'),
        btn2 = $('.main_btna'),
        btn3 = $('.main_btn'),
        overL = $('.overlay'),
        modal = $('.modal'),
        close = $('span[aria-hidden="true"]');

    btns.push(btn1, btn2, btn3);
    
    btns.forEach((item) => {
        item.on('click', (event) => {
            event.preventDefault();
        
            overL.animate({
                opacity: 'show'
            }, 1000);
            modal.slideDown('slow');
        })
    });

    close.on('click', () => {
        overL.animate({
            opacity: 'toggle'
        }, 1000);
        modal.slideUp('slow');
    });
});