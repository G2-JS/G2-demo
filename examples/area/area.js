webpackJsonp([135],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ "day": '2015/9/1', "share": 10 }, { "day": '2015/9/2', "share": 12 }, { "day": '2015/9/3', "share": 11 }, { "day": '2015/9/4', "share": 15 }, { "day": '2015/9/5', "share": 20 }, { "day": '2015/9/6', "share": 22 }, { "day": '2015/9/7', "share": 21 }, { "day": '2015/9/8', "share": 25 }, { "day": '2015/9/9', "share": 31 }, { "day": '2015/9/10', "share": 32 }, { "day": '2015/9/11', "share": 28 }, { "day": '2015/9/12', "share": 29 }, { "day": '2015/9/13', "share": 40 }, { "day": '2015/9/14', "share": 41 }, { "day": '2015/9/15', "share": 45 }, { "day": '2015/9/16', "share": 50 }, { "day": '2015/9/17', "share": 65 }, { "day": '2015/9/18', "share": 45 }, { "day": '2015/9/19', "share": 50 }, { "day": '2015/9/20', "share": 51 }, { "day": '2015/9/21', "share": 65 }, { "day": '2015/9/22', "share": 60 }, { "day": '2015/9/23', "share": 62 }, { "day": '2015/9/24', "share": 65 }, { "day": '2015/9/25', "share": 45 }, { "day": '2015/9/26', "share": 55 }, { "day": '2015/9/27', "share": 59 }, { "day": '2015/9/28', "share": 52 }, { "day": '2015/9/29', "share": 53 }, { "day": '2015/9/30', "share": 40 }];

	var Stat = G2.Stat;
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.source(data);
	chart.col('day', {
	  type: 'timeCat',
	  tickCount: 11,
	  nice: false,
	  mask: 'yyyy/m/d',
	  alias: 'Year/Month/Day'
	});
	chart.col('share', {
	  alias: 'The Share Price',
	  formatter: function formatter(val) {
	    return '$' + val;
	  }
	});
	chart.tooltip({
	  crosshairs: true
	});
	chart.area().position('day*share');
	chart.line().position('day*share').size(3);
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYXJlYS9hcmVhLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2FyZWEvYXJlYS5tZCIsIndlYnBhY2s6Ly8vP2Q0MWQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIl0sInNvdXJjZXNDb250ZW50IjpbIiAgdmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbiAgdmFyIGRhdGE9IFtcbiAgICB7XCJkYXlcIjogJzIwMTUvOS8xJywgIFwic2hhcmVcIjogMTB9LFxuICAgIHtcImRheVwiOiAnMjAxNS85LzInLCAgXCJzaGFyZVwiOiAxMn0sXG4gICAge1wiZGF5XCI6ICcyMDE1LzkvMycsICBcInNoYXJlXCI6IDExfSxcbiAgICB7XCJkYXlcIjogJzIwMTUvOS80JywgIFwic2hhcmVcIjogMTV9LFxuICAgIHtcImRheVwiOiAnMjAxNS85LzUnLCAgXCJzaGFyZVwiOiAyMH0sXG4gICAge1wiZGF5XCI6ICcyMDE1LzkvNicsICBcInNoYXJlXCI6IDIyfSxcbiAgICB7XCJkYXlcIjogJzIwMTUvOS83JywgIFwic2hhcmVcIjogMjF9LFxuICAgIHtcImRheVwiOiAnMjAxNS85LzgnLCAgXCJzaGFyZVwiOiAyNX0sXG4gICAge1wiZGF5XCI6ICcyMDE1LzkvOScsICBcInNoYXJlXCI6IDMxfSxcbiAgICB7XCJkYXlcIjogJzIwMTUvOS8xMCcsIFwic2hhcmVcIjogMzJ9LFxuICAgIHtcImRheVwiOiAnMjAxNS85LzExJywgXCJzaGFyZVwiOiAyOH0sXG4gICAge1wiZGF5XCI6ICcyMDE1LzkvMTInLCBcInNoYXJlXCI6IDI5fSxcbiAgICB7XCJkYXlcIjogJzIwMTUvOS8xMycsIFwic2hhcmVcIjogNDB9LFxuICAgIHtcImRheVwiOiAnMjAxNS85LzE0JywgXCJzaGFyZVwiOiA0MX0sXG4gICAge1wiZGF5XCI6ICcyMDE1LzkvMTUnLCBcInNoYXJlXCI6IDQ1fSxcbiAgICB7XCJkYXlcIjogJzIwMTUvOS8xNicsIFwic2hhcmVcIjogNTB9LFxuICAgIHtcImRheVwiOiAnMjAxNS85LzE3JywgXCJzaGFyZVwiOiA2NX0sXG4gICAge1wiZGF5XCI6ICcyMDE1LzkvMTgnLCBcInNoYXJlXCI6IDQ1fSxcbiAgICB7XCJkYXlcIjogJzIwMTUvOS8xOScsIFwic2hhcmVcIjogNTB9LFxuICAgIHtcImRheVwiOiAnMjAxNS85LzIwJywgXCJzaGFyZVwiOiA1MX0sXG4gICAge1wiZGF5XCI6ICcyMDE1LzkvMjEnLCBcInNoYXJlXCI6IDY1fSxcbiAgICB7XCJkYXlcIjogJzIwMTUvOS8yMicsIFwic2hhcmVcIjogNjB9LFxuICAgIHtcImRheVwiOiAnMjAxNS85LzIzJywgXCJzaGFyZVwiOiA2Mn0sXG4gICAge1wiZGF5XCI6ICcyMDE1LzkvMjQnLCBcInNoYXJlXCI6IDY1fSxcbiAgICB7XCJkYXlcIjogJzIwMTUvOS8yNScsIFwic2hhcmVcIjogNDV9LFxuICAgIHtcImRheVwiOiAnMjAxNS85LzI2JywgXCJzaGFyZVwiOiA1NX0sXG4gICAge1wiZGF5XCI6ICcyMDE1LzkvMjcnLCBcInNoYXJlXCI6IDU5fSxcbiAgICB7XCJkYXlcIjogJzIwMTUvOS8yOCcsIFwic2hhcmVcIjogNTJ9LFxuICAgIHtcImRheVwiOiAnMjAxNS85LzI5JywgXCJzaGFyZVwiOiA1M30sXG4gICAge1wiZGF5XCI6ICcyMDE1LzkvMzAnLCBcInNoYXJlXCI6IDQwfVxuICBdO1xuXG4gIHZhciBTdGF0ID0gRzIuU3RhdDtcbiAgdmFyIGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICBpZDogJ2MxJyxcbiAgICB3aWR0aDogMTAwMCxcbiAgICBoZWlnaHQ6IDUwMFxuICB9KTtcbiAgY2hhcnQuc291cmNlKGRhdGEpO1xuICBjaGFydC5jb2woJ2RheScsIHtcbiAgICB0eXBlOiAndGltZUNhdCcsXG4gICAgdGlja0NvdW50OiAxMSxcbiAgICBuaWNlOiBmYWxzZSxcbiAgICBtYXNrOiAneXl5eS9tL2QnLFxuICAgIGFsaWFzOiAnWWVhci9Nb250aC9EYXknXG4gIH0pO1xuICBjaGFydC5jb2woJ3NoYXJlJywge1xuICAgIGFsaWFzOiAnVGhlIFNoYXJlIFByaWNlJyxcbiAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuICckJyArIHZhbDtcbiAgICB9XG4gIH0pO1xuICBjaGFydC50b29sdGlwKHtcbiAgICBjcm9zc2hhaXJzOiB0cnVlXG4gIH0pO1xuICBjaGFydC5hcmVhKCkucG9zaXRpb24oJ2RheSpzaGFyZScpO1xuICBjaGFydC5saW5lKCkucG9zaXRpb24oJ2RheSpzaGFyZScpLnNpemUoMyk7XG4gIGNoYXJ0LnJlbmRlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2FyZWEvYXJlYS5tZFxuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUNDQTtBQUNBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==