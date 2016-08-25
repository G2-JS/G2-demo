# log 度量

----

## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [
    {a: '1',b: 0.1},
    {a: '2',b: 100},
    {a: '3',b: 10000},
    {a: '4',b: 1000000}
  ];

  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });

  chart.source(data,{ // 列定义
    'b': { // 指定类型是 log
      type: 'log',
      min: 0.01,
      base: 10 // 指定10为底
    }
  });
  
  chart.line().position('a*b');
  chart.point().position('a*b').label('b');
  chart.render();
```
