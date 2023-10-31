const enjoy = document.querySelector('#enjoy')
const form = document.querySelector('#form')




form.addEventListener('click', (e)=>{
   e.preventDefault()
})



enjoy.addEventListener('click', ()=>{
    enjoy.className = 'animate__animated animate__rubberBand'
})


