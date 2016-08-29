webpackJsonp([131],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	//模拟数据，用户使用时可用真实数据代替
	var Stat = G2.Stat;
	var data = [];
	for (var i = 0; i <= 20; i++) {
	    for (var j = 0; j <= 20; j++) {
	        var x = i * 25.6;
	        var y = j * 19.2;

	        var z = 700 - (x + 0.5 * y) + Math.random() * 400;

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
	        nice: false //优化处理关闭
	    },
	    'g': {
	        type: 'linear',
	        min: 0,
	        max: 384,
	        nice: false
	    },
	    //等高线条数
	    'Altitude': {
	        tickCount: 5
	    }
	};

	//由于数据坐标的原点在左下角，但是图片坐标原点在左上角，所以需要将数据坐标翻转
	chart.coord().reflect();

	//使用图片后可以隐藏坐标轴
	chart.axis(false);
	chart.source(data, defs);
	chart.contour().position(Stat.smooth.loess.triangular('l*g*Altitude', 0.01)).color('Altitude', 'hue').size(5);

	//引入背景图片
	chart.guide().image([0, 384], [512, 0], {
	    src: 'https://t.alipayobjects.com/images/T1QoJoXdFXXXXXXXXX.jpg'
	});
		chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvY29udG91ci9pbWFnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9jb250b3VyL2ltYWdlLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRzIgPSByZXF1aXJlKCdnMicpO1xuLy/mqKHmi5/mlbDmja7vvIznlKjmiLfkvb/nlKjml7blj6/nlKjnnJ/lrp7mlbDmja7ku6Pmm79cbnZhciBTdGF0ID0gRzIuU3RhdDtcbnZhciBkYXRhID0gW107XG5mb3IodmFyIGkgPSAwOyBpIDw9IDIwOyBpICsrKSB7XG4gICAgZm9yKHZhciBqID0gMDsgaiA8PSAyMDsgaiArKykge1xuICAgICAgICB2YXIgeCA9IGkqMjUuNjtcbiAgICAgICAgdmFyIHkgPSBqKjE5LjI7XG5cbiAgICAgICAgdmFyIHogPSA3MDAtKHgrMC41KnkpK01hdGgucmFuZG9tKCkqKDQwMCk7IFxuXG4gICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgICBsOiB4LFxuICAgICAgICAgICAgZzogeSxcbiAgICAgICAgICAgIEFsdGl0dWRlOiB6XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG52YXIgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgIGlkOiAnYzEnLFxuICAgIHdpZHRoOiA4MDAsXG4gICAgaGVpZ2h0OiA1MDBcbn0pO1xuXG4vL+S4uuS6huWwhuaVsOaNruS4juWbvueJh+S4iueahOS9jee9ruWujOWFqOWQu+WQiO+8jOaIkeS7rOmcgOimgeWwhuaoqui9tOWSjOe6tei9tOeahOiMg+WbtOiuvuWumuS4uuaVsOaNruWvueW6lOiMg+WbtO+8jOW5tuWwhuiMg+WbtOS8mOWMluWkhOeQhuWFs+mXrVxudmFyIGRlZnMgPSB7XG4gICAgJ2wnOiB7XG4gICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogNTEyLFxuICAgICAgICBuaWNlOiBmYWxzZS8v5LyY5YyW5aSE55CG5YWz6ZetXG4gICAgfSxcbiAgICAnZyc6IHtcbiAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAzODQsXG4gICAgICAgIG5pY2U6IGZhbHNlXG4gICAgfSxcbiAgICAvL+etiemrmOe6v+adoeaVsFxuICAgICdBbHRpdHVkZSc6IHtcbiAgICAgICAgdGlja0NvdW50OjVcbiAgICB9XG59O1xuXG4vL+eUseS6juaVsOaNruWdkOagh+eahOWOn+eCueWcqOW3puS4i+inku+8jOS9huaYr+WbvueJh+WdkOagh+WOn+eCueWcqOW3puS4iuinku+8jOaJgOS7pemcgOimgeWwhuaVsOaNruWdkOagh+e/u+i9rFxuY2hhcnQuY29vcmQoKS5yZWZsZWN0KCk7XG5cbi8v5L2/55So5Zu+54mH5ZCO5Y+v5Lul6ZqQ6JeP5Z2Q5qCH6L20XG5jaGFydC5heGlzKGZhbHNlKTtcbmNoYXJ0LnNvdXJjZShkYXRhLGRlZnMpO1xuY2hhcnQuY29udG91cigpLnBvc2l0aW9uKFN0YXQuc21vb3RoLmxvZXNzLnRyaWFuZ3VsYXIoJ2wqZypBbHRpdHVkZScsMC4wMSkpLmNvbG9yKCdBbHRpdHVkZScsJ2h1ZScpLnNpemUoNSk7XG5cbi8v5byV5YWl6IOM5pmv5Zu+54mHXG5jaGFydC5ndWlkZSgpLmltYWdlKFswLDM4NF0sWzUxMiwwXSx7XG4gICAgc3JjOiAnaHR0cHM6Ly90LmFsaXBheW9iamVjdHMuY29tL2ltYWdlcy9UMVFvSm9YZEZYWFhYWFhYWFguanBnJ1xufSk7XG5jaGFydC5yZW5kZXIoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9jb250b3VyL2ltYWdlLm1kXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQWRBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OzsiLCJzb3VyY2VSb290IjoiIn0=