module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "@vue/airbnb",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-param-reassign": ["error", { props: false }],
    "import/prefer-default-export": "off"
  },
  overrides: [
    {
      files: ["**/*.test.ts"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true }
        ]
      },
      env: {
        jest: true
      }
    }
  ]
};
