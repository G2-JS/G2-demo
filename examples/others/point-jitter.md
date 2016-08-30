# one dimension

-----

one dimesion distribution

-----

## code

```html
<h2>一维扰动点图</h2>
<div id="c1"></div>

<h2>二维扰动点图</h2>
<div id="c2"></div>

```

```js
  var G2 = require('g2');
  var $ = require('jquery');
  var Stat = G2.Stat;
// ========= start 一维扰动点图
  $.getJSON('./data/diamond.json?nowrap',function(data){
    var chart = new G2.Chart({
      id: 'c1',
      width: 800,
      height: 500
    });
    chart.source(data);
    chart.pointJitter().position('clarity').color('clarity');
    chart.render();
  });
// =========end 一维扰动点图

// =========start 二维扰动点图
$.getJSON('./data/data.json?nowrap',function(data){
    var chart = new G2.Chart({
      id: 'c2',
      width: 800,
      height: 500
    });
    chart.source(data);
    chart.axis('ui',{
      gridAlign: 'middle'
    });

    chart.pointJitter().position('count*ui')
      .color('healthy')
      .shape('type');
    chart.render();
  });
// =========end 二维扰动点图
```
