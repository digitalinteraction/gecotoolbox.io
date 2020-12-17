// from: https://github.com/robb-j/md-toc/
exports.slugify = function(value = '') {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

// exports.localeify = function(url) {
//   if (url.startsWith('http')) return url
//   return `/${this.ctx.locale}/${url}`
// }

// TODO: migrate to localeify
// e.g. 'some' | localify | url
exports.localeUrl = function(url) {
  if (url.startsWith('http')) return url
  return this.env.filters.url(`/${this.ctx.locale}/${url}`)
}

exports.swapLocaleSlug = function(url, newLocale) {
  return url.replace('/' + this.ctx.locale, '/' + newLocale)
}

exports.jsonify = function(data) {
  return JSON.stringify(data)
}
