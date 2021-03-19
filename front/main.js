import './style/main.scss'

window.addEventListener('load', () => {
  document.body.classList.add('loaded');

  const redWrap = document.querySelector('.redirection-wrapper');

  let redirectTimeout;
  const cancelEl = document.createElement('a');
  cancelEl.innerText = "cancel";
  cancelEl.setAttribute("href", "#");
  cancelEl.addEventListener('click', cancelRedirection);


  setTimeout(() => {
    // rediret to insta
    redWrap.classList.add('visible');
    redWrap.appendChild(cancelEl);
    redirectTimeout = setTimeout(() => {
      // window.location.href = "http://www.instagram.com";
      console.log('redirect');
    }, 6000) // equals animation duration (6s)
  }, 3000) // equals animation delay

  function cancelRedirection(e) {
    e.preventDefault();
    document.querySelector('.auto-redirect').classList.remove('visible')
    document.querySelector('.manual-redirect').classList.add('visible')
    clearTimeout(redirectTimeout);
  }

})

if (module.hot) {
  module.hot.accept();
}

