# 更改tooltip信息

----

## code

```html
<div id="c1">
</div>
```

```js

    var G2 = require('g2');
    var data = [ // 数据
      {"time":1428163200000,"start":469,"end":480},
      {"time":1428163203600,"start":480,"end":430},
      {"time":1428163207200,"start":430,"end":410},
      {"time":1428163210800,"start":410,"end":420},
      {"time":1428163214400,"start":420,"end":440},
      {"time":1428163218000,"start":440,"end":460},
      {"time":1428163221600,"start":460,"end":410},
      {"time":1428163225200,"start":410,"end":440},
      {"time":1428163228800,"start":440,"end":490}
    ];
    var frame = new G2.Frame(data); // 创建数据源

    frame.addCol('range',function(obj){ // 添加列
      return [obj.start,obj.end];
    });

    frame.addCol('trend', function(obj) {
      return (obj.start <= obj.end) ? 0 : 1;
    });

    var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500
    });
    var defs = {
      'time': { // 设置日期类型
        type: 'time',
        mask: 'yyyy-mm-dd HH:MM:ss'
      },
      'trend': { //设置条件，显示不同的颜色
        type: 'condition',
        alias: '趋势',
        values: ['上涨','下跌']
      }
    };

    chart.source(frame,defs);
    chart.interval().position('time*range').color('trend',['#1bbd19','#fa513a']).size(40);
    chart.render();

    chart.on('tooltipchange',function(ev){
      var items = ev.items; // tooltip显示的项
      var origin = items[0]; // 将一条数据改成多条数据
      var range = origin.point.range;
      items.splice(0); // 清空
      
      items.push({
        name: '开始值',
        title: origin.title,
        marker: true,
        color: origin.color,
        value: range[0]
      });

      items.push({
        name: '结束值',
        marker: true,
        title: origin.title,
        color: origin.color,
        value: range[1]
      });

    });
```
