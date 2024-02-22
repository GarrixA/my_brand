let nextDom = document.getElementById('next');
let prevtDom = document.getElementById('prev');
let carouselDom = document.querySelector('.imgContainer');
let listItemDom = document.querySelector('.imgContainer .list');
let thumbnailDom = document.querySelector('.imgContainer .Thumbnail')

nextDom.onclick = function(){
    showSlider('next');
}

prevtDom.onclick = function(){
    showSlider('prev')
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.imgContainer .list .item')
    let itemThumbnail = document.querySelectorAll('.imgContainer .Thumbnail .item')

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0])
        thumbnailDom.appendChild(itemThumbnail[0])
        carouselDom.classList.add('next')
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev')
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        carouselDom.classList.remove('next')
        carouselDom.classList.remove('prev')
    }, timeRunning)

    clearTimeout(autoRunAnim);
    autoRunAnim = setTimeout(()=>{
        nextDom.onclick()
    }, timeAutoNext)
}