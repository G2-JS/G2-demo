# 全国各个城市 pm 指数

- template: demo-detail
- product: G2
- type: 地图
- index: 6
----

<script>
var Frame = G2.Frame;
var Stat = G2.Stat;
$.getJSON('../../static/data/world.geo.json', function(mapData) {
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
      margin: [30, 200]
    }
  });
  chart.legend(false);
  chart.tooltip({
    title: null
  });

  var bgView = chart.createView();
  bgView.source(map);
  bgView.tooltip(false);
  bgView.coord('map', {
    projection: 'albers',
    basic: [110, 0, 25, 47], // 指定投影方法的基本参数，[λ0, φ0, φ1, φ2] 分别表示中央经度、坐标起始纬度、第一标准纬度、第二标准纬度
    max: [16.573, -13.613], // 指定投影后最大的坐标点
    min: [-27.187, -49.739] // 指定投影后最小的坐标点
  });
  bgView.axis(false);
  bgView.polygon()
    .position(Stat.map.region('name', mapData))
    .color('name', function(val){
      if(val === 'China') {
        return '#C7C7C7';
      } else {
        return '#F0F0F0';
      }
    })
    .style({
      stroke: '#fff',
      lineWidth: 3
    });

  $.getJSON('../../static/data/china-pm.json', function(data) {
    var pointView = chart.createView({
      index: 1
    });
    pointView.source(data);
    pointView.coord('map', {
    projection: 'albers',
    basic: [110, 0, 25, 47], // 指定投影方法的基本参数，[λ0, φ0, φ1, φ2] 分别表示中央经度、坐标起始纬度、第一标准纬度、第二标准纬度
    max: [16.573, -13.613], // 指定投影后最大的坐标点
    min: [-27.187, -49.739] // 指定投影后最小的坐标点
  });
    pointView.point().position(Stat.map.location('long*lant'))
      .size('value', 12, 1)
      .color('#6A006F')
      .tooltip('name*value')
      .shape('circle')
      .style({
        shadowBlur: 10,
        shadowColor: '#6A006F'
      });
    chart.render();
  });
});
</script>
