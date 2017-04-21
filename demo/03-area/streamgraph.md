# streamgraph

- template: demo-detail
- product: G2
- type: 区域图
- description: streamgraph 由层叠区域图进行对称变化而来，用于连续时间序列的可视化。该图展示的是 1910 年至 2020 年名字以 'Kr' 开头的婴儿人数。
- index: 4
- cite: https://hrbrmstr.github.io/streamgraph/#fn8

----

<script>
$.getJSON('../../static/data/babynames.json',function(data){
  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data, {
    year: {
      tickInterval: 10
    },
    'n': {
      nice: false
    }
  });
  chart.legend(false);
  chart.axis('year', {
    title: null,
    line: null,
    tickLine: null
  });
  chart.axis('n', {
    title: null,
    line: null,
    tickLine: null,
    grid: null
  });
  chart.area(['stack','symmetric']).position(Stat.summary.sum('year*n')).color('name').shape('smooth').opacity(1);
  chart.render();
});
</script>
