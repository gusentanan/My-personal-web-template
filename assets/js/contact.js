var headerBg3 = document.getElementById('bg3')
window.addEventListener('scroll', function() {
	headerBg3.style.opacity = 1 - + window.pageYOffset/550 +''
	headerBg3.style.top = + window.pageYOffset + 'px'
	headerBg3.style.backgroundPositionY = - + window.pageYOffset/2 + 'px'
})