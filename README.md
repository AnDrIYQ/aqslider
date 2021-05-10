# AQSlider
    SLIDER on JS (ES6)
    
    1. Подключить JS файл (AQSlider.js)
    
    HTML-структура для слайдера имеет следующий вид
    
    <div class="slider-viewport">
        <button class="slider-btn" id="slider-prev">&lt;</button>
        <div class="slider-container">
            <div class="slider-item"><img src="image"></div> // 1
            <div class="slider-item"><img src="image"></div> // 2
            ...
        </div>
        <button class="slider-btn" id="slider-next">&gt;</button>
    </div>
    
    // Стили для .slide-btn задаються вами
    
    2. Инициализировать слайдер следующим JS кодом: 
    let slider = new AQSlider ({
            // Классы без точки
			viewport: 'slider-viewport',
			container: 'slider-container',
			slideItem: 'slider-item',
			btnPrev: '#slider-prev', // Хэш-тэг обязателен
			btnNext: '#slider-next', // Хэш-тэг обязателен
			height: 'size-pixels' // Высота в пикселях
	});
    
    Для переключения слайдов по вашему событию есть методы :
    
        slider.next();<br>
        slider.prev();<br>
        
    Остальные стили по желанию
   
