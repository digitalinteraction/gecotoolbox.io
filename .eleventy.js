const markdown = require('markdown-it')
const markdownAnchor = require('markdown-it-anchor')

// from: https://github.com/robb-j/md-toc/
function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

const selfClosing = new Set(['img', 'br', 'input'])

function h(element, attrs = {}, children = []) {
  const attributes = Object.keys(attrs)
    .map(key => `${key}="${attrs[key]}"`)
    .join(' ')

  const closingTag = selfClosing.has(element) ? '' : `</${element}>`
  return `<${element} ${attributes}>${children.join('')}${closingTag}`
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('static')

  const md = markdown({
    html: true,
    breaks: false,
    linkify: false
  })

  md.disable('code')
  md.use(markdownAnchor, { slugify })

  eleventyConfig.setLibrary('md', md)

  eleventyConfig.addShortcode('coverImage', src => {
    return h('div', { class: 'cover-image geco-card' }, [h('img', { src })])
  })

  eleventyConfig.addShortcode('bigButton', (href, text) => {
    return h('div', { class: 'buttons is-centered is-padded' }, [
      h('a', { class: 'button is-info is-large', href }, [text])
    ])
  })

  eleventyConfig.addPairedShortcode('gecoServices', body => {
    return `<div class="columns is-multiline">${body}</div>`
  })
  eleventyConfig.addShortcode('gecoService', (name, url, image) => {
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
  })

  eleventyConfig.addFilter('localeUrl', function(url) {
    return this.env.filters.url(`/${this.ctx.locale}/${url}`)
  })

  eleventyConfig.addFilter('swapLocaleSlug', function(url, newLocale) {
    return url.replace('/' + this.ctx.locale, '/' + newLocale)
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts'
    },
    templateFormats: ['md', '11ty.js', 'njk'],
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  }
}
