var headerBg4 = document.getElementById('bg4')
window.addEventListener('scroll', function() {
	headerBg4.style.opacity = 1 - + window.pageYOffset/550 +''
	headerBg4.style.top = + window.pageYOffset + 'px'
	headerBg4.style.backgroundPositionY = - + window.pageYOffset/2 + 'px'
})