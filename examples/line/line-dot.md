# 点线图

----


## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [
    {"month":0,"tem":7,"city":"tokyo"},
    {"month":1,"tem":6.9,"city":"tokyo"},
    {"month":2,"tem":9.5,"city":"tokyo"},
    {"month":3,"tem":14.5,"city":"tokyo"},
    {"month":4,"tem":18.2,"city":"tokyo"},
    {"month":5,"tem":21.5,"city":"tokyo"},
    {"month":6,"tem":25.2,"city":"tokyo"},
    {"month":7,"tem":26.5,"city":"tokyo"},
    {"month":8,"tem":23.3,"city":"tokyo"},
    {"month":9,"tem":18.3,"city":"tokyo"},
    {"month":10,"tem":13.9,"city":"tokyo"},
    {"month":11,"tem":9.6,"city":"tokyo"},
    {"month":0,"tem":-0.2,"city":"newYork"},
    {"month":1,"tem":0.8,"city":"newYork"},
    {"month":2,"tem":5.7,"city":"newYork"},
    {"month":3,"tem":11.3,"city":"newYork"},
    {"month":4,"tem":17,"city":"newYork"},
    {"month":5,"tem":22,"city":"newYork"},
    {"month":6,"tem":24.8,"city":"newYork"},
    {"month":7,"tem":24.1,"city":"newYork"},
    {"month":8,"tem":20.1,"city":"newYork"},
    {"month":9,"tem":14.1,"city":"newYork"},
    {"month":10,"tem":8.6,"city":"newYork"},
    {"month":11,"tem":2.5,"city":"newYork"},
    {"month":0,"tem":-0.9,"city":"berlin"},
    {"month":1,"tem":0.6,"city":"berlin"},
    {"month":2,"tem":3.5,"city":"berlin"},
    {"month":3,"tem":8.4,"city":"berlin"},
    {"month":4,"tem":13.5,"city":"berlin"},
    {"month":5,"tem":17,"city":"berlin"},
    {"month":6,"tem":18.6,"city":"berlin"},
    {"month":7,"tem":17.9,"city":"berlin"},
    {"month":8,"tem":14.3,"city":"berlin"},
    {"month":9,"tem":9,"city":"berlin"},
    {"month":10,"tem":3.9,"city":"berlin"},
    {"month":11,"tem":1,"city":"berlin"}
  ];
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  var defs = {'month':{
    type: 'cat',
    values: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
  }};

  chart.source(data,defs);
  chart.line().position('month*tem').color('city').shape('dot').size(3);
  chart.render();
```
