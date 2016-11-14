
        var link = document.querySelector(".contact-button");

        var popup = document.querySelector(".modal-content");

        var close = popup.querySelector(".modal-content-close");

        var form = popup.querySelector("form");

        var username = popup.querySelector("[name=username]");
        var email = popup.querySelector("[name=email]");

        var storage = localStorage.getItem("username");
        
        link.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.add("modal-content-show");

            if (storage) {
               username.value = storage;
               email.focus();
            } else {
               username.focus();
            }
        });

        close.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
        });

        form.addEventListener("submit", function(event) {
            if (!username.value || !email.value) {
                event.preventDefault();
                popup.classList.remove("modal-error");
                popup.offsetWidth = popup.offsetWidth;
                popup.classList.add("modal-error");
            } else {
                localStorage.setItem("username", username.value);
            }
        });
        
        window.addEventListener("keydown", function(event) {
            if (event.keyCode === 27) {
                if (popup.classList.contains("modal-content-show")) {
                popup.classList.remove("modal-content-show");
                popup.classList.remove("modal-error");
                }
            }
        });

            ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938631, 30.323055],
            zoom: 17,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map_pin.png',
            // Размеры метки.
            iconImageSize: [231, 190],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-75, -200]
        });

    myMap.geoObjects.add(myPlacemark);
});

