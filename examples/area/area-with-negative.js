webpackJsonp([139],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var G2 = __webpack_require__(2);

	var data = [{ "Year": "1996", "Florida": 322, "Texas": 242, "Nevada": 162 }, { "Year": "1997", "Florida": 324, "Texas": 254, "Nevada": 90 }, { "Year": "1998", "Florida": 329, "Texas": 226, "Nevada": 50 }, { "Year": "1999", "Florida": 342, "Texas": 232, "Nevada": 77 }, { "Year": "2000", "Florida": 348, "Texas": 268, "Nevada": 35 }, { "Year": "2001", "Florida": 334, "Texas": 254, "Nevada": -45 }, { "Year": "2002", "Florida": 325, "Texas": 235, "Nevada": -88 }, { "Year": "2003", "Florida": 316, "Texas": 266, "Nevada": -120 }, { "Year": "2004", "Florida": 318, "Texas": 288, "Nevada": -156 }, { "Year": "2005", "Florida": 330, "Texas": 220, "Nevada": -123 }, { "Year": "2006", "Florida": 355, "Texas": 215, "Nevada": -88 }, { "Year": "2007", "Florida": 366, "Texas": 236, "Nevada": -66 }, { "Year": "2008", "Florida": 337, "Texas": 247, "Nevada": -45 }, { "Year": "2009", "Florida": 352, "Texas": 172, "Nevada": -29 }, { "Year": "2010", "Florida": 377, "Texas": 37, "Nevada": -45 }, { "Year": "2011", "Florida": 383, "Texas": 23, "Nevada": -88 }, { "Year": "2012", "Florida": 344, "Texas": 34, "Nevada": -132 }, { "Year": "2013", "Florida": 366, "Texas": 46, "Nevada": -146 }, { "Year": "2014", "Florida": 389, "Texas": 59, "Nevada": -169 }, { "Year": "2015", "Florida": 334, "Texas": 44, "Nevada": -184 }];

	var Stat = G2.Stat;
	var Frame = G2.Frame;
	var frame = new Frame(data);
	frame = Frame.combinColumns(frame, ['Florida', 'Texas', 'Nevada'], 'Profit', 'City', 'Year');

	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.source(frame, {
	  'Profit': {
	    alias: 'Profit in Dollars',
	    formatter: function formatter(val) {
	      return val + 'k';
	    }
	  }
	});
	chart.tooltip({
	  crosshairs: true
	});
	chart.area().position('Year*Profit').color('City');
	chart.line().position('Year*Profit').color('City').size(2);
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYXJlYS9hcmVhLXdpdGgtbmVnYXRpdmUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvYXJlYS9hcmVhLXdpdGgtbmVnYXRpdmUubWQiLCJ3ZWJwYWNrOi8vLz9kNDFkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsiICB2YXIgRzIgPSByZXF1aXJlKCdnMicpO1xuXG4gIHZhciBkYXRhPSBbXG4gICAge1wiWWVhclwiOiBcIjE5OTZcIiwgXCJGbG9yaWRhXCI6IDMyMiwgXCJUZXhhc1wiOiAyNDIsIFwiTmV2YWRhXCI6IDE2Mn0sXG4gICAge1wiWWVhclwiOiBcIjE5OTdcIiwgXCJGbG9yaWRhXCI6IDMyNCwgXCJUZXhhc1wiOiAyNTQsIFwiTmV2YWRhXCI6IDkwfSxcbiAgICB7XCJZZWFyXCI6IFwiMTk5OFwiLCBcIkZsb3JpZGFcIjogMzI5LCBcIlRleGFzXCI6IDIyNiwgXCJOZXZhZGFcIjogNTB9LFxuICAgIHtcIlllYXJcIjogXCIxOTk5XCIsIFwiRmxvcmlkYVwiOiAzNDIsIFwiVGV4YXNcIjogMjMyLCBcIk5ldmFkYVwiOiA3N30sXG4gICAge1wiWWVhclwiOiBcIjIwMDBcIiwgXCJGbG9yaWRhXCI6IDM0OCwgXCJUZXhhc1wiOiAyNjgsIFwiTmV2YWRhXCI6IDM1fSxcbiAgICB7XCJZZWFyXCI6IFwiMjAwMVwiLCBcIkZsb3JpZGFcIjogMzM0LCBcIlRleGFzXCI6IDI1NCwgXCJOZXZhZGFcIjogLTQ1fSxcbiAgICB7XCJZZWFyXCI6IFwiMjAwMlwiLCBcIkZsb3JpZGFcIjogMzI1LCBcIlRleGFzXCI6IDIzNSwgXCJOZXZhZGFcIjogLTg4fSxcbiAgICB7XCJZZWFyXCI6IFwiMjAwM1wiLCBcIkZsb3JpZGFcIjogMzE2LCBcIlRleGFzXCI6IDI2NiwgXCJOZXZhZGFcIjogLTEyMH0sXG4gICAge1wiWWVhclwiOiBcIjIwMDRcIiwgXCJGbG9yaWRhXCI6IDMxOCwgXCJUZXhhc1wiOiAyODgsIFwiTmV2YWRhXCI6IC0xNTZ9LFxuICAgIHtcIlllYXJcIjogXCIyMDA1XCIsIFwiRmxvcmlkYVwiOiAzMzAsIFwiVGV4YXNcIjogMjIwLCBcIk5ldmFkYVwiOiAtMTIzfSxcbiAgICB7XCJZZWFyXCI6IFwiMjAwNlwiLCBcIkZsb3JpZGFcIjogMzU1LCBcIlRleGFzXCI6IDIxNSwgXCJOZXZhZGFcIjogLTg4fSxcbiAgICB7XCJZZWFyXCI6IFwiMjAwN1wiLCBcIkZsb3JpZGFcIjogMzY2LCBcIlRleGFzXCI6IDIzNiwgXCJOZXZhZGFcIjogLTY2fSxcbiAgICB7XCJZZWFyXCI6IFwiMjAwOFwiLCBcIkZsb3JpZGFcIjogMzM3LCBcIlRleGFzXCI6IDI0NywgXCJOZXZhZGFcIjogLTQ1fSxcbiAgICB7XCJZZWFyXCI6IFwiMjAwOVwiLCBcIkZsb3JpZGFcIjogMzUyLCBcIlRleGFzXCI6IDE3MiwgXCJOZXZhZGFcIjogLTI5fSxcbiAgICB7XCJZZWFyXCI6IFwiMjAxMFwiLCBcIkZsb3JpZGFcIjogMzc3LCBcIlRleGFzXCI6IDM3LCAgXCJOZXZhZGFcIjotNDV9LFxuICAgIHtcIlllYXJcIjogXCIyMDExXCIsIFwiRmxvcmlkYVwiOiAzODMsIFwiVGV4YXNcIjogMjMsICBcIk5ldmFkYVwiOi04OH0sXG4gICAge1wiWWVhclwiOiBcIjIwMTJcIiwgXCJGbG9yaWRhXCI6IDM0NCwgXCJUZXhhc1wiOiAzNCwgIFwiTmV2YWRhXCI6LTEzMn0sXG4gICAge1wiWWVhclwiOiBcIjIwMTNcIiwgXCJGbG9yaWRhXCI6IDM2NiwgXCJUZXhhc1wiOiA0NiwgIFwiTmV2YWRhXCI6LTE0Nn0sXG4gICAge1wiWWVhclwiOiBcIjIwMTRcIiwgXCJGbG9yaWRhXCI6IDM4OSwgXCJUZXhhc1wiOiA1OSwgIFwiTmV2YWRhXCI6LTE2OX0sXG4gICAge1wiWWVhclwiOiBcIjIwMTVcIiwgXCJGbG9yaWRhXCI6IDMzNCwgXCJUZXhhc1wiOiA0NCwgIFwiTmV2YWRhXCI6LTE4NH1cbiAgXTtcblxuICB2YXIgU3RhdCA9IEcyLlN0YXQ7XG4gIHZhciBGcmFtZSA9IEcyLkZyYW1lO1xuICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoZGF0YSk7XG4gIGZyYW1lID0gRnJhbWUuY29tYmluQ29sdW1ucyhmcmFtZSxbJ0Zsb3JpZGEnLCdUZXhhcycsJ05ldmFkYSddLCdQcm9maXQnLCdDaXR5JywnWWVhcicpO1xuXG4gIHZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgaWQ6ICdjMScsXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA1MDBcbiAgfSk7XG4gIGNoYXJ0LnNvdXJjZShmcmFtZSwge1xuICAgICdQcm9maXQnOiB7XG4gICAgICBhbGlhczogJ1Byb2ZpdCBpbiBEb2xsYXJzJyxcbiAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHJldHVybiB2YWwgKyAnayc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgY2hhcnQudG9vbHRpcCh7XG4gICAgY3Jvc3NoYWlyczogdHJ1ZVxuICB9KTtcbiAgY2hhcnQuYXJlYSgpLnBvc2l0aW9uKCdZZWFyKlByb2ZpdCcpLmNvbG9yKCdDaXR5Jyk7XG4gIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbignWWVhcipQcm9maXQnKS5jb2xvcignQ2l0eScpLnNpemUoMik7XG4gIGNoYXJ0LnJlbmRlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2FyZWEvYXJlYS13aXRoLW5lZ2F0aXZlLm1kXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FDQ0E7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==