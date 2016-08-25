# 光滑的折线图


----


## code

```html
<div id="c1">
</div>
```

```js
var G2 = require('g2');
var data = [
  {name: '2012-2013 冬', time: Date.UTC(1970, 9, 21), value: 0},
  {name: '2012-2013 冬', time: Date.UTC(1970, 10, 4), value: 0.28},
  {name: '2012-2013 冬', time: Date.UTC(1970, 10, 9), value: 0.25},
  {name: '2012-2013 冬', time: Date.UTC(1970, 10, 27), value: 0.2},
  {name: '2012-2013 冬', time: Date.UTC(1970, 11, 2), value: 0.28},
  {name: '2012-2013 冬', time: Date.UTC(1970, 11, 26), value: 0.28},
  {name: '2012-2013 冬', time: Date.UTC(1970, 11, 29), value: 0.47},
  {name: '2012-2013 冬', time: Date.UTC(1971, 0, 11), value: 0.79},
  {name: '2012-2013 冬', time: Date.UTC(1971, 0, 26), value: 0.72},
  {name: '2012-2013 冬', time: Date.UTC(1971, 1, 3), value: 1.02},
  {name: '2012-2013 冬', time: Date.UTC(1971, 1, 11), value: 1.12},
  {name: '2012-2013 冬', time: Date.UTC(1971, 1, 25), value: 1.2},
  {name: '2012-2013 冬', time: Date.UTC(1971, 2, 11), value: 1.18},
  {name: '2012-2013 冬', time: Date.UTC(1971, 3, 11), value: 1.19},
  {name: '2012-2013 冬', time: Date.UTC(1971, 4, 1), value: 1.85},
  {name: '2012-2013 冬', time: Date.UTC(1971, 4, 5), value: 2.22},
  {name: '2012-2013 冬', time: Date.UTC(1971, 4, 19), value: 1.15},
  {name: '2012-2013 冬', time: Date.UTC(1971, 5, 3), value: 0},
  {name: '2013-2014 冬', time: Date.UTC(1970, 9, 29), value: 0},
  {name: '2013-2014 冬', time: Date.UTC(1970, 10, 9), value: 0.4},
  {name: '2013-2014 冬', time: Date.UTC(1970, 11, 1), value: 0.25},
  {name: '2013-2014 冬', time: Date.UTC(1971, 0, 1), value: 1.66},
  {name: '2013-2014 冬', time: Date.UTC(1971, 0, 10), value: 1.8},
  {name: '2013-2014 冬', time: Date.UTC(1971, 1, 19), value: 1.76},
  {name: '2013-2014 冬', time: Date.UTC(1971, 2, 25), value: 2.62},
  {name: '2013-2014 冬', time: Date.UTC(1971, 3, 19), value: 2.41},
  {name: '2013-2014 冬', time: Date.UTC(1971, 3, 30), value: 2.05},
  {name: '2013-2014 冬', time: Date.UTC(1971, 4, 14), value: 1.7},
  {name: '2013-2014 冬', time: Date.UTC(1971, 4, 24), value: 1.1},
  {name: '2013-2014 冬', time: Date.UTC(1971, 5, 10), value: 0},
  {name: '2014-2015 冬', time: Date.UTC(1970, 10, 25), value: 0},
  {name: '2014-2015 冬', time: Date.UTC(1970, 11, 6), value: 0.25},
  {name: '2014-2015 冬', time: Date.UTC(1970, 11, 20), value: 1.41},
  {name: '2014-2015 冬', time: Date.UTC(1970, 11, 25), value: 1.64},
  {name: '2014-2015 冬', time: Date.UTC(1971, 0, 4), value: 1.6},
  {name: '2014-2015 冬', time: Date.UTC(1971, 0, 17), value: 2.55},
  {name: '2014-2015 冬', time: Date.UTC(1971, 0, 24), value: 2.62},
  {name: '2014-2015 冬', time: Date.UTC(1971, 1, 4), value: 2.5},
  {name: '2014-2015 冬', time: Date.UTC(1971, 1, 14), value: 2.42},
  {name: '2014-2015 冬', time: Date.UTC(1971, 2, 6), value: 2.74},
  {name: '2014-2015 冬', time: Date.UTC(1971, 2, 14), value: 2.62},
  {name: '2014-2015 冬', time: Date.UTC(1971, 2, 24), value: 2.6},
  {name: '2014-2015 冬', time: Date.UTC(1971, 3, 2), value: 2.81},
  {name: '2014-2015 冬', time: Date.UTC(1971, 3, 12), value: 2.63},
  {name: '2014-2015 冬', time: Date.UTC(1971, 3, 28), value: 2.77},
  {name: '2014-2015 冬', time: Date.UTC(1971, 4, 5), value: 2.68},
  {name: '2014-2015 冬', time: Date.UTC(1971, 4, 10), value: 2.56},
  {name: '2014-2015 冬', time: Date.UTC(1971, 4, 15), value: 2.39},
  {name: '2014-2015 冬', time: Date.UTC(1971, 4, 20), value: 2.3},
  {name: '2014-2015 冬', time: Date.UTC(1971, 5, 5), value: 2},
  {name: '2014-2015 冬', time: Date.UTC(1971, 5, 10), value: 1.85},
  {name: '2014-2015 冬', time: Date.UTC(1971, 5, 15), value: 1.49},
  {name: '2014-2015 冬', time: Date.UTC(1971, 5, 23), value: 1.08}
];

var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [20, 80, 100, 80]
  }
});

chart.source(data, {
  time: {
    type: 'time',
    mask: 'mm-dd',
    alias: '日期'
  },
  value: {
    alias: '降雪量'
  }
});
chart.legend('bottom');
chart.line().position('time*value').color('name').shape('smooth').size(2);
chart.point().position('time*value').color('name').shape('name', ['circle', 'rect', 'diamond']).size(4);
chart.render();
```
