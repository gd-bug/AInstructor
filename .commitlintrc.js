module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Types sesuai SKILL.md
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']
    ],
    // Scope wajib ada
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [2, 'never'],
    // Subject: max 72 chars, lowercase start
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'subject-max-length': [2, 'always', 72],
    // Body wajib
    'body-leading-blank': [2, 'always'],
    'body-empty': [2, 'never'],
    // Footer untuk BREAKING CHANGE
    'footer-leading-blank': [1, 'always'],
    // Allow ! untuk breaking changes
    'subject-exclamation-mark': [1, 'never'],
    // Header format
    'header-max-length': [2, 'always', 100] // Allow some buffer for scope
  },
  parserPreset: {
    parserOpts: {
      // Support untuk ! pada akhir type(scope)
      headerPattern: /^(\w*)(?:\(([^)]*)\))?!?: (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  }
};
