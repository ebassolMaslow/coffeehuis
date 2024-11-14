
/* let offest = 0;

const sliderLine = document.querySelector('.slider-line');

var btnNext = document.querySelector('.strelka_right');
var BtnPrew = document.querySelector('.strelka_left');



document.querySelector('.strelka_right').addEventListener('click', function () {
    offest = offest +=356; 
    if( offest > 1148){
        offest = 0;
    }
    sliderLine.style.left = -offest + 'px';
});

document.querySelector('.strelka_left').addEventListener('click', function () {
    offest = offest -=356; 
    if( offest < 0){
        offest = 1068;
    }
    sliderLine.style.left = -offest + 'px';
});

*/

let offest = 0;

const sliderLine = document.querySelector('.slider-line');
var btnNext = document.querySelector('.strelka_right');
var BtnPrew = document.querySelector('.strelka_left');

function SliderNext() {
    offest = offest += 356;
    if (offest > 1148) {
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