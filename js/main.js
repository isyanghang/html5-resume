var header = document.querySelector("header");
window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    header.style.padding = scrollTop ? 0 : '20px 0';
    header.style.background = scrollTop ? "#000" : 'none';
};
document.querySelector("#professionalSkill > div > ul.ul-top > li:nth-child(1) > div > div > img").style.left = "10px";
