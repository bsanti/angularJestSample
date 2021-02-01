module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  rootDir: '.',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/'
  ],
};
