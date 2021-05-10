class AQSlider {
	constructor(args) {
		this.viewport = document.querySelector("." + args.viewport);
		this.container = document.querySelector("." + args.container);
		this.slides = document.querySelectorAll("." + args.slideItem);
		this.images = document.querySelectorAll("." + args.slideItem + " img");
		this.btnPrev = document.querySelector(args.btnPrev);
		this.btnNext = document.querySelector(args.btnNext);
		
		this.height = args.height;
		this.index = 1;
		
		this.noSwipeTime = 5;
		this.noClick = false;
		
		this.setStyles();
		this.Init ();
		this.setEvents();
	}

	setStyles() {
		// Viewport
		this.viewport.style.display = "flex";
		this.viewport.style.flexDirection = "row";
		this.viewport.style.justifyContent = "space-between";
		this.viewport.style.alignItems = "center";
		this.viewport.style.height = this.height;
		this.viewport.style.overflow = "hidden";
		this.viewport.style.position = "relative";
		// Container
		this.container.style.display = "flex";
		this.container.style.flexDirection = "row";
		this.container.style.position = "absolute";
		this.container.style.width = "100%";
		this.container.style.height = "100%";
		// Slide-items
		this.slides.forEach((slide) => {
			slide.style.flexShrink = "0";
			slide.style.width = "100%";
			slide.style.display = "flex";
		})
		// Slide-images
		this.images.forEach((image) => {
			image.style.objectFit = "cover";
			image.style.width = "100%";
			image.style.height = "100%";
		})
		// Buttons
		this.btnPrev.style.zIndex = "10";
		this.btnNext.style.zIndex = "10";

		this.btnPrev.style.marginLeft = "2%";
		this.btnNext.style.marginRight = "2%";
	}

	setEvents() {
		setInterval(() => this.noSwipeTime > 0 ? this.noSwipeTime-- : false, 1000);
		setInterval(() => this.noSwipeTime == 0 ? this.next() : false, 5000);

		this.btnPrev.addEventListener('click', () => {
			if (!this.noClick) {
				this.noClick = true;
				this.noSwipeTime = 5;
				this.prev();
				setTimeout(() => this.noClick = false, 1000);
			}
		})

		this.btnNext.addEventListener('click', () => {
			if (!this.noClick) {
				this.noClick = true;
				this.noSwipeTime = 5;
				this.next();
				setTimeout(() => this.noClick = false, 1000);
			}
		})
	}

	Init () {
		var last = this.slides[this.slides.length - 1].cloneNode(true);
		var first = this.slides[0].cloneNode(true);

		last.classList.add(".last-clone");
		first.classList.add(".first-clone");

		this.container.prepend(last);
		this.container.append(first);

		this.TeleportTo(this.index);
	}

	SwipeTo(index) {
		this.container.style.transition = "all 1s";
		this.container.style.transform = "translateX(" + (-100 * (index)) + "%)";
	}

	TeleportTo(index) {
		this.container.style.transition = "none";
		this.container.style.transform = "translateX(" + (-100 * (index)) + "%)";
	}

	next () {
		var slides = this.slides;
		var index = this.index;
		this.index++;
		index++;
		this.SwipeTo(index);
		this.container.addEventListener("transitionend", () => {
			if (index == slides.length + 1)
			{
				this.TeleportTo(1);
				this.index = 1;
				index = 1;
			}
		});
	}

	prev () {
		var slides = this.slides;
		var index = this.index;
		this.index--;
		index--;
		this.SwipeTo(index);
		this.container.addEventListener("transitionend", () => {
			if (index == 0)
			{
				this.TeleportTo(slides.length);
				this.index = slides.length;
				index = slides.length;
			}
		});
	}
}
