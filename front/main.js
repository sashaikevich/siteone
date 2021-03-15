import './style/main.scss'

window.addEventListener('load', ()=>{
  document.body.classList.add('loaded');
  // setTimeout(()=>{
  //   // reveal image background 
  //   document.querySelector('.img-bg-wrapper').classList.add('loaded')
  // },2000)
})

if (module.hot) {
  module.hot.accept();
}

