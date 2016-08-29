# mercator 投影之后的世界地图

----

## code

```html
<div id="c1"></div>
```

```js
  import mapData from '../data/world.geo.json';
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
      margin: [50, 180]
    }
  });

  chart.source(userData);
  chart.coord('map', {
    projection: 'mercator',
    max: [180, 165.65], // 指定投影后最大的坐标点
    min: [-180, -67.21] // 指定投影后最小的坐标点
  });
  chart.legend(false);
  chart.polygon()
    .position(Stat.map.region('name', mapData))
    .tooltip('name*value')
    .color('#5479A9');
  chart.render();
```
