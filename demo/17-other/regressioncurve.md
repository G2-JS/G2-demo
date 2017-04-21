# 回归曲线图

- template: demo-detail
- type: 其他图表
- index: 6
- description: 回归曲线图同统计学紧密结合，属于探索型图表，通过对样本数据进行曲线回归（非线性回归）确定两个变数间数量变化的某种特定的规则或规律。
- antVLink: https://antv.alipay.com/chart/details/regressioncurve.html
----

<script>
$.getJSON('../../static/data/diamond.json',function (data) {
  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: [60, 120]
    }
  });
  chart.source(data);

  chart.point().position('carat*price');
  chart.line().position(Stat.smooth.exp('carat*price')).size(3);
  chart.render();
});
</script>
