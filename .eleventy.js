module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('static')

  return {
    dir: {
      input: 'site',
      output: 'dist',
      layouts: '_layouts'
    },
    templateFormats: ['md', '11ty.js', 'njk']
  }
}
