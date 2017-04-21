# Redial Line Chart

- template: demo-detail
- product: G2
- type: 线图
- index: 6
- description: 折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化，它的特点是反映事物随时间或有序类别而变化的趋势。
- antVLink: https://antv.alipay.com/chart/details/line.html
- cite: http://anilomanwar.github.io/RedialLine/Redial%20Line.html
----

<script>
var data = [
  {"term":"Zombieland","count":9},
  {"term":"Wieners","count":8},
  {"term":"Toy Story","count":8},
  {"term":"trashkannon","count":7},
  {"term":"the GROWLERS","count":6},
  {"term":"mudweiser","count":6},
  {"term":"ThunderCats","count":4},
  {"term":"The Taqwacores - Motion Picture","count":4},
  {"term":"The Shawshank Redemption","count":2},
  {"term":"The Olivia Experiment","count":1}
];
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [20, 80]
  }
});
chart.source(data, {
  count: {
    max: 12
  }
});
chart.coord('theta', {
  inner: 0.2
});
chart.interval().position('term*count').color('#009999').shape('line'); // 线状柱状图
chart.point().position('term*count').color('#009999').shape('circle');

for(var i = 0, l = data.length; i < l; i++) {
  var obj = data[i];
  chart.guide().text([obj.term, 0], obj.term + ' ', {
    textAlign: 'right'
  });
}

chart.guide().text([-3.5, 0], 'Music', {
  textAlign: 'center',
  fontSize: 28,
  fill: '#066'
});

chart.render();
</script>
