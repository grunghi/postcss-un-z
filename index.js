/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  return {
    postcssPlugin: 'postcss-un-z',

    Root (root) {
      root.walkRules((rule) => {
        rule.walkDecls((decl) => {
          if (decl.prop === 'u-index') {
            decl.prop = 'z-index'
          }
        })
      })
    }
  }
}

module.exports.postcss = true
