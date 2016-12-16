## K 线图

----

## code

```html
<script src="https://as.alipayobjects.com/g/datavis/g2/2.2.0/g2.js"></script>
<script src="https://a.alipayobjects.com/g/datavis/g2-plugin-slider/1.0.0/slider.js"></script>

<div id="c1"></div>
<div id="slider"></div>
```

```js
import data from './data/candleSticks.json';
var Stat = G2.Stat;
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 350,
  plotCfg: {
    margin: [60, 120, 30],
    background: {
      fill: '#191821'
    }
  }
});
// 创建数据源
var Frame = G2.Frame;
var frame = new Frame(data);
frame.addCol('trend', function(obj) {
  return (obj.start <= obj.end) ? 0 : 1;
});
chart.source(frame, {
  'trend': {
    type: 'cat',
    alias: '趋势',
    values: ['上涨','下跌']
  },
  'time': {
    type: 'timeCat',
    nice: false,
    mask: 'mm-dd',
    alias: '时间',
    tickCount: 10
  },
  'volumn': {alias: '成交量'},
  'start': {alias: '开盘价'},
  'end': {alias: '收盘价'},
  'max': {alias: '最高价'},
  'min': {alias: '最低价'},
  'start+end+max+min': {alias: '股票价格'}
});
chart.axis('time', {
  title: null
});
chart.schema()
  .position('time*(start+end+max+min)')
  .color('trend', ['#2AF483','#F80041'])
  .shape('candle')
  .tooltip('start*end*max*min*volumn');

var chart1 = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 100,
  plotCfg: {
    margin: [5, 120, 10],
    background: {
      fill: '#191821'
    }
  }
});
chart1.source(frame);
chart1.col('volumn', {
  alias: '成交量(万)',
  tickCount: 2,
});
chart1.col('time',{
  type: 'timeCat',
  nice: false,
  mask: 'mm-dd',
  alias: '时间',
  tickCount: 10
});
chart1.axis('time', false);
chart1.axis('volumn', {
  title: {
    textAlign: 'center'
  },
  formatter: function(val) {
    return parseInt(val / 1000, 10) + 'k';
  }
});
chart1.interval()
  .position('time*volumn')
  .color('trend', ['#2AF483','#F80041'])
  .tooltip('volumn');
chart1.legend('trend', false);

var slider = new Slider({
  domId: 'slider',
  width: 1000,
  height: 30,
  charts: [chart, chart1],
  xDim: 'time',
  yDim: 'max'
});
slider.render();
```
