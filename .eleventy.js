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

  return {
    dir: {
      input: 'site',
      output: 'dist',
      layouts: '_layouts'
    },
    templateFormats: ['md', '11ty.js', 'njk']
  }
}
