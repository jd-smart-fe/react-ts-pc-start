/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-27 11:13:16
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-09-29 11:41:48
 */
module.exports = {
  env: {
    //指定代码的运行环境
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser', // 指定 Eslint 解析器
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'modules',
    ecmaFeatures: {
      jsx: true,
      useJSXTextNode: true
    },
    project: './tsconfig.json'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended', //使用@typescript-eslint/recommended推荐的规则
    'react-app',
    'prettier/@typescript-eslint', // 使用 eslint-config-prettier 禁用 @typescript-eslint/eslint-plugin 中与prettier中冲突的规则
    'plugin:prettier/recommended' // 必须在配置文件的extends 的最后一行。启用eslint-plugin-prettier，并且把prettier的错误提示展示为Eslint错误
  ],
  plugins: ['@typescript-eslint', 'react'],
  settings: {
    "import/extensions": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx"
    ],
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/no-use-before-define": ["error", { "functions": false, "classes": false }],
    "@typescript-eslint/prefer-interface" : "off",
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'no-console': 0,
    "prettier/prettier": ["error", { "singleQuote": true }]
  }
};
