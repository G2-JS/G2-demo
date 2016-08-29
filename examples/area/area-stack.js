webpackJsonp([140],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var G2 = __webpack_require__(2);
	var data = [{ "name": "Nailpolish", "Florida": 12814, "Texas": 3054, "Arizona": 4376, "Nevada": 4229 }, { "name": "Eyebrowpencil", "Florida": 13012, "Texas": 5067, "Arizona": 3987, "Nevada": 3932 }, { "name": "Rouge", "Florida": 11624, "Texas": 7004, "Arizona": 3574, "Nevada": 5221 }, { "name": "Pomade", "Florida": 8814, "Texas": 9054, "Arizona": 4376, "Nevada": 9256 }, { "name": "Eyeshadows", "Florida": 12998, "Texas": 12043, "Arizona": 4572, "Nevada": 3308 }, { "name": "Eyeliner", "Florida": 12321, "Texas": 15067, "Arizona": 3417, "Nevada": 5432 }, { "name": "Foundation", "Florida": 10342, "Texas": 10119, "Arizona": 5231, "Nevada": 13701 }, { "name": "Lipgloss", "Florida": 22998, "Texas": 12043, "Arizona": 4572, "Nevada": 4008 }, { "name": "Mascara", "Florida": 11261, "Texas": 10419, "Arizona": 6134, "Nevada": 18712 }, { "name": "Powder", "Florida": 10261, "Texas": 14419, "Arizona": 5134, "Nevada": 25712 }];
	var Frame = G2.Frame;
	var frame = new Frame(data);
	frame = Frame.combinColumns(frame, ['Florida', 'Texas', 'Arizona', 'Nevada'], 'Revenue', 'City', 'name');

	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.source(frame, {
	  'Revenue': {
	    alias: '销售总额（美元）',
	    formatter: function formatter(val) {
	      return parseInt(val / 1000, 10) + 'k';
	    }
	  },
	  'name': {
	    alias: '化妆品'
	  }
	});
	chart.areaStack().position('name*Revenue').color('City');
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYXJlYS9hcmVhLXN0YWNrLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2FyZWEvYXJlYS1zdGFjay5tZCIsIndlYnBhY2s6Ly8vP2Q0MWQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbnZhciBkYXRhID0gW1xuICB7XCJuYW1lXCI6IFwiTmFpbHBvbGlzaFwiLCBcIkZsb3JpZGFcIjogMTI4MTQsIFwiVGV4YXNcIjogMzA1NCwgXCJBcml6b25hXCI6IDQzNzYsIFwiTmV2YWRhXCI6IDQyMjl9LFxuICB7XCJuYW1lXCI6IFwiRXllYnJvd3BlbmNpbFwiLCBcIkZsb3JpZGFcIjogMTMwMTIsIFwiVGV4YXNcIjogNTA2NywgXCJBcml6b25hXCI6IDM5ODcsIFwiTmV2YWRhXCI6IDM5MzJ9LFxuICB7XCJuYW1lXCI6IFwiUm91Z2VcIiwgXCJGbG9yaWRhXCI6IDExNjI0LCBcIlRleGFzXCI6IDcwMDQsIFwiQXJpem9uYVwiOiAzNTc0LCBcIk5ldmFkYVwiOiA1MjIxfSxcbiAge1wibmFtZVwiOiBcIlBvbWFkZVwiLCBcIkZsb3JpZGFcIjogODgxNCwgIFwiVGV4YXNcIjo5MDU0LCBcIkFyaXpvbmFcIjogNDM3NiwgXCJOZXZhZGFcIjogOTI1Nn0sXG4gIHtcIm5hbWVcIjogXCJFeWVzaGFkb3dzXCIsIFwiRmxvcmlkYVwiOiAxMjk5OCwgXCJUZXhhc1wiOiAxMjA0MywgXCJBcml6b25hXCI6IDQ1NzIsIFwiTmV2YWRhXCI6IDMzMDh9LFxuICB7XCJuYW1lXCI6IFwiRXllbGluZXJcIiwgXCJGbG9yaWRhXCI6IDEyMzIxLCBcIlRleGFzXCI6IDE1MDY3LCBcIkFyaXpvbmFcIjogMzQxNywgXCJOZXZhZGFcIjogNTQzMn0sXG4gIHtcIm5hbWVcIjogXCJGb3VuZGF0aW9uXCIsIFwiRmxvcmlkYVwiOiAxMDM0MiwgXCJUZXhhc1wiOiAxMDExOSwgXCJBcml6b25hXCI6IDUyMzEsIFwiTmV2YWRhXCI6IDEzNzAxfSxcbiAge1wibmFtZVwiOiBcIkxpcGdsb3NzXCIsIFwiRmxvcmlkYVwiOiAyMjk5OCwgXCJUZXhhc1wiOiAxMjA0MywgXCJBcml6b25hXCI6IDQ1NzIsIFwiTmV2YWRhXCI6IDQwMDh9LFxuICB7XCJuYW1lXCI6IFwiTWFzY2FyYVwiLCBcIkZsb3JpZGFcIjogMTEyNjEsIFwiVGV4YXNcIjogMTA0MTksIFwiQXJpem9uYVwiOiA2MTM0LCBcIk5ldmFkYVwiOiAxODcxMn0sXG4gIHtcIm5hbWVcIjogXCJQb3dkZXJcIiwgXCJGbG9yaWRhXCI6IDEwMjYxLCBcIlRleGFzXCI6IDE0NDE5LCBcIkFyaXpvbmFcIjogNTEzNCwgXCJOZXZhZGFcIjogMjU3MTJ9XG5dO1xudmFyIEZyYW1lID0gRzIuRnJhbWU7XG52YXIgZnJhbWUgPSBuZXcgRnJhbWUoZGF0YSk7XG5mcmFtZSA9IEZyYW1lLmNvbWJpbkNvbHVtbnMoZnJhbWUsWydGbG9yaWRhJywnVGV4YXMnLCdBcml6b25hJywnTmV2YWRhJ10sJ1JldmVudWUnLCdDaXR5JywnbmFtZScpO1xuXG52YXIgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICBpZDogJ2MxJyxcbiAgd2lkdGg6IDEwMDAsXG4gIGhlaWdodDogNTAwXG59KTtcbmNoYXJ0LnNvdXJjZShmcmFtZSwge1xuICAnUmV2ZW51ZSc6IHtcbiAgICBhbGlhczogJ+mUgOWUruaAu+mine+8iOe+juWFg++8iScsXG4gICAgZm9ybWF0dGVyOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWwvMTAwMCwgMTApICsgJ2snO1xuICAgIH1cbiAgfSxcbiAgJ25hbWUnOiB7XG4gICAgYWxpYXM6ICfljJblpoblk4EnXG4gIH1cbn0pO1xuY2hhcnQuYXJlYVN0YWNrKCkucG9zaXRpb24oJ25hbWUqUmV2ZW51ZScpLmNvbG9yKCdDaXR5Jyk7XG5jaGFydC5yZW5kZXIoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9hcmVhL2FyZWEtc3RhY2subWRcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FDQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQVBBO0FBV0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9