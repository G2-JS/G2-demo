webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var G2 = __webpack_require__(1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9waWUubWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsS0FBSSxLQUFLLG9CQUFRLENBQVIsQ0FBVDtBQUNBLEtBQUksT0FBTyxDQUNULEVBQUMsTUFBTSw2QkFBUCxFQUFzQyxPQUFPLEtBQTdDLEVBRFMsRUFFVCxFQUFDLE1BQU0sUUFBUCxFQUFpQixPQUFPLEtBQXhCLEVBRlMsRUFHVCxFQUFDLE1BQU0sU0FBUCxFQUFrQixPQUFPLEtBQXpCLEVBSFMsRUFJVCxFQUFDLE1BQU0sUUFBUCxFQUFrQixPQUFPLElBQXpCLEVBSlMsRUFLVCxFQUFDLE1BQU0sT0FBUCxFQUFnQixPQUFPLElBQXZCLEVBTFMsRUFNVCxFQUFDLE1BQU0sNkJBQVAsRUFBc0MsT0FBTyxHQUE3QyxFQU5TLENBQVg7QUFRQSxLQUFJLE9BQU8sR0FBRyxJQUFkO0FBQ0EsS0FBSSxRQUFRLElBQUksR0FBRyxLQUFQLENBQWE7QUFDdkIsT0FBSSxJQURtQjtBQUV2QixVQUFPLElBRmdCO0FBR3ZCLFdBQVE7QUFIZSxFQUFiLENBQVo7QUFLQSxPQUFNLE1BQU4sQ0FBYSxJQUFiO0FBQ0E7QUFDQSxPQUFNLEtBQU4sQ0FBWSxPQUFaLEVBQXFCO0FBQ25CLFdBQVEsR0FEVyxDQUNQO0FBRE8sRUFBckI7QUFHQSxPQUFNLE1BQU4sQ0FBYSxRQUFiO0FBQ0EsT0FBTSxhQUFOLEdBQ0csUUFESCxDQUNZLEtBQUssT0FBTCxDQUFhLE9BQWIsQ0FBcUIsT0FBckIsQ0FEWixFQUVHLEtBRkgsQ0FFUyxNQUZULEVBR0csS0FISCxDQUdTLGdCQUhULEVBRzBCLFVBQVMsSUFBVCxFQUFlLE9BQWYsRUFBdUI7QUFDN0MsYUFBVSxDQUFDLFVBQVUsR0FBWCxFQUFnQixPQUFoQixDQUF3QixDQUF4QixJQUE2QixHQUF2QztBQUNBLFVBQU8sT0FBTyxHQUFQLEdBQWEsT0FBcEI7QUFDRCxFQU5IO0FBT0EsT0FBTSxNQUFOLEciLCJmaWxlIjoiZXhhbXBsZXMvcGllLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbnZhciBkYXRhID0gW1xuICB7bmFtZTogJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlcicsIHZhbHVlOiA1Ni4zMyB9LFxuICB7bmFtZTogJ0Nocm9tZScsIHZhbHVlOiAyNC4wM30sXG4gIHtuYW1lOiAnRmlyZWZveCcsIHZhbHVlOiAxMC4zOH0sXG4gIHtuYW1lOiAnU2FmYXJpJywgIHZhbHVlOiA0Ljc3fSxcbiAge25hbWU6ICdPcGVyYScsIHZhbHVlOiAwLjkxfSxcbiAge25hbWU6ICdQcm9wcmlldGFyeSBvciBVbmRldGVjdGFibGUnLCB2YWx1ZTogMC4yfVxuXTtcbnZhciBTdGF0ID0gRzIuU3RhdDtcbnZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gIGlkOiAnYzEnLFxuICB3aWR0aDogMTAwMCxcbiAgaGVpZ2h0OiA1MDBcbn0pO1xuY2hhcnQuc291cmNlKGRhdGEpO1xuLy8g6YeN6KaB77ya57uY5Yi26aW85Zu+5pe277yM5b+F6aG75aOw5piOIHRoZXRhIOWdkOagh+ezu1xuY2hhcnQuY29vcmQoJ3RoZXRhJywge1xuICByYWRpdXM6IDAuOCAvLyDorr7nva7ppbzlm77nmoTlpKflsI9cbn0pO1xuY2hhcnQubGVnZW5kKCdib3R0b20nKTtcbmNoYXJ0LmludGVydmFsU3RhY2soKVxuICAucG9zaXRpb24oU3RhdC5zdW1tYXJ5LnBlcmNlbnQoJ3ZhbHVlJykpXG4gIC5jb2xvcignbmFtZScpXG4gIC5sYWJlbCgnbmFtZSouLnBlcmNlbnQnLGZ1bmN0aW9uKG5hbWUsIHBlcmNlbnQpe1xuICAgIHBlcmNlbnQgPSAocGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKSArICclJztcbiAgICByZXR1cm4gbmFtZSArICcgJyArIHBlcmNlbnQ7XG4gIH0pO1xuY2hhcnQucmVuZGVyKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9waWUubWRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9