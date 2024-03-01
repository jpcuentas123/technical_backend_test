module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    'single-spa-react/parcel': 'single-spa-react/lib/cjs/parcel.cjs',
    '@config/(.*)': '<rootDir>/src/config/$1',
    '@riders/(.*)': '<rootDir>/src/modules/riders/$1',
    '@drivers/(.*)': '<rootDir>/src/modules/drivers/$1',
    '@middlewares/(.*)': '<rootDir>/src/middlewares/$1',
    '@root/(.*)': '<rootDir>/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@shared/(.*)': '<rootDir>/src/modules/shared/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: [
    '<rootDir>/tests/**/*.test.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/src/utils/setup-jest.ts'],
}
