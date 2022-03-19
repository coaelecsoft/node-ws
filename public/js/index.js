const slike = document.getElementsByTagName("img")
console.log(slike.length)

for (i = 0; i < slike.length; i++) {
    slika = slike[i].getAttribute('src')
    slike[i].setAttribute('src','https://izrada-sajta.rs' + slika)

}

window.onload = function () {
    document.getElementById('layout-100vh').classList.add("anim-start-header");
    console.log("%c- PiSi Dizajn Alex - Web Razvoj, Web Progresive App With HTML5, CSS3, Javascript, PHP&MySQL, Yii2-framework ", "color:#286da8; font-size:30px");
}


const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}

window.onscroll = function () {
    var anav = document.getElementById("anav");
    var anavsub = document.getElementById("anav-sub");
    var gototop = document.getElementById("go-to-top");
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (top <= 229) {
        document.getElementById('layout-100vh').classList.add("anim-start-header");
        gototop.classList.remove("show-up");
        if (anavsub) {
            anavsub.classList.remove("shadow-down");
        }
        anav.classList.remove("shadow-down");

    } else {
        document.getElementById('layout-100vh').classList.remove("anim-start-header");
        gototop.classList.add("show-up");
        anav.classList.add("shadow-down");
        if (anavsub) {
            anavsub.classList.add("shadow-down");
        }

    }
    setTimeout(timeScoll, 1000);
    function timeScoll() {
        if (anavsub) {
            anavsub.style.top = top + 10 + "px";
        }
        anav.style.top = top + 10 + "px";

    }
}
function goToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

function openMyMenu(id) {
    var animenu = document.getElementById(id);
    if (animenu.classList.contains('opened-menu')) {
        animenu.classList.remove('opened-menu');
    } else {
        animenu.classList.add('opened-menu');
    }
}


function openMyDdMenu() {
    var ddMenu = document.getElementById("drop-down");
    if (ddMenu.classList.contains('opened-dd-menu')) {
        ddMenu.classList.remove('opened-dd-menu');
    } else {
        ddMenu.classList.add('opened-dd-menu');
    }
}

// Cookies
var pp = document.getElementById('privacy-policy');
var mycookie = getCookie('acept');
if (mycookie) {
    pp.style.display = 'none';
}
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=None; secure";
    pp.style.display = 'none';
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}

//console.log(window.screen.availHeight);
//console.log(window.screen.availWidth);

var mouse = { x: 0, y: 0 };
var myWidth = 0, myHeight = 0;
var mouseIsDown = false;
var mouseIsDownDivision = false;
let moveMe = document.getElementById('move-me');
document.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY
    updateDimensions();
    //console.log('Widht of widnow is: ' + window.screen.width + 'px and Height is: ' + window.screen.height);
    //console.log(mouse.x);
    let top = window.screen.height / 4;
    let bottom = top * 3;
    let left = window.screen.width / 4;
    let right = left * 3;
    //console.log(bottom);
    if (mouse.x < left) {
        // console.log('pomeri levo');
        document.getElementById('move-me').style.objectPosition = "left";
    } else if (mouse.x > right) {
        // console.log('pomeri desno');
        document.getElementById('move-me').style.objectPosition = "right";
    } else if (mouse.y < top) {
        // console.log('pomeri gore');
        document.getElementById('move-me').style.objectPosition = "top";
    } else if (mouse.y > bottom) {
        document.getElementById('move-me').style.objectPosition = "bottom";
        //console.log('pomeri dole');
    } else {
        // console.log('centriraj');
        document.getElementById('move-me').style.objectPosition = "center";
    }


}, false);


function updateDimensions() {
    if (typeof (window.innerWidth) == 'number') {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {

        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {

        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }

}

function startMove() {
    mouseIsDown = true;
}

function stopMove() {
    mouseIsDown = false;
    mouseIsDownDivision = false;
    var sky = document.getElementById("sun");
}

function startDraggingDivision() {

    mouseIsDownDivision = true;
}

function windowResize() {
    updateDimensions();
    var skyHeight = document.getElementById("horizon").clientHeight;




    // update to new sky height
    skyHeight = document.getElementById("sun").clientHeight;
    document.getElementById("waterDistance").style.height = myHeight - skyHeight;
    document.getElementById("division").style.top = skyHeight;
}









