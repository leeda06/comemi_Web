var link1 = document.createElement('link');
link1.rel = 'stylesheet';
link1.href = 'Css/calender.css';
var link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.href = 'Css/dark-calender.css';


function changeBright() {
    var iconElement = document.getElementById('icon');

    var links = document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
        if (links[i].href.indexOf('calender.css') !== -1) {
            document.head.removeChild(links[i]);
            break;
        }
    }

    if (iconElement.classList.contains('bi-brightness-alt-high')) {
        iconElement.classList.remove('bi-brightness-alt-high');
        iconElement.classList.add('bi-brightness-alt-high-fill');
        document.head.appendChild(link2);
    } else {
        iconElement.classList.remove('bi-brightness-alt-high-fill');
        iconElement.classList.add('bi-brightness-alt-high');
        document.head.appendChild(link1);
    }
}
var link1 = document.createElement('link');
link1.rel = 'stylesheet';
link1.href = 'Css/calender.css';
var link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.href = 'Css/dark-calender.css';

function changeBright() {
    var iconElement = document.getElementById('icon');
    var links = document.getElementsByTagName('link');

    for (var i = 0; i < links.length; i++) {
        if (links[i].href.indexOf('calender.css') !== -1) {
            document.head.removeChild(links[i]);
            break;
        }
    }

    if (iconElement.classList.contains('bi-brightness-alt-high')) {
        iconElement.classList.remove('bi-brightness-alt-high');
        iconElement.classList.add('bi-brightness-alt-high-fill');
        document.head.appendChild(link2);
    } else {
        iconElement.classList.remove('bi-brightness-alt-high-fill');
        iconElement.classList.add('bi-brightness-alt-high');
        document.head.appendChild(link1);
    }
}
