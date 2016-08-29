webpackJsonp([141],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var G2 = __webpack_require__(2);

	var data = [{ "month": 0, "tem": 20, "city": "tokyo" }, { "month": 1, "tem": 6.9, "city": "tokyo" }, { "month": 2, "tem": 15, "city": "tokyo" }, { "month": 3, "tem": 3, "city": "tokyo" }, { "month": 4, "tem": 18.2, "city": "tokyo" }, { "month": 5, "tem": 4, "city": "tokyo" }, { "month": 6, "tem": 25.2, "city": "tokyo" }, { "month": 7, "tem": 6, "city": "tokyo" }, { "month": 8, "tem": 23.3, "city": "tokyo" }, { "month": 9, "tem": 8, "city": "tokyo" }, { "month": 10, "tem": 13.9, "city": "tokyo" }, { "month": 11, "tem": 9.6, "city": "tokyo" }, { "month": 0, "tem": 0, "city": "newYork" }, { "month": 1, "tem": 16, "city": "newYork" }, { "month": 2, "tem": 5.7, "city": "newYork" }, { "month": 3, "tem": 21.3, "city": "newYork" }, { "month": 4, "tem": 7, "city": "newYork" }, { "month": 5, "tem": 22, "city": "newYork" }, { "month": 6, "tem": 4.8, "city": "newYork" }, { "month": 7, "tem": 24.1, "city": "newYork" }, { "month": 8, "tem": 7.1, "city": "newYork" }, { "month": 9, "tem": 14.1, "city": "newYork" }, { "month": 10, "tem": 8.6, "city": "newYork" }, { "month": 11, "tem": 12.5, "city": "newYork" }];

	var Stat = G2.Stat;
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.source(data);
	//chart.axis('tem',{title: null,labels: null});
	// area 支持的图形类型：'area','smooth','line','dotLine','smoothLine','dotSmoothLine'
	chart.area().position('month*tem').color('city').shape('smooth');
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYXJlYS9hcmVhLXNtb290aC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9hcmVhL2FyZWEtc21vb3RoLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEcyID0gcmVxdWlyZSgnZzInKTtcblxudmFyIGRhdGEgPSBbXG4gIHtcIm1vbnRoXCI6MCxcInRlbVwiOjIwLFwiY2l0eVwiOlwidG9reW9cIn0sXG4gIHtcIm1vbnRoXCI6MSxcInRlbVwiOjYuOSxcImNpdHlcIjpcInRva3lvXCJ9LFxuICB7XCJtb250aFwiOjIsXCJ0ZW1cIjoxNSxcImNpdHlcIjpcInRva3lvXCJ9LFxuICB7XCJtb250aFwiOjMsXCJ0ZW1cIjozLFwiY2l0eVwiOlwidG9reW9cIn0sXG4gIHtcIm1vbnRoXCI6NCxcInRlbVwiOjE4LjIsXCJjaXR5XCI6XCJ0b2t5b1wifSxcbiAge1wibW9udGhcIjo1LFwidGVtXCI6NCxcImNpdHlcIjpcInRva3lvXCJ9LFxuICB7XCJtb250aFwiOjYsXCJ0ZW1cIjoyNS4yLFwiY2l0eVwiOlwidG9reW9cIn0sXG4gIHtcIm1vbnRoXCI6NyxcInRlbVwiOjYsXCJjaXR5XCI6XCJ0b2t5b1wifSxcbiAge1wibW9udGhcIjo4LFwidGVtXCI6MjMuMyxcImNpdHlcIjpcInRva3lvXCJ9LFxuICB7XCJtb250aFwiOjksXCJ0ZW1cIjo4LFwiY2l0eVwiOlwidG9reW9cIn0sXG4gIHtcIm1vbnRoXCI6MTAsXCJ0ZW1cIjoxMy45LFwiY2l0eVwiOlwidG9reW9cIn0sXG4gIHtcIm1vbnRoXCI6MTEsXCJ0ZW1cIjo5LjYsXCJjaXR5XCI6XCJ0b2t5b1wifSxcbiAge1wibW9udGhcIjowLFwidGVtXCI6MCxcImNpdHlcIjpcIm5ld1lvcmtcIn0sXG4gIHtcIm1vbnRoXCI6MSxcInRlbVwiOjE2LFwiY2l0eVwiOlwibmV3WW9ya1wifSxcbiAge1wibW9udGhcIjoyLFwidGVtXCI6NS43LFwiY2l0eVwiOlwibmV3WW9ya1wifSxcbiAge1wibW9udGhcIjozLFwidGVtXCI6MjEuMyxcImNpdHlcIjpcIm5ld1lvcmtcIn0sXG4gIHtcIm1vbnRoXCI6NCxcInRlbVwiOjcsXCJjaXR5XCI6XCJuZXdZb3JrXCJ9LFxuICB7XCJtb250aFwiOjUsXCJ0ZW1cIjoyMixcImNpdHlcIjpcIm5ld1lvcmtcIn0sXG4gIHtcIm1vbnRoXCI6NixcInRlbVwiOjQuOCxcImNpdHlcIjpcIm5ld1lvcmtcIn0sXG4gIHtcIm1vbnRoXCI6NyxcInRlbVwiOjI0LjEsXCJjaXR5XCI6XCJuZXdZb3JrXCJ9LFxuICB7XCJtb250aFwiOjgsXCJ0ZW1cIjo3LjEsXCJjaXR5XCI6XCJuZXdZb3JrXCJ9LFxuICB7XCJtb250aFwiOjksXCJ0ZW1cIjoxNC4xLFwiY2l0eVwiOlwibmV3WW9ya1wifSxcbiAge1wibW9udGhcIjoxMCxcInRlbVwiOjguNixcImNpdHlcIjpcIm5ld1lvcmtcIn0sXG4gIHtcIm1vbnRoXCI6MTEsXCJ0ZW1cIjoxMi41LFwiY2l0eVwiOlwibmV3WW9ya1wifVxuXTtcblxudmFyIFN0YXQgPSBHMi5TdGF0O1xudmFyIGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgaWQ6ICdjMScsXG4gIHdpZHRoOiAxMDAwLFxuICBoZWlnaHQ6IDUwMFxufSk7XG5jaGFydC5zb3VyY2UoZGF0YSk7XG4vL2NoYXJ0LmF4aXMoJ3RlbScse3RpdGxlOiBudWxsLGxhYmVsczogbnVsbH0pO1xuLy8gYXJlYSDmlK/mjIHnmoTlm77lvaLnsbvlnovvvJonYXJlYScsJ3Ntb290aCcsJ2xpbmUnLCdkb3RMaW5lJywnc21vb3RoTGluZScsJ2RvdFNtb290aExpbmUnXG5jaGFydC5hcmVhKCkucG9zaXRpb24oJ21vbnRoKnRlbScpLmNvbG9yKCdjaXR5Jykuc2hhcGUoJ3Ntb290aCcpO1xuY2hhcnQucmVuZGVyKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvYXJlYS9hcmVhLXNtb290aC5tZFxuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQ0NBO0FBQ0E7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9