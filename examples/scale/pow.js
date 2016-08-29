webpackJsonp([109],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ a: '1', b: 1, c: 0.1 }, { a: '2', b: 2, c: 10 }, { a: '3', b: 3, c: 50 }, { a: '4', b: 4, c: 100 }];

	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});

	chart.source(data, { // 列定义
	  'c': { // 指定类型是 log
	    type: 'pow' // exponent: 2 ，底默认是 2
	  }
	});

	chart.point().position('a*b').size('c', 20, 0).shape('circle');

	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvc2NhbGUvcG93LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL3NjYWxlL3Bvdy5tZCIsIndlYnBhY2s6Ly8vP2Q0MWQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyIgIHZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG4gIHZhciBkYXRhID0gW1xuICAgIHthOiAnMScsYjogMSxjOiAwLjF9LFxuICAgIHthOiAnMicsYjogMixjOiAxMH0sXG4gICAge2E6ICczJyxiOiAzLGM6IDUwfSxcbiAgICB7YTogJzQnLGI6IDQsYzogMTAwfVxuICBdO1xuXG4gIHZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgaWQ6ICdjMScsXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA1MDBcbiAgfSk7XG5cbiAgY2hhcnQuc291cmNlKGRhdGEseyAvLyDliJflrprkuYlcbiAgICAnYyc6IHsgLy8g5oyH5a6a57G75Z6L5pivIGxvZ1xuICAgICAgdHlwZTogJ3BvdycvLyBleHBvbmVudDogMiDvvIzlupXpu5jorqTmmK8gMlxuICAgIH1cbiAgfSk7XG5cbiAgY2hhcnQucG9pbnQoKS5wb3NpdGlvbignYSpiJykuc2l6ZSgnYycsMjAsMCkuc2hhcGUoJ2NpcmNsZScpO1xuXG4gIGNoYXJ0LnJlbmRlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL3NjYWxlL3Bvdy5tZFxuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUNDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBS0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=