# 扰动点图

如果一个数据集中包含了一个分类变量和一个或多个连续变量，那么你可能会想知道连续变量会如何随着分类变量水平的变化而变化。

----

## code

```html
<div id="c1">
</div>
```

```js
  import data from '../data/diamond.json';
  var G2 = require('g2');
  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });

  chart.source(data);
  // 去除y轴的栅格线
  chart.axis('price',{
    grid: null
  });

  // x轴的栅格线居中
  chart.axis('cut',{
    grid: {
      line: {
        stroke: '#d9d9d9',
        'stroke-width': 2,
        'stroke-dasharray': [2, 6]
      }
    },
    gridAlign: 'middle'
  });
  chart.pointJitter().position('cut*price').color('cut');
  chart.render();
```
