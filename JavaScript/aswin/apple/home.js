
function gotoPage(event) {
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    viewPage();

}
const routes = {
    '/iphone13': './apple/iphone13.html',
    //'/iphonese': '../apple/iphonese.html',
    //'404': '../apple./404.html'

}
function viewPage(){
    let path = window.location.pathname;
    console.log(path)
    let pages = routes[path] ? routes[path] : routes[404];
    console.log(pages)
    fetch(pages)
    .then(function(htmlCode) {
        htmlCode.text()
        .then(function(code) {
            console.log(code)
            document.querySelector('.newpage').innerHTML = code;

        });
    });
}
