log = function (e) {
    console.log(e)
}
liveBlock = function () {
    removeDOM(".Profile-lightItem, .SidebarListNav--noFollowLink")
}
adblockBanner = function () {
    removeDOM(".AdblockBanner")
}
removeDOM = function (classes) {
    c = document.querySelector(classes)
    c ? c.remove() : ""
}
replaceName = function () {
    // name = document.querySelector(".zu-top-nav-userinfo > span")
    n = document.querySelector(".zu-top-nav-userinfo > span, .ProfileHeader-name")
    n ? n.innerHTML = "勃学家" : ""
}
window.onload = function() {
    liveBlock()
    log("zhihu live blocked.")
    replaceName()
    log("name changed.")
    adblockBanner()
    log("AdblockBanner removed.")
}






// document.addEventListener("DOMContentLoaded", function() {
//     liveBlock()
//     console.log("zhihu live blocked.")
//     replaceName()
//     console.log("name changed.")
// })
