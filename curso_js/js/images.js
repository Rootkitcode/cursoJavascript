let miImage = document.querySelector('img');
miImage.onclick = function() {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/Firefox_logo_2017.png') {
        miImage.setAttribute('src', 'images/firefox2.png');
    } else {
        miImage.setAttribute('src', 'images/Firefox_logo_2017.png');
    }
}