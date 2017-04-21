# 中国地图

- template: demo-detail
- product: G2
- type: 地图
- index: 0
- description: 可视化的方法显示地理区域上的数据。 使用地图作为背景，通过图形的位置来表现数据的地理位置， 通常来展示数据在不同地理区域上的分布情况。
- antVLink: https://antv.alipay.com/chart/classify/location.html

----

<script>
$.getJSON('../../static/data/china.json', function(mapData) {
  var Stat = G2.Stat;
  var userData = [];
  var features = mapData.features;
  for(var i=0; i<features.length; i++) {
    var name = features[i].properties.name;
    userData.push({
      "name": name,
      "value": Math.round(Math.random()*1000)
    });
  }

  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: [30, 180]
    }
  });

  chart.source(userData);
  chart.axis(false);
  chart.polygon().position(Stat.map.region('name', mapData))
    .color('value', '#F4EC91-#AF303C')
    .label('name', {label: {fill: '#000', shadowBlur: 5, shadowColor: '#fff'}})
    .style({
      stroke: '#333',
      lineWidth: 1
    });
  chart.render();
});
</script>
