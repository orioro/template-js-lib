yarn add --dev \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-plugin-jest \
  eslint-config-prettier \
  prettier \
  husky

npx husky install
npx husky add .husky/pre-commit 'yarn ci-check'
