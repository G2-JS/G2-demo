# 一维扰动点图

 散点图也叫 X-Y 图，它将所有的数据以点的形式展现在笛卡尔坐标系上，以显示变量之间的相互影响程度，点的位置由变量的数值决定。
- antVLink: https://antv.alipay.com/chart/details/scatter-plot.html

----

## code

```html
<div id="c1">
</div>
```

```js
  import data from '../data/diamond.json';
  var G2 = require('g2');
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data);
  chart.pointJitter().position('clarity').color('clarity');
  chart.render();
```
