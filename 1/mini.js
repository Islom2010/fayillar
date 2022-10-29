let man = document.querySelector('.man'),
    group = document.querySelector('.group'),
    cloud1 = document.querySelector('.cloud1'),
    cloud2 = document.querySelector('.cloud2');

    document.addEventListener('keydown', move);
    document.addEventListener('keyup', stop);


function move(e){
    if(e.key == 'ArrowRight'){
        man.classList.add('run');
        group.classList.add('run');
        cloud1.classList.add('run');
        cloud2.classList.add('run');
    }
}
function stop (){
    man.classList.remode('run');
    group.classList.remode('run');
    cloud1.classList.remode('run');
    cloud2.classList.remode('run');
}