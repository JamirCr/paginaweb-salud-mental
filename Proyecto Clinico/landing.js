let elementos = document.querySelectorAll('.slider .lista .elementos');
let siguente = document.getElementById('siguente');
let anterior = document.getElementById('anterior');
let caja = document.querySelectorAll('.caja .elementos');

let countItem = elementos.length;
let itemActive = 0;

siguente.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

anterior.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

let refreshInterval = setInterval(() => {
    siguente.click();
}, 5000)

function showSlider(){
    let itemActiveOld = document.querySelector('.slider .lista .elementos.activo');
    let thumbnailsActiveOld = document.querySelector('.caja .elementos.activo');
    itemActiveOld.classList.remove('activo');
    thumbnailsActiveOld.classList.remove('activo');

    elementos[itemActive].classList.add('activo');
    caja[itemActive].classList.add('activo');
    setPositionThumbnail();

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        siguente.click();
    }, 5000)
}   

function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.caja .elementos.activo');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// click thumbnail
caja.forEach((caja, index) => {
    caja.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

