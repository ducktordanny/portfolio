/* eslint-disable */
export default {
  displayName: 'api-me-data-access-me',
  preset: '../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../../coverage/libs/api/me/data-access-me',
  testEnvironment: 'node',
};
