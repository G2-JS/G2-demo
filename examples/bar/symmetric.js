webpackJsonp([130],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ action: '访问', visitor: 500 }, { action: '浏览', visitor: 400 }, { action: '交互', visitor: 300 }, { action: '下单', visitor: 200 }, { action: '付款', visitor: 100 }];
	var Stat = G2.Stat;
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	var defs = {
	  'visitor': {
	    type: 'linear',
	    min: 0,
	    nice: false
	  }
	};

	chart.source(data, defs);
	chart.intervalSymmetric().position(Stat.summary.mean('action*visitor')).color('action');
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYmFyL3N5bW1ldHJpYy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9iYXIvc3ltbWV0cmljLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIl0sInNvdXJjZXNDb250ZW50IjpbIiAgdmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbiAgdmFyIGRhdGEgPSBbXG4gICAgICB7YWN0aW9uOiforr/pl64nLHZpc2l0b3I6NTAwfSxcbiAgICAgIHthY3Rpb246J+a1j+iniCcsdmlzaXRvcjo0MDB9LFxuICAgICAge2FjdGlvbjon5Lqk5LqSJyx2aXNpdG9yOjMwMH0sXG4gICAgICB7YWN0aW9uOifkuIvljZUnLHZpc2l0b3I6MjAwfSxcbiAgICAgIHthY3Rpb246J+S7mOasvicsdmlzaXRvcjoxMDB9XG4gICAgXTtcbiAgICB2YXIgU3RhdCA9IEcyLlN0YXQ7XG4gICAgdmFyIGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGlkOiAnYzEnLFxuICAgICAgd2lkdGg6IDEwMDAsXG4gICAgICBoZWlnaHQ6IDUwMFxuICAgIH0pO1xuICAgIHZhciBkZWZzID0ge1xuICAgICAgJ3Zpc2l0b3InOiB7XG4gICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICBtaW46IDAsXG4gICAgICAgIG5pY2U6IGZhbHNlXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNoYXJ0LnNvdXJjZShkYXRhLGRlZnMpO1xuICAgIGNoYXJ0LmludGVydmFsU3ltbWV0cmljKCkucG9zaXRpb24oU3RhdC5zdW1tYXJ5Lm1lYW4oJ2FjdGlvbip2aXNpdG9yJykpLmNvbG9yKCdhY3Rpb24nKTtcbiAgICBjaGFydC5yZW5kZXIoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9iYXIvc3ltbWV0cmljLm1kXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQ0NBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBQU9BO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9