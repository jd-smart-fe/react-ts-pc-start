/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-29 14:16:33
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-09-29 15:46:31
 */
module.exports = {
  env: { //指定代码的运行环境
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended', //使用@typescript-eslint/recommended推荐的规则
    'react-app',
    'prettier/@typescript-eslint', // 使用 eslint-config-prettier 禁用 @typescript-eslint/eslint-plugin 中与prettier中冲突的规则
    'plugin:prettier/recommended' // 必须在配置文件的extends 的最后一行。启用eslint-plugin-prettier，并且把prettier的错误提示展示为Eslint错误
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',

  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
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
    "no-param-reassign": [2, {"props": false}],
    "prefer-default-export": 'off',
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
