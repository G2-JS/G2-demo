# 大规模区域图

- template: demo-detail
- product: G2
- type: 区域图
- index: 3
- description: 面积图又叫区域图。 它是在折线图的基础之上填充线下区域形成的。
- antVLink: https://antv.alipay.com/chart/details/area.html
- cite: http://echarts.baidu.com/demo.html#area-rainfall
----

<style>
  #c1{
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
  // g-plugin-slider 只支持数值类型的数据排序，所以将时间统一转换为时间戳
  for(var i=0;i<data.length;i++) {
    var item = data[i];
    var time = item.time;
    item.time = new Date(time).getTime();
  }

  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 450
  });

  chart.source(data, {
    time: {
      type: 'time',
      tickCount: 12,
      mask: 'm/dd hh:MM'
    },
    flow: {
      alias: '流量(m^3/s)'
    },
    rain: {
      alias: '降雨量(mm)'
    }
  });
  chart.axis('time', {
    title: null
  });
  chart.area().position('time*flow').color('l(100) 0:#a50f15 1:#fee5d9').opacity(0.85); // 设置渐变颜色
  chart.area().position('time*rain').color('l(100) 0:#293c55 1:#f7f7f7').opacity(0.85);

  var slider = new G2.Plugin.slider({
    domId: 'slider', //DOM id
    height: 26,
    xDim: 'time',
    yDim: 'flow',
    charts: chart
  });
  slider.render();
});
</script>
