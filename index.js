module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "accessor-pairs": 2,
    "array-bracket-spacing": [2, "never"],
    "array-callback-return": 2,
    "arrow-body-style": [2, "as-needed"],
    "arrow-spacing": [2, { "before": true, "after": true }],
    "block-scoped-var": 2,
    "block-spacing": 2,
    "brace-style": [2, "1tbs"],
    "camelcase": [2, { properties: "never" }],
    "comma-spacing": [2, { "before": false, "after": true }],
    "comma-style": [2, "last"],
    "consistent-return": 2,
    "constructor-super": 2,
    "curly": [2, "multi-line"],
    "default-case": 2,
    "dot-location": [2, "property"],
    "dot-notation": 2,
    "eol-last": 2,
    "eqeqeq": 2,
    "guard-for-in": 2,
    "indent": [2, 2, { "SwitchCase": 1 }],
    "jsx-quotes": [2, "prefer-double"],
    "keyword-spacing": 2,
    "max-len": [2, 120],
    "no-array-constructor": 2,
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-const-assign": 2,
    "no-constant-condition": 1,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-duplicate-imports": 2,
    "no-else-return": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-empty-function": 2,
    "no-empty-pattern": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-label": 2,
    "no-extra-parens": 2,
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-labels": 0,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": [2, { exceptions: { "VariableDeclarator": true, "Property": false } }],
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-symbol": 2,
    "no-new-symbol": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-undef": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unused-labels": 2,
    "no-unused-vars": 2,
    "no-use-before-define": [2, "nofunc"],
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-constructor": 2,
    "no-useless-escape": 2,
    "no-var": 2,
    "object-curly-spacing": [2, "always"],
    "object-shorthand": 2,
    "object-shorthand": [2, "always"],
    "padded-blocks": [2, "never"],
    "prefer-const": 2,
    "prefer-rest-params": 2,
    "prefer-spread": 1,
    "quote-props": [2, "as-needed"],
    "quotes": [2, "single", { "allowTemplateLiterals": true }],
    "radix": [2, "always"],
    "require-yield": 2,
    "semi": [2, "never"],
    "space-before-blocks": 2,
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": [2, "always"],
    "template-curly-spacing": 2,
    "use-isnan": 2,
    "valid-typeof": 2
  }
}
