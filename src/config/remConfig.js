/*
 * @Author: 陈少雄_xio 
 * @Date: 2019-05-10 17:09:28 
 * @Last Modified by: 陈少雄_xio
 * @Last Modified time: 2019-05-10 17:23:47
 */

 //rem设置
export default function () {
    // var devicePixelRatio = 1;
    // var scale = 1 / devicePixelRatio;
    // document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    // 7.5根据设计稿的横向分辨率/100得来
    // alert(document.documentElement.clientWidth)
    var deviceWidth = document.documentElement.clientWidth;
    // var deviceWidth = window.screen.availWidth
    // alert(navigator.userAgent)
    // alert(deviceWidth)
    // console.log(navigator.userAgent)
    // console.log('w',document.documentElement.clientWidth);
    if (deviceWidth > 750) {
        // deviceWidth = 750;
        deviceWidth = 7.5 * 50;
    }
    // console.log('1',document.documentElement.style.fontSize);
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    // console.log('2',document.documentElement.style.fontSize);
    // 禁止双击放大
    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
        var now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}