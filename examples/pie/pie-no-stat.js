webpackJsonp([115],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ type: '类型一', value: 10 }, { type: '类型二', value: 15 }, { type: '类型三', value: 15 }, { type: '类型四', value: 20 }, { type: '类型五', value: 40 }];
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.source(data);
	chart.coord('theta');
	chart.intervalStack().position('value').color('type').label('type', { offset: -10 });; // 这个时候需要保证 value 的总和为 100
		chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvcGllL3BpZS1uby1zdGF0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL3BpZS9waWUtbm8tc3RhdC5tZCIsIndlYnBhY2s6Ly8vP2Q0MWQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyIgIHZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG4gIHZhciBkYXRhID0gW1xuICAgIHt0eXBlOiAn57G75Z6L5LiAJyx2YWx1ZTogMTB9LFxuICAgIHt0eXBlOiAn57G75Z6L5LqMJyx2YWx1ZTogMTV9LFxuICAgIHt0eXBlOiAn57G75Z6L5LiJJyx2YWx1ZTogMTV9LFxuICAgIHt0eXBlOiAn57G75Z6L5ZubJyx2YWx1ZTogMjB9LFxuICAgIHt0eXBlOiAn57G75Z6L5LqUJyx2YWx1ZTogNDB9LFxuICBdO1xuICB2YXIgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgIGlkOiAnYzEnLFxuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogNTAwXG4gIH0pO1xuICBjaGFydC5zb3VyY2UoZGF0YSk7XG4gIGNoYXJ0LmNvb3JkKCd0aGV0YScpO1xuICBjaGFydC5pbnRlcnZhbFN0YWNrKClcbiAgICAucG9zaXRpb24oJ3ZhbHVlJylcbiAgICAuY29sb3IoJ3R5cGUnKVxuICAgIC5sYWJlbCgndHlwZScsIHtvZmZzZXQ6IC0xMH0pOzsgLy8g6L+Z5Liq5pe25YCZ6ZyA6KaB5L+d6K+BIHZhbHVlIOeahOaAu+WSjOS4uiAxMDBcbiAgY2hhcnQucmVuZGVyKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvcGllL3BpZS1uby1zdGF0Lm1kXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQ0NBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBOzs7Iiwic291cmNlUm9vdCI6IiJ9