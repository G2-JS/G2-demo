## code

```html
<div id="c1">
</div>
```

```js
var G2 = require('g2');
var data = [
  {action:'访问',visitor:500},
  {action:'浏览',visitor:400},
  {action:'交互',visitor:300},
  {action:'下单',visitor:200},
  {action:'付款',visitor:100}
];

var chart = new G2.Chart({
  id: 'c1',
  width: 800,
  height: 400
}); // 创建图表对象
chart.source(data); // 载入数据，所有的数据都储存在 data 变量中
chart.interval().position('action*visitor').color('action');
chart.render(); // 渲染图表
```

## 一个简单的开始
