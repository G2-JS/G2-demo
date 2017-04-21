# 帕累托图

- template: demo-detail
- type: 其他图表
- index: 4
- description: Pareto chart, 根据“关键的少数和次要的多数”原理，用双直角坐标系表示，左边纵坐标表示频数，右边纵坐标表示频率。分析线表示累积频率，横坐标表示影响质量的各项因素，按影响程度的大小(即出现频数多少)从左到右排列，通过对排列图的观察分析可以抓住影响质量的主要因素。

----

<script>
var data = [
  {factor: '划痕', times: 56},
  {factor: '气泡', times: 19},
  {factor: '缺口', times: 11},
  {factor: '污痕', times: 7},
  {factor: '杂质', times: 3}
];
var Stat = G2.Stat;
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [20, 90, 90, 80]
  }
});

chart.source(data, {
  'times': {
    alias: '次数'
  },
  '..percent': {
    alias: '累计百分比',
    formatter: function (value) {
      value = value || 0;
      value = value * 100;
      var digits = 0; // 默认展示小数点后面两位数
      if (value > 0 && value < 0.01) {
        digits = (1 / value + '').indexOf('.') + 1;
      }

      return value.toFixed(digits) + '%';
    }
  }
});
chart.legend('factor', {
  position: 'bottom'
});
chart.axis('times', {
  title: null
});
chart.axis('..percent', {
  title: null
});
chart.axis('factor', {
  tickLine: null, // 不展示刻度线
});
chart.interval().position('factor*times').color('factor').tooltip('times');
chart.line().position(Stat.summary.cumulative(Stat.summary.percent('factor*times')))
  .size(2)
  .tooltip('..percent');
chart.render();
</script>
