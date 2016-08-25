webpackJsonp([120],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ a: [0, 5], b: 10 }, { a: [5, 10], b: 3 }, { a: [10, 15], b: 6 }, { a: [15, 20], b: 8 }, { a: [20, 40], b: 4 }];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvaGlzdG9ncmFtL2hpcy1ub24tdW5pZm9ybS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9oaXN0b2dyYW0vaGlzLW5vbi11bmlmb3JtLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsiICB2YXIgRzIgPSByZXF1aXJlKCdnMicpO1xuICB2YXIgZGF0YSA9IFtcbiAgICB7YSA6IFswLDVdLGIgOiAxMH0sXG4gICAge2EgOiBbNSwxMF0sYiA6IDN9LFxuICAgIHthIDogWzEwLDE1XSxiIDogNn0sXG4gICAge2EgOiBbMTUsMjBdLGIgOiA4fSxcbiAgICB7YTogWzIwLDQwXSxiOiA0fVxuICBdO1xuICB2YXIgU3RhdCA9IEcyLlN0YXQ7XG4gIHZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgaWQ6ICdjMScsXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA1MDBcbiAgfSk7XG4gIHZhciBkZWZzID0ge1xuICAgIGI6IHttaW46IDB9XG4gIH07XG4gIGNoYXJ0LnNvdXJjZShkYXRhLGRlZnMpO1xuXG4gIGNoYXJ0LmludGVydmFsKCkucG9zaXRpb24oJ2EqYicpLnNoYXBlKCdob2xsb3dSZWN0Jyk7XG4gIGNoYXJ0LnJlbmRlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2hpc3RvZ3JhbS9oaXMtbm9uLXVuaWZvcm0ubWRcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FDQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9