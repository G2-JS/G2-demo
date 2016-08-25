# 存在负值的区域图

----

## code

```html
<div id="c1"></div>
```

```js
  var G2 = require('g2');
 
  var data= [
    {"Year": "1996", "Florida": 322, "Texas": 242, "Nevada": 162},
    {"Year": "1997", "Florida": 324, "Texas": 254, "Nevada": 90},
    {"Year": "1998", "Florida": 329, "Texas": 226, "Nevada": 50},
    {"Year": "1999", "Florida": 342, "Texas": 232, "Nevada": 77},
    {"Year": "2000", "Florida": 348, "Texas": 268, "Nevada": 35},
    {"Year": "2001", "Florida": 334, "Texas": 254, "Nevada": -45},
    {"Year": "2002", "Florida": 325, "Texas": 235, "Nevada": -88},
    {"Year": "2003", "Florida": 316, "Texas": 266, "Nevada": -120},
    {"Year": "2004", "Florida": 318, "Texas": 288, "Nevada": -156},
    {"Year": "2005", "Florida": 330, "Texas": 220, "Nevada": -123},
    {"Year": "2006", "Florida": 355, "Texas": 215, "Nevada": -88},
    {"Year": "2007", "Florida": 366, "Texas": 236, "Nevada": -66},
    {"Year": "2008", "Florida": 337, "Texas": 247, "Nevada": -45},
    {"Year": "2009", "Florida": 352, "Texas": 172, "Nevada": -29},
    {"Year": "2010", "Florida": 377, "Texas": 37,  "Nevada":-45},
    {"Year": "2011", "Florida": 383, "Texas": 23,  "Nevada":-88},
    {"Year": "2012", "Florida": 344, "Texas": 34,  "Nevada":-132},
    {"Year": "2013", "Florida": 366, "Texas": 46,  "Nevada":-146},
    {"Year": "2014", "Florida": 389, "Texas": 59,  "Nevada":-169},
    {"Year": "2015", "Florida": 334, "Texas": 44,  "Nevada":-184}
  ];

  var Stat = G2.Stat;
  var Frame = G2.Frame;
  var frame = new Frame(data);
  frame = Frame.combinColumns(frame,['Florida','Texas','Nevada'],'Profit','City','Year');

  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(frame, {
    'Profit': {
      alias: 'Profit in Dollars',
      formatter: function(val) {
        return val + 'k';
      }
    }
  });
  chart.tooltip({
    crosshairs: true
  });
  chart.area().position('Year*Profit').color('City');
  chart.line().position('Year*Profit').color('City').size(2);
  chart.render();
```
