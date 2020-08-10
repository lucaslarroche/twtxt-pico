/*!
 * Theme Switcher
 */

(function() {

  /**
   * Config
   */

  var switcher = {
    link: {
      on:         'Dark mode',
      off:        'Light mode'
    },
    target:       'footer .right small', // Target to append button
    selector:     'a.theme-switcher',    // Button selector
    currentTheme: systemColorScheme()
  };



  /**
   * Init
   */

  themeSwitcher();



  /**
   * Get System Color Scheme
   *
   * @return {string}
   */

  function systemColorScheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    else {
      return 'light';
    }
  }



  /**
   * Display Theme Switcher
   */

  function themeSwitcher() {

    // Insert Switcher
    var target = document.querySelector(switcher.target);
    target.innerHTML = target.innerHTML + '<br><a href="javascript:void(0);" class="contrast theme-switcher">Test</a>';

    // Set Current Theme
    setTheme(switcher.currentTheme);

    // Click Listener on Switcher
    var switchers = document.querySelectorAll(switcher.selector);
    for (var i = 0; i < switchers.length; i++) {
      switchers[i].addEventListener('click', function(event) {

        // Switch Theme
        if (switcher.currentTheme == 'light') {
          setTheme('dark');
        }
        else {
          setTheme('light');
        }

      }, false);
    }
  }



  /**
   * Set Theme
   *
   * @param {string} set
   */

  function setTheme(set) {

    // Text toggle
    if (set == 'light') {
      var label = switcher.link.on;
    }
    else {
      var label = switcher.link.off;
    }

    // Apply theme
    document.querySelector('html').setAttribute('data-theme', set);
    var switchers = document.querySelectorAll(switcher.selector);
    for (var i = 0; i < switchers.length; i++) {
      switchers[i].innerHTML = label;
      switchers[i].setAttribute('aria-label', stripTags(label));
    }
    switcher.currentTheme = set;
  }



  /**
   * Strip tags
   *
   * @param {string} html
   * @return {string}
   */

  function stripTags(html) {
    return html.replace(/<[^>]*>?/gm, '');
  }

})();
