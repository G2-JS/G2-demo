# 自定义 tooltip

-----

## code

```css
  .ac-tooltip{
    position:absolute;
    visibility:hidden;
    border : 1px solid #efefef;
    background-color: white;
    opacity: .8;
    padding: 20px;
    transition: top 200ms,left 200ms;
    -moz-transition:  top 200ms,left 200ms;  /* Firefox 4 */
    -webkit-transition:  top 200ms,left 200ms; /* Safari 和 Chrome */
    -o-transition:  top 200ms,left 200ms;
  }

  .ac-tooltip .ac-title{
    margin: 0;
    padding: 5px 0;
  }

  .ac-tooltip .ac-list{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .ac-tooltip li{
    line-height:  22px;
  }
```

```html

<div id="canvas2"></div>
<div id="canvas3"></div>

```

```js
  var g2 = require('g2');
  var Stat = g2.Stat;
  var data = [
      {"month":0,"tokyo":7,"newYork":-0.2,"berlin":-0.9},
      {"month":1,"tokyo":6.9,"newYork":0.8,"berlin":0.6},
      {"month":2,"tokyo":9.5,"newYork":5.7,"berlin":3.5},
      {"month":3,"tokyo":14.5,"newYork":11.3,"berlin":8.4},
      {"month":4,"tokyo":18.2,"newYork":17,"berlin":13.5},
      {"month":5,"tokyo":21.5,"newYork":22,"berlin":17},
      {"month":6,"tokyo":25.2,"newYork":24.8,"berlin":18.6},
      {"month":7,"tokyo":26.5,"newYork":24.1,"berlin":17.9},
      {"month":8,"tokyo":23.3,"newYork":20.1,"berlin":14.3},
      {"month":9,"tokyo":18.3,"newYork":14.1,"berlin":9},
      {"month":10,"tokyo":13.9,"newYork":8.6,"berlin":3.9},
      {"month":11,"tokyo":9.6,"newYork":2.5,"berlin":1}
    ];

    g2.Global.pixelRatio = 2;
    var chart = new g2.Chart({
      id : 'canvas2',
      width : 800,
      height : 200,
      plotCfg : {
        margin : [50,100,30,50]
      }
    });

    chart.tooltip({
      crosshairs: true,
      custom: true,
      crossLine: {
        stroke: 'red',
        'stroke-width' : 1
      }
    });

    chart.source(data, {
      'month': {
        type: 'cat',
        values: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
      }
    });

    chart.area().position('month*berlin').color('l(0) 0:#00ff00 0.5:#0000ff 1:#fff');
    chart.line().position('month*berlin');
    chart.render();


    var chart1 = new g2.Chart({
      id : 'canvas3',
      width : 800,
      height : 200,
      plotCfg : {
        margin : [50,100,30,50]
      }
    });

    chart1.source(data, {
      'month': {
        type: 'cat',
        values: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
      }
    });
    chart1.tooltip({
      crosshairs: true,
      custom: true,
      crossLine: {
        stroke: 'red',
        'stroke-width' : 1
      },
      title: null
    });
    chart1.area().position('month*newYork');
    chart1.render();

    chart.on('plotmove',function(ev){
      var point = {x: ev.x,y: ev.y};
      chart1.showTooltip(point);
      var items = chart.getTooltipItems(point);
    });

    chart.on('tooltiphide',function(){
      chart1.hideTooltip();
    });
```
