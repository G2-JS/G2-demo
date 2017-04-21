# 柱状图

- template: demo-detail
- product: G2
- type: 柱状图
- index: 1
- description: 典型的柱状图（又名条形图），使用垂直或水平的柱子显示类别之间的数值比较。其中一个轴表示需要对比的分类维度，另一个轴代表相应的数值。
- antVLink: https://antv.alipay.com/chart/details/bar.html
- cite: http://nbremer.github.io/top2000/
----

<script>
$.getJSON('../../static/data/top2000.json',function(data) {
  var Stat = G2.Stat;

  var chart = new G2.Chart({
    id : 'c1',
    width : 1000,
    height : 500,
    plotCfg: {
      margin: [20, 60, 80, 120]
    }
  });
  var Frame = G2.Frame;
  var frame = new Frame(data);
  frame = Frame.sort(frame, 'release');
  chart.source(frame, {
    '..count': {
      alias: 'top2000 唱片总量'
    },
    release: {
      tickInterval: 5,
      alias: '唱片发行年份'
    }
  });
  chart.interval().position(Stat.summary.count('release')).color('#e50000');

  chart.render();
});

</script>
