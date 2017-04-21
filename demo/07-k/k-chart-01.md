# 股票图

- template: demo-detail
- product: G2
- type: 股票图
- index: 0
- description: K 线图，原名蜡烛图，又称阴阳图、棒线、红黑线或蜡烛线，常用于展示股票交易数据。
- antVLink: https://antv.alipay.com/chart/details/k-chart.html

----

<style>
  #range {
    position: absolute!important;
    bottom: 20px;
    margin: 5px 80px;
  }
</style>

<link rel="stylesheet" type="text/css" href="https://os.alipayobjects.com/rmsportal/UBXCMkzNVlaZYNs.css">
<script src="https://as.alipayobjects.com/g/datavis/g-plugin-range/0.0.9/index.js"></script>

<script>
$('<div id="range"></div>').appendTo('#c1');
$.getJSON('../../static/data/candleSticks.json',function(data){
  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 350,
    plotCfg: {
      margin: [30, 120, 30],
      background: {
        fill: '#191821'
      }
    }
  });
  // g-plugin-range 只支持数值类型的数据排序，所以将时间统一转换为时间戳
  for(var i=0;i<data.length;i++) {
    var item = data[i];
    var time = item.time;
    item.time = new Date(time).getTime();
  }

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
      mask: 'yyyy-mm-dd',
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
    height: 150,
    plotCfg: {
      margin: [10, 120, 50],
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
    mask: 'yyyy-mm-dd',
    alias: '时间',
    tickCount: 10
  });
  chart1.axis('time', false);

  chart1.interval()
        .position('time*volumn')
        .color('trend', ['#2AF483','#F80041'])
        .tooltip('volumn');
  chart1.legend('trend', false);
  var range = new G2.Plugin.range({
    id: "range", //DOM id
    width: 840,
    height: 26,
    dim: 'time'
  });

  range.source(frame);
  range.link([chart, chart1]);
  range.render();
});
</script>

