const markdown = require('markdown-it')
const markdownAnchor = require('markdown-it-anchor')

const filters = require('./11ty/filters')
const shortcodes = require('./11ty/shortcodes')
const pairedShortcodes = require('./11ty/paired-shortcodes')

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./sass/')
  eleventyConfig.addPassthroughCopy('static')

  const md = markdown({
    html: true,
    breaks: false,
    linkify: false
  })

  md.disable('code')
  md.use(markdownAnchor, { slugify: filters.slugify })

  eleventyConfig.setLibrary('md', md)

  for (const [key, value] of Object.entries(filters)) {
    eleventyConfig.addFilter(key, value)
  }

  for (const [key, value] of Object.entries(shortcodes)) {
    eleventyConfig.addShortcode(key, value)
  }

  for (const [key, value] of Object.entries(pairedShortcodes)) {
    eleventyConfig.addPairedShortcode(key, value)
  }

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
