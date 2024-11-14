let offest = 0;

const sliderLine = document.querySelector('.slaider-menu');
var btnNext = document.querySelector('.eda-button-js');
var BtnPrew = document.querySelector('.napitki-button-js');

function SliderNext() {
    offest = offest += 356;
    if (offest > 1048) {
        offest = 0;
    }
    sliderLine.style.left = -offest + 'px';
}

function SliderPrev() {
    offest = offest -= 356;
    if (offest < 0) {
        offest = 1068;
    }
    sliderLine.style.left = -offest + 'px';
}

btnNext.addEventListener('click', SliderNext);
BtnPrew.addEventListener('click', SliderPrev);