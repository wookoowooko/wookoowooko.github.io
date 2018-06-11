var $footer = $('.footer').find('> a'),
	$lightbox = $('.lightbox'),
	$overlay = $('.overlay'),
	$prev = $('.prev'),
	$next = $('.next'),
	liIndex,
	targetImg;

$footer.click(function(event) {
	event.preventDefault();
	liIndex = $(this).parent().index();
	targetImg = $(this).attr('href');
	$lightbox.find('img').attr('src', targetImg);
	$lightbox.fadeIn();
});

$overlay.click(function(){
	$lightbox.fadeOut();
});
$next.click(function(){
	if ((liIndex + 1) < $footer.length) {
		targetImg = $footer.eq(liIndex + 1).find('> a').attr('href');
		liIndex ++;	
	} else {
		targetImg = $footer.eq(0).find('> a').attr('href');
		liIndex = 0;
	}
	$lightbox.find('img').attr('src', targetImg);

});