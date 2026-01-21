module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // ✅ Types sesuai SKILL.md
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']
    ],

    // ✅ Scope wajib ada dan lowercase
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],

    // ✅ Subject: max 72 chars, lowercase start, imperative mood
    'subject-max-length': [2, 'always', 72],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    // Note: subject-blacklist not supported in commitlint, generic descriptions prevented via convention

    // ✅ Body wajib ada, dengan blank line sebelum body
    'body-empty': [2, 'never'],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 300], // Allow longer body lines for detailed explanations

    // ✅ Footer untuk BREAKING CHANGE & issue refs
    'footer-leading-blank': [2, 'always'],

    // ❌ Jangan larang tanda seru (!) → breaking change marker
    'subject-exclamation-mark': [0],

    // ✅ Header format (buffer untuk scope panjang)
    'header-max-length': [2, 'always', 100]
  },

  parserPreset: {
    parserOpts: {
      // Support untuk ! pada akhir type(scope)
      headerPattern: /^(\w*)(?:\(([^)]*)\))?!?: (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  }
};
