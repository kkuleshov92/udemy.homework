// window.addEventListener('DOMContentLoaded', function(){

//     'use strict';

//     //Tabs
//     let tab = document.querySelectorAll('.info-header-tab'),
//         info = document.querySelector('.info-header'),
//         tabContent = document.querySelectorAll('.info-tabcontent');

//     function hideTabContent(a) {
//         for (let i = a; i < tabContent.length; i++) {
//             tabContent[i].classList.remove('show');
//             tabContent[i].classList.add('hide');
//         }
//     }

//     hideTabContent(1);

//     function showTabContent(b) {
//         if (tabContent[b].classList.contains('hide')) {
//             tabContent[b].classList.remove('hide');
//             tabContent[b].classList.add('show');
//         }
//     }

//     info.addEventListener('click', function(event) {
//         let target = event.target;

//         if (target && target.classList.contains('info-header-tab')) {
//             for (let i = 0; i < tab.length; i++) {
//                 if (target == tab[i]) {
//                     hideTabContent(0);
//                     showTabContent(i);
//                     break;
//                 }
//             }
//         };
//     });

//     //Timer
//     let deadLine = '2019-07-27T00:00:00';

//     function getTimeRemaining(endTime) {
//         let t = Date.parse(endTime) - Date.parse(new Date()),
//             seconds = Math.floor((t / 1000) % 60),
//             minutes = Math.floor(((t / 1000) / 60) % 60),
//             hours = Math.floor((t / (1000 * 60 * 60)));

//         return {
//             'total' : t,
//             'hours' : hours,
//             'minutes' : minutes,
//             'seconds' : seconds
//         };
//     }

//     function setClock(id, endtime) {
//         let timer = document.getElementById(id),
//             hours = timer.querySelector('.hours'),
//             minutes = timer.querySelector('.minutes'),
//             seconds = timer.querySelector('.seconds'),
//             timeInterval = setInterval(updateClock, 1000);
            
//         function updateClock() {
//             let t = getTimeRemaining(endtime);

//             function addZero(num){
//                 if(num <= 9) {
//                     return '0' + num;
//                 } else return num;
//             };

//             hours.textContent = addZero(t.hours);
//             minutes.textContent = addZero(t.minutes);
//             seconds.textContent = addZero(t.seconds);

//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//                 hours.textContent = '00';
//                 minutes.textContent = '00';
//                 seconds.textContent = '00';
//             }
//         }

//     }

//     setClock('timer', deadLine);


//     //Modal

//     let more = document.querySelector('.more'),
//         overlay = document.querySelector('.overlay'),
//         close = document.querySelector('.popup-close'),
//         tabsMore = document.querySelectorAll('.description-btn'),
//         openOverlay = function() {
//             overlay.style.display = 'block';
//             this.classList.add('more-splash');
//             document.body.style.overflow = 'hidden';
//         };

//     more.addEventListener('click', openOverlay);
    
//     document.addEventListener('click', function(event) {
//         let target = event.target;

//         if (target.classList.contains('description-btn')) {
//             for (let i = 0; i < tabsMore.length; i++) {
//                 if (target == tabsMore[i]) {
//                     overlay.style.display = 'block';
//                     tabsMore[i].classList.add('more-splash');
//                     document.body.style.overflow = 'hidden';
//                 }
//             }
//         }
//     });


//     close.addEventListener('click', function() {
//         overlay.style.display = 'none';
//         more.classList.remove('.more-splash');
        
//         for (let i = 0; i < tabsMore.length; i++) {
//             tabsMore[i].classList.remove('more-splash');
//         }

//         document.body.style.overflow = '';
//     });


// });



window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    //Tabs
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        };
    });

    //Timer
    let deadLine = '2019-08-27T00:00:00';

    let getTimeRemaining = (endTime) => {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor(((t / 1000) / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
            
        let updateClock = () => {
            let t = getTimeRemaining(endtime);

            let addZero = (num) => {
                if(num <= 9) {
                    return '0' + num;
                } else return num;
            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

        let timeInterval = setInterval(updateClock, 1000);

    }

    setClock('timer', deadLine);


    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        tabsMore = document.querySelectorAll('.description-btn'),
        openOverlay = function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        };

    more.addEventListener('click', openOverlay);
    
    document.addEventListener('click', function(event) {
        let target = event.target;

        if (target.classList.contains('description-btn')) {
            for (let i = 0; i < tabsMore.length; i++) {
                if (target == tabsMore[i]) {
                    overlay.style.display = 'block';
                    tabsMore[i].classList.add('more-splash');
                    document.body.style.overflow = 'hidden';
                }
            }
        }
    });


    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('.more-splash');
        
        for (let i = 0; i < tabsMore.length; i++) {
            tabsMore[i].classList.remove('more-splash');
        }

        document.body.style.overflow = '';
    });

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};

        formData.forEach((value, key) => {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status === 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for(let i = 0; i < input.length; i++){
            input[i].value = '';
        }


    });
});
