# twtxt-pico

[twtxt-pico](https://github.com/lucaslarroche/twtxt-pico) is a design system for [twtxt](https://github.com/prologic/twtxt) built with [pico](https://github.com/picocss/pico) ([MIT License](https://github.com/lucaslarroche/twtxt-pico/blob/master/LICENSE.md))

## Pages
- [News feed](https://lucaslarroche.github.io/twtxt-pico/)
- [Login](https://lucaslarroche.github.io/twtxt-pico/login.html)

## Limitations
As a custom build, twtxt-pico does not use the following pico components :
- `<header>` and `<footer>` inside [`<article>`](https://picocss.com/docs/#cards)
- [`<nav>`](https://picocss.com/docs/#navs)

## Technical notes
- [lib/pico/](https://github.com/lucaslarroche/twtxt-pico/tree/master/lib/pico): pico library is unchanged. All customs styles  are in [scss/](https://github.com/lucaslarroche/twtxt-pico/tree/master/scss)
- [scss/twtxt.scss](https://github.com/lucaslarroche/twtxt-pico/blob/master/scss/twtxt.scss) and [js/twtxt.js](https://github.com/lucaslarroche/twtxt-pico/blob/master/js/twtxt.js) have to be compiled
- We use [prepros compiler](https://prepros.io/) for this build ([config file here](https://github.com/lucaslarroche/twtxt-pico/blob/master/prepros-6.config))
