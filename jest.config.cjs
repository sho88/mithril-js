module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/test/**/*.test.js", "<rootDir>/src/**/*.test.js"],
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
}
