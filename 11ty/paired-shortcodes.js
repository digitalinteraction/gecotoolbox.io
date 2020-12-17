const { h } = require('./utils')

exports.gecoServices = function(body) {
  return h('div', { class: 'columns is-multiline' }, [body])
}
