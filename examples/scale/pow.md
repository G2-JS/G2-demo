# pow 度量

----

## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [
    {a: '1',b: 1,c: 0.1},
    {a: '2',b: 2,c: 10},
    {a: '3',b: 3,c: 50},
    {a: '4',b: 4,c: 100}
  ];

  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });

  chart.source(data,{ // 列定义
    'c': { // 指定类型是 log
      type: 'pow'// exponent: 2 ，底默认是 2
    }
  });
  
  chart.point().position('a*b').size('c',20,0).shape('circle');

  chart.render();

```
