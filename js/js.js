$(document).ready(function(){

    /*
	 * JOYFUL EASTEREGG
	*/
	if( !$('html').hasClass('mobile') ) {
		var easteregg_image_flag = true;
		var easteregg_image_set = [
			'/img/layer-flower.png',
			'/img/layer-bone.png',
			'/img/layer-fish.png',
			'/img/layer-cloud.png',
			'/img/layer-rainbow.png',
			'/img/layer-grass.png',
			'/img/layer-meat.png',
			'/img/layer-sushi.png',
			'/img/layer-watermelon.png'
		]

		$('.main-container').on('mouseenter', 'a, button, input, .product-detail, .about-contact__map', function () {
			easteregg_image_flag = false;
		});
		$('.main-container').on('mouseleave', 'a, button, input, .product-detail, .about-contact__map', function () {
			easteregg_image_flag = true;
		});

		$('.main-container').on('click', function(){

			if( !easteregg_image_flag ) { return; }

			var evt = window.event;
			var $this = $(this);

			var egg_image = '';
			egg_image += '<figure class="jt-joyful-easteregg">';
	 			egg_image += '<img src="'+ window.location.origin + easteregg_image_set[Math.floor(Math.random() * 9)] +'">';
		 	egg_image +='</figure>';

			$this.append( egg_image );

			var egg_x = evt.pageX - $this.offset().left;
			var egg_y = evt.pageY - $this.offset().top;

			var $egg_el = $this.find('.jt-joyful-easteregg:last-child');
			$egg_el.css({'left':egg_x,'top':egg_y});

			gsap.fromTo($egg_el, .15, {
				scale: 0,
				rotation: 120,
			},{
				scale: 1,
				rotation: 0,
				ease: 'back.out(1.2)',
				onStart: function(){
					$egg_el.css('display','block');
				},
				onComplete: function(){
					gsap.to($egg_el, .7, {
						autoAlpha: 0,
						scale: 0.8,
						delay: 0.1,
						onComplete: function(){
							$egg_el.remove();
						}
					});
				}
			});

		});
	}


});