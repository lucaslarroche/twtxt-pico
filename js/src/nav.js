/*!
 * Toggle nav
 */

(function() {

  /**
   * Config
   */

  var linkNav = document.querySelector('#toogleNav');
  var nav = document.querySelector('#nav');



  /**
   * Init
   */

  initNav();



  /**
   * Init Nav
   * Click listener for nav
   */

  function initNav() {
    linkNav.addEventListener('click', function(event) {
      event.preventDefault();
      toggleNav();
    }, false);
  }



  /**
   * Toggle Nav
   */

  function toggleNav() {
    if (nav.classList.contains('close') == true) {
      openNav();
    }
    else {
      closeNav();
    }
  }



  /**
   * Open Nav
   */

  function openNav() {
    nav.classList.remove('close');

    // Close if click outside nav
    setTimeout(function() {
      document.addEventListener('click', closeIfOutside, false);
    }, 100);
  }



  /**
   * Close Nav
   */

  function closeNav() {
    nav.classList.add('close');

    // Remove close if click outside nav
    document.removeEventListener('click', closeIfOutside, false);
  }



  /**
   * Close nav if click outside
   */

  function closeIfOutside() {
    var isClickInside = nav.contains(event.target);
    if (!isClickInside) {
      closeNav();
    }
  }

})();
