$(document).ready(function() {

	var startHeight = 1;

	if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || (window.innerWidth < 800)) {
        fixMobileHeight();
    }
    function fixMobileHeight() {
        var viewportHeight = screen.height;
        var screenHeight = document.documentElement.clientHeight;
        if ((screenHeight / startHeight <= 0.75) || (startHeight / screenHeight <= 0.75)) {
            $('.splash-page').css('height', screenHeight);
            startHeight = screenHeight;
        }
    }

});