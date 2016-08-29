# albers 投影之后的中国地图

----

## code

```html
<div id="c1"></div>
```

```js
  import mapData from '../data/china-no-SouthSea.json';
  var G2 = require('g2');
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
      margin: [50, 200]
    }
  });

  chart.source(userData);
  // 使用地理坐标系 map
  chart.coord('map', {
    projection: 'albers', // 指定投影方法
    basic: [110, 0, 25, 47], // 指定投影方法的基本参数，[λ0, φ0, φ1, φ2] 分别表示中央经度、坐标起始纬度、第一标准纬度、第二标准纬度
    max: [16.573, -13.613], // 指定投影后最大的坐标点
    min: [-27.187, -49.739] // 指定投影后最小的坐标点
  });
  chart.axis(false);
  chart.legend(false);
  chart.tooltip(false);
  chart.polygon()
    .position(Stat.map.region('name', mapData))
    .color('#5278AB')
    .shape('stroke');
  chart.render();
```
