webpackJsonp([128],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
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

	//二维正太分布函数
	function normal(x, y) {
	    return 1 / (2 * Math.PI) * Math.exp(-1 / 2 * (x * x + y * y));
	}

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvaGVhdG1hcC9sb2Vzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9oZWF0bWFwL2xvZXNzLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRzIgPSByZXF1aXJlKCdnMicpO1xudmFyIGRhdGEgPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCA1MDA7IGkrKykge1xuICAgIHZhciB4ID0gKChNYXRoLnJhbmRvbSgpKiA5NTApID4+IDApICsgNTA7XG4gICAgdmFyIHkgPSAoTWF0aC5yYW5kb20oKSogNDYwKSA+PiAwO1xuXG4gICAgdmFyIGMgPSBub3JtYWwoKHgtNTAwKS84MCwoeS0yNTApLzQwKSAqIDEwMDAwID4+MDtcblxuICAgIGRhdGEucHVzaCh7Zzp4LGw6eSx0bXA6Y30pO1xufVxudmFyIFN0YXQgPSBHMi5TdGF0O1xudmFyIGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICBpZDogJ2MxJyxcbiAgICB3aWR0aDogMTAwMCxcbiAgICBoZWlnaHQ6IDUwMFxufSk7XG5jaGFydC5zb3VyY2UoZGF0YSk7Ly/mnI3ku47kuoznu7TmraPlpKrliIbluIPnmoTmoLfmnKzmlbDmja5cbmNoYXJ0LmhlYXRtYXAoKS5wb3NpdGlvbihTdGF0LnNtb290aC5sb2Vzcy5nYXVzc2lhbignZypsKnRtcCcsMC4wMykpLmNvbG9yKCd0bXAnKTtcbmNoYXJ0LnJlbmRlcigpO1xuXG4vL+S6jOe7tOato+WkquWIhuW4g+WHveaVsFxuZnVuY3Rpb24gbm9ybWFsKHgseSl7XG4gICAgcmV0dXJuICgxLygyKk1hdGguUEkpKSpNYXRoLmV4cCgoLTEvMikqKHgqeCArIHkqeSkpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2hlYXRtYXAvbG9lc3MubWRcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=