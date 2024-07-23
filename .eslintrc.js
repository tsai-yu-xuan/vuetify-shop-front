module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/standard'
  ],
  overrides: [
    {
      files: ['src/layouts/**', 'src/pages/**'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
