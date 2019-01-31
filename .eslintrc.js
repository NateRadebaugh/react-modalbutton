module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  plugins: ["react", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  settings: {
    react: {
      version: "16.7.0"
    }
  },
  rules: {
    // Enforce prettier formatting
    "prettier/prettier": "error",

    // We do not require prop types
    "react/prop-types": "off",

    // Catch usages of non-defined (forgotten imports) as errors at compile time
    "no-undef": "error",

    // Warn if any var is used (prefer let or const)
    "no-var": "warn",

    // Warn if there is an unused variable
    "no-unused-vars": ["warn", { ignoreRestSiblings: true, args: "none" }],

    // Error if there is a console output
    "no-console": "error",

    // Error if there is a debugger
    "no-debugger": "error",

    // Disallow arrow functions in render functions
    "react/jsx-no-bind": "warn",

    // It's OK if we lose display names for now
    "react/display-name": "warn",

    // Disallow inconsistent returns
    "consistent-return": "error"
  }
};
