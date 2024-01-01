


const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
    })
}
navSlide();


/*

//Scroll reveal start
ScrollReveal({
    reset: true,
distance: '100px',//was 60
duration:300,//it was 2500
delay:300, //it was 400
})
//ScrollReveal().reveal('h4,h3', { delay: 500, origin:'top'});
ScrollReveal().reveal('h6', { delay: 500, origin:'bottom'});
ScrollReveal().reveal('p', { delay: 500, origin:'bottom'});
ScrollReveal().reveal('.title h2', { delay: 500, origin:'bottom'});
ScrollReveal().reveal('.hero', { delay: 600, origin:'top'});
ScrollReveal().reveal('.main img', { delay: 600, origin:'bottom'});
ScrollReveal().reveal('.main p', { delay: 700, origin:'bottom'});
ScrollReveal().reveal('.card', { delay: 600, origin:'bottom', 'interval':100});
ScrollReveal().reveal('.about a', { delay: 400, origin:'bottom', 'interval':200});


*/


