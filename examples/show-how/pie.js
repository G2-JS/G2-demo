webpackJsonp([107],[
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

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvc2hvdy1ob3cvcGllLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL3Nob3ctaG93L3BpZS5tZCIsIndlYnBhY2s6Ly8vP2Q0MWQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbnZhciBkYXRhID0gW1xuICB7bmFtZTogJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlcicsIHZhbHVlOiA1Ni4zMyB9LFxuICB7bmFtZTogJ0Nocm9tZScsIHZhbHVlOiAyNC4wM30sXG4gIHtuYW1lOiAnRmlyZWZveCcsIHZhbHVlOiAxMC4zOH0sXG4gIHtuYW1lOiAnU2FmYXJpJywgIHZhbHVlOiA0Ljc3fSxcbiAge25hbWU6ICdPcGVyYScsIHZhbHVlOiAwLjkxfSxcbiAge25hbWU6ICdQcm9wcmlldGFyeSBvciBVbmRldGVjdGFibGUnLCB2YWx1ZTogMC4yfVxuXTtcbnZhciBTdGF0ID0gRzIuU3RhdDtcbnZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gIGlkOiAnYzEnLFxuICB3aWR0aDogMTAwMCxcbiAgaGVpZ2h0OiA1MDBcbn0pO1xuY2hhcnQuc291cmNlKGRhdGEpO1xuLy8g6YeN6KaB77ya57uY5Yi26aW85Zu+5pe277yM5b+F6aG75aOw5piOIHRoZXRhIOWdkOagh+ezu1xuY2hhcnQuY29vcmQoJ3RoZXRhJywge1xuICByYWRpdXM6IDAuOCAvLyDorr7nva7ppbzlm77nmoTlpKflsI9cbn0pO1xuY2hhcnQubGVnZW5kKCdib3R0b20nKTtcbmNoYXJ0LmludGVydmFsU3RhY2soKVxuICAucG9zaXRpb24oU3RhdC5zdW1tYXJ5LnBlcmNlbnQoJ3ZhbHVlJykpXG4gIC5jb2xvcignbmFtZScpXG4gIC5sYWJlbCgnbmFtZSouLnBlcmNlbnQnLGZ1bmN0aW9uKG5hbWUsIHBlcmNlbnQpe1xuICAgIHBlcmNlbnQgPSAocGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKSArICclJztcbiAgICByZXR1cm4gbmFtZSArICcgJyArIHBlcmNlbnQ7XG4gIH0pO1xuY2hhcnQucmVuZGVyKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvc2hvdy1ob3cvcGllLm1kXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQ0NBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9