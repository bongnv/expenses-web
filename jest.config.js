module.exports = {
  setupFiles: ["<rootDir>/tests/unit/setup.ts"],
  testMatch: ["**/*.test.ts"],
  collectCoverage: true,
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel"
};
