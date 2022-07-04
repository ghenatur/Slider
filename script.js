



const btnScript=document.querySelector('.script')
const btnHTML=document.querySelector('.html')
const btnCSS=document.querySelector('.css')
const sliderLine=document.querySelector('.slider')
const scroll=document.querySelector('.scroll')



btnHTML.addEventListener('click', ()=>{
    document.body.style.backgroundColor='#e1abb7'
    sliderLine.style.marginLeft='-600px'
    scroll.style.marginLeft='200px'
    btnHTML.classList.add('connect')
    btnCSS.classList.remove('connect')
    btnScript.classList.remove('connect')
})
btnCSS.addEventListener('click', ()=>{
    document.body.style.backgroundColor='#7dc9fc'
    sliderLine.style.marginLeft='-300px'
    scroll.style.marginLeft='100px'
    btnHTML.classList.remove('connect')
    btnCSS.classList.add('connect')
    btnScript.classList.remove('connect')
})
btnScript.addEventListener('click', ()=>{
    document.body.style.backgroundColor='#f7e03b'
    sliderLine.style.marginLeft='0'
    scroll.style.marginLeft='0'
    btnHTML.classList.remove('connect')
    btnCSS.classList.remove('connect')
    btnScript.classList.add('connect')
})