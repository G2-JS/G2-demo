webpackJsonp([103],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);

	function normal(x, y) {
	    return 1 / (2 * Math.PI) * Math.exp(-1 / 2 * (x * x + y * y));
	}
	var data = [];
	for (var i = 0; i < 500; i++) {
	    var x = (Math.random() * 950 >> 0) + 50;
	    var y = Math.random() * 460 >> 0;
	    var c = normal((x - 500) / 80, (y - 250) / 40) * 10000 >> 0;
	    data.push({ g: x, l: y, tmp: c });
	}
	var Stat = G2.Stat;
	var chart = new G2.Chart({
	    id: 'c1',
	    width: 1000,
	    height: 500
	});
	chart.source(data); //服从二维正太分布的样本数据
	chart.heatmap().position(Stat.smooth.loess.gaussian('g*l*tmp', 0.03)).color('tmp');
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvc3RhdC9sb2Vzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9zdGF0L2xvZXNzLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG5cbmZ1bmN0aW9uIG5vcm1hbCh4LHkpe1xuICByZXR1cm4gKDEvKDIqTWF0aC5QSSkpKk1hdGguZXhwKCgtMS8yKSooeCp4ICsgeSp5KSk7XG59XG52YXIgZGF0YSA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCA1MDA7IGkrKykge1xuICAgIHZhciB4ID0gKChNYXRoLnJhbmRvbSgpKiA5NTApID4+IDApICsgNTA7XG4gICAgdmFyIHkgPSAoTWF0aC5yYW5kb20oKSogNDYwKSA+PiAwO1xuICAgIHZhciBjID0gbm9ybWFsKCh4LTUwMCkvODAsKHktMjUwKS80MCkgKiAxMDAwMCA+PjA7XG4gICAgZGF0YS5wdXNoKHtnOngsbDp5LHRtcDpjfSk7XG59XG52YXIgU3RhdCA9IEcyLlN0YXQ7XG52YXIgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgIGlkOiAnYzEnLFxuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogNTAwXG59KTtcbmNoYXJ0LnNvdXJjZShkYXRhKTsvL+acjeS7juS6jOe7tOato+WkquWIhuW4g+eahOagt+acrOaVsOaNrlxuY2hhcnQuaGVhdG1hcCgpLnBvc2l0aW9uKFN0YXQuc21vb3RoLmxvZXNzLmdhdXNzaWFuKCdnKmwqdG1wJywwLjAzKSkuY29sb3IoJ3RtcCcpO1xuY2hhcnQucmVuZGVyKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvc3RhdC9sb2Vzcy5tZFxuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=