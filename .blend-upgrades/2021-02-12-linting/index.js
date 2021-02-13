module.exports = {
  packageJson: previous => ({
    ...previous,
    devDependencies: {
      ...previous.devDependencies,
      '@typescript-eslint/eslint-plugin': '^4.15.0',
      '@typescript-eslint/parser': '^4.15.0',
      'eslint': '^7.20.0',
      'eslint-config-prettier': '^7.2.0',
      'eslint-plugin-jest': '^24.1.3',
    }
  }),
  createFiles: ['files/**/*']
}
