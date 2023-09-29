import contents from './script/contents.js';

class MainPage{
    init(){
        this.fullPage();
        this.modal();
    }
    fullPage(){
        const pages = new Pageable('#main',{
            animation : 500,
            delay : 500,
            anchors : [],
            pips : true,
            // freeScroll: true,
            easing : function(currentTime, startPos, endPos, interval) {
                currentTime /= interval;
                return (endPos - startPos) * currentTime * currentTime + startPos;
            },
            events: {
                wheel: true, // enable / disable mousewheel scrolling
                scroll: true,
                mouse: true, // enable / disable mouse drag scrolling
                touch: true, // enable / disable touch / swipe scrolling
                keydown: true, // enable / disable keyboard navigation
            },
        });
        pages.on("scroll.end",data => {
            console.log(data);
                if(pages.index == 2){
                    pages.destroy();
                }
            }
        );
        const sectionTop = document.querySelector('.sec3').offsetTop;
        window.addEventListener('scroll',(e)=>{
            if(window.scrollY <  sectionTop){ 
                pages.init()
            }
        });
    }
    modal(){
        const closeBtn = document.querySelector('#modal .close-btn');
        const prevBtn = document.querySelector('#modal .prev-btn');
        const nextBtn = document.querySelector('#modal .next-btn');
        const modal = document.getElementById('modal');
        let nowContent = 0;

        closeBtn.addEventListener('click',()=>{
            this.close(modal);
        });
        prevBtn.addEventListener('click',()=>{
            nowContent -= 1;
            nowContent < 0 ? nowContent = contents.length - 1 : nowContent;
            drawModal();
        });
        nextBtn.addEventListener('click',()=>{
            nowContent += 1;
            nowContent >= contents.length ? nowContent = 0 : nowContent;
            drawModal();
        });
        
        const contentsList = document.querySelectorAll('.sec3 .gallery a');
        // console.log(contentsList);
        contentsList.forEach((content, idx)=>{
            content.addEventListener('click',(e)=>{
                e.preventDefault();
                console.log(content)
                console.log(content.getAttribute('data-img'));
                nowContent = idx;
                drawModal();
                this.open(modal);
            })
        });
        function drawModal(){
            const text = document.querySelector('.img-title');
            const img = document.querySelector('.img-box img');
            img.src = contents[nowContent].href;
            text.innerText = contents[nowContent].name;
        }
    }
    close(selector){
        selector.style.display = 'none';
        };
    open(selector){
        this.nowTop = window.scrollY;
        selector.style.display ='block'; 
    }

}

const mainPage = new MainPage();
mainPage.init()

//


// Check this later
// https://github.com/Mobius1/Pageable#install