const toabout = document.getElementById("more-about");
const tolinkedin = document.getElementById("linkedin");
const togithub = document.getElementById("github");
toabout.addEventListener("click", function() {
    window.location.href = "about.html";
});
togithub.addEventListener("click" , function() {
    window.open("https://github.com/kuyucucaner", "_blank");
});
tolinkedin.addEventListener("click" , function() {
    window.open("https://www.linkedin.com/in/caner-kuyucu/", "_blank");
});

