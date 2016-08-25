# 指定范围的直方图

----
## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [
    {a : [0,5],b : 10},
    {a : [5,10],b : 3},
    {a : [10,15],b : 6},
    {a : [15,20],b : 8},
    {a: [20,25],b: 4}
  ];
  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  var defs = {
    b: {min: 0}
  };
  chart.source(data,defs);
  chart.interval().position('a*b').shape('hollowRect');
  chart.render();
```
