module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
    '!src/pages/_*.js',
    '!coverage/**',
    '!src/.next/**',
    '!server/**',
    '!<rootDir>/i18n.js',
    '!<rootDir>/next.config.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/src/.next',
    '<rootDir>/node_modules/',
    '<rootDir>/next.config.js',
    '<rootDir>/coverage/',
    '<rootDir>/server/',
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  testRegex: 'tests/.*\\.test\\.js$',
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest-dom-extend-expect'],
  snapshotSerializers: [],
};
