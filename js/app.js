const text = document.getElementsByClassName('breakable');
const mouse = document.querySelector('.disk');
const center = document.querySelector('.center')

//scrolling and navigatin// \/\/\/
const navigation = document.querySelector('.menu');

const navAnchorIds = [['menuA','scrollA', '#anchorA', false],['menuB', 'scrollB', "#anchorB", true],['menuC', 'scrollC', "#anchorC", true],['menuD', 'scrollD', "#anchorD", true]];
const navAnchorsClasses = [['menu__link', 'menu__link_selected'], ['scrol-view__circle', 'scrol-view__circle_focused']];

navigation.addEventListener('click', function(e){
    for(let i = 0; i < navAnchorIds.length; i++){
        gsap.to(window, {duration: 1.5, scrollTo: {y: navigate({event: e},navAnchorIds[i], navAnchorsClasses), autoKill: true}, ease: "expo"})
    } 
});

window.onload = function(){
    gsap.to(window, {duration: 1, scrollTo:{y:0, autoKill: true}});
    tlA.play();
    gsap.utils.toArray(navAnchorIds).forEach((elemArray)=>{
        ScrollTrigger.create({
            trigger: elemArray[2],
            start: "top center",
            end: "top top-=120px",
            scrub: true,
            onEnter: ()=>navigate({id:elemArray[1]},elemArray, navAnchorsClasses),
            onEnterBack: ()=>navigate({id:elemArray[1]},elemArray, navAnchorsClasses),
        }) 
});
    [...text].forEach((el)=>splietter(el)) // remove this line to get pixelPerfect result!
}
//scrolling and navigatin// /\/\/
//block effects on scroll// \/\/\/  
const ease_1 = "M0,0 C0.334,0.04 0.324,0.409 0.5,0.438 0.634,0.46 0.662,0.134 0.662,0.134 0.662,0.134 0.653,0.48 0.792,0.632 0.856,0.702 0.892,0.324 0.892,0.324 0.892,0.324 0.984,0.858 1,1 ";

const blinkOut = {opacity:0, duration:0.5, ease: CustomEase.create("custom", ease_1)}

    //block-01//
    const tlA = gsap.timeline({delay: 1, paused: true});
    
    tlA.from('.main-block', {opacity: 0, x: 400, duration: 1, ease: "expo.out"});
    tlA.from('.main-block__hero',{opacity:0, duration:0.6, ease: CustomEase.create("custom", ease_1)},'>-=0.3');
    tlA.from('.main-block__text_h3', blinkOut, '>-=0.3');
    tlA.from('.main-block__to-play', blinkOut, '>-=0.4');
    tlA.from('.main-block .block__play-text', blinkOut, '>-=0.4');
    tlA.from(".gsap__play",{x: -100,ease: "circ.out" ,duration: 1});
    tlA.from(".gsap__play",{opacity: 0, duration: 1.5}, '<');
    tlA.from('.main-block__arrow-down', {opacity: 0, ease: "slow(0.7, 0.7, false)"}, '>-=1')
    
    //blobk-01\\
    //--------\\
    //block-02//
    const tlB = gsap.timeline();
    tlB.from('.advantage__left-image',{y:100, duration: 1});
    tlB.from('.advantage__left_text-container',{y:100, duration: 1}, '>-=0.5');
    tlB.from('.advantage__right-block_container',{y:100, duration: 1}, '>');

    //trigers -->
    
    ScrollTrigger.create({
        trigger: ".advantage",
        animation: tlB,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1
    });
    //blobk-02\\
    //--------\\
    //block-03//   
    const tlC = gsap.timeline();
    tlC.from('.gsap__block3_left-text',{x:-500, duration: 2});
    tlC.from('.chars__right-image',{x: 200, opacity: 0, duration: 2}, ">");
    tlC.from(".gsap__play_block3",{x: -200,ease: "circ.out" ,duration: 1});
    tlC.from(".gsap__play_block3",{opacity: 0, duration: 2}, '<');
    tlC.from('.chars__to-play', blinkOut, '<');
    tlC.from('.chars__play-wrapper .block__play-text', blinkOut, '>+=0.4');   
    //trigers -->
    
    ScrollTrigger.create({
        trigger: "#anchorC",
        animation: tlC,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 2
    });    
//block effects on scroll// /\/\/\

//cursor effect\\
const pointersList = ['menu__logo', 'scrol-view__circle', 'block__button', 'block__play-sign','advantage__play', 'menu__link']
window.addEventListener('mousemove', function(e){
    let pointer = false;
    let act = false;
    mouse.style.left = (e.x - 38) + 'px';
    mouse.style.top = (e.y - 39) + 'px';
    center.style.left = (e.x) + 'px';
    center.style.top = (e.y + 1) + 'px';
    if(pointersList.some(v => [...e.target.classList].includes(v))){
        
        pointer = true;
    }
    if(e.target.classList.contains('breakable')){
        act = true;
    }
    if(e.target.classList.contains('letter')){
        act = true;
        gsap.to(e.target, {
            opacity: 0, scale: "random(0.6,2)", 
            x: "random(-200,200)",
            y: "random(-200,200)",
            rotate: "random(-360,360)",
            repeat: 0,
            duration: 1,
            onComplete: ()=>{gsap.to(e.target, {
                x: 0,
                scale: 1, 
                rotate: 0,
                y: 0,
                repeat: 0,
                duration: 0.5,
                onComplete: ()=>{
                    gsap.to(e.target,{
                        opacity: 1, 
                        repeat: 0,
                        duration: "random(2,6)",
                        delay: "random(.5,3)",
                        ease: "power1.in"
                        })
                }
                })
                
            }
        })   
    }  
    if(act){
        mouse.style.animation = 'hit 1s linear infinite';
        mouse.style.filter = 'drop-shadow( 0px 0px 4px rgba(255, 230, 0, .7))';
        mouse.style.fill = 'red'; 
        mouse.style.opacity = 1; 
    } else {
        mouse.style.animation = 'run 2s linear infinite';
        mouse.style.fill = 'gray';
        mouse.style.opacity = 0.5;
        mouse.style.filter = 'none';
    }
    if(pointer){
        mouse.style.fill = '#ffee00'; 
        mouse.style.filter = 'drop-shadow( 0px 0px 4px rgba(0, 0, 0, .7))';
        mouse.style.opacity = 1;
        mouse.style.animation = 'run 3s linear infinite';
    } 
})

//\/\/\/\/\/\/\/\/\/\\/\/\/\/\
