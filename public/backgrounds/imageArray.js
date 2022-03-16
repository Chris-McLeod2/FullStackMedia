var images = ['./images/redGrave', './images/cityScape', './images/sunScene'];

var index = 0;

function makeImage() {
    var img = document.createElement('img')
    img.src = images[index];
    document.getElementById('content').appendChild(img);
}

function nextImage() {
    var img = document.getElementById('content').getElementsByTagName('img')[0]
    index++;
    index = index % images.length;
    img.src = images[index];
}
