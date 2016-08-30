# interval Geom

----


## code
```html
<h2>下限小于0</h2>
<div id="canvas2"></div>

<h2>区间图</h2>
<div id="c2"></div>

<h2>直方图</h2>
<div id="c3"></div>
```

```js
  var g2 = require('g2');
  var Stat = g2.Stat;
// =========start 下限小于0
  var data = [
    {"month":0,"tokyo":7,"newYork":-0.2,"berlin":-0.9},
    {"month":1,"tokyo":6.9,"newYork":0.8,"berlin":0.6},
    {"month":2,"tokyo":9.5,"newYork":5.7,"berlin":3.5},
    {"month":3,"tokyo":14.5,"newYork":11.3,"berlin":8.4},
    {"month":4,"tokyo":18.2,"newYork":17,"berlin":13.5},
    {"month":5,"tokyo":21.5,"newYork":22,"berlin":17},
    {"month":6,"tokyo":25.2,"newYork":24.8,"berlin":18.6},
    {"month":7,"tokyo":26.5,"newYork":24.1,"berlin":17.9},
    {"month":8,"tokyo":23.3,"newYork":20.1,"berlin":14.3},
    {"month":9,"tokyo":18.3,"newYork":14.1,"berlin":9},
    {"month":10,"tokyo":13.9,"newYork":8.6,"berlin":3.9},
    {"month":11,"tokyo":9.6,"newYork":2.5,"berlin":1}
  ];
  var chart = new g2.Chart({
    id : 'canvas2',
    width : 800,
    height : 500,
    plotCfg : {
      margin : [50,100,30,50]
    }
  });

  chart.source(data, {
    'month': {
      type: 'cat',
      values: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    }
  });
  chart.interval().position('month*berlin');
  chart.render();
  var point = chart.getPosition({
    month: 9,
    berlin: 9
  });
  chart.showTooltip(point);
// =========end 下限小于0

// =========start 区间图
  var data = [
    {a : '分类一',b : [1,5]},
    {a : '分类2',b : [2,4]},
    {a : '分类3',b : [2,7]},
    {a : '分类4',b : [4,9]}
  ];
  var chart = new g2.Chart({
    id : 'c2',
    width : 800,
    height : 500,
    plotCfg : {
      margin : [50,100,30,50]
    }
  });

  chart.coord().transpose();
  chart.source(data);
  chart.interval().position('a*b');
  chart.render();
// =========end 区间图

// =========start 直方图
  var data = [
    {a : [0,5],b : 10},
    {a : [5,10],b : 3},
    {a : [10,15],b : 6},
    {a : [15,20],b : 8},
    {a: [20,40],b: 4}
  ];
  var chart = new g2.Chart({
    id : 'c3',
    width : 800,
    height : 500,
    plotCfg : {
      margin : [50,100,30,50]
    }
  });

  chart.coord().transpose();
  chart.source(data, {
    'b': {min: 0}
  });
  chart.guide().line([5,0],[20,10]);
  chart.guide().text([10,0],'这是个文本',{fill: '#fff'});
  chart.interval()
       .position('a*b'); //.shape('hollowRect')

  chart.render();
// ==========end 直方图
```
