webpackJsonp([111],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ a: '1', b: 10 }, { a: '2', b: 20 }, { a: '3', b: 60 }, { a: '4', b: 70 }];
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.coord().transpose();

	chart.source(data, { // 列定义
	  'b': { // 指定，最大、最小值
	    min: 0,
	    max: 100
	  }
	});

	chart.interval().position('a*b').color('a');
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvc2NhbGUvbGluZWFyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL3NjYWxlL2xpbmVhci5tZCIsIndlYnBhY2s6Ly8vP2Q0MWQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIl0sInNvdXJjZXNDb250ZW50IjpbIiAgdmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbiAgdmFyIGRhdGEgPSBbXG4gICAge2E6ICcxJyxiOiAxMH0sXG4gICAge2E6ICcyJyxiOiAyMH0sXG4gICAge2E6ICczJyxiOiA2MH0sXG4gICAge2E6ICc0JyxiOiA3MH1cbiAgXTtcbiAgdmFyIGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICBpZDogJ2MxJyxcbiAgICB3aWR0aDogMTAwMCxcbiAgICBoZWlnaHQ6IDUwMFxuICB9KTtcbiAgY2hhcnQuY29vcmQoKS50cmFuc3Bvc2UoKTtcblxuICBjaGFydC5zb3VyY2UoZGF0YSx7IC8vIOWIl+WumuS5iVxuICAgICdiJzogeyAvLyDmjIflrprvvIzmnIDlpKfjgIHmnIDlsI/lgLxcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMTAwXG4gICAgfVxuICB9KTtcblxuICBjaGFydC5pbnRlcnZhbCgpLnBvc2l0aW9uKCdhKmInKS5jb2xvcignYScpO1xuICBjaGFydC5yZW5kZXIoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9zY2FsZS9saW5lYXIubWRcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FDQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7Ozs7Iiwic291cmNlUm9vdCI6IiJ9