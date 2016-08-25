# 简单的 treemap

矩形树图由马里兰大学教授Ben Shneiderman于上个世纪90年代提出，起初是为了找到一种有效了解磁盘空间使用情况的方法。 矩形树图适合展现具有层级关系的数据，能够直观体现同级之间的比较。

- antVLink: https://antv.alipay.com/chart/details/treemap.html

----

## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [
      {value: 6,name: '分类一'},
      {value: 6,name: '分类二'},
      {value: 4,name: '分类三'},
      {value: 3,name: '分类四'},
      {value: 2,name: '分类五'},
      {value: 2,name: '分类六'},
      {value: 1,name: '分类七'}
  ];

  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data);
  chart.tooltip({
    map: {
      title: 'name',
      value: 'value'
    }
  });
  chart.axis(false);
  chart.polygon().position(Stat.treemap('1*value')).color('name')
    .label('name', {
      label: {
        fontWeight: 'bold'
      }
    })
    .style({
      stroke: '#fff',
      'stroke-width': 1
    });
  chart.render();
```
