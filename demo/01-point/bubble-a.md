# 气泡图

- template: demo-detail
- product: G2
- type: 点图
- index: 3
- description: 气泡图是一种多变量图表，是散点图的变体，也可以认为是散点图和百分比区域图的组合。
- antVLink: https://antv.alipay.com/chart/details/bubble-chart.html

----

<script>
$.getJSON('../../static/data/bubble.json',function(data){
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });

  chart.source(data, {
    'LifeExpectancy': {
      alias: '人均寿命（年）'
    },
    'Population': {
      type: 'pow',
      alias: '人口总数'
    },
    'GDP': {
      alias: '人均国内生产总值($)',
      tickCount: 10
    },
    'Country': {
      alias: '国家/地区'
    }
  });

  chart.axis('GDP', {
    // 格式化坐标轴的显示
    formatter: function (value) {
      return (value / 1000).toFixed(0) + 'k';
    }
  });
  chart.tooltip({
    title: null // 不显示默认标题
  });
  // 该图表默认会生成多个图例，设置不展示 Population 和 Country 两个维度的图例
  chart.legend('Population', false);
  chart.point().position('GDP*LifeExpectancy')
    .size('Population', 35, 5)
    .color('continent')
    .opacity(0.65)
    .shape('circle')
    .tooltip('Country*Population*GDP*LifeExpectancy');
  chart.render();
});
</script>
