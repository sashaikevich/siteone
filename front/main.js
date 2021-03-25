import './style/main.scss'

const instalink = "https://www.instagram.com/SiteOneGroup";

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
      window.location.href = instalink;
      // console.log('redirect');
    }, 6000) // equals animation duration (6s)
  }, 3000) // equals animation delay

  function cancelRedirection(e) {
    e.preventDefault();
    document.querySelector('.progress-bar-wrapper').remove();
    cancelEl.remove();
    document.querySelector('.auto-redirect').innerHTML = `<a class="go-to-gram" href=${instalink}>check out our <i class="fab fa-instagram fa-lg"></i></a>`;

    clearTimeout(redirectTimeout);
  }

})

if (module.hot) {
  module.hot.accept();
}

