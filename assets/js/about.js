var headerBg2 = document.getElementById('bg2')
window.addEventListener('scroll', function() {
	headerBg2.style.opacity = 1 - + window.pageYOffset/550 +''
	headerBg2.style.top = + window.pageYOffset + 'px'
	headerBg2.style.backgroundPositionY = - + window.pageYOffset/2 + 'px'
})