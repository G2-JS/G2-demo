#  地图上绘制点和线

-----

## 点和线

```html
<div id="c1"></div>
```

```js
var G2 = require('g2');
var Stat = G2.Stat;
var Frame = G2.Frame;
var $ = require('jquery');

$.getJSON('./data/USA.geo.json?nowrap', function(mapData) {

  var map = [];
  var features = mapData.features;
  // 获取出所有的地图区域名称
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
    animate: false
  });
  var defs = {
    '..long': {
      max: -66,
      min:-125
    },
    '..lant': {
      max: 50,
      min:24
    },
    '..x': {
      max: -66,
      min:-125
    },
    '..y': {
      max: 50,
      min:24
    }
  };
  chart.source(map, defs);
  chart.tooltip({
    title: null
  });
  var backView = chart.createView();
  backView.source(map);
  backView.tooltip(false); // 背景不显示tooltip
  backView.polygon().position(Stat.map.region('name', mapData)).style({
    fill: 'rgb(204,204,204)',
    stroke: '#fff',
    'stroke-width': 1
  });
 // backView.render();
  $.getJSON('./data/flights-airport.json', function(flights) {
    var linksByOrigin = {},
      countByAirport = {},
      locationByAirport = {},
      subFlights = [];
    
    // 计算飞机的起飞、降落数
    flights.forEach(function(flight) {
      var origin = flight.origin,
          destination = flight.destination;

      countByAirport[origin] = (countByAirport[origin] || 0) + 1;
      countByAirport[destination] = (countByAirport[destination] || 0) + 1;
    });

    $.getJSON('./data/airport.json', function(airports) {

      // Only consider airports with at least one flight.
      airports = airports.filter(function(airport) {
        if (countByAirport[airport.iata]) {
          airport.count = countByAirport[airport.iata]; // 加入班次数量
          airport.x = airport.longitude;
          airport.y = airport.latitude;
          airport.id = airport.iata;
          return true;
        }
      });

      var airView = chart.createView();
      airView.source(airports, defs);
      airView.point().position(Stat.map.location('longitude*latitude'))
             .color('rgb(97,145,185)')
             .shape('circle')
             .style({
               stroke: '#eee',
               lineWidth: 1
             })
             .size('count', 15, 3)
             .tooltip('iata*count');

      var flightView = chart.createView(); // 飞行路线
      flightView.tooltip(false);
      flightView.source(subFlights,defs);
      flightView.edge().position(Stat.link('origin*destination', airports));
      chart.render();
      var preShape;

      function getFlights(iata) {
        var rst = [];
        flights.forEach(function(flight) {
          if (flight.origin == iata || flight.destination == iata) {
            rst.push(flight);
          }
        });
        return rst;
      }
      var preId;
      chart.on('plotmove', function(ev){
        var records = airView.getSnapRecords({
          x: ev.x,
          y: ev.y
        });
        if (records.length) {
          var obj = records[0]._origin;
          var iata = obj.iata;
          if (preId !== iata) {
            subFlights = getFlights(iata);
            flightView.changeData(subFlights);
            preId = iata;
          }          
        }
      });

      chart.on('plotleave', function(ev){
        if (subFlights.length) {
          subFlights = [];
          flightView.changeData([]);
        }
        
      });
    });

  });
  
});
```
