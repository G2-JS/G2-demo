# 分组箱型图

- template: demo-detail
- type: 箱型图
- index: 1
- description: 箱形图又称盒须图、盒式图或箱线图，是一种用作显示一组数据分布情况的统计图。
- antVLink: https://antv.alipay.com/chart/details/boxplot.html

----

<script>
$.getJSON('../../static/data/iris_flower_data.json', function(data) {
  var Stat = G2.Stat;
  var Util = G2.Util;
  var Frame = G2.Frame;
  var frame = new Frame(data);
  frame = Frame.combinColumns(frame,['萼片长度','萼片宽度','花瓣长度','花瓣宽度'],'value','type','品种');

  var chart = new G2.Chart({
    id: 'c1',
    width : 1000,
    height : 500,
    plotCfg: {
      margin: [80, 120]
    }
  });
  chart.source(frame);
  chart.tooltip({
    map: {
      title: '最小值-下四分位数-中位数-上四分位数-最大值'
    }
  });
  chart.schemaDodge().position(Stat.bin.quantile.letter('type*value'))
    .color('品种', ['#243543', '#B22226', '#C86D51'])
    .shape('box')
    .size(25);
  chart.render();
});
</script>
