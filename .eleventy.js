const markdown = require('markdown-it')
const markdownAnchor = require('markdown-it-anchor')

// from: https://github.com/robb-j/md-toc/
function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
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
    return `<div class="cover-image"><img src="${src}"></div>`
  })

  eleventyConfig.addShortcode('bigButton', (href, text) => {
    const button = `<a class="button is-info is-large" href="${href}">${text} →</a>`
    const buttons = `<div class="buttons is-centered is-padded">${button}</div>`
    return buttons
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
