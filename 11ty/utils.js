const selfClosingTags = new Set(['img', 'br', 'input'])

exports.h = function(element, attrs = {}, children = []) {
  const attributes = Object.keys(attrs)
    .map(key => `${key}="${attrs[key]}"`)
    .join(' ')

  const closingTag = selfClosingTags.has(element) ? '' : `</${element}>`
  return `<${element} ${attributes}>${children.join('')}${closingTag}`
}
