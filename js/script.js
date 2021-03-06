const myapp = new Vue({
    el : '#app',
    data : {
        activimg : 0,
        timer : 0,
        slides : [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ]
    },

    methods: {
        
        previousimg(){
            this.activimg --;
            if(this.activimg < 0){
                this.activimg = this.slides.length-1;
            }
        },

        nextimg(){
            this.activimg ++;
            if(this.activimg > this.slides.length){
                this.activimg = 0;
            }
        },

        //funzione cambio d' immagine
        cambioimg(activimg){
            this.activimg = activimg;
        },

        //autoplay
        autoPlay() {
            const play = this.activimg;
            this.timer = setInterval(function () {
                play.nextimg();
            }, 3000);
        }
    }
});

