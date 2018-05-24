var deviceWidth = document.documentElement.clientWidth;
var dpr = window.devicePixelRatio;
if (dpr) {
    var isAndroid = window.navigator.appVersion.match(/android/gi);
    var isIPhone = window.navigator.appVersion.match(/iphone/gi);
    var devicePixelRatio = window.devicePixelRatio;
    if (isIPhone) {
        // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
        if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
            dpr = 3;
        } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
            dpr = 2;
        } else {
            dpr = 1;
        }
    } else {
        // 其他设备下，仍旧使用1倍的方案
        dpr = 1;
    }
}
document.documentElement.setAttribute('data-dpr', dpr);
if(deviceWidth > 750) deviceWidth = 750;
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
