const slider = document.querySelector('.blog-inner');
const points = document.querySelectorAll('.blog-navigation span');

var counter = 0;

const interval = setInterval(function(){
    points.forEach(point => {
        point.classList.remove('selected')
    })
    if(counter < 3) {
        counter++
        slider.style.left = `-${counter * 100}%`;
    } else {
        slider.style.left = `0%`;
        counter = 0;
    }
    points[counter].classList.add('selected');
}, 3000)


points.forEach((point, index) => {
    point.addEventListener('click', (e) => {
        clearInterval(interval)
        counter = index;{}
        points.forEach(point => {
            point.classList.remove('selected')
        })
        const element = e.target;
        element.classList.add('selected')

        slider.style.left = `-${index * 100}%`;
    })
});


const slider2 = document.querySelector('.blog-inner2');
const points2 = document.querySelectorAll('.blog-navigation2 span');

var counter2 = 0;

const interval2 = setInterval(function(){
    points2.forEach(point => {
        point.classList.remove('selected')
    })
    if(counter2 < 1) {
        counter2++
        slider2.style.left = `-${counter2 * 100}%`;
    } else {
        slider2.style.left = `0%`;
        counter2 = 0;
    }
    points2[counter2].classList.add('selected');
}, 3000)


points2.forEach((point, index) => {
    point.addEventListener('click', (e) => {
        clearInterval(interval2)
        counter2 = index;{}
        points2.forEach(point => {
            point.classList.remove('selected')
        })
        const element = e.target;
        element.classList.add('selected')

        slider2.style.left = `-${index * 100}%`;
    })
});