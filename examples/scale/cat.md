# 指定分类顺序

----

## code

```html
<div id="c1">
</div>
```

```js
  import data from '../data/diamond.json';
  var G2 = require('g2');
  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  // 指定数据和列定义
  chart.source(data,{ // 列定义
    // 默认的分类顺序是按照字符串出现在数据中的顺序，如果有顺序，则需要用户自己设定
    'cut': {
      type: 'cat',
      values:['Ideal','Premium','Very-Good','Good','Fair']
    }
  });
  
  chart.interval().position(Stat.summary.count('cut')).color('cut');
  chart.render();
```
