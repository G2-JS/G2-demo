# 子弹图

----

## code

```html
<div id="c1">
</div>
```

```js
var G2 = require('g2');
var data = [
  {name: '明明', target: 300, Q1: 55, Q2: 99, Q3: 87, Q4: 20},
  {name: '白白', target: 300, Q1: 67, Q2: 120, Q3: 78, Q4: 98},
  {name: '我我', target: 340, Q1: 65, Q2: 78, Q3: 143, Q4: 78},
  {name: '的的', target: 80, Q1: 12, Q2: 45, Q3: 41, Q4: 12},
  {name: '心心', target: 500, Q1: 121, Q2: 210, Q3: 120, Q4: 98},
  {name: '渴渴', target: 100, Q1: 31, Q2: 23, Q3: 19, Q4: 29},
  {name: '望望', target: 230, Q1: 52, Q2: 36, Q3: 44, Q4: 62},
];
var Stat = G2.Stat;
var Frame = G2.Frame;
var frame = new Frame(data);
frame = Frame.combinColumns(frame, ['Q1','Q2','Q3','Q4'],'value','type', ['name', 'target']);
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500
});
chart.source(frame, {
  value: {
    min: 0,
    max: 600,
    nice: false,
    alias: '各季度销售量'
  },
  target: {
    min: 0,
    max: 600,
    nice: false,
    alias: "销售目标"
  },
  name: {
    alias: '姓名'
  }
});
chart.axis('value', false);
chart.legend(false);
chart.interval().position('name*target').shape('hollowRect').style({
  'stroke-width': 2,
  stroke: '#FF7F00'
}).size(35);
chart.interval('stack').position('name*value').color('type', ['#08519c','#3182bd','#6baed6','#bdd7e7']).size(25);
chart.render();

```
