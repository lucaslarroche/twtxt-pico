/*!
 * New post
 */

(function() {

  /**
   * Init
   */

  newPost();



  /**
   * New post
   * Clicks listeners for new post buttons
   */

  function newPost() {
    var newPost = document.querySelectorAll('button.new-post');
    for (var i = 0; i < newPost.length; i++) {
      newPost[i].addEventListener('click', function(event) {
        openEditor();
      }, false);
    }
  }


  /**
   * Open Editor
   */

  function openEditor() {

    // Elements
    var editor = document.querySelector('article.editor');
    var textarea = document.querySelector('form textarea');
    var button = document.querySelector('form button');

    // Display
    editor.style.display = 'block';

    // Add shake animation
    textarea.classList.add('animated');
    textarea.classList.add('headShake');
    button.classList.add('animated');
    button.classList.add('headShake');

    // Remove shake
    setTimeout(function() {
      textarea.classList.remove('animated');
      textarea.classList.remove('headShake');
      button.classList.remove('animated');
      button.classList.remove('headShake');
    }, 500);

    // Focus
    textarea.focus();

    // Scroll to top
    setTimeout(function() {
      document.querySelector('body').scrollIntoView();
    }, 200);
  }

})();
