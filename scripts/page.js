// 自定义标题

const OriginTitle = document.title;
let titleTime;
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.title = "╭(°A°`)╮ 页面崩溃啦 ~";
        clearTimeout(titleTime);
    } else {
        document.title = "(ฅ>ω<*ฅ) 噫又好啦 ~" + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});

function updateBackgroundImage() {
    const imageUrl = 'https://t.mwm.moe/moe';//图片URL
    const timestamp = Date.now();
    $('page-header').style.backgroundImage = `url('${imageUrl}?${timestamp}')`;
}