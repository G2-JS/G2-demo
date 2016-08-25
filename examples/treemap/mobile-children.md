# 手机占比(详细)

矩形树图由马里兰大学教授Ben Shneiderman于上个世纪90年代提出，起初是为了找到一种有效了解磁盘空间使用情况的方法。 矩形树图适合展现具有层级关系的数据，能够直观体现同级之间的比较。
- antVLink: https://antv.alipay.com/chart/details/treemap.html

----

## code

```html
<div id="c1">
</div>
```

```js
  import data from '../data/mobile.json';
  var G2 = require('g2');

  // 因为只有第一层的手机数据存在品牌（brand）字段，所以，将所有手机型号，增加brand字段
  function processData (data) {
    for(var i = 0; i < data.length ; i++) {
      var node = data[i];
      if (node.children) {
        for (var j = 0; j < node.children.length; j++) {
          node.children[j].brand = node.brand;
        }
      }
    }
  }

  processData(data);

  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data);
  chart.tooltip({
    map: {
      title: 'brand',
      name: 'name',
      value: 'value'
    }
  });

  chart.axis(false);
  chart.legend(false);
  // 需要将显示tooltip的字段加到语法中，否则无法取到对应的字段例如 name
  chart.polygon().position(Stat.treemap('children*value*name')).color('brand')
        .label('brand*..level*value',function(name, level, value){
          if (level === 0 && value > 0.2) { // 只有第一层的，同时占比超过 0.2
            return name;
          }
        },
        {
          offset: 2,
          label:{'fontSize': 12, 'fontWeight': 'bold'}
        }).style({
          stroke: '#fff',
          'stroke-width': 1
    });

  chart.render();
```
