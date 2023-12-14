
var link1 = document.createElement('link');
link1.rel = 'stylesheet';
link1.href = 'Css/calender.css';
var link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.href = 'Css/dark-calender.css';
function MyClass() {
    // 정적 변수처럼 사용할 속성
    MyClass.mode = false;

    // 다른 속성 및 메서드들...
}

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
        MyClass.mode = false;
        document.head.appendChild(link2);
    } else {
        iconElement.classList.remove('bi-brightness-alt-high-fill');
        iconElement.classList.add('bi-brightness-alt-high');
        MyClass.mode = true;
        document.head.appendChild(link1);
    }
}



// 현재 로드된 HTML 파일의 이름 가져오기
var currentHtmlFileName = document.location.pathname.split('/').pop().replace(/\.[^/.]+$/, '');

var nameLink = currentHtmlFileName + '.css';

var link1 = document.createElement('link');
link1.rel = 'stylesheet';
link1.href = 'Css/' + currentHtmlFileName + 's/light-' + nameLink;
var link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.href = 'Css/' + currentHtmlFileName + 's/dark-' + nameLink;

function changeBright() {
    var iconElement = document.getElementById('icon');
    var links = document.getElementsByTagName('link');

    for (var i = 0; i < links.length; i++) {
        if (
            (links[i].href.indexOf('light-' + nameLink) !== -1 && iconElement.classList.contains('bi-brightness-alt-high-fill')) ||
            (links[i].href.indexOf('dark-' + nameLink) !== -1 && iconElement.classList.contains('bi-brightness-alt-high'))
        ) {
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


function goIndex() {
    window.location.href = 'index.html';
}