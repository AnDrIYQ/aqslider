# AQSlider
My Great and easy SLIDER on JS (ES6)

1. Подключить JS файл (AQSlider.js)
2. Инициализровать слайдер строкой кода "var aqslider = new Slider();"
3. Список классов:
    // Для нормальной работы слайдера нужны: 
    .viewport - Должен быть статичным блоком з обязательным CSS (overflow: hidden; position: relative;)
    .slides - Должен быть статичным блоком вложеным в .viewport, CSS (width: 100%; height: 100%; position: absolute; display: flex;)
    .slide-item - Блок елемент слайдера, вложеный в .slides, их может быть множество, в их должен быть CSS(flex-shrink: 0; width: 100%; display: flex;)
    Для переключения слайдов по вашему событию есть методы : 
        aqslider.next();
        aqslider.prev();
        // Максимально гибко.. Слайдер создан для тех кому нужно максимально гибко настроить слайдер и при этом не писать его логику
    // Остальные стили по желанию
    
   // Пример работы Слайдера
  
// <body>
//	<div class="viewport">
//		<div class="slides">
//			<div class="slide-item">
//				<h1>Content - 1</h1>
//			</div>
//			<div class="slide-item">
//				<h1>Content - 2</h1>
//			</div>
//			<div class="slide-item">
//				<h1>Content - 3</h1>
//			</div>
//			<div class="slide-item">
//				<h1>Content - 4</h1>
//			</div>
//			<div class="slide-item">
//				<h1>Content - 5</h1>
//			</div>
//		</div>
//	</div>
//    <script src="AQSlider.js"></script>
//    <script>
//      var aqslider = new Slider();
//    </script>
//	</body>
