module.exports = {
  setupFiles: ["<rootDir>/tests/unit/setup.ts"],
  testMatch: ["**/(*.)test.ts"],
  collectCoverage: true,
  moduleNameMapper: {
    "^vuetify/lib$": "vuetify"
  },
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel"
};
