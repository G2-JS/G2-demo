webpackJsonp([125],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [];
	var extremas = [Math.random() * 1000 >> 0, Math.random() * 1000 >> 0];
	var max = Math.max.apply(Math, extremas);
	var min = Math.min.apply(Math, extremas);
	for (var i = 0; i < 300; i++) {
	    var x = (Math.random() * 950 >> 0) + 50;
	    var y = Math.random() * 460 >> 0;
	    var c = (Math.random() * max - min >> 0) + min;

	    data.push({ g: x, l: y, tmp: c });
	}
	var chart = new G2.Chart({
	    id: 'c1',
	    width: 1000,
	    height: 500
	});
	chart.source(data);
	chart.heatmap().position('g*l').color('tmp').size(50); //非统计数据的默认叠加范围是50，统计数据支持自动计算无需配置
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvaGVhdG1hcC9zZXQtc2l6ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9oZWF0bWFwL3NldC1zaXplLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyIgICAgdmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIHZhciBleHRyZW1hcyA9IFsoTWF0aC5yYW5kb20oKSAqIDEwMDApID4+IDAsKE1hdGgucmFuZG9tKCkgKiAxMDAwKSA+PiAwXTtcbiAgICB2YXIgbWF4ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgZXh0cmVtYXMpO1xuICAgIHZhciBtaW4gPSBNYXRoLm1pbi5hcHBseShNYXRoLGV4dHJlbWFzKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDMwMDsgaSsrKSB7XG4gICAgICAgIHZhciB4ID0gKChNYXRoLnJhbmRvbSgpKiA5NTApID4+IDApICsgNTA7XG4gICAgICAgIHZhciB5ID0gKE1hdGgucmFuZG9tKCkqIDQ2MCkgPj4gMDtcbiAgICAgICAgdmFyIGMgPSAoKE1hdGgucmFuZG9tKCkqIG1heC1taW4pID4+IDApICsgbWluO1xuXG4gICAgICAgIGRhdGEucHVzaCh7Zzp4LGw6eSx0bXA6Y30pO1xuICAgIH1cbiAgICB2YXIgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgICBpZDogJ2MxJyxcbiAgICAgICAgd2lkdGg6IDEwMDAsXG4gICAgICAgIGhlaWdodDogNTAwXG4gICAgfSk7XG4gICAgY2hhcnQuc291cmNlKGRhdGEpO1xuICAgIGNoYXJ0LmhlYXRtYXAoKS5wb3NpdGlvbignZypsJykuY29sb3IoJ3RtcCcpLnNpemUoNTApOy8v6Z2e57uf6K6h5pWw5o2u55qE6buY6K6k5Y+g5Yqg6IyD5Zu05pivNTDvvIznu5/orqHmlbDmja7mlK/mjIHoh6rliqjorqHnrpfml6DpnIDphY3nva5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9oZWF0bWFwL3NldC1zaXplLm1kXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=