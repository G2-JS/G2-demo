webpackJsonp([114],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ x: 1, y: 55, type: 'vh' }, { x: 2, y: 60, type: 'vh' }, { x: 3, y: 57, type: 'vh' }, { x: 4, y: 52, type: 'vh' }, { x: 5, y: 58, type: 'vh' }, { x: 1, y: 45, type: 'hv' }, { x: 2, y: 40, type: 'hv' }, { x: 3, y: 47, type: 'hv' }, { x: 4, y: 42, type: 'hv' }, { x: 5, y: 48, type: 'hv' }, { x: 1, y: 35, type: 'hvh' }, { x: 2, y: 30, type: 'hvh' }, { x: 3, y: 37, type: 'hvh' }, { x: 4, y: 32, type: 'hvh' }, { x: 5, y: 38, type: 'hvh' }, { x: 1, y: 25, type: 'vhv' }, { x: 2, y: 20, type: 'vhv' }, { x: 3, y: 27, type: 'vhv' }, { x: 4, y: 22, type: 'vhv' }, { x: 5, y: 28, type: 'vhv' }];
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.source(data);
	// line 支持的图形：'line','smooth','dot','dash','dotSmooth'
	chart.line().position('x*y').color('type').shape('type', ['vh', 'hv', 'hvh', 'vhv']).size(2);
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvbGluZS9zdGVwLWxpbmUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvbGluZS9zdGVwLWxpbmUubWQiLCJ3ZWJwYWNrOi8vLz9kNDFkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyIgIHZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG4gIHZhciBkYXRhID0gW1xuICAgIHt4OiAxLHk6IDU1LHR5cGU6ICd2aCd9LFxuICAgIHt4OiAyLHk6IDYwLHR5cGU6ICd2aCd9LFxuICAgIHt4OiAzLHk6IDU3LHR5cGU6ICd2aCd9LFxuICAgIHt4OiA0LHk6IDUyLHR5cGU6ICd2aCd9LFxuICAgIHt4OiA1LHk6IDU4LHR5cGU6ICd2aCd9LFxuICAgIHt4OiAxLHk6IDQ1LHR5cGU6ICdodid9LFxuICAgIHt4OiAyLHk6IDQwLHR5cGU6ICdodid9LFxuICAgIHt4OiAzLHk6IDQ3LHR5cGU6ICdodid9LFxuICAgIHt4OiA0LHk6IDQyLHR5cGU6ICdodid9LFxuICAgIHt4OiA1LHk6IDQ4LHR5cGU6ICdodid9LFxuICAgIHt4OiAxLHk6IDM1LHR5cGU6ICdodmgnfSxcbiAgICB7eDogMix5OiAzMCx0eXBlOiAnaHZoJ30sXG4gICAge3g6IDMseTogMzcsdHlwZTogJ2h2aCd9LFxuICAgIHt4OiA0LHk6IDMyLHR5cGU6ICdodmgnfSxcbiAgICB7eDogNSx5OiAzOCx0eXBlOiAnaHZoJ30sXG4gICAge3g6IDEseTogMjUsdHlwZTogJ3Zodid9LFxuICAgIHt4OiAyLHk6IDIwLHR5cGU6ICd2aHYnfSxcbiAgICB7eDogMyx5OiAyNyx0eXBlOiAndmh2J30sXG4gICAge3g6IDQseTogMjIsdHlwZTogJ3Zodid9LFxuICAgIHt4OiA1LHk6IDI4LHR5cGU6ICd2aHYnfVxuICBdO1xuICB2YXIgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgIGlkOiAnYzEnLFxuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogNTAwXG4gIH0pO1xuICBjaGFydC5zb3VyY2UoZGF0YSk7XG4gIC8vIGxpbmUg5pSv5oyB55qE5Zu+5b2i77yaJ2xpbmUnLCdzbW9vdGgnLCdkb3QnLCdkYXNoJywnZG90U21vb3RoJ1xuICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3gqeScpLmNvbG9yKCd0eXBlJykuc2hhcGUoJ3R5cGUnLCBbJ3ZoJywnaHYnLCdodmgnLCd2aHYnXSkuc2l6ZSgyKTtcbiAgY2hhcnQucmVuZGVyKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvbGluZS9zdGVwLWxpbmUubWRcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FDQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=