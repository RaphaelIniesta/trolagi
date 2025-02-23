function change() {
    document.getElementsByClassName('container')[0].style.backgroundColor = "green"
}

function moveButton(button) {
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function nota10() {
    document.getElementById('p1').innerHTML = "Obrigado 🥲"
    document.getElementById('image').src = "https://www.conjur.com.br/img/b/emoji-joinha.jpeg"
    console.log("click")
}

function detectMobile() {
    let device = '';
 
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        device = true;
    } else {
        device = false;
    }
    console.log(device);
}