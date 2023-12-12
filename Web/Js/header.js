function changeBright() {
    var iconElement = document.getElementById('icon');
    var links = document.getElementsByTagName('link');
    
    for (var i = 0; i < links.length; i++) {
        if (links[i].href.indexOf('styles.css') !== -1) {
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
