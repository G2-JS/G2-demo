webpackJsonp([144],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var G2 = __webpack_require__(2);

	var data = [{ "year": "1986", "ACME": 162, "Compitor": 42 }, { "year": "1987", "ACME": 134, "Compitor": 54 }, { "year": "1988", "ACME": 116, "Compitor": 26 }, { "year": "1989", "ACME": 122, "Compitor": 32 }, { "year": "1990", "ACME": 178, "Compitor": 68 }, { "year": "1991", "ACME": 144, "Compitor": 54 }, { "year": "1992", "ACME": 125, "Compitor": 35 }, { "year": "1993", "ACME": 176, "Compitor": 66 }, { "year": "1994", "ACME": 156 }, { "year": "1995", "ACME": 195 }, { "year": "1996", "ACME": 215 }, { "year": "1997", "ACME": 176, "Compitor": 36 }, { "year": "1998", "ACME": 167, "Compitor": 47 }, { "year": "1999", "ACME": 142 }, { "year": "2000", "ACME": 117 }, { "year": "2001", "ACME": 113, "Compitor": 23 }, { "year": "2002", "ACME": 132 }, { "year": "2003", "ACME": 146, "Compitor": 46 }, { "year": "2004", "ACME": 169, "Compitor": 59 }, { "year": "2005", "ACME": 184, "Compitor": 44 }];

	var Stat = G2.Stat;
	var Frame = G2.Frame;
	var frame = new Frame(data);
	frame = Frame.combinColumns(frame, ['ACME', 'Compitor'], 'value', 'type', 'year');

	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.source(frame, {
	  'value': {
	    alias: 'The Share Price in Dollars',
	    formatter: function formatter(val) {
	      return '$' + val;
	    }
	  }
	});
	chart.tooltip({
	  crosshairs: true
	});
	chart.area().position('year*value').color('type').shape('smooth');
	chart.line().position('year*value').color('type').size(2).shape('smooth');
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYXJlYS9hcmVhLW51bGwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvYXJlYS9hcmVhLW51bGwubWQiLCJ3ZWJwYWNrOi8vLz9kNDFkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRzIgPSByZXF1aXJlKCdnMicpO1xuXG52YXIgZGF0YT0gW1xuICB7XCJ5ZWFyXCI6IFwiMTk4NlwiLCBcIkFDTUVcIjogMTYyLCBcIkNvbXBpdG9yXCI6IDQyfSxcbiAge1wieWVhclwiOiBcIjE5ODdcIiwgXCJBQ01FXCI6IDEzNCwgXCJDb21waXRvclwiOiA1NH0sXG4gIHtcInllYXJcIjogXCIxOTg4XCIsIFwiQUNNRVwiOiAxMTYsIFwiQ29tcGl0b3JcIjogMjZ9LFxuICB7XCJ5ZWFyXCI6IFwiMTk4OVwiLCBcIkFDTUVcIjogMTIyLCBcIkNvbXBpdG9yXCI6IDMyfSxcbiAge1wieWVhclwiOiBcIjE5OTBcIiwgXCJBQ01FXCI6IDE3OCwgXCJDb21waXRvclwiOiA2OH0sXG4gIHtcInllYXJcIjogXCIxOTkxXCIsIFwiQUNNRVwiOiAxNDQsIFwiQ29tcGl0b3JcIjogNTR9LFxuICB7XCJ5ZWFyXCI6IFwiMTk5MlwiLCBcIkFDTUVcIjogMTI1LCBcIkNvbXBpdG9yXCI6IDM1fSxcbiAge1wieWVhclwiOiBcIjE5OTNcIiwgXCJBQ01FXCI6IDE3NiwgXCJDb21waXRvclwiOiA2Nn0sXG4gIHtcInllYXJcIjogXCIxOTk0XCIsIFwiQUNNRVwiOiAxNTZ9LFxuICB7XCJ5ZWFyXCI6IFwiMTk5NVwiLCBcIkFDTUVcIjogMTk1fSxcbiAge1wieWVhclwiOiBcIjE5OTZcIiwgXCJBQ01FXCI6IDIxNX0sXG4gIHtcInllYXJcIjogXCIxOTk3XCIsIFwiQUNNRVwiOiAxNzYsIFwiQ29tcGl0b3JcIjogMzZ9LFxuICB7XCJ5ZWFyXCI6IFwiMTk5OFwiLCBcIkFDTUVcIjogMTY3LCBcIkNvbXBpdG9yXCI6IDQ3fSxcbiAge1wieWVhclwiOiBcIjE5OTlcIiwgXCJBQ01FXCI6IDE0Mn0sXG4gIHtcInllYXJcIjogXCIyMDAwXCIsIFwiQUNNRVwiOiAxMTd9LFxuICB7XCJ5ZWFyXCI6IFwiMjAwMVwiLCBcIkFDTUVcIjogMTEzLCBcIkNvbXBpdG9yXCI6IDIzfSxcbiAge1wieWVhclwiOiBcIjIwMDJcIiwgXCJBQ01FXCI6IDEzMn0sXG4gIHtcInllYXJcIjogXCIyMDAzXCIsIFwiQUNNRVwiOiAxNDYsIFwiQ29tcGl0b3JcIjogNDZ9LFxuICB7XCJ5ZWFyXCI6IFwiMjAwNFwiLCBcIkFDTUVcIjogMTY5LCBcIkNvbXBpdG9yXCI6IDU5fSxcbiAge1wieWVhclwiOiBcIjIwMDVcIiwgXCJBQ01FXCI6IDE4NCwgXCJDb21waXRvclwiOiA0NH1cbl07XG5cbnZhciBTdGF0ID0gRzIuU3RhdDtcbnZhciBGcmFtZSA9IEcyLkZyYW1lO1xudmFyIGZyYW1lID0gbmV3IEZyYW1lKGRhdGEpO1xuZnJhbWUgPSBGcmFtZS5jb21iaW5Db2x1bW5zKGZyYW1lLFsnQUNNRScsJ0NvbXBpdG9yJ10sJ3ZhbHVlJywndHlwZScsJ3llYXInKTtcblxudmFyIGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgaWQ6ICdjMScsXG4gIHdpZHRoOiAxMDAwLFxuICBoZWlnaHQ6IDUwMFxufSk7XG5jaGFydC5zb3VyY2UoZnJhbWUsIHtcbiAgJ3ZhbHVlJzoge1xuICAgIGFsaWFzOiAnVGhlIFNoYXJlIFByaWNlIGluIERvbGxhcnMnLFxuICAgIGZvcm1hdHRlcjogZnVuY3Rpb24odmFsKSB7XG4gICAgICByZXR1cm4gJyQnICsgdmFsO1xuICAgIH1cbiAgfVxufSk7XG5jaGFydC50b29sdGlwKHtcbiAgY3Jvc3NoYWlyczogdHJ1ZVxufSk7XG5jaGFydC5hcmVhKCkucG9zaXRpb24oJ3llYXIqdmFsdWUnKS5jb2xvcigndHlwZScpLnNoYXBlKCdzbW9vdGgnKTtcbmNoYXJ0LmxpbmUoKS5wb3NpdGlvbigneWVhcip2YWx1ZScpLmNvbG9yKCd0eXBlJykuc2l6ZSgyKS5zaGFwZSgnc21vb3RoJyk7XG5jaGFydC5yZW5kZXIoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9hcmVhL2FyZWEtbnVsbC5tZFxuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQ0NBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFDQTtBQURBO0FBR0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=