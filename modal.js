
var btn = document.querySelector('.btn');
var blockHidden = document.querySelector('.block-auth');
var btnClose = document.querySelector('.close-button-auth');
var btnProfile = document.querySelector('.submit')

function showBlock() {
    blockHidden.classList.add('b-show');
}

function hideBlock() {
    blockHidden.classList.remove('b-show');
}

btn.addEventListener('click', showBlock);
btnClose.addEventListener('click', hideBlock);
