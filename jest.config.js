module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/dist/test/**/*.test.js"],
    testPathIgnorePatterns: ["/node_modules/"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["lcov"],
};