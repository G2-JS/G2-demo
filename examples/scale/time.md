# 时间度量

----

## code

```html
<div id="c1">
</div>
```

```js
    import data from '../data/stock-data.json';
    var G2 = require('g2');
    var Stat = G2.Stat;
    var tmpData = [];
    var date = new Date('2015/08/08').getTime();
 
    for(var i = 0; i < data.length; i++) {
      var obj = {};
      obj.time = date + 60 * 1000 * i; // 1分钟一条数据
      obj.value = data[i];
      tmpData.push(obj);
    }
    var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500
    });
    
    var defs = {
      'time': {
        type: 'time',
        nice: false,
        mask: 'yy-mm-dd HH:MM'
      }
    };
    
    chart.source(tmpData,defs);
    
    chart.source(tmpData);
    chart.area().position('time*value').color('l(90) 0:#727cc9 1:#ffffff');
    chart.line().position('time*value').color('#727cc9');

    chart.render();
```
