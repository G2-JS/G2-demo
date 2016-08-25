# step 图


----


## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [
    {x: 1,y: 55,type: 'vh'},
    {x: 2,y: 60,type: 'vh'},
    {x: 3,y: 57,type: 'vh'},
    {x: 4,y: 52,type: 'vh'},
    {x: 5,y: 58,type: 'vh'},
    {x: 1,y: 45,type: 'hv'},
    {x: 2,y: 40,type: 'hv'},
    {x: 3,y: 47,type: 'hv'},
    {x: 4,y: 42,type: 'hv'},
    {x: 5,y: 48,type: 'hv'},
    {x: 1,y: 35,type: 'hvh'},
    {x: 2,y: 30,type: 'hvh'},
    {x: 3,y: 37,type: 'hvh'},
    {x: 4,y: 32,type: 'hvh'},
    {x: 5,y: 38,type: 'hvh'},
    {x: 1,y: 25,type: 'vhv'},
    {x: 2,y: 20,type: 'vhv'},
    {x: 3,y: 27,type: 'vhv'},
    {x: 4,y: 22,type: 'vhv'},
    {x: 5,y: 28,type: 'vhv'}
  ];
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data);
  // line 支持的图形：'line','smooth','dot','dash','dotSmooth'
  chart.line().position('x*y').color('type').shape('type', ['vh','hv','hvh','vhv']).size(2);
  chart.render();
```
