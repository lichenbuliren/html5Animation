var utils = {};

/**
 * 捕获鼠标在当前element上的相对位置
 * @param  {[type]} element 需要捕获位置的DOM元素
 * @return {[type]}         坐标点对象{x:0,y:0}
 */
utils.captureMouse = function(element){
    var mouse = {
        x: 0,
        y: 0
    };

    element.addEventListener('mousemove',function(event){
        var x,y;
        if(event.pageX || event.pageY){
            x = event.pageX;
            y = event.pageY;
        }else{
            x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        x -= element.offsetLeft;
        y -= element.offsetTop;

        mouse.x = x;
        mouse.y = y;
    },false);

    return mouse;
};

/**
 * 捕获手指触摸点在element上的相对坐标点
 * @param  {[type]} element 需要捕获位置的DOM元素
 * @return {[type]}         坐标点对象{x:0,y:0}
 */
utils.captureTouch = function(element){
    var touch = {
        x: null,
        y: null,
        isPressed: false
    };

    element.addEventListener('touchstart',function(){
        touch.isPressed = true;
    },false);

    element.addEventListener('touchend',function(){
        touch.x = null;
        touch.y = null;
        touch.isPressed = false;
    },false);

    element.addEventListener('touchmove',function(event){
        var x,y,
            touch_event = event.touchs[0];
        if(touch_event.pageX || touch_event.pageY){
            x = touch_event.pageX;
            y = touch_event.pageY;
        }else{
            x = touch_event.clientX + document.body.scrollLeft + document.documentElement.scrollLelf;
            y = touch_event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        x -= element.offsetLeft;
        y -= element.offsetTop;

        touch.x = x;
        touch.y = y;
    },false);

    return touch;
};

(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz','o','ms'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // Webkit中此取消方法的名字变了
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());