# 地图
-----

使用 view 绘制分级统计地图

-----
## code

```html
<div id="c1"></div>
```

```js
var G2 = require('g2');
var Stat = G2.Stat;
var Frame = G2.Frame;
var $ = require('jquery');

$.getJSON('./data/world.geo.json?nowrap', function(mapData) {
  var userData = [
    {name: 'Russia',value: 86.8},
    {name: 'China',value: 106.3},
    {name: 'Japan',value: 94.7},
    {name: 'Mongolia',value: 98},
    {name: 'Canada',value: 98.4},
    {name: 'United Kingdom',value: 97.2},
    {name: 'United States of America',value: 98.3},
    {name: 'Brazil',value: 96.7},
    {name: 'Argentina',value: 95.8},
    {name: 'Algeria',value: 101.3},
    {name: 'France',value: 94.8},
    {name: 'Germany',value: 96.6},
    {name: 'Ukraine',value: 86.3},
    {name: 'Egypt',value: 102.1},
    {name: 'South Africa',value: 101.3},
    {name: 'India',value: 107.6},
    {name: 'Australia',value: 99.9},
    {name: 'Saudi Arabia',value:130.1},
    {name: 'Afghanistan',value: 106.5},
    {name: 'Kazakhstan',value:93.4},
    {name: 'Indonesia',value: 101.4}
  ];

  var frame = new Frame(userData);
  frame.addCol('trend', function(obj) {
    return (obj.value > 100) ? 1 : 0;
  });

  var map = [];
  var features = mapData.features;
  for(var i=0; i<features.length; i++) {
    var name = features[i].properties.name;
    map.push({
      "name": name,
      "value": Math.round(Math.random()*1000)
    });
  }

  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    forceFit: true
  });
  chart.legend('left');
  chart.source(map);
  chart.tooltip({
    title: 'name'
  });
  chart.polygon().position(Stat.map.region('name', mapData)).shape('stroke').style({
    fill: '#fff',
    stroke: '#ccc',
    'stroke-width': 1
  });

  var view = chart.createView();
  view.source(frame, {
    'trend': {
      type: 'cat',
      alias: '每100位女性对应的男性数量',
      values: ['女性更多', '男性更多']
    }
  });
  view.polygon().position(Stat.map.region('name*value', mapData)).color('trend',['#C45A5A','#14647D']).opacity('value').tooltip('trend');
  chart.render();
});
```
