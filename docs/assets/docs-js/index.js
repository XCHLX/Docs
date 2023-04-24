const showNav = () => {
    if (window.location.hash != '#/') {
        document.getElementsByClassName('app-nav')[0].style.backgroundColor =
            '#ffffff'
    } else {
        document.getElementsByClassName('app-nav')[0].style.backgroundColor = ''
    }
}

// 路由监控
window.addEventListener('hashchange', () => {
    showNav()
})
// 初始化
window.addEventListener('load', () => {
    showNav()
})
// 右键菜单
window.oncontextmenu = function (e) {
    //取消默认的浏览器自带右键 很重要！！
    //   e.preventDefault();
    console.warn(1111)
}
