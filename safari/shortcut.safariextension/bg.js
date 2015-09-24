$(document).keydown(function(e) {
        var pagewin = GetPageSize();
        var pageHeight = pagewin["PageH"];
        var winHeight = pagewin["WinH"];
        var scroll = GetPageScroll();
        var scrollY = scroll["Y"];

        var activeElement = $(document.activeElement);
        
        if (activeElement.is("input") || activeElement.is("textarea")){
                //return false;
                return true;
        }

        //E: 69
        if (e.which == 69){
                $("input:first").focus();
                return false;
        }

        //H: 72
        if (e.which == 72) {
                $("html,body").animate({
                                        scrollTop : 0
                                }, 100);
        }

        //N: 78
        if (e.which == 78){
                $("html,body").animate({
                                        scrollTop : (pageHeight - winHeight)
                                }, 100);
        }

        //J: 74 
        if (e.which == 74) {
                if (pageHeight > (winHeight + scrollY)) {
                        if (pageHeight >= (winHeight + scrollY + winHeight)) {
                                $("html,body").animate({
                                        scrollTop : (winHeight + scrollY - 30)
                                }, 250);
                        } else {
                                $("html,body").animate({
                                        scrollTop : (pageHeight - winHeight)
                                }, 250);
                        }
                }
        }
        
        //K: 75
        if (e.which === 75) {
                if (scrollY > 0) {
                        if (scrollY >= winHeight) {
                                $("html,body").animate({
                                        scrollTop : (scrollY - winHeight + 30)
                                }, 250);
                        } else {
                                $("html,body").animate({
                                        scrollTop : 0
                                }, 250);
                        }
                }
        }
        
        //F: 70
        if (e.which == 70) {
                if (pageHeight > (winHeight + scrollY)) {
                        if (pageHeight >= (winHeight + scrollY + 200)) {
                                $("html,body").animate({
                                        scrollTop : (scrollY + 200)
                                }, 100);
                        } else {
                                $("html,body").animate({
                                        scrollTop : (pageHeight - winHeight)
                                }, 100);
                        }
                }
        }

        //D: 68
        if (e.which === 68) {
                if (scrollY > 0) {
                        if (scrollY >= 200) {
                                $("html,body").animate({
                                        scrollTop : (scrollY - 200)
                                }, 100);
                        } else {
                                $("html,body").animate({
                                        scrollTop : 0
                                }, 100);
                        }
                }
        }
        
        //M: 77
        if (e.which === 77) {
                var arr = ["下一页", "下一章", "Next","next", "下一篇", "向前","下一张", "下一頁"];
                for (var i = 0; i < arr.length; i++){
                        var obj1 = $("[title="+ arr[i] + "]")[$("[title="+ arr[i] + "]").length-1];
                        if (obj1){
                                obj1.click();
                        }
                        var obj2 = $(":contains(\"" + arr[i] +"\")")[$(":contains(\"" + arr[i] +"\")").length-1];
                        if (obj2){
                                obj2.click();
                        }
                }
        }
        
        //U: 85
        if (e.which === 85) {
                var arr = ["上一页", "上一章", "Prev", "prev", "上一篇", "向后", "上一张"];
                for (var i = 0; i < arr.length; i++){
                        var obj1 = $("[title="+ arr[i] + "]")[$("[title="+ arr[i] + "]").length-1];
                        if (obj1){
                                obj1.click();
                        }
                        var obj2 = $(":contains(\"" + arr[i] +"\")")[$(":contains(\"" + arr[i] +"\")").length-1];
                        if (obj2){
                                obj2.click();
                        }
                }
        }
});

function GetPageSize() {
        var scrW, scrH;
        if (window.innerHeight && window.scrollMaxY) { // Mozilla
                scrW = window.innerWidth + window.scrollMaxX;
                scrH = window.innerHeight + window.scrollMaxY;
        } else if (document.body.scrollHeight > document.body.offsetHeight) { // all
                // but
                // IE
                // Mac
                scrW = document.body.scrollWidth;
                scrH = document.body.scrollHeight;
        } else if (document.body) { // IE Mac
                scrW = document.body.offsetWidth;
                scrH = document.body.offsetHeight;
        }
        var winW, winH;
        if (window.innerHeight) { // all except IE
                winW = window.innerWidth;
                winH = window.innerHeight;
        } else if (document.documentElement
                        && document.documentElement.clientHeight) { // IE 6 Strict Mode
                winW = document.documentElement.clientWidth;
                winH = document.documentElement.clientHeight;
        } else if (document.body) { // other
                winW = document.body.clientWidth;
                winH = document.body.clientHeight;
        } // for small pages with total size less then the viewport
        var pageW = (scrW < winW) ? winW : scrW;
        var pageH = (scrH < winH) ? winH : scrH;
        return {
                PageW : pageW,
                PageH : pageH,
                WinW : winW,
                WinH : winH
        };
};

// ���������������
function GetPageScroll() {
        var x, y;
        if (window.pageYOffset) { // all except IE
                y = window.pageYOffset;
                x = window.pageXOffset;
        } else if (document.documentElement && document.documentElement.scrollTop) { // IE 6
                // Strict
                y = document.documentElement.scrollTop;
                x = document.documentElement.scrollLeft;
        } else if (document.body) { // all other IE
                y = document.body.scrollTop;
                x = document.body.scrollLeft;
        }
        return {
                X : x,
                Y : y
        };
}