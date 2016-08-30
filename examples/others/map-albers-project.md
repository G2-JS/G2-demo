#  albers 投影地图

-----

## code

```html
<div id="c1"></div>
```

```js
var $ = require('jquery');
var G2 = require('g2');
var Stat = G2.Stat;

$.getJSON('./data/world.geo.json?nowrap', function(mapData){
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
    width: 800,
    height: 500
  });

  chart.source(userData);
  chart.coord('map', {
    projection: 'albers',
    basic: [110, 0, 25, 47], // 指定投影方法的基本参数，[λ0, φ0, φ1, φ2] 分别表示中央经度、坐标起始纬度、第一标准纬度、第二标准纬度
    max: [16.573, -13.613], // 指定投影后最大的坐标点
    min: [-27.187, -49.739] // 指定投影后最小的坐标点
  });
  chart.axis(false);
  chart.legend(false);
  chart.polygon().position(Stat.map.region('name', mapData)).tooltip('name*value').color('name', function(val){
    if(val === 'China') {
      return 'red';
    } else {
      return '#000';
    }
  });
  chart.render();
});
```
