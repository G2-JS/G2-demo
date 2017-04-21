# 某城市某时间段雨量流量关系图

- template: demo-detail
- product: G2
- type: 线图
- index: 2
- description: 折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化，它的特点是反映事物随时间或有序类别而变化的趋势。
- antVLink: https://antv.alipay.com/chart/details/line.html
- cite: http://echarts.baidu.com/demo.html#grid-multiple
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
$('<div id="slider"></div>').appendTo('#c1');

$.getJSON('../../static/data/rain-flow.json',function(data){

  // g-plugin-range 只支持数值类型的数据排序，所以将时间统一转换为时间戳
  for(var i=0;i<data.length;i++) {
    var item = data[i];
    var time = item.time;
    item.time = new Date(time).getTime();
  }

  var flowChart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 250
  });

  flowChart.source(data, {
    time: {
      type: 'time',
      tickCount: 12,
      mask: 'm/dd H:mm'
    }
  });
  flowChart.axis('time', {
    title: null,
    labelOffset: 35
  });
  flowChart.axis('flow', {
    title: null
  });
  flowChart.line().position('time*flow').color('#B03A5B').size(2);
  flowChart.guide().text(['min', 'max'], '流量(m^3/s)');

  var rainChart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 250,
    plotCfg: {
      margin: [5, 80, 75]
    }
  });

  rainChart.source(data, {
    time: {
      type: 'time',
      tickCount: 12,
      mask: 'm/dd H:mm'
    }
  });
  rainChart.axis('time', {
    title: null,
    labels: null
  });
  rainChart.axis('rain', {
    title: null
  });

  rainChart.coord().reflect('y');
  rainChart.line().position('time*rain').color('#293c55').size(2);
  rainChart.guide().text(['min', 'max'], '降雨量(mm)');

  var slider = new G2.Plugin.slider({
    domId: 'slider', //DOM id
    height: 26,
    xDim: 'time',
    yDim: 'flow',
    charts: [flowChart, rainChart]
  });
  slider.render();
});
</script>
