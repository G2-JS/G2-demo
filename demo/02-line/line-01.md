# 杭州市2010至2015年空气质量指数

- template: demo-detail
- product: G2
- type: 线图
- index: 1
- description: 折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化，它的特点是反映事物随时间或有序类别而变化的趋势。
- antVLink: https://antv.alipay.com/chart/details/line.html
- cite: http://echarts.baidu.com/demo.html#line-aqi

----

<style>

  #c1 {
    position: relative;
  }

  #slider {
    position: absolute!important;
    bottom: 0px;
    margin: 5px 0px;
  }
</style>

<link rel="stylesheet" type="text/css" href="https://os.alipayobjects.com/rmsportal/UBXCMkzNVlaZYNs.css">
<script src="https://a.alipayobjects.com/g/datavis/g2-plugin-slider/1.2.0/slider.js"></script>

<script>
$('<h4 style="text-align: center;margin-bottom: 5px;">杭州市 2010-2015 年 AQI 指数</h4>').appendTo($('#c1'))
$('<div id="slider"></div>').appendTo('#c1');
$.getJSON('../../static/data/peking-aqi.json',function(data){
  var chart = new G2.Chart({
    id: 'c1',
    width : 1000,
    height : 400,
    animate: false
  });

  // g-plugin-silder 只支持数值类型的数据排序，所以将时间统一转换为时间戳
  for(var i = 0;i< data.length; i++) {
    var item = data[i];
    var time = item.date;
    item.date = new Date(time).getTime();
  }

  chart.source(data, {
    date: {
      type: 'time',
      mask: 'yyyy-mm-dd',
      tickCount: 7,
      alias: '日期',
      nice: false
    },
    aqi: {
      min: 0,
      ticks: [0, 50, 100, 150, 200, 300, 500],
      alias: 'AQI(空气质量指数)'
    }
  });
  chart.axis('aqi', {
    grid: null
  });
  chart.line().position('date*aqi');
  chart.guide().rect(['min', 0], ['max', 50], {
    fill: '#5AC405',
    fillOpacity: 0.4
  });
  chart.guide().rect(['min', 50], ['max', 100], {
    fill: '#F9C709',
    fillOpacity: 0.4 
  });
  chart.guide().rect(['min', 100], ['max', 150], {
    fill: '#FD942C',
    fillOpacity: 0.4
  });
  chart.guide().rect(['min', 150], ['max', 200], {
    fill: '#e4440D',
    fillOpacity: 0.4
  });
  chart.guide().rect(['min', 200], ['max', 300], {
    fill: '#810043',
    fillOpacity: 0.4
  });
  chart.guide().rect(['min', 300], ['max', 500], {
    fill: '#45001B',
    fillOpacity: 0.4
  });

  var slider = new G2.Plugin.slider({
    domId: "slider", //DOM id
    height: 26,
    xDim: 'date',
    yDim: 'aqi',
    charts: chart,
    start: '2011-06-02', // 起始原始数据
    end: '2012-03-10', // 结束原始数据
  });
  slider.render();
});
</script>
