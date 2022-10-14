'use strict';

(function() {

    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('scrollBlock').scrollLeft -= (delta*10); // Multiplied by 10
        e.preventDefault();
    }
    if (document.getElementById('scrollBlock').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('scrollBlock').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('scrollBlock').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('scrollBlock').attachEvent("onmousewheel", scrollHorizontally);
    }
if (window.screen.innerWidth <= "1227px") {
    return;
}
})();