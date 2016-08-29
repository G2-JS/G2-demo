webpackJsonp([129],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	//模拟数据，用户使用时可用真实数据代替

	var data = [];
	for (var i = 0; i <= 20; i++) {
	    for (var j = 0; j <= 20; j++) {
	        var x = i * 25.6;
	        var y = j * 19.2;
	        if (x > 220 && x < 360 && y > 70 && y < 230) {
	            var z = Math.random() * 400;
	        } else if (x > 320 && x < 500 && y > 230 && y < 380) {
	            var z = Math.random() * 200;
	        } else {
	            var z = Math.random() * 100;
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
	        nice: false //优化处理关闭
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
	chart.source(data, defs);
	chart.heatmap().position('x*y').color('value').size(80); //为了呈献更好的效果，需要调整热力图的叠加范围

	//引入背景图片
	chart.guide().image([0, 384], [512, 0], {
	    src: 'https://t.alipayobjects.com/images/T15opoXj0aXXXXXXXX.jpg'
	});
		chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvaGVhdG1hcC9pbWFnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9oZWF0bWFwL2ltYWdlLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbi8v5qih5ouf5pWw5o2u77yM55So5oi35L2/55So5pe25Y+v55So55yf5a6e5pWw5o2u5Luj5pu/XG5cbnZhciBkYXRhID0gW107XG5mb3IodmFyIGkgPSAwOyBpIDw9IDIwOyBpICsrKSB7XG4gICAgZm9yKHZhciBqID0gMDsgaiA8PSAyMDsgaiArKykge1xuICAgICAgICB2YXIgeCA9IGkqMjUuNjtcbiAgICAgICAgdmFyIHkgPSBqKjE5LjI7XG4gICAgICAgIGlmKCh4PjIyMCYmeDwzNjApJiYoeT43MCYmeTwyMzApKXtcbiAgICAgICAgICAgIHZhciB6ID0gTWF0aC5yYW5kb20oKSooNDAwKTsgXG4gICAgICAgIH1lbHNlIGlmKCh4PjMyMCYmeDw1MDApJiYoeT4yMzAmJnk8MzgwKSl7XG4gICAgICAgICAgICB2YXIgeiA9IE1hdGgucmFuZG9tKCkqKDIwMCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdmFyIHogID0gTWF0aC5yYW5kb20oKSooMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgIHZhbHVlOiB6XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG52YXIgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgIGlkOiAnYzEnLFxuICAgIHdpZHRoOiA4MDAsXG4gICAgaGVpZ2h0OiA1MDBcbn0pO1xuXG4vL+S4uuS6huWwhuaVsOaNruS4juWbvueJh+S4iueahOS9jee9ruWujOWFqOWQu+WQiO+8jOaIkeS7rOmcgOimgeWwhuaoqui9tOWSjOe6tei9tOeahOiMg+WbtOiuvuWumuS4uuaVsOaNruWvueW6lOiMg+WbtO+8jOW5tuWwhuiMg+WbtOS8mOWMluWkhOeQhuWFs+mXrVxudmFyIGRlZnMgPSB7XG4gICAgJ3gnOiB7XG4gICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogNTEyLFxuICAgICAgICBuaWNlOiBmYWxzZS8v5LyY5YyW5aSE55CG5YWz6ZetXG4gICAgfSxcbiAgICAneSc6IHtcbiAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAzODQsXG4gICAgICAgIG5pY2U6IGZhbHNlXG4gICAgfSxcbiAgICAndmFsdWUnOiB7XG4gICAgICAgIG5pY2U6IGZhbHNlXG4gICAgfVxufTtcblxuLy/nlLHkuo7mlbDmja7lnZDmoIfnmoTljp/ngrnlnKjlt6bkuIvop5LvvIzkvYbmmK/lm77niYflnZDmoIfljp/ngrnlnKjlt6bkuIrop5LvvIzmiYDku6XpnIDopoHlsIbmlbDmja7lnZDmoIfnv7vovaxcbmNoYXJ0LmNvb3JkKCkucmVmbGVjdCgpO1xuXG4vL+S9v+eUqOWbvueJh+WQjuWPr+S7pemakOiXj+WdkOagh+i9tFxuY2hhcnQuYXhpcyhmYWxzZSk7XG5jaGFydC5zb3VyY2UoZGF0YSxkZWZzKTtcbmNoYXJ0LmhlYXRtYXAoKS5wb3NpdGlvbigneCp5JykuY29sb3IoJ3ZhbHVlJykuc2l6ZSg4MCk7Ly/kuLrkuoblkYjnjK7mm7Tlpb3nmoTmlYjmnpzvvIzpnIDopoHosIPmlbTng63lipvlm77nmoTlj6DliqDojIPlm7RcblxuLy/lvJXlhaXog4zmma/lm77niYdcbmNoYXJ0Lmd1aWRlKCkuaW1hZ2UoWzAsMzg0XSxbNTEyLDBdLHtcbiAgICBzcmM6ICdodHRwczovL3QuYWxpcGF5b2JqZWN0cy5jb20vaW1hZ2VzL1QxNW9wb1hqMGFYWFhYWFhYWC5qcGcnXG59KTtcbmNoYXJ0LnJlbmRlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2hlYXRtYXAvaW1hZ2UubWRcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFiQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7Iiwic291cmNlUm9vdCI6IiJ9