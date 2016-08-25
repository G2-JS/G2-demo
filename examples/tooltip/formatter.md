# 格式化提示信息

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
    // 格式化饼图文本
    function formatter(text,item){
      var point = item.point; // 每个弧度对应的点
      var percent = point['..proportion']; // ..proportion 字段由Stat.summary.proportion统计函数生成
      percent = (percent * 100).toFixed(2) + '%';
      return text + ' ' + percent;
    }
    var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500,
      plotCfg: {
        margin: [20, 90, 60, 60]
      }
    });
    chart.source(data);
    chart.coord('theta',{radius: 0.6});
    // 不同cut（切割工艺）所占的比例
    chart.intervalStack()
         .position(Stat.summary.proportion())
         .color('cut');


    chart.render();

    chart.on('tooltipchange',function(ev){
      var item = ev.items[0]; // 获取tooltip要显示的内容
      item.value = '格式化-' +  item.value;
    });
```
