const foto_yuri = document.querySelector('.foto_click');
const som_flash = document.querySelector('#som_flash');

foto_yuri.addEventListener('mouseover', function() {
    som_flash.play();
});
