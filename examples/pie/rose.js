webpackJsonp([110],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ year: '2000', internally: 21.0, refugees: 16, seekers: 0.8 }, { year: '2001', internally: 25.0, refugees: 16, seekers: 0.8 }, { year: '2002', internally: 25.0, refugees: 15, seekers: 0.8 }, { year: '2003', internally: 25.0, refugees: 14, seekers: 0.7 }, { year: '2004', internally: 25.0, refugees: 14, seekers: 0.7 }, { year: '2005', internally: 24.0, refugees: 13, seekers: 0.8 }, { year: '2006', internally: 24.0, refugees: 14, seekers: 0.7 }, { year: '2007', internally: 26.0, refugees: 16, seekers: 0.7 }, { year: '2008', internally: 26.0, refugees: 15.2, seekers: 0.8 }, { year: '2009', internally: 27.1, refugees: 15.2, seekers: 1.0 }, { year: '2010', internally: 27.5, refugees: 15.4, seekers: 0.8 }, { year: '2011', internally: 26.4, refugees: 15.2, seekers: 0.9 }, { year: '2012', internally: 28.8, refugees: 15.4, seekers: 0.9 }, { year: '2013', internally: 33.3, refugees: 16.7, seekers: 1.2 }, { year: '2014', internally: 38.2, refugees: 19.5, seekers: 1.8 }];

	var Stat = G2.Stat;
	var Frame = G2.Frame;
	var frame = new Frame(data); // 加工数据

	frame = Frame.combinColumns(frame, ['internally', 'refugees', 'seekers'], 'count', '难民类型', 'year');
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});

	chart.source(frame);
	chart.coord('polar', { inner: 0.1 });
	chart.legend('bottom');
	chart.intervalStack().position('year*count').shape('stroke').color('难民类型', ['rgb(136,186,174)', 'rgb(184,189,61)', 'rgb(107,136,138)']);
		chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvcGllL3Jvc2UuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvcGllL3Jvc2UubWQiLCJ3ZWJwYWNrOi8vLz9kNDFkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIl0sInNvdXJjZXNDb250ZW50IjpbIiAgdmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbiAgdmFyIGRhdGEgPSBbXG4gICAge3llYXI6ICcyMDAwJyxpbnRlcm5hbGx5OjIxLjAgLHJlZnVnZWVzOjE2ICxzZWVrZXJzOiAwLjh9LFxuICAgIHt5ZWFyOiAnMjAwMScsaW50ZXJuYWxseToyNS4wICxyZWZ1Z2VlczoxNiAsc2Vla2VyczogMC44fSxcbiAgICB7eWVhcjogJzIwMDInLGludGVybmFsbHk6MjUuMCAscmVmdWdlZXM6MTUgLHNlZWtlcnM6IDAuOH0sXG4gICAge3llYXI6ICcyMDAzJyxpbnRlcm5hbGx5OjI1LjAgLHJlZnVnZWVzOjE0ICxzZWVrZXJzOiAwLjd9LFxuICAgIHt5ZWFyOiAnMjAwNCcsaW50ZXJuYWxseToyNS4wICxyZWZ1Z2VlczoxNCAsc2Vla2VyczogMC43fSxcbiAgICB7eWVhcjogJzIwMDUnLGludGVybmFsbHk6MjQuMCAscmVmdWdlZXM6MTMgLHNlZWtlcnM6IDAuOH0sXG4gICAge3llYXI6ICcyMDA2JyxpbnRlcm5hbGx5OjI0LjAgLHJlZnVnZWVzOjE0ICxzZWVrZXJzOiAwLjd9LFxuICAgIHt5ZWFyOiAnMjAwNycsaW50ZXJuYWxseToyNi4wICxyZWZ1Z2VlczoxNiAsc2Vla2VyczogMC43fSxcbiAgICB7eWVhcjogJzIwMDgnLGludGVybmFsbHk6MjYuMCAscmVmdWdlZXM6MTUuMiAsc2Vla2VyczogMC44fSxcbiAgICB7eWVhcjogJzIwMDknLGludGVybmFsbHk6MjcuMSAscmVmdWdlZXM6MTUuMiAsc2Vla2VyczogMS4wfSxcbiAgICB7eWVhcjogJzIwMTAnLGludGVybmFsbHk6MjcuNSAscmVmdWdlZXM6MTUuNCAsc2Vla2VyczogMC44fSxcbiAgICB7eWVhcjogJzIwMTEnLGludGVybmFsbHk6MjYuNCAscmVmdWdlZXM6MTUuMiAsc2Vla2VyczogMC45fSxcbiAgICB7eWVhcjogJzIwMTInLGludGVybmFsbHk6MjguOCAscmVmdWdlZXM6MTUuNCAsc2Vla2VyczogMC45fSxcbiAgICB7eWVhcjogJzIwMTMnLGludGVybmFsbHk6MzMuMyAscmVmdWdlZXM6MTYuNyAsc2Vla2VyczogMS4yfSxcbiAgICB7eWVhcjogJzIwMTQnLGludGVybmFsbHk6MzguMiAscmVmdWdlZXM6MTkuNSAsc2Vla2VyczogMS44fVxuICBdO1xuXG4gIHZhciBTdGF0ID0gRzIuU3RhdDtcbiAgdmFyIEZyYW1lID0gRzIuRnJhbWU7XG4gIHZhciBmcmFtZSA9IG5ldyBGcmFtZShkYXRhKTsgLy8g5Yqg5bel5pWw5o2uXG5cbiAgZnJhbWUgPSBGcmFtZS5jb21iaW5Db2x1bW5zKGZyYW1lLCBbJ2ludGVybmFsbHknLCAncmVmdWdlZXMnLCAnc2Vla2VycyddLCAnY291bnQnLCAn6Zq+5rCR57G75Z6LJywgJ3llYXInKTtcbiAgdmFyIGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICBpZDogJ2MxJyxcbiAgICB3aWR0aDogMTAwMCxcbiAgICBoZWlnaHQ6IDUwMFxuICB9KTtcblxuICBjaGFydC5zb3VyY2UoZnJhbWUpO1xuICBjaGFydC5jb29yZCgncG9sYXInLCB7aW5uZXI6IDAuMX0pO1xuICBjaGFydC5sZWdlbmQoJ2JvdHRvbScpO1xuICBjaGFydC5pbnRlcnZhbFN0YWNrKCkucG9zaXRpb24oJ3llYXIqY291bnQnKVxuICAgIC5zaGFwZSgnc3Ryb2tlJylcbiAgICAuY29sb3IoJ+mavuawkeexu+WeiycsWydyZ2IoMTM2LDE4NiwxNzQpJywncmdiKDE4NCwxODksNjEpJywncmdiKDEwNywxMzYsMTM4KSddKTtcbiAgY2hhcnQucmVuZGVyKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvcGllL3Jvc2UubWRcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FDQ0E7QUFDQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==