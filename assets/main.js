var body = document.getElementsByTagName("body")[0];
var header = document.getElementsByTagName("header")[0];

document.addEventListener("scroll", function (e) {
    if (window.scrollY > window.innerHeight / 4) {
        body.classList.add("scrolled");
    } else {
        body.classList.remove("scrolled");
    }
});

document.querySelectorAll("a[href^='#']").forEach(function (fragment) {
    var target = document.querySelector(fragment.getAttribute("href"));
    fragment.addEventListener("click", function (e) {
        e.preventDefault();
        if (target) {
            window.scroll({
                top: target.offsetTop - header.clientHeight - 50,
                behavior: "smooth"
            });
        }
    });
});
