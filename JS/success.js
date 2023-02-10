function geturl() {
  const redirectBtn = document.querySelector('#redirectBtn')
  let redirect_url =
    'http://localhost/xampp/PHP-NEW-PROJECT/Portfolio-Website-Two/assets/index.php'

  function set_direction(event) {
    event.preventDefault()
    window.location.replace(redirect_url)
  }

  redirectBtn.addEventListener('click', function (event) {
    set_direction(event)
  })
}
