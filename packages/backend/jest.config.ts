import { name } from './package.json'

export default {
  clearMocks: true,
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  setupFiles: ['dotenv/config'],
  displayName: name,
  testEnvironment: 'node',
  name
}
