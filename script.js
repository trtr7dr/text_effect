let color = ['#2196F3', 'red', '#3F51B5', 'turquoise', 'yellow', 'green', 'blue'];
let count = 6;

let all_txt = document.getElementById('text_mousemove');
let w_el, h_el;

for(let i = 0; i < count; i++){
    all_txt.innerHTML += '<div class="word">' + all_txt.getAttribute('attr_txt') + '</div>';
}

let all_word = document.getElementsByClassName('word');

let style = document.createElement('style');
style.innerHTML = `
  .word {
        text-align: center;
        width: calc(100% - 60px);
        font-size: 200px;
        position: absolute;
        filter: blur(1px);
        font-family: monospace;
        mix-blend-mode: screen;
        -webkit-transition: all .4s ease-out;
        -moz-transition: all .4s ease-out;
        -o-transition: all .4s ease-out;
        transition: all .4s ease-out;
        padding-top: 280px;
    }`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function () {
    w_el = all_txt.offsetWidth;
    h_el = all_txt.offsetHeight;

    all_word[0].style.cssText = 'mix-blend-mode: hard-light';

    for (let i = 1; i <= all_word.length; i++) {
        all_word[i - 1].style.color = color[i - 1];
    }
});

let x, y, multi_x, multi_y;

all_txt.addEventListener('mousemove', e => {
    x = e.offsetX;
    y = e.offsetY;

    multi_x = x / (w_el / 2);
    multi_y = y / (h_el / 2);
    sign_x = 1;
    sign_y = 1;

    if (multi_x < 1) {
        multi_x = (2 - multi_x * multi_x) * (-1);
    }
    if (multi_y < 1) {
        multi_y = (2 - multi_y * multi_y) * (-1);
    }

    for (let i = 1; i <= all_word.length; i++) {
        all_word[i - 1].style.transform = "translate(" + Math.pow(multi_x, 3) * i + "px, " + Math.pow(multi_y, 3) * i + "px)";
    }
});
