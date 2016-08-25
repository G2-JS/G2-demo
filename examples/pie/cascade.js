webpackJsonp([113],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ gender: 'Famale', 'answer': 'rarely', proportion: 0.08 }, { gender: 'Famale', 'answer': 'infrequently', proportion: 0.11 }, { gender: 'Famale', 'answer': 'occasionally', proportion: 0.17 }, { gender: 'Famale', 'answer': 'frequently', proportion: 0.32 }, { gender: 'Famale', 'answer': 'not sure', proportion: 0.32 }, { gender: 'Male', 'answer': 'rarely', proportion: 0.30 }, { gender: 'Male', 'answer': 'infrequently', proportion: 0.15 }, { gender: 'Male', 'answer': 'occasionally', proportion: 0.10 }, { gender: 'Male', 'answer': 'frequently', proportion: 0.07 }, { gender: 'Male', 'answer': 'not sure', proportion: 0.38 }];

	var Stat = G2.Stat;
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500,
	  plotCfg: {
	    margin: [20, 100, 80, 80]
	  }
	});
	chart.source(data, {
	  '..percent': { max: 1, min: 0 }
	});
	chart.coord('polar').transpose();
	chart.intervalStack().position(Stat.summary.percent('gender*proportion')).color('answer');
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvcGllL2Nhc2NhZGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvcGllL2Nhc2NhZGUubWQiLCJ3ZWJwYWNrOi8vLz9kNDFkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIl0sInNvdXJjZXNDb250ZW50IjpbIiAgdmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbiAgdmFyIGRhdGEgPSBbXG4gICAge2dlbmRlcjogJ0ZhbWFsZScsJ2Fuc3dlcic6ICdyYXJlbHknLHByb3BvcnRpb246IDAuMDh9LFxuICAgIHtnZW5kZXI6ICdGYW1hbGUnLCdhbnN3ZXInOiAnaW5mcmVxdWVudGx5Jyxwcm9wb3J0aW9uOiAwLjExfSxcbiAgICB7Z2VuZGVyOiAnRmFtYWxlJywnYW5zd2VyJzogJ29jY2FzaW9uYWxseScscHJvcG9ydGlvbjogMC4xN30sXG4gICAge2dlbmRlcjogJ0ZhbWFsZScsJ2Fuc3dlcic6ICdmcmVxdWVudGx5Jyxwcm9wb3J0aW9uOiAwLjMyfSxcbiAgICB7Z2VuZGVyOiAnRmFtYWxlJywnYW5zd2VyJzogJ25vdCBzdXJlJyxwcm9wb3J0aW9uOiAwLjMyfSxcbiAgICB7Z2VuZGVyOiAnTWFsZScsJ2Fuc3dlcic6ICdyYXJlbHknLHByb3BvcnRpb246IDAuMzB9LFxuICAgIHtnZW5kZXI6ICdNYWxlJywnYW5zd2VyJzogJ2luZnJlcXVlbnRseScscHJvcG9ydGlvbjogMC4xNX0sXG4gICAge2dlbmRlcjogJ01hbGUnLCdhbnN3ZXInOiAnb2NjYXNpb25hbGx5Jyxwcm9wb3J0aW9uOiAwLjEwfSxcbiAgICB7Z2VuZGVyOiAnTWFsZScsJ2Fuc3dlcic6ICdmcmVxdWVudGx5Jyxwcm9wb3J0aW9uOiAwLjA3fSxcbiAgICB7Z2VuZGVyOiAnTWFsZScsJ2Fuc3dlcic6ICdub3Qgc3VyZScscHJvcG9ydGlvbjogMC4zOH0sXG4gIF07XG5cbiAgdmFyIFN0YXQgPSBHMi5TdGF0O1xuICB2YXIgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgIGlkOiAnYzEnLFxuICAgIHdpZHRoOiAxMDAwLFxuICAgIGhlaWdodDogNTAwLFxuICAgIHBsb3RDZmc6IHtcbiAgICAgIG1hcmdpbjogWzIwLCAxMDAsIDgwLCA4MF1cbiAgICB9XG4gIH0pO1xuICBjaGFydC5zb3VyY2UoZGF0YSwge1xuICAgICcuLnBlcmNlbnQnOiB7bWF4OiAxLG1pbjogMH1cbiAgfSk7XG4gIGNoYXJ0LmNvb3JkKCdwb2xhcicpLnRyYW5zcG9zZSgpO1xuICBjaGFydC5pbnRlcnZhbFN0YWNrKCkucG9zaXRpb24oU3RhdC5zdW1tYXJ5LnBlcmNlbnQoJ2dlbmRlcipwcm9wb3J0aW9uJykpLmNvbG9yKCdhbnN3ZXInKTtcbiAgY2hhcnQucmVuZGVyKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvcGllL2Nhc2NhZGUubWRcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FDQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9