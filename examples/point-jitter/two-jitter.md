# 二维扰动点图

----

## code

```html
<div id="c1">
</div>
```

```js
  import data from '../data/diamond.json';
  var G2 = require('g2');
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data);

  chart.axis('cut',{
    grid: {
      line: {
        stroke: '#d9d9d9',
        'stroke-width': 2,
        'stroke-dasharray': [2, 6]
      }
    },
    gridAlign: 'middle'
  });

  chart.axis('clarity',{
    gridAlign: 'middle'
  });
  chart.pointJitter().position('cut*clarity').color('clarity');
  chart.render();
```
