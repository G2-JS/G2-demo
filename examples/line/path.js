webpackJsonp([115],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);

	var data = [{ consumption: 0.65, price: 1, year: 1965 }, { consumption: 0.66, price: 1.05, year: 1966 }, { consumption: 0.64, price: 1.1, year: 1967 }, { consumption: 0.63, price: 1.12, year: 1968 }, { consumption: 0.55, price: 1.15, year: 1969 }, { consumption: 0.57, price: 1.19, year: 1970 }, { consumption: 0.58, price: 1.14, year: 1971 }, { consumption: 0.59, price: 1, year: 1972 }, { consumption: 0.57, price: 0.96, year: 1973 }, { consumption: 0.55, price: 0.92, year: 1974 }, { consumption: 0.54, price: 0.88, year: 1975 }, { consumption: 0.55, price: 0.87, year: 1976 }, { consumption: 0.42, price: 0.89, year: 1977 }, { consumption: 0.28, price: 1, year: 1978 }, { consumption: 0.15, price: 1.1, year: 1979 }];
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.source(data);

	chart.path().position('price*consumption').label('year', function (val) {
	  return val + '年';
	}).size(2);
	chart.point().position('price*consumption').shape('triangle');
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvbGluZS9wYXRoLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2xpbmUvcGF0aC5tZCIsIndlYnBhY2s6Ly8vP2Q0MWQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyIgIHZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG5cbiAgdmFyIGRhdGEgPSBbXG4gICAge2NvbnN1bXB0aW9uOiAwLjY1LCBwcmljZTogMSx5ZWFyOiAxOTY1fSxcbiAgICB7Y29uc3VtcHRpb246IDAuNjYsIHByaWNlOiAxLjA1LHllYXI6IDE5NjZ9LFxuICAgIHtjb25zdW1wdGlvbjogMC42NCwgcHJpY2U6IDEuMSx5ZWFyOiAxOTY3fSxcbiAgICB7Y29uc3VtcHRpb246IDAuNjMsIHByaWNlOiAxLjEyLHllYXI6IDE5Njh9LFxuICAgIHtjb25zdW1wdGlvbjogMC41NSwgcHJpY2U6IDEuMTUseWVhcjogMTk2OX0sXG4gICAge2NvbnN1bXB0aW9uOiAwLjU3LCBwcmljZTogMS4xOSx5ZWFyOiAxOTcwfSxcbiAgICB7Y29uc3VtcHRpb246IDAuNTgsIHByaWNlOiAxLjE0LHllYXI6IDE5NzF9LFxuICAgIHtjb25zdW1wdGlvbjogMC41OSwgcHJpY2U6IDEseWVhcjogMTk3Mn0sXG4gICAge2NvbnN1bXB0aW9uOiAwLjU3LCBwcmljZTogMC45Nix5ZWFyOiAxOTczfSxcbiAgICB7Y29uc3VtcHRpb246IDAuNTUsIHByaWNlOiAwLjkyLHllYXI6IDE5NzR9LFxuICAgIHtjb25zdW1wdGlvbjogMC41NCwgcHJpY2U6IDAuODgseWVhcjogMTk3NX0sXG4gICAge2NvbnN1bXB0aW9uOiAwLjU1LCBwcmljZTogMC44Nyx5ZWFyOiAxOTc2fSxcbiAgICB7Y29uc3VtcHRpb246IDAuNDIsIHByaWNlOiAwLjg5LHllYXI6IDE5Nzd9LFxuICAgIHtjb25zdW1wdGlvbjogMC4yOCwgcHJpY2U6IDEseWVhcjogMTk3OH0sXG4gICAge2NvbnN1bXB0aW9uOiAwLjE1LCBwcmljZTogMS4xLHllYXI6IDE5Nzl9XG4gIF1cbiAgO1xuICB2YXIgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgIGlkOiAnYzEnLFxuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogNTAwXG4gIH0pO1xuICBjaGFydC5zb3VyY2UoZGF0YSk7XG5cbiAgY2hhcnQucGF0aCgpLnBvc2l0aW9uKCdwcmljZSpjb25zdW1wdGlvbicpLmxhYmVsKCd5ZWFyJywgZnVuY3Rpb24odmFsKSB7XG4gICAgcmV0dXJuIHZhbCArICflubQnO1xuICB9KS5zaXplKDIpO1xuICBjaGFydC5wb2ludCgpLnBvc2l0aW9uKCdwcmljZSpjb25zdW1wdGlvbicpLnNoYXBlKCd0cmlhbmdsZScpO1xuICBjaGFydC5yZW5kZXIoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9saW5lL3BhdGgubWRcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUNDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==