# 折线图

折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化，它的特点是反映事物随时间或有序类别而变化的趋势。

- antVLink: https://antv.alipay.com/chart/details/line.html
----

## code

```html
<div id="c1">
</div>
```

```js
var G2 = require('g2');
var data = [
  {"month":0,"tem":7,"city":"北京"},
  {"month":1,"tem":6.9,"city":"北京"},
  {"month":2,"tem":9.5,"city":"北京"},
  {"month":3,"tem":14.5,"city":"北京"},
  {"month":4,"tem":18.2,"city":"北京"},
  {"month":5,"tem":21.5,"city":"北京"},
  {"month":6,"tem":25.2,"city":"北京"},
  {"month":7,"tem":26.5,"city":"北京"},
  {"month":8,"tem":23.3,"city":"北京"},
  {"month":9,"tem":18.3,"city":"北京"},
  {"month":10,"tem":13.9,"city":"北京"},
  {"month":11,"tem":9.6,"city":"北京"},
  {"month":0,"tem":-0.2,"city":"上海"},
  {"month":1,"tem":0.8,"city":"上海"},
  {"month":2,"tem":5.7,"city":"上海"},
  {"month":3,"tem":11.3,"city":"上海"},
  {"month":4,"tem":17,"city":"上海"},
  {"month":5,"tem":22,"city":"上海"},
  {"month":6,"tem":24.8,"city":"上海"},
  {"month":7,"tem":24.1,"city":"上海"},
  {"month":8,"tem":20.1,"city":"上海"},
  {"month":9,"tem":14.1,"city":"上海"},
  {"month":10,"tem":8.6,"city":"上海"},
  {"month":11,"tem":2.5,"city":"上海"},
  {"month":0,"tem":-0.9,"city":"深圳"},
  {"month":1,"tem":0.6,"city":"深圳"},
  {"month":2,"tem":3.5,"city":"深圳"},
  {"month":3,"tem":8.4,"city":"深圳"},
  {"month":4,"tem":13.5,"city":"深圳"},
  {"month":5,"tem":17,"city":"深圳"},
  {"month":6,"tem":18.6,"city":"深圳"},
  {"month":7,"tem":17.9,"city":"深圳"},
  {"month":8,"tem":14.3,"city":"深圳"},
  {"month":9,"tem":9,"city":"深圳"},
  {"month":10,"tem":3.9,"city":"深圳"},
  {"month":11,"tem":1,"city":"深圳"},
  {"month":0,"tem":3.9,"city":"杭州"},
  {"month":1,"tem":4.2,"city":"杭州"},
  {"month":2,"tem":5.7,"city":"杭州"},
  {"month":3,"tem":8.5,"city":"杭州"},
  {"month":4,"tem":11.9,"city":"杭州"},
  {"month":5,"tem":15.2,"city":"杭州"},
  {"month":6,"tem":17.0,"city":"杭州"},
  {"month":7,"tem":16.6,"city":"杭州"},
  {"month":8,"tem":14.2,"city":"杭州"},
  {"month":9,"tem":10.3,"city":"杭州"},
  {"month":10,"tem":6.6,"city":"杭州"},
  {"month":11,"tem":4.8,"city":"杭州"}
];
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500
});
var defs = {
  'month': {
    alias: '月份',
    type: 'cat',
    values: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
  },
  'city': {
    alias: '城市'
  },
  'tem': {
    alias: '室外温度'
  }
};

chart.source(data, defs);
chart.line().position('month*tem').color('city').size(2);
chart.render();
```
