const yesbtn = document.querySelector('#botonsi')
yesbtn.addEventListener('click', ()=>{
    alert('sabia que si qurias')
})
const nobtn = document.querySelector('#botonno')
nobtn.addEventListener('mouseover', ()=>{
    const randomX = Math.random()*90
    const randomY = Math.random()*90
    nobtn.style.position = 'absolute'
    nobtn.style.top = randomY+'%'
    nobtn.style.left = randomX+'%'
    nobtn.style.transform = 'translate(-${randomY}%)'
    nobtn.style.transform = 'translate(-${randomX}%)'
})