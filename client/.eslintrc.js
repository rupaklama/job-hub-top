module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react", "prettier"],
  rules: {
    "no-console": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "consistent-return": "off",
  },
};
