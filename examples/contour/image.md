# 等高线-图片

----


## code

```html
<div id="c1">
</div>
```

```js
var G2 = require('g2');
//模拟数据，用户使用时可用真实数据代替
var Stat = G2.Stat;
var data = [];
for(var i = 0; i <= 20; i ++) {
	for(var j = 0; j <= 20; j ++) {
		var x = i*25.6;
		var y = j*19.2;

		var z = 700-(x+0.5*y)+Math.random()*(400); 

		data.push({
			l: x,
			g: y,
			Altitude: z
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
	'l': {
		type: 'linear',
		min: 0,
		max: 512,
		nice: false//优化处理关闭
	},
	'g': {
		type: 'linear',
		min: 0,
		max: 384,
		nice: false
	},
	//等高线条数
	'Altitude': {
		tickCount:5
	}
};

//由于数据坐标的原点在左下角，但是图片坐标原点在左上角，所以需要将数据坐标翻转
chart.coord().reflect();

//使用图片后可以隐藏坐标轴
chart.axis(false);
chart.source(data,defs);
chart.contour().position(Stat.smooth.loess.triangular('l*g*Altitude',0.01)).color('Altitude','hue').size(5);

//引入背景图片
chart.guide().image([0,384],[512,0],{
	src: 'https://t.alipayobjects.com/images/T1QoJoXdFXXXXXXXXX.jpg'
});
chart.render();
```
