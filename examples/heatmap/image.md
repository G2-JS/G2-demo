# 热力图-图片

----

## code

```html
<div id="c1">
</div>
```

```js
var G2 = require('g2');
//模拟数据，用户使用时可用真实数据代替

var data = [];
for(var i = 0; i <= 20; i ++) {
	for(var j = 0; j <= 20; j ++) {
		var x = i*25.6;
		var y = j*19.2;
		if((x>220&&x<360)&&(y>70&&y<230)){
			var z = Math.random()*(400); 
		}else if((x>320&&x<500)&&(y>230&&y<380)){
			var z = Math.random()*(200);
		}else{
			var z  = Math.random()*(100);
		}

		data.push({
			x: x,
			y: y,
			value: z
		});
	}
}


var chart = new G2.Chart({
	id: 'c1',
	width: 800,
	height: 500
});

//为了将数据与图片上的位置完全吻合，我们需要将横轴和纵轴的范围设定为数据对应范围，并将范围优化处理关闭
var defs = {
	'x': {
		type: 'linear',
		min: 0,
		max: 512,
		nice: false//优化处理关闭
	},
	'y': {
		type: 'linear',
		min: 0,
		max: 384,
		nice: false
	},
	'value': {
		nice: false
	}
};

//由于数据坐标的原点在左下角，但是图片坐标原点在左上角，所以需要将数据坐标翻转
chart.coord().reflect();

//使用图片后可以隐藏坐标轴
chart.axis(false);
chart.source(data,defs);
chart.heatmap().position('x*y').color('value').size(80);//为了呈献更好的效果，需要调整热力图的叠加范围

//引入背景图片
chart.guide().image([0,384],[512,0],{
	src: 'https://t.alipayobjects.com/images/T15opoXj0aXXXXXXXX.jpg'
});
chart.render();
```
