# react-ts-pc-start

> PC 端 H5 开发规范模板

### 工程文件组织

```
components/  (应用级别的通用组件)
containers/
  feature1/
    components/  (功能拆分出的专用组件)
    feature1.js  (容器组件)
    index.js     (feature1对外暴露的接口)
redux/
  index.js (combineReducers)
  module1.js (reducer, action types, actions creators)
  module2.js (reducer, action types, actions creators)
index.js
```

应用 Ducks 工程目录组织方式的思想，《React 进阶之路》一书的示例代码第 9 章，项目 bbs-redux-reselect 工程目录结构如下：

```
│  index.js
│
├─components # 全局通用组件
│  ├─Header
│  │      index.js
│  │      style.css
│  │
│  ├─Loading
│  │      index.js
│  │      style.css
│  │
│  └─ModalDialog
│          index.js
│          style.css
│
├─containers
│  ├─App
│  │      index.js
│  │
│  ├─Home
│  │      index.js
│  │
│  ├─Login
│  │      index.js
│  │      style.css
│  │
│  ├─Post
│  │  │  index.js # Post 容器组件
│  │  │  style.css
│  │  │
│  │  └─components # Post 专用组件
│  │      ├─CommentList
│  │      │      index.js
│  │      │      style.css
│  │      │
│  │      ├─CommentsView
│  │      │      index.js
│  │      │      style.css
│  │      │
│  │      ├─PostEditor
│  │      │      index.js
│  │      │      style.css
│  │      │
│  │      └─PostView
│  │              index.js
│  │              style.css
│  │
│  └─PostList
│      │  index.js # PostList 容器组件
│      │  style.css
│      │
│      └─components # PostList 专用组件
│          ├─PostItem
│          │      index.js
│          │      style.css
│          │
│          └─PostsView
│                  index.js
│
├─images
│      like-default.png
│      like.png
│
├─redux
│  │  configureStore.js
│  │
│  └─modules
│          app.js
│          auth.js
│          comments.js
│          index.js
│          posts.js
│          ui.js
│          users.js
│
└─utils
        AsyncComponent.js
        connectRoute.js
        date.js
        request.js
        SHA1.js
        url.js
```

### ts-lint：

- xxx(配置规则): if else 必须换行(配置解释)

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

### 第三方包（默认不安装，按需自行 install）：

(注意实际用的时候可以按需导入相应内部模块)

- moment.js：一个 JavaScript 日期处理类库
- lodash.js：一个一致性、模块化、高性能的 JavaScript 实用工具库

### 注意事项

- 文件目录不要和模块名冲突，比如建立 redux 目录，这会导致 TS 导出的 redux 模块定义出现问题
