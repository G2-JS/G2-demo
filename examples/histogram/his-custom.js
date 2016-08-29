webpackJsonp([124],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ a: [0, 5], b: 10 }, { a: [5, 10], b: 3 }, { a: [10, 15], b: 6 }, { a: [15, 20], b: 8 }, { a: [20, 25], b: 4 }];
	var Stat = G2.Stat;
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	var defs = {
	  b: { min: 0 }
	};
	chart.source(data, defs);
	chart.interval().position('a*b').shape('hollowRect');
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvaGlzdG9ncmFtL2hpcy1jdXN0b20uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvaGlzdG9ncmFtL2hpcy1jdXN0b20ubWQiLCJ3ZWJwYWNrOi8vLz9kNDFkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsiICB2YXIgRzIgPSByZXF1aXJlKCdnMicpO1xuICB2YXIgZGF0YSA9IFtcbiAgICB7YSA6IFswLDVdLGIgOiAxMH0sXG4gICAge2EgOiBbNSwxMF0sYiA6IDN9LFxuICAgIHthIDogWzEwLDE1XSxiIDogNn0sXG4gICAge2EgOiBbMTUsMjBdLGIgOiA4fSxcbiAgICB7YTogWzIwLDI1XSxiOiA0fVxuICBdO1xuICB2YXIgU3RhdCA9IEcyLlN0YXQ7XG4gIHZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgaWQ6ICdjMScsXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA1MDBcbiAgfSk7XG4gIHZhciBkZWZzID0ge1xuICAgIGI6IHttaW46IDB9XG4gIH07XG4gIGNoYXJ0LnNvdXJjZShkYXRhLGRlZnMpO1xuICBjaGFydC5pbnRlcnZhbCgpLnBvc2l0aW9uKCdhKmInKS5zaGFwZSgnaG9sbG93UmVjdCcpO1xuICBjaGFydC5yZW5kZXIoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9oaXN0b2dyYW0vaGlzLWN1c3RvbS5tZFxuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUNDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9