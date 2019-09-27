(function toggler() {
  var buttonToggler = document.querySelector('.main-nav__toggle');
  var menuListItem = document.querySelectorAll('.main-nav__item');
    buttonToggler.addEventListener('click', function(){
      for (var i = 1; i < menuListItem.length; i++) {
        menuListItem[i].classList.toggle('disable');
        buttonToggler.classList.toggle('main-nav__toggle--open');
      }
  }, false);
})()
