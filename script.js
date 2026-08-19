let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat6');
let mountains7 = document.getElementById('mountains7');
let fathy = document.querySelector('.fathy');

window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    fathy.style.fontSize = value + 'px';
    if (scrollY >= 67) {
        fathy.style.fontSize = 67 + 'px';
        fathy.style.position = 'fixed';
        if (scrollY >= 478) {
            fathy.style.display = 'none';
        } else {
            fathy.style.display = 'block';
        }
        if (scrollY >= 127) {
            document.querySelector('.main').style.background = 'linear-gradient( #d7ccd3, #10001f)';
        } else {
            document.querySelector('.main').style.background = 'linear-gradient( #200016, #10001f)'

        }
    }
}
