//    动态生成font-size
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = '	' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth > 750) {
                clientWidth = 750;
            } else if (clientWidth < 320) {
                clientWidth = 320;
            }
            docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);