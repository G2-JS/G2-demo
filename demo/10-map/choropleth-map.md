# 分级统计图

- template: demo-detail
- product: G2
- type: 地图
- index: 2
- description: 分级统计图是一种在地图分区上使用视觉符号（通常是颜色、阴影或者不同疏密的晕线）来表示一个范围值的分布情况的地图。
- antVLink: https://antv.alipay.com/chart/details/choropleth-map.html
----

<script>
var Stat = G2.Stat;
$.getJSON('../../static/data/USA.geo.json', function(mapData) {
  var map = [];
  var features = mapData.features;
  for(var i=0; i<features.length; i++) {
    var name = features[i].properties.name;
    map.push({
      "name": name
    });
  }
  var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500,
      plotCfg: {
        margin: [40, 140]
      }
    });
  chart.source(map);
  chart.legend(false);
  chart.polygon().position(Stat.map.region('name', mapData)).color('#e6e6e6').style({
    stroke: '#999',
    lineWidth: 1
  });

  $.getJSON('../../static/data/2014-usa-population.json', function(data) {
    var view = chart.createView();
    view.source(data);
    view.polygon().position(Stat.map.region('State', mapData)).color('Population','#e5f5e0-#31a354');
    view.point().position(Stat.map.center('State', mapData)).size(0).label('code', {offset: 0});
    chart.render();
  });
});
</script>
