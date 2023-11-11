const tolinkedin = document.getElementById("linkedin");
const togithub = document.getElementById("github")
const toseeall = document.getElementById("see-all");
const tobackendprojectreact = document.getElementById("back-source-button-react");
const tofrontendprojectreact = document.getElementById("front-source-button-react");
const tobackendprojectangular = document.getElementById("back-source-button-angular");
const tofrontendprojectangular = document.getElementById("front-source-button-angular");

togithub.addEventListener("click" , function() {
    window.open("https://github.com/kuyucucaner", "_blank");
});
toseeall.addEventListener("click" , function() {
    window.open("https://github.com/kuyucucaner?tab=repositories", "_blank");
})
tolinkedin.addEventListener("click" , function() {
    window.open("https://www.linkedin.com/in/caner-kuyucu/", "_blank");
});
tobackendprojectreact.addEventListener("click", function() {
    window.open("https://github.com/kuyucucaner/Pet-Story-Back-End", "_blank");
});
tofrontendprojectreact.addEventListener("click", function() {
    window.open("https://github.com/kuyucucaner/Pet-Story-Front-End", "_blank");
});
tobackendprojectangular.addEventListener("click", function() {
    window.open("https://github.com/kuyucucaner/Lisans-API-Back-End", "_blank");
});
tofrontendprojectangular.addEventListener("click", function() {
    window.open("https://github.com/kuyucucaner/Lisans-API-Front-End", "_blank");
});

