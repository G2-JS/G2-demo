# 折线图

-----

## code

```` html
<div id="c1"></div>
````

```` js
import data from './data/avg-temp.json';
import G2 from 'g2';

var Frame = G2.Frame;
var frame = new Frame(data);
frame = Frame.combinColumns(frame, ['New York', 'San Francisco','Austin'], 'value', 'city', 'date'); 
var chart = new G2.Chart({
  id: 'c1',
  width : 800,
  height : 400
});

chart.source(frame, {
  date: {
    type: 'time',
    mask: 'yyyy.mm',
    tickCount: 12
  },
  value: {
    alias: 'Temperature, ºF'
  }
});
chart.axis('date', {
  line: null,
  tickLine: {
    stroke: '#000',
    value: 6 // 刻度线长度
  }
});
chart.axis('value', {
  tickLine: {
    stroke: '#000',
    value: 6 // 刻度线长度
  },
  labels: {
    label: {
      fill: '#000'
    }
  },
  line: {
    stroke: '#000'
  },
  grid: null
});
chart.line().position('date*value').color('city').shape('spline').size(2);
chart.render();
````
