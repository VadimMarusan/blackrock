$(function () {
	$('.menu-open').click(function () {
		$('.menu').toggleClass('show-menu')
		$('.offer').toggleClass('padding200px');
	})
});

$(function () {
	$('.faq-button1').click(function () {
		$('.faq-desc-item-hidden1').toggleClass('faq-desc-item-open')
		$('.faq-button1').toggle()
	})
	$('.faq-button2').click(function () {
		$('.faq-desc-item-hidden2').toggleClass('faq-desc-item-open')
		$('.faq-button2').toggle()
	})
	$('.faq-button3').click(function () {
		$('.faq-desc-item-hidden3').toggleClass('faq-desc-item-open')
		$('.faq-button3').toggle()
	})
	$('.faq-button4').click(function () {
		$('.faq-desc-item-hidden4').toggleClass('faq-desc-item-open')
		$('.faq-button4').toggle()
	})
	$('.faq-button5').click(function () {
		$('.faq-desc-item-hidden5').toggleClass('faq-desc-item-open')
		$('.faq-button5').toggle()
	})
});







