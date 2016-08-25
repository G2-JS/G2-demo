# 层叠区域图

层叠面积图和基本面积图一样，唯一的区别就是图上每一个数据集的起点不同，起点是基于前一个数据集的。

- antVLink: https://antv.alipay.com/chart/details/stacked-area.html

----
## code

```html
<div id="c1">
</div>
```

```js
var G2 = require('g2');
var data = [
  {"name": "Nailpolish", "Florida": 12814, "Texas": 3054, "Arizona": 4376, "Nevada": 4229},
  {"name": "Eyebrowpencil", "Florida": 13012, "Texas": 5067, "Arizona": 3987, "Nevada": 3932},
  {"name": "Rouge", "Florida": 11624, "Texas": 7004, "Arizona": 3574, "Nevada": 5221},
  {"name": "Pomade", "Florida": 8814,  "Texas":9054, "Arizona": 4376, "Nevada": 9256},
  {"name": "Eyeshadows", "Florida": 12998, "Texas": 12043, "Arizona": 4572, "Nevada": 3308},
  {"name": "Eyeliner", "Florida": 12321, "Texas": 15067, "Arizona": 3417, "Nevada": 5432},
  {"name": "Foundation", "Florida": 10342, "Texas": 10119, "Arizona": 5231, "Nevada": 13701},
  {"name": "Lipgloss", "Florida": 22998, "Texas": 12043, "Arizona": 4572, "Nevada": 4008},
  {"name": "Mascara", "Florida": 11261, "Texas": 10419, "Arizona": 6134, "Nevada": 18712},
  {"name": "Powder", "Florida": 10261, "Texas": 14419, "Arizona": 5134, "Nevada": 25712}
];
var Frame = G2.Frame;
var frame = new Frame(data);
frame = Frame.combinColumns(frame,['Florida','Texas','Arizona','Nevada'],'Revenue','City','name');

var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500
});
chart.source(frame, {
  'Revenue': {
    alias: '销售总额（美元）',
    formatter: function(val) {
      return parseInt(val/1000, 10) + 'k';
    }
  },
  'name': {
    alias: '化妆品'
  }
});
chart.areaStack().position('name*Revenue').color('City');
chart.render();
```
