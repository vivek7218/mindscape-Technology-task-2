document.querySelector('.open').addEventListener('click',()=>{
document.querySelector('.nav-link').style.display='flex'; 
document .querySelector('.open').style.display='none'
document.querySelector('.close').style.display='inline-block'


})

document.querySelector('.close').addEventListener('click',()=>{
    document.querySelector('.nav-link').style.display='none'; //flex
    document .querySelector('.open').style.display='inline-block'
    document.querySelector('.close').style.display='none'

 })

 /*........inline......... */
  document.querySelector('.inline').addEventListener('click',()=>{
  document.querySelector('.inline  input').classList.toggle('red')


  })

 