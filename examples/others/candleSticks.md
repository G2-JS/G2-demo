## 大数据量 K 线图

----

## code

```html
<link rel="stylesheet" type="text/css" href="https://os.alipayobjects.com/rmsportal/UBXCMkzNVlaZYNs.css">
<style>
  #range {
    position: absolute!important;
    bottom: 180px;
    margin: 5px 80px;
  }
</style>
<script src="https://as.alipayobjects.com/g/datavis/g2/2.0.0/index.js"></script>
<script src="https://as.alipayobjects.com/g/datavis/g-plugin-range/0.0.9/index.js"></script>
<div id="c1"></div>
```

```js
import data from './data/Dow-johns.json';
import $ from 'jquery';
function splitData(rawData) {
  var values = [];
  for (var i = 0; i < rawData.length; i++) {
    var item = rawData[i];
    values.push(item.slice(1, 5));
  }
  return {
    'md5': calculateMA(5, values),
    'md10': calculateMA(10, values),
    'md20': calculateMA(20, values),
    'md30': calculateMA(30, values)
  };
}
function calculateMA(dayCount, data) {
  var result = [];
  for (var i = 0, len = data.length; i < len; i++) {
    if (i < dayCount) {
      result.push(null);
      continue;
    }
    var sum = 0;
    for (var j = 0; j < dayCount; j++) {
      sum += data[i - j][1];
    }
    result.push(+(sum / dayCount).toFixed(3));
  }
  return result;
}
$('<div id="range"></div>').appendTo('#c1');
var source = [];
var values = splitData(data);
for(var i = 0, l = data.length; i < l; i++) {
  var item = {};
  var arr = data[i];
  item.date = new Date(arr[0]).getTime();
  item.start = arr[1];
  item.end = arr[2];
  item.lowest = arr[3];
  item.highest = arr[4];
  if (arr[1] <= arr[2]) {
    item.trend = 'up';
  } else {
    item.trend = 'down';
  }
  item.volumn = arr[5];
  item.md5 = values.md5[i];
  item.md10 = values.md10[i];
  item.md20 = values.md20[i];
  item.md30 = values.md30[i];
  source.push(item);
}
var Frame = G2.Frame;
var frame = new Frame(source);
frame = Frame.combinColumns(frame, ['md5','md10','md20','md30'], 'value', 'type');
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 350,
  plotCfg: {
    margin: [30, 120, 30]
  }
});
chart.source(frame, {
  'date': {
    type: 'timeCat',
    nice: false,
    mask: 'yyyy-mm-dd',
    tickCount: 8
  }
});
chart.axis('date', {
  title: null
});
chart.axis('start+end+highest+lowest', {
  title: null
});
chart.axis('value', false);
chart.tooltip({
  crosshairs: true
});
chart.schema()
  .position('date*(start+end+highest+lowest)')
  .color('trend', ['#8F454A','#39495E'])
  .shape('candle')
  .tooltip('start*end*highest*lowest');
chart.line().position('date*value').color('type', ['#AC4640', '#2D3C48', '#609099', '#BE7459']);
  
var chart1 = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 150,
  plotCfg: {
    margin: [10, 120, 50]
  }
});
chart1.source(frame, {
  'date': {
    type: 'timeCat',
    nice: false,
    mask: 'yyyy-mm-dd',
    tickCount: 8
  }
});
chart1.axis('date', {
  title: null,
  labels: null,
  tickLine: null,
  line: {
    stroke: '#444'
  }
});
chart1.axis('volumn', false);
chart1.interval()
  .position('date*volumn')
  .color('#81BC9D')
  .tooltip('volumn');
chart1.legend('trend', false);
var range = new G2.Plugin.range({
  id: "range", //DOM id
  width: 840,
  height: 26,
  dim: 'date',
  start: new Date('2015-06-04').getTime(),
  end: new Date('2016-01-15').getTime()
});
range.source(frame);
range.link([chart, chart1]);
range.render();
```
