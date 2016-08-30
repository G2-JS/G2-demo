# 区域图

-----

## code

```html
<div id="c1"></div>
```

```js
var G2 = require('g2');  
var data = [{"date":"2014-08-01","pct05":5350,"pct25":6756,"pct50":7819,"pct75":9284,"pct95":13835},{"date":"2014-08-02","pct05":4439,"pct25":5584,"pct50":6554,"pct75":8016,"pct95":12765},{"date":"2014-08-03","pct05":4247,"pct25":5419,"pct50":6332,"pct75":7754,"pct95":12236},{"date":"2014-08-04","pct05":3293,"pct25":4414,"pct50":5191,"pct75":6491,"pct95":10325},{"date":"2014-08-05","pct05":3942,"pct25":5134,"pct50":6069,"pct75":7501,"pct95":11685},{"date":"2014-08-06","pct05":2744,"pct25":5508,"pct50":6879,"pct75":9221,"pct95":17239},{"date":"2014-08-07","pct05":1807,"pct25":3019,"pct50":4119,"pct75":5656,"pct95":8851},{"date":"2014-08-08","pct05":1855,"pct25":3386,"pct50":4473,"pct75":5915,"pct95":10580},{"date":"2014-08-09","pct05":1830,"pct25":3202,"pct50":4233,"pct75":5559,"pct95":8930},{"date":"2014-08-10","pct05":1828,"pct25":3195,"pct50":4304,"pct75":5482,"pct95":9189},{"date":"2014-08-11","pct05":2246,"pct25":3929,"pct50":5326,"pct75":7077,"pct95":11648},{"date":"2014-08-12","pct05":2051,"pct25":3662,"pct50":4849,"pct75":6194,"pct95":10078},{"date":"2014-08-13","pct05":1700,"pct25":3075,"pct50":4068,"pct75":5259,"pct95":9789},{"date":"2014-08-14","pct05":2161,"pct25":3891,"pct50":5262,"pct75":6924,"pct95":11612},{"date":"2014-08-15","pct05":1765,"pct25":3190,"pct50":4388,"pct75":5822,"pct95":9433},{"date":"2014-08-16","pct05":2036,"pct25":3756,"pct50":4775,"pct75":6158,"pct95":9999},{"date":"2014-08-17","pct05":2079,"pct25":3561,"pct50":4753,"pct75":6124,"pct95":9807},{"date":"2014-08-18","pct05":2108,"pct25":3576,"pct50":4818,"pct75":6344,"pct95":10235},{"date":"2014-08-19","pct05":2143,"pct25":3792,"pct50":5073,"pct75":6772,"pct95":11338},{"date":"2014-08-20","pct05":2086,"pct25":3801,"pct50":5073,"pct75":6688,"pct95":12394},{"date":"2014-08-21","pct05":1767,"pct25":3253,"pct50":4282,"pct75":5563,"pct95":9167},{"date":"2014-08-22","pct05":1756,"pct25":3047,"pct50":3950,"pct75":5006,"pct95":7948},{"date":"2014-08-23","pct05":2123,"pct25":3755,"pct50":5173,"pct75":7243,"pct95":12338},{"date":"2014-08-24","pct05":1967,"pct25":3404,"pct50":4529,"pct75":5970,"pct95":9897},{"date":"2014-08-25","pct05":1537,"pct25":2612,"pct50":3394,"pct75":4279,"pct95":7104},{"date":"2014-08-26","pct05":2182,"pct25":3958,"pct50":5505,"pct75":7642,"pct95":12707},{"date":"2014-08-27","pct05":1932,"pct25":3366,"pct50":4526,"pct75":6086,"pct95":9930},{"date":"2014-08-28","pct05":1268,"pct25":2344,"pct50":3256,"pct75":4215,"pct95":6673},{"date":"2014-08-29","pct05":1225,"pct25":2239,"pct50":3033,"pct75":4111,"pct95":7601},{"date":"2014-08-30","pct05":1393,"pct25":2432,"pct50":3417,"pct75":4710,"pct95":8798},{"date":"2014-08-31","pct05":1175,"pct25":2020,"pct50":2768,"pct75":3889,"pct95":7744},{"date":"2014-09-01","pct05":989,"pct25":1655,"pct50":2218,"pct75":3167,"pct95":6018},{"date":"2014-09-02","pct05":1249,"pct25":2069,"pct50":2738,"pct75":3938,"pct95":7574},{"date":"2014-09-03","pct05":936,"pct25":1510,"pct50":1968,"pct75":2700,"pct95":5215},{"date":"2014-09-04","pct05":1264,"pct25":2039,"pct50":2657,"pct75":3646,"pct95":7042},{"date":"2014-09-05","pct05":1305,"pct25":2106,"pct50":2745,"pct75":3766,"pct95":7273},{"date":"2014-09-06","pct05":798,"pct25":1288,"pct50":1678,"pct75":2303,"pct95":4448},{"date":"2014-09-07","pct05":1314,"pct25":2120,"pct50":2763,"pct75":3791,"pct95":7321},{"date":"2014-09-08","pct05":1042,"pct25":1681,"pct50":2191,"pct75":3007,"pct95":5806}];

var markData = [{"date": "2014-08-06", "type": "Client","version": "2.0","value": 11},{"date": "2014-08-20", "type": "Client","version": "2.1","value": 11},{"date": "2014-08-27","type": "Server","version": "3.5","value": 9},{"date": "2014-09-03","type": "Client","version": "2.2","value": 11}];

// 格式化饼图文本
function formatter(text, item){
  var point = item.point;
  var type = point['type'];
  return '<div style="width: 60px;text-align: center;font-size: 12px;line-height: 1.2;color: #fff;margin-left: -30px;"><span>' + type + '</span><br><span>' + text + '</span></div>';
}

// 处理数据
var Frame = G2.Frame;
var frame = new Frame(data);
frame.addCol('5% - 95%', function(obj) {
  return [obj.pct05 / 1000, obj.pct95 / 1000];
});
frame.addCol('25% - 75%', function(obj) {
  return [obj.pct25 / 1000, obj.pct75 / 1000];
});
frame.addCol('Median', function(obj) {
  return obj.pct50 / 1000;
});
frame = Frame.combinColumns(frame, ['5% - 95%', '25% - 75%'], 'times', 'grade', ['date', 'Median']);

var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [20, 100, 60]
  }
});

chart.source(frame, {
  date: {
    type: 'time',
    ticks: ['2014-08-01', '2014-08-08', '2014-08-15', '2014-08-22', '2014-08-29', '2014-09-05']
  },
  'times': {
    min: 0,
    max: 18,
    nice: false,
    alias: 'Time(s)',
    tickInterval: 2
  },
  Median: {
    min: 0,
    max: 18,
    nice: false,
  }
});
chart.axis('Median', false);
chart.axis('date', {
  title: null,
  tickLine: false,
  line: {
    stroke: '#000'
  },
  grid: {
    line: {
      stroke: '#d9d9d9'
    }
  }
});
chart.axis('times', {
  title: {
    fill: '#000'
  },
  tickLine: false,
  line: {
    stroke: '#000'
  },
  grid: {
    line: {
      stroke: '#d9d9d9',
      lineDash: [0, 0]
    }
  }
});
chart.tooltip({
  crosshairs: true
});
chart.area().position('date*times').color('grade', ['#d8d8ff', '#6060ff']).opacity(0.8).shape('smooth');
chart.line().position('date*Median').size(2).color('#000').shape('smooth');

var markView = chart.createView();
markView.source(markData, {
  value: {
    min: 0,
    max: 18
  },
  date: {
    type: 'time',
    ticks: ['2014-08-01', '2014-08-08', '2014-08-15', '2014-08-22', '2014-08-29', '2014-09-05']
  }
});
markView.axis(false);
markView.tooltip(false);
markView.interval().position('date*value').color('type', ['#ff7f00', '#093']).size(3);
markView.point().position('date*value')
  .color('type', ['#ff7f00', '#093']).size(30).shape('circle')
  .label('version', {
    custom: true, // 表示使用自定义文本
    renderer: formatter,
    offset: -5
  });
chart.legend('type', false);
chart.render();
```
