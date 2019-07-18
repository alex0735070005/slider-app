var data = [
    'img/slide-1.jpg',
    'img/slide-2.jpg',
    'img/slide-3.png',
    'img/slide-4.jpg',
    'img/slide-5.jpg',
]

function Slider(images, id, defaultIndex = 0) {

    this.index = defaultIndex;
    this.length = images.length;

    this.slideRight = function () {
        this.index++;

        if(this.index > this.length-1){
            this.index = 0;
        }

        this.img.src = images[this.index];
    }.bind(this)

    this.slideLeft = function () {
        this.index--;

        if(this.index < 0){
            this.index = this.length -1;
        }

        this.img.src = images[this.index];
    }.bind(this)

    this.init = function () {
        // get element by id slider
        this.container = document.querySelector(id);
        // create html objects
        this.wrap = document.createElement('div');
        this.img = document.createElement('img');
        this.btnRight = document.createElement('i');
        this.btnLeft = document.createElement('i');
        // set events for buttons
        this.btnRight.onclick = this.slideRight;
        this.btnLeft.onclick = this.slideLeft;

        // set default image
        this.img.src = images[this.index];
    }

    this.render = function () {
        this.wrap.className = 'slider';
        this.btnLeft.innerHTML = '<';
        this.btnRight.innerHTML = '>';

        this.wrap.appendChild(this.btnLeft);
        this.wrap.appendChild(this.img);
        this.wrap.appendChild(this.btnRight);

        this.container.appendChild(this.wrap);
    }
}

var slider = new Slider(data, '#slider');

slider.init();
slider.render();


var slider2 = new Slider(data, '#slider2', 3);

slider2.init();
slider2.render();