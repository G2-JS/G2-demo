# 饼图（无统计）

----

## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [
    {type: '类型一',value: 10},
    {type: '类型二',value: 15},
    {type: '类型三',value: 15},
    {type: '类型四',value: 20},
    {type: '类型五',value: 40},
  ];
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data);
  chart.coord('theta');
  chart.intervalStack()
    .position('value')
    .color('type')
    .label('type', {offset: -10});; // 这个时候需要保证 value 的总和为 100
  chart.render();
```
