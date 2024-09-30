// jest.config.js
module.exports = {
    testEnvironment: 'jest-environment-jsdom',  // Use jsdom for browser-like environment
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',  // Use ts-jest to transform TS and JS files
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],  // Don't transform node_modules
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',  // Map alias paths (if needed)
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],  // Jest setup
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],  // Ignore these folders
  };
  