const { h } = require('./utils')

exports.coverImage = function(src) {
  return h('div', { class: 'cover-image geco-card' }, [h('img', { src })])
}

exports.bigButton = function(href, text) {
  return h('div', { class: 'buttons is-centered is-padded' }, [
    h('a', { class: 'button is-info is-large', href }, [text])
  ])
}

exports.gecoService = function(name, url, image) {
  return h('div', { class: 'column is-half' }, [
    h('div', { class: 'card geco-card' }, [
      h('a', { href: url }, [
        h('div', {
          class: 'service-image',
          style: `background-image: url(${image});`
        })
      ])
    ])
  ])
}

exports.now = function() {
  return new Date().toLocaleDateString()
}

exports.vimeo = function(src) {
  return h('div', { class: 'geco-card cover-video' }, [
    h('div', { class: 'iframeEmbed' }, [
      h('iframe', {
        src: src,
        width: '100%',
        height: '100%',
        frameborder: '0',
        allow: 'autoplay; fullscreen; picture-in-picture',
        allowfullscreen: 'allowfullscreen'
      })
    ])
  ])
}
