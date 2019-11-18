# AQSlider
My Great and easy SLIDER on JS (ES6)
<br>
1. Подключить JS файл (AQSlider.js)
<br>
2. Инициализровать слайдер строкой кода <br>
    "var aqslider = new Slider({<br>
        viewport: "your-class",<br>
        container: "your-class",<br>
        slideItem: "your-class"<br>
        });"<br>
    // Классы без точки<br>
    <br>
3. Список классов:<br>
    // Для нормальной работы слайдера нужны: <br>
    .viewport - Должен быть статичным блоком з обязательным CSS (overflow: hidden; position: relative;)<br>
    .container - Должен быть статичным блоком вложеным в .viewport, CSS (width: 100%; height: 100%; position: absolute; display: flex;)<br>
    .slide-item - Блок елемент слайдера, вложеный в .slides, их может быть множество, в их должен быть CSS(flex-shrink: 0; width: 100%;v display: flex;)<br>
    Для переключения слайдов по вашему событию есть методы : <br>
        aqslider.next();<br>
        aqslider.prev();<br>
        // Максимально гибко.. Слайдер создан для тех кому нужно максимально гибко настроить слайдер и при этом не писать его логику<br>
    // Остальные стили по желанию<br>
   
