document.querySelector('.btn1').onclick = myClick;

function myClick() {
var razmer = document.getElementById('razmer').value;
var raz = document.getElementById('setraz').value;
    if (raz=="m1") {
        var site = 1
    }
    if (raz=="m2") {
        var site = 2
    }
    if (raz=="m3") {
        var site = 3
    }
    if (raz=="m4") {
        var site = 4
    }
    if (raz=="m5") {
        var site = 5
    }
var raz2 = document.getElementById('setraz2').value;
    if (raz2=="n1") {
        var site2 = 1
    }
    if (raz2=="n2") {
        var site2 = 2
    }
    if (raz2=="n3") {
        var site2 = 3
    }
    if (raz2=="n4") {
        var site2 = 4
    }
    if (raz2=="n5") {
        var site2 = 5
    }
if (site>site2) {
    if (site2==1) {
        site = site-1 
        while (site>1) {
            site = site-1 
            razmer = razmer * 1024
        }
        razmer = razmer * 8
    }
    else {
    while (site>site2) {
        site = site-1
        razmer = razmer * 1024
    }
}
}
if (site<site2) {
    if (site==1) {
        razmer = razmer / 8
        site = site + 1
    }
    while (site<site2) {
        razmer = razmer / 1024
        site = site+1
    }
}
let elements = ["Бит", "Байт", "Килобайт", "Мегабайт", "Гигабайт"]
console.log (razmer)
console.log (site)
console.log (site2)
let out1 =razmer + " " + elements [site2-1]
document.querySelector('.out1').innerHTML = out1;
}