$('.brand').owlCarousel({
    loop:true,
	autoplay:true,
	rewind:true,
	items:1,
    margin:30,
    smartSpeed:300,
	stagepadding:50,
	margin:25,
    nav:true,
    responsive:{
        0:{
            items:1,
			dotsEach: 1
        },
        600:{
            items:1
        },
        1000:{
            items:1
		
        }
    }
})

$('.awards').owlCarousel({
    loop:true,
	autoplay:true,
	rewind:true,
	items:1,
    margin:30,
    smartSpeed:300,
	stagepadding:50,
	margin:25,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1020:{
            items:4
		
        }
    }
})