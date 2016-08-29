webpackJsonp([108],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ action: '访问', visitor: 500 }, { action: '浏览', visitor: 400 }, { action: '交互', visitor: 300 }, { action: '下单', visitor: 200 }, { action: '付款', visitor: 100 }];

	var chart = new G2.Chart({
	  id: 'c1',
	  width: 800,
	  height: 400
	}); // 创建图表对象
	chart.source(data); // 载入数据，所有的数据都储存在 data 变量中
	chart.interval().position('action*visitor').color('action');
	chart.render(); // 渲染图表

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvc2hvdy1ob3cvZGVtby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9zaG93LWhvdy9kZW1vLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbnZhciBkYXRhID0gW1xuICB7YWN0aW9uOiforr/pl64nLHZpc2l0b3I6NTAwfSxcbiAge2FjdGlvbjon5rWP6KeIJyx2aXNpdG9yOjQwMH0sXG4gIHthY3Rpb246J+S6pOS6kicsdmlzaXRvcjozMDB9LFxuICB7YWN0aW9uOifkuIvljZUnLHZpc2l0b3I6MjAwfSxcbiAge2FjdGlvbjon5LuY5qy+Jyx2aXNpdG9yOjEwMH1cbl07XG5cbnZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gIGlkOiAnYzEnLFxuICB3aWR0aDogODAwLFxuICBoZWlnaHQ6IDQwMFxufSk7IC8vIOWIm+W7uuWbvuihqOWvueixoVxuY2hhcnQuc291cmNlKGRhdGEpOyAvLyDovb3lhaXmlbDmja7vvIzmiYDmnInnmoTmlbDmja7pg73lgqjlrZjlnKggZGF0YSDlj5jph4/kuK1cbmNoYXJ0LmludGVydmFsKCkucG9zaXRpb24oJ2FjdGlvbip2aXNpdG9yJykuY29sb3IoJ2FjdGlvbicpO1xuY2hhcnQucmVuZGVyKCk7IC8vIOa4suafk+WbvuihqFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL3Nob3ctaG93L2RlbW8ubWRcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FDQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==