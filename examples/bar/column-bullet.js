webpackJsonp([136],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ name: '明明', target: 300, Q1: 55, Q2: 99, Q3: 87, Q4: 20 }, { name: '白白', target: 300, Q1: 67, Q2: 120, Q3: 78, Q4: 98 }, { name: '我我', target: 340, Q1: 65, Q2: 78, Q3: 143, Q4: 78 }, { name: '的的', target: 80, Q1: 12, Q2: 45, Q3: 41, Q4: 12 }, { name: '心心', target: 500, Q1: 121, Q2: 210, Q3: 120, Q4: 98 }, { name: '渴渴', target: 100, Q1: 31, Q2: 23, Q3: 19, Q4: 29 }, { name: '望望', target: 230, Q1: 52, Q2: 36, Q3: 44, Q4: 62 }];
	var Stat = G2.Stat;
	var Frame = G2.Frame;
	var frame = new Frame(data);
	frame = Frame.combinColumns(frame, ['Q1', 'Q2', 'Q3', 'Q4'], 'value', 'type', ['name', 'target']);
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.source(frame, {
	  value: {
	    min: 0,
	    max: 600,
	    nice: false,
	    alias: '各季度销售量'
	  },
	  target: {
	    min: 0,
	    max: 600,
	    nice: false,
	    alias: "销售目标"
	  },
	  name: {
	    alias: '姓名'
	  }
	});
	chart.axis('value', false);
	chart.legend(false);
	chart.interval().position('name*target').shape('hollowRect').style({
	  'stroke-width': 2,
	  stroke: '#FF7F00'
	}).size(35);
	chart.interval('stack').position('name*value').color('type', ['#08519c', '#3182bd', '#6baed6', '#bdd7e7']).size(25);
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYmFyL2NvbHVtbi1idWxsZXQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvYmFyL2NvbHVtbi1idWxsZXQubWQiLCJ3ZWJwYWNrOi8vLz9kNDFkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbnZhciBkYXRhID0gW1xuICB7bmFtZTogJ+aYjuaYjicsIHRhcmdldDogMzAwLCBRMTogNTUsIFEyOiA5OSwgUTM6IDg3LCBRNDogMjB9LFxuICB7bmFtZTogJ+eZveeZvScsIHRhcmdldDogMzAwLCBRMTogNjcsIFEyOiAxMjAsIFEzOiA3OCwgUTQ6IDk4fSxcbiAge25hbWU6ICfmiJHmiJEnLCB0YXJnZXQ6IDM0MCwgUTE6IDY1LCBRMjogNzgsIFEzOiAxNDMsIFE0OiA3OH0sXG4gIHtuYW1lOiAn55qE55qEJywgdGFyZ2V0OiA4MCwgUTE6IDEyLCBRMjogNDUsIFEzOiA0MSwgUTQ6IDEyfSxcbiAge25hbWU6ICflv4Plv4MnLCB0YXJnZXQ6IDUwMCwgUTE6IDEyMSwgUTI6IDIxMCwgUTM6IDEyMCwgUTQ6IDk4fSxcbiAge25hbWU6ICfmuLTmuLQnLCB0YXJnZXQ6IDEwMCwgUTE6IDMxLCBRMjogMjMsIFEzOiAxOSwgUTQ6IDI5fSxcbiAge25hbWU6ICfmnJvmnJsnLCB0YXJnZXQ6IDIzMCwgUTE6IDUyLCBRMjogMzYsIFEzOiA0NCwgUTQ6IDYyfSxcbl07XG52YXIgU3RhdCA9IEcyLlN0YXQ7XG52YXIgRnJhbWUgPSBHMi5GcmFtZTtcbnZhciBmcmFtZSA9IG5ldyBGcmFtZShkYXRhKTtcbmZyYW1lID0gRnJhbWUuY29tYmluQ29sdW1ucyhmcmFtZSwgWydRMScsJ1EyJywnUTMnLCdRNCddLCd2YWx1ZScsJ3R5cGUnLCBbJ25hbWUnLCAndGFyZ2V0J10pO1xudmFyIGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgaWQ6ICdjMScsXG4gIHdpZHRoOiAxMDAwLFxuICBoZWlnaHQ6IDUwMFxufSk7XG5jaGFydC5zb3VyY2UoZnJhbWUsIHtcbiAgdmFsdWU6IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiA2MDAsXG4gICAgbmljZTogZmFsc2UsXG4gICAgYWxpYXM6ICflkITlraPluqbplIDllK7ph48nXG4gIH0sXG4gIHRhcmdldDoge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDYwMCxcbiAgICBuaWNlOiBmYWxzZSxcbiAgICBhbGlhczogXCLplIDllK7nm67moIdcIlxuICB9LFxuICBuYW1lOiB7XG4gICAgYWxpYXM6ICflp5PlkI0nXG4gIH1cbn0pO1xuY2hhcnQuYXhpcygndmFsdWUnLCBmYWxzZSk7XG5jaGFydC5sZWdlbmQoZmFsc2UpO1xuY2hhcnQuaW50ZXJ2YWwoKS5wb3NpdGlvbignbmFtZSp0YXJnZXQnKS5zaGFwZSgnaG9sbG93UmVjdCcpLnN0eWxlKHtcbiAgJ3N0cm9rZS13aWR0aCc6IDIsXG4gIHN0cm9rZTogJyNGRjdGMDAnXG59KS5zaXplKDM1KTtcbmNoYXJ0LmludGVydmFsKCdzdGFjaycpLnBvc2l0aW9uKCduYW1lKnZhbHVlJykuY29sb3IoJ3R5cGUnLCBbJyMwODUxOWMnLCcjMzE4MmJkJywnIzZiYWVkNicsJyNiZGQ3ZTcnXSkuc2l6ZSgyNSk7XG5jaGFydC5yZW5kZXIoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9iYXIvY29sdW1uLWJ1bGxldC5tZFxuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUNDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBYkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Iiwic291cmNlUm9vdCI6IiJ9