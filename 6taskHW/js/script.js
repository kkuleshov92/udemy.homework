let homeWork = {
    navigationFix: function() {
        let navItems = document.querySelectorAll('.menu-item'),
            parentItems = navItems[1].parentNode,
            newItem = document.createElement('li'),
            body = document.querySelector('body'),
            title = document.querySelector('.title'),
            advert = document.querySelector('.adv'),
            ask = prompt('нравится ли Вам техника Apple?', ''),
            textBox = document.getElementById('prompt');

        textBox.innerText = ask;    
        advert.remove();    
        title.innerText = 'Мы продаем только подлинную технику Apple';    
        body.style.background = 'url(img/apple_true.jpg)no-repeat center center / cover';
        newItem.classList.add('menu-item');
        newItem.innerText = 'Пятый пункт';


        parentItems.appendChild(newItem);

        parentItems.insertBefore(navItems[2], navItems[1]);

    }
};

homeWork.navigationFix();