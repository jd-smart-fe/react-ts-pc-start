<!--
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-27 10:27:28
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-09-27 14:40:29
 -->
# react-ts-pc-start
> PC端H5开发规范模板

### ts-lint：
+ xxx(配置规则): if else 必须换行(配置解释)


```
{
  "interface-name" : [false],
  "no-console":false, // 可以使用console
  "no-debugger":false, // 允许使用debugger
  "indent":[true, "spaces", 2], // 使用space进行缩进，每次强制缩进2个字符
  "no-consecutive-blank-lines": [
    true,
    2
  ], // 最多允许两个空行
  "jsx-no-lambda": false,

  "object-literal-sort-keys": false,

  "ordered-imports": false,
  "no-string-literal": false,
  "semicolon":[true, "always", "ignore-interfaces"], // 需要使用分号
  "quotemark":[true, "single","avoid-escape","jsx-double"] // 使用单引号
},
```

### 第三方包（默认不安装，按需自行install）：
(注意实际用的时候可以按需导入相应内部模块)
+ moment.js：一个 JavaScript 日期处理类库
+ lodash.js：一个一致性、模块化、高性能的 JavaScript 实用工具库


### 引入错误边界

[Error Boundaries](https://zh-hans.reactjs.org/docs/error-boundaries.html)

### 代码规范

### JS部分
##### 1. 命名规范
- JS采用小驼峰命名 (camelCase) `categoryList`
- 避免名称冗余
```js
// good
  const cat = {
    name: 'ketty',
    age: 1
  }
// bad
  const dog = {
    dogName: 'Jim',
    dogAge: 2
  }
```
- 语义化命名

| 动词 | 含义 |
|------|-----|
| can  | 判断是否具有某种能力 |
| has  | 判断是否包含某个属性或值 |
| is  | 判断是否为某个值 |
| get | 获取值 |
| set | 获取值 |
