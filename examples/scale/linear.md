# 指定最大、最小值

----
## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [
    {a: '1',b: 10},
    {a: '2',b: 20},
    {a: '3',b: 60},
    {a: '4',b: 70}
  ];
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.coord().transpose();
  
  chart.source(data,{ // 列定义
    'b': { // 指定，最大、最小值
      min: 0,
      max: 100
    }
  });
  
  chart.interval().position('a*b').color('a');
  chart.render();

```
