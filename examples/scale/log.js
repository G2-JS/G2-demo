webpackJsonp([110],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ a: '1', b: 0.1 }, { a: '2', b: 100 }, { a: '3', b: 10000 }, { a: '4', b: 1000000 }];

	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});

	chart.source(data, { // 列定义
	  'b': { // 指定类型是 log
	    type: 'log',
	    min: 0.01,
	    base: 10 // 指定10为底
	  }
	});

	chart.line().position('a*b');
	chart.point().position('a*b').label('b');
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvc2NhbGUvbG9nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL3NjYWxlL2xvZy5tZCIsIndlYnBhY2s6Ly8vP2Q0MWQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsiICB2YXIgRzIgPSByZXF1aXJlKCdnMicpO1xuICB2YXIgZGF0YSA9IFtcbiAgICB7YTogJzEnLGI6IDAuMX0sXG4gICAge2E6ICcyJyxiOiAxMDB9LFxuICAgIHthOiAnMycsYjogMTAwMDB9LFxuICAgIHthOiAnNCcsYjogMTAwMDAwMH1cbiAgXTtcblxuICB2YXIgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgIGlkOiAnYzEnLFxuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogNTAwXG4gIH0pO1xuXG4gIGNoYXJ0LnNvdXJjZShkYXRhLHsgLy8g5YiX5a6a5LmJXG4gICAgJ2InOiB7IC8vIOaMh+Wumuexu+Wei+aYryBsb2dcbiAgICAgIHR5cGU6ICdsb2cnLFxuICAgICAgbWluOiAwLjAxLFxuICAgICAgYmFzZTogMTAgLy8g5oyH5a6aMTDkuLrlupVcbiAgICB9XG4gIH0pO1xuXG4gIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbignYSpiJyk7XG4gIGNoYXJ0LnBvaW50KCkucG9zaXRpb24oJ2EqYicpLmxhYmVsKCdiJyk7XG4gIGNoYXJ0LnJlbmRlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL3NjYWxlL2xvZy5tZFxuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUNDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBQU9BO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9