webpackJsonp([126],[
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
	chart.heatmap().position('g*l').color('tmp', 'rgb(0,0,0)-rgb(0,0,90)-blue-cyan');
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvaGVhdG1hcC9zZXQtY29sb3IuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvaGVhdG1hcC9zZXQtY29sb3IubWQiLCJ3ZWJwYWNrOi8vLz9kNDFkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyIgIHZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG4gICAgdmFyIGRhdGEgPSBbXTtcbiAgICB2YXIgZXh0cmVtYXMgPSBbKE1hdGgucmFuZG9tKCkgKiAxMDAwKSA+PiAwLChNYXRoLnJhbmRvbSgpICogMTAwMCkgPj4gMF07XG4gICAgdmFyIG1heCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIGV4dHJlbWFzKTtcbiAgICB2YXIgbWluID0gTWF0aC5taW4uYXBwbHkoTWF0aCxleHRyZW1hcyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzMDA7IGkrKykge1xuICAgICAgICB2YXIgeCA9ICgoTWF0aC5yYW5kb20oKSogOTUwKSA+PiAwKSArIDUwO1xuICAgICAgICB2YXIgeSA9IChNYXRoLnJhbmRvbSgpKiA0NjApID4+IDA7XG4gICAgICAgIHZhciBjID0gKChNYXRoLnJhbmRvbSgpKiBtYXgtbWluKSA+PiAwKSArIG1pbjtcblxuICAgICAgICBkYXRhLnB1c2goe2c6eCxsOnksdG1wOmN9KTtcbiAgICB9XG4gICAgdmFyIGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgICAgaWQ6ICdjMScsXG4gICAgICAgIHdpZHRoOiAxMDAwLFxuICAgICAgICBoZWlnaHQ6IDUwMFxuICAgIH0pO1xuICAgIGNoYXJ0LnNvdXJjZShkYXRhKTtcbiAgICBjaGFydC5oZWF0bWFwKCkucG9zaXRpb24oJ2cqbCcpLmNvbG9yKCd0bXAnLCdyZ2IoMCwwLDApLXJnYigwLDAsOTApLWJsdWUtY3lhbicpO1xuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2hlYXRtYXAvc2V0LWNvbG9yLm1kXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=