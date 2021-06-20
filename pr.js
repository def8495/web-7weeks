let btn = document.getElementById('btn');
let first = document.getElementById('first');
let second = document.getElementById('second');
let sky = document.getElementsByTagName('body');

let back = true;

btn.addEventListener('click', function(){
    back != back;
    if(back){
        first.style.display = 'none';
        second.style.display = 'block';
        back.style.backgroundColor = 'skyblue';
    } else {
        first.style.display = 'block';
        second.style.display = 'none';
        back.style.backgroundColor = 'gray';
    }
})
