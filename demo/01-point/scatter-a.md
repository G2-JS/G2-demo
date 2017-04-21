# 男女身高体重分布

- template: demo-detail
- product: G2
- type: 点图
- index: 0
- description: 散点图也叫 X-Y 图，它将所有的数据以点的形式展现在笛卡尔坐标系上，以显示变量之间的相互影响程度，点的位置由变量的数值决定。
- antVLink: https://antv.alipay.com/chart/details/scatter-plot.html

----

<script>

$.getJSON('../../static/data/scatter.json',function(data){
  var frame = new G2.Frame(data);
  var hAvg = G2.Frame.mean(frame,'height'); // 计算体重的均值
  var wAvg = G2.Frame.mean(frame,'weight'); // 计算身高均值
  var lineCfg = { // 线的配置信息
    stroke: '#94E08A'
  };
  var chart = new G2.Chart({
    id: 'c1',
    width : 1000,
    height : 500
  });

  chart.source(data, {
    weight: {
      alias: '体重（kg）'
    },
    height: {
      alias: '身高（cm）'
    }
  });
  chart.tooltip({
    title: null,
    crosshairs: {
      type: 'cross'
    }
  });
  chart.point().position('height*weight').color('gender', ['rgba(223, 83, 83, 0.7)', 'rgba(119, 152, 191, 0.7)']).shape('gender', ['circle', 'diamond']).size(6).tooltip('gender*height*weight');
  chart.guide().tag([hAvg, 'min'], [hAvg, 'max'], '身高平均值: ' + hAvg.toFixed(2), {line:lineCfg});
  chart.guide().tag(['min', wAvg], ['max', wAvg], '体重平均值: ' + wAvg.toFixed(2), {line:lineCfg});
  chart.render();
});
</script>
