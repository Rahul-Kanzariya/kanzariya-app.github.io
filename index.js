
function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

// //Add event from js the keep the marup clean
// function init() {
//     // document.getElementById("open-menu").addEventListener("click", toggleMenu);
//     // document.getElementById("body-overlay").addEventListener("click", toggleMenu);
// }

//The actual fuction
function toggleMenu() {
    var ele = document.getElementsByTagName('body')[0];
    var cardNameEle = document.getElementsByClassName('card-name')[0];
    cardNameEle.innerHTML = "open menu clicked bro"
    if (!hasClass(ele, "menu-open")) {
        addClass(ele, "menu-open");
    } else {
        removeClass(ele, "menu-open");
    }
}

// //Prevent the function to run before the document is loaded
// document.addEventListener('readystatechange', function() {
//     if (document.readyState === "complete") {
//         init();
//     }
// });


console.log("in >> index.js");
