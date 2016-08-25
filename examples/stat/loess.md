# Stat.smooth.loess.<kernelType>('x*y*z')

G2.Stat.smooth.loess.<kernelType>('x*y*z')，核函数局部回归曲面。
## code

```html
<div id="c1">
</div>
```

```js
var G2 = require('g2');

function normal(x,y){
  return (1/(2*Math.PI))*Math.exp((-1/2)*(x*x + y*y));
}
var data = [];
for (var i = 0; i < 500; i++) {
	var x = ((Math.random()* 950) >> 0) + 50;
	var y = (Math.random()* 460) >> 0;
	var c = normal((x-500)/80,(y-250)/40) * 10000 >>0;
	data.push({g:x,l:y,tmp:c});
}
var Stat = G2.Stat;
var chart = new G2.Chart({
	id: 'c1',
	width: 1000,
	height: 500
});
chart.source(data);//服从二维正太分布的样本数据
chart.heatmap().position(Stat.smooth.loess.gaussian('g*l*tmp',0.03)).color('tmp');
chart.render();
```
