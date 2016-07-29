
#component 模板

```bash
./
├── .eslintrc
├── .si.yml
├── HISTORY.md
├── Makefile
├── README.md
├── examples
│   ├── example-a.md
│   └── example-b.md
├── .gitignore
├── .npmignore
├── index.js
├── package.json
├── src
│   ├── component.js
│   ├── index.js
│   └── index.less
├── tests
│   └── index-test.js
└── webpack.config.js
```

* `.eslintrc` ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* `.si.yml` 如果该组件发布至内网，同时需要该组件的文档自动同步至 Si 那么请在该基础上修改相关内容, if dont understand this sentence delete this file XD
* `HISTORY.md` History release note.
* `Makefile` Publish to npm or xnpm, edit by yourself.
* `README.md` Component readme
* `examples` Doc dir/ .md file is the best practice.
* `.gitignore` git push ignore files
* `.npmignore` npm publish ignore files
* `index.js` Deploy to CDN 
* `package.json`
* `src` Source dir
* `tests` Test cases `*-test.js`
* `webpack.config.js` Atool-build need this file


> 本示例采用 ES-6，发布至 npm 源.

  一窥 `package.json`

  ```js

"scripts": {
  "compile": "rm -rf lib && babel src --out-dir lib && lessc src/index.less lib/index.css",
  "build": "atool-build",
  "lint": "eslint --ext .js src",
  "test": "atool-test",
  "doc": "atool-doc",
  "doc-build": "atool-doc --build",
  "gh-pages": "atool-doc --build && gh-pages -d __site"
},
"main": "./lib/index",
"entry": {
  "index": "./index"
}

```



* `compile` es6 -> es5, less -> css
* `build` Deploy to CDN, you have to compile code by using atool-build
* `lint` run eslint
* `test` run test cases 
* `doc` run doc server
* `doc-build` run doc build
* `gh-pages` push doc build result __site/ to github gh-pages


如果你的仓库需要发布至内网请在 pkg.name 中添加 namespace 例如： **@alipay/componeng-example**

并且在 pkg 中新建一个字段 **publishConfig**

```js
"publishConfig":{
  "registry": "http://registry.npm.alibaba-inc.com"
}
```

目录中 .si.yml 在同步 si 静态服务所用， 如果发布至 npm 的包可以使用 gh-pages 即可以删除该文件。


