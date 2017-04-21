# albers 投影

- template: demo-detail
- type: 地图
- index: 5
----

<script>
var Stat = G2.Stat;
$.getJSON('../../static/data/world.geo.json', function(mapData){
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
      margin: [50, 80]
    }
  });

  chart.source(userData, {
    '..long': {
      tickCount: 10
    }
  });
  chart.coord('map', {
    projection: 'albers',
    basic: [0, 0, 0, 60], // 指定投影方法的基本参数，[λ0, φ0, φ1, φ2] 分别表示中央经度、坐标起始纬度、第一标准纬度、第二标准纬度
    max: [161.89, 120.635], // 指定投影后最大的坐标点
    min: [-144.485, -27.666] // 指定投影后最小的坐标点
  });
  chart.axis('..long', {
    tickLine: null,
    labels: null,
    grid: {
      line: {
        stroke: '#d9d9d9',
        lineWidth: 1,
        lineDash: [2, 2]
      }
    }
  });
  chart.axis('..lant', {
    tickLine: null,
    labels: null,
    line: null
  });
  chart.legend(false);
  chart.polygon()
    .position(Stat.map.region('name', mapData))
    .tooltip('name*value')
    .color('name', function(val){
      if(val === 'China') {
        return '#F9815C';
      } else {
        return '#5479A9'; // 返回默认颜色
      }
    });
  chart.render();
});
</script>
