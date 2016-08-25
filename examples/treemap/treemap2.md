# 层次的 treemap

矩形树图由马里兰大学教授Ben Shneiderman于上个世纪90年代提出，起初是为了找到一种有效了解磁盘空间使用情况的方法。 矩形树图适合展现具有层级关系的数据，能够直观体现同级之间的比较。

- antV: https://antv.alipay.com/chart/details/treemap.html

----

## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [
      {value: 6,name: '名称一',type: '类型一',children: [{value: 3,type: '类型一',name: '名称一一'},{value: 2,type: '类型一',name: '名称一二'},{value: 1,type: '类型一',name: '名称一三'}]},
      {value: 6,name: '名称二',type: '类型二'},
      {value: 4,name: '名称三',type: '类型三'},
      {value: 3,name: '名称四',type: '类型四',children: [{value: 2,type: '类型四',name: '名称四一'},{value: 1,type: '类型四',name: '名称四二'}]},
      {value: 2,name: '名称五',type: '类型五'},
      {value: 2,name: '名称六',type: '类型六'},
      {value: 1,name: '你好么，亲爱你好',type: '类型七'}
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
      title: 'type',
      name: 'name',
      value: 'value'
    }
  });
  chart.axis(false);
  // 统计函数自动生成 ..level字段
  chart.polygon().position(Stat.treemap('children*value')).color('type')
    .label('name*children',function (name, children) { // 仅显示没有子节点的名称
      if (!children) {
          return name;
      }
    }, {
      label: {
        fontWeight: 'bold'
      }
    }).style({
      stroke: '#fff',
      'stroke-width': 1
    });;

  chart.render();
```
