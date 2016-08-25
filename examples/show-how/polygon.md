## code

```html
<div id="c1">
</div>
```

```js
var $ = require('jquery');
var G2 = require('g2');
var Stat = G2.Stat;
var sites = ["湘湖", "滨康路", "西兴", "滨和路", "江陵路", "近江", "婺江路", "城站", "定安路", "龙翔桥", "凤起路", "武林广场", "西湖文化广场", "打铁关", "火车东站", "闸弄口", "彭埠", "七堡", "九和路", "九堡", "客运中心", "下沙西", "金沙湖", "高沙路", "文泽路"];
var data = [];
for(var i = 0; i < sites.length; i++){
  for(var j = sites.length - 1; j >=i; j--){
    var price = 0;
    var step = Math.abs(j - i);
    if (step <= 2) {
      price = 2;
    } else if (step <= 4) {
      price = 3;
    } else if (step <= 7) {
      price = 4;
    } else if (step <= 13) {
      price = 5;
    } else if (step <= 16) {
      price = 6;
    } else if (step <= 21) {
      price = 7;
    } else {
      price = 8;
    }
    var obj = {from: sites[i],to: sites[j],price: price};
    data.push(obj);
  }
}
console.log(data);
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [20, 80, 60, 85]
  }
});
var defs = {
  'from': {
    values: sites
  },
  'to': {
    values: sites.slice(0).reverse()
  }
};
chart.axis('to',{
  title: null,
  grid: null,
  tickLine: null
});
chart.axis('from',false);
chart.source(data,defs);
chart.polygon().position('from*to')
  .shape('stroke')
  .color('price')
  .label('price', {offset: -2});
// 在上面添加文本
chart.guide().text([0, sites.length], sites[0], {
  'text-anchor': 'middle'
});
for (var i = 0; i < sites.length - 2; i ++) {
  var site = sites[i];
  var nextSite = sites[i + 1];
  chart.guide().text([nextSite,site], nextSite, {
    'text-anchor': 'middle'
  });
}
chart.guide().text([sites.length - 1, 1], sites[sites.length-1], {
  'text-anchor': 'middle'
});
chart.render();
```


## 色块图
