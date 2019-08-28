{ "extends": "eslint-config-airbnb",
  "env": {
    "browser": false,
    "node": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "no-await-in-loop": 0,
    "no-restricted-syntax": 0,
    "global-require": 0,
    "no-param-reassign": 0,
    "new-cap": 0,
    "func-names": 0,
    "import/default": 0,
    "import/no-duplicates": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 0,
    "comma-dangle": 0,  // not sure why airbnb turned this on. gross!
    "indent": [2, 2, {"SwitchCase": 1}],
    "no-console": 0,
    "no-alert": 0,
    "no-unused-expressions": 0,
    "no-underscore-dangle": 0,
    "arrow-body-style": 0,
    "arrow-parens": [2, "always"]
  },
  "plugins": [
    "react", "import"
  ]
}
