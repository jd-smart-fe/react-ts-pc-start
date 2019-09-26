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
