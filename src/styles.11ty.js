const { join } = require('path')
const Sass = require('sass')

// ref: https://www.11ty.io/docs/languages/javascript/#classes
module.exports = class {
  data() {
    return {
      permalink: '/styles.css'
    }
  }

  render() {
    const { css } = Sass.renderSync({
      file: join(__dirname, '../sass/styles.scss'),
      includePaths: [join(__dirname, '../node_modules')],
      outputStyle: 'compressed'
    })

    return css
  }
}
