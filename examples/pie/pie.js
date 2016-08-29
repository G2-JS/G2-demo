webpackJsonp([114],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ name: 'Microsoft Internet Explorer', value: 56.33 }, { name: 'Chrome', value: 24.03 }, { name: 'Firefox', value: 10.38 }, { name: 'Safari', value: 4.77 }, { name: 'Opera', value: 0.91 }, { name: 'Proprietary or Undetectable', value: 0.2 }];
	var Stat = G2.Stat;
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.source(data);

	// 重要：绘制饼图时，必须声明 theta 坐标系
	chart.coord('theta', {
	  radius: 0.8 // 设置饼图的大小
	});
	chart.legend('bottom');
	chart.intervalStack().position(Stat.summary.percent('value')).color('name').label('name*..percent', function (name, percent) {
	  percent = (percent * 100).toFixed(2) + '%';
	  return name + ' ' + percent;
	});

	chart.render();

	// 设置默认选中
	var geom = chart.getGeoms()[0]; // 获取所有的图形
	var items = geom.getData(); // 获取图形对应的数据
	geom.setSelected(items[1]); // 设置选中

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvcGllL3BpZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9waWUvcGllLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsiICB2YXIgRzIgPSByZXF1aXJlKCdnMicpO1xuICB2YXIgZGF0YSA9IFtcbiAgICB7bmFtZTogJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlcicsIHZhbHVlOiA1Ni4zMyB9LFxuICAgIHtuYW1lOiAnQ2hyb21lJywgdmFsdWU6IDI0LjAzfSxcbiAgICB7bmFtZTogJ0ZpcmVmb3gnLCB2YWx1ZTogMTAuMzh9LFxuICAgIHtuYW1lOiAnU2FmYXJpJywgIHZhbHVlOiA0Ljc3fSxcbiAgICB7bmFtZTogJ09wZXJhJywgdmFsdWU6IDAuOTF9LFxuICAgIHtuYW1lOiAnUHJvcHJpZXRhcnkgb3IgVW5kZXRlY3RhYmxlJywgdmFsdWU6IDAuMn1cbiAgXTtcbiAgdmFyIFN0YXQgPSBHMi5TdGF0O1xuICB2YXIgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgIGlkOiAnYzEnLFxuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogNTAwXG4gIH0pO1xuICBjaGFydC5zb3VyY2UoZGF0YSk7XG5cbiAgLy8g6YeN6KaB77ya57uY5Yi26aW85Zu+5pe277yM5b+F6aG75aOw5piOIHRoZXRhIOWdkOagh+ezu1xuICBjaGFydC5jb29yZCgndGhldGEnLCB7XG4gICAgcmFkaXVzOiAwLjggLy8g6K6+572u6aW85Zu+55qE5aSn5bCPXG4gIH0pO1xuICBjaGFydC5sZWdlbmQoJ2JvdHRvbScpO1xuICBjaGFydC5pbnRlcnZhbFN0YWNrKClcbiAgICAucG9zaXRpb24oU3RhdC5zdW1tYXJ5LnBlcmNlbnQoJ3ZhbHVlJykpXG4gICAgLmNvbG9yKCduYW1lJylcbiAgICAubGFiZWwoJ25hbWUqLi5wZXJjZW50JyxmdW5jdGlvbihuYW1lLCBwZXJjZW50KXtcbiAgICAgIHBlcmNlbnQgPSAocGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKSArICclJztcbiAgICAgIHJldHVybiBuYW1lICsgJyAnICsgcGVyY2VudDtcbiAgICB9KTtcblxuICBjaGFydC5yZW5kZXIoKTtcblxuICAvLyDorr7nva7pu5jorqTpgInkuK1cbiAgdmFyIGdlb20gPSBjaGFydC5nZXRHZW9tcygpWzBdOyAvLyDojrflj5bmiYDmnInnmoTlm77lvaJcbiAgdmFyIGl0ZW1zID0gZ2VvbS5nZXREYXRhKCk7IC8vIOiOt+WPluWbvuW9ouWvueW6lOeahOaVsOaNrlxuICBnZW9tLnNldFNlbGVjdGVkKGl0ZW1zWzFdKTsgLy8g6K6+572u6YCJ5LitXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvcGllL3BpZS5tZFxuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUNDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9