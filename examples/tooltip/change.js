webpackJsonp([105],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var G2 = __webpack_require__(2);
	var data = [// 数据
	{ "time": 1428163200000, "start": 469, "end": 480 }, { "time": 1428163203600, "start": 480, "end": 430 }, { "time": 1428163207200, "start": 430, "end": 410 }, { "time": 1428163210800, "start": 410, "end": 420 }, { "time": 1428163214400, "start": 420, "end": 440 }, { "time": 1428163218000, "start": 440, "end": 460 }, { "time": 1428163221600, "start": 460, "end": 410 }, { "time": 1428163225200, "start": 410, "end": 440 }, { "time": 1428163228800, "start": 440, "end": 490 }];
	var frame = new G2.Frame(data); // 创建数据源

	frame.addCol('range', function (obj) {
	  // 添加列
	  return [obj.start, obj.end];
	});

	frame.addCol('trend', function (obj) {
	  return obj.start <= obj.end ? 0 : 1;
	});

	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	var defs = {
	  'time': { // 设置日期类型
	    type: 'time',
	    mask: 'yyyy-mm-dd HH:MM:ss'
	  },
	  'trend': { //设置条件，显示不同的颜色
	    type: 'condition',
	    alias: '趋势',
	    values: ['上涨', '下跌']
	  }
	};

	chart.source(frame, defs);
	chart.interval().position('time*range').color('trend', ['#1bbd19', '#fa513a']).size(40);
	chart.render();

	chart.on('tooltipchange', function (ev) {
	  var items = ev.items; // tooltip显示的项
	  var origin = items[0]; // 将一条数据改成多条数据
	  var range = origin.point.range;
	  items.splice(0); // 清空

	  items.push({
	    name: '开始值',
	    title: origin.title,
	    marker: true,
	    color: origin.color,
	    value: range[0]
	  });

	  items.push({
	    name: '结束值',
	    marker: true,
	    title: origin.title,
	    color: origin.color,
	    value: range[1]
	  });
		});

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvdG9vbHRpcC9jaGFuZ2UuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvdG9vbHRpcC9jaGFuZ2UubWQiLCJ3ZWJwYWNrOi8vLz9kNDFkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICB2YXIgRzIgPSByZXF1aXJlKCdnMicpO1xuICAgIHZhciBkYXRhID0gWyAvLyDmlbDmja5cbiAgICAgIHtcInRpbWVcIjoxNDI4MTYzMjAwMDAwLFwic3RhcnRcIjo0NjksXCJlbmRcIjo0ODB9LFxuICAgICAge1widGltZVwiOjE0MjgxNjMyMDM2MDAsXCJzdGFydFwiOjQ4MCxcImVuZFwiOjQzMH0sXG4gICAgICB7XCJ0aW1lXCI6MTQyODE2MzIwNzIwMCxcInN0YXJ0XCI6NDMwLFwiZW5kXCI6NDEwfSxcbiAgICAgIHtcInRpbWVcIjoxNDI4MTYzMjEwODAwLFwic3RhcnRcIjo0MTAsXCJlbmRcIjo0MjB9LFxuICAgICAge1widGltZVwiOjE0MjgxNjMyMTQ0MDAsXCJzdGFydFwiOjQyMCxcImVuZFwiOjQ0MH0sXG4gICAgICB7XCJ0aW1lXCI6MTQyODE2MzIxODAwMCxcInN0YXJ0XCI6NDQwLFwiZW5kXCI6NDYwfSxcbiAgICAgIHtcInRpbWVcIjoxNDI4MTYzMjIxNjAwLFwic3RhcnRcIjo0NjAsXCJlbmRcIjo0MTB9LFxuICAgICAge1widGltZVwiOjE0MjgxNjMyMjUyMDAsXCJzdGFydFwiOjQxMCxcImVuZFwiOjQ0MH0sXG4gICAgICB7XCJ0aW1lXCI6MTQyODE2MzIyODgwMCxcInN0YXJ0XCI6NDQwLFwiZW5kXCI6NDkwfVxuICAgIF07XG4gICAgdmFyIGZyYW1lID0gbmV3IEcyLkZyYW1lKGRhdGEpOyAvLyDliJvlu7rmlbDmja7mupBcblxuICAgIGZyYW1lLmFkZENvbCgncmFuZ2UnLGZ1bmN0aW9uKG9iail7IC8vIOa3u+WKoOWIl1xuICAgICAgcmV0dXJuIFtvYmouc3RhcnQsb2JqLmVuZF07XG4gICAgfSk7XG5cbiAgICBmcmFtZS5hZGRDb2woJ3RyZW5kJywgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gKG9iai5zdGFydCA8PSBvYmouZW5kKSA/IDAgOiAxO1xuICAgIH0pO1xuXG4gICAgdmFyIGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGlkOiAnYzEnLFxuICAgICAgd2lkdGg6IDEwMDAsXG4gICAgICBoZWlnaHQ6IDUwMFxuICAgIH0pO1xuICAgIHZhciBkZWZzID0ge1xuICAgICAgJ3RpbWUnOiB7IC8vIOiuvue9ruaXpeacn+exu+Wei1xuICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgIG1hc2s6ICd5eXl5LW1tLWRkIEhIOk1NOnNzJ1xuICAgICAgfSxcbiAgICAgICd0cmVuZCc6IHsgLy/orr7nva7mnaHku7bvvIzmmL7npLrkuI3lkIznmoTpopzoibJcbiAgICAgICAgdHlwZTogJ2NvbmRpdGlvbicsXG4gICAgICAgIGFsaWFzOiAn6LaL5Yq/JyxcbiAgICAgICAgdmFsdWVzOiBbJ+S4iua2qCcsJ+S4i+i3jCddXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNoYXJ0LnNvdXJjZShmcmFtZSxkZWZzKTtcbiAgICBjaGFydC5pbnRlcnZhbCgpLnBvc2l0aW9uKCd0aW1lKnJhbmdlJykuY29sb3IoJ3RyZW5kJyxbJyMxYmJkMTknLCcjZmE1MTNhJ10pLnNpemUoNDApO1xuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgY2hhcnQub24oJ3Rvb2x0aXBjaGFuZ2UnLGZ1bmN0aW9uKGV2KXtcbiAgICAgIHZhciBpdGVtcyA9IGV2Lml0ZW1zOyAvLyB0b29sdGlw5pi+56S655qE6aG5XG4gICAgICB2YXIgb3JpZ2luID0gaXRlbXNbMF07IC8vIOWwhuS4gOadoeaVsOaNruaUueaIkOWkmuadoeaVsOaNrlxuICAgICAgdmFyIHJhbmdlID0gb3JpZ2luLnBvaW50LnJhbmdlO1xuICAgICAgaXRlbXMuc3BsaWNlKDApOyAvLyDmuIXnqbpcblxuICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgIG5hbWU6ICflvIDlp4vlgLwnLFxuICAgICAgICB0aXRsZTogb3JpZ2luLnRpdGxlLFxuICAgICAgICBtYXJrZXI6IHRydWUsXG4gICAgICAgIGNvbG9yOiBvcmlnaW4uY29sb3IsXG4gICAgICAgIHZhbHVlOiByYW5nZVswXVxuICAgICAgfSk7XG5cbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICBuYW1lOiAn57uT5p2f5YC8JyxcbiAgICAgICAgbWFya2VyOiB0cnVlLFxuICAgICAgICB0aXRsZTogb3JpZ2luLnRpdGxlLFxuICAgICAgICBjb2xvcjogb3JpZ2luLmNvbG9yLFxuICAgICAgICB2YWx1ZTogcmFuZ2VbMV1cbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvdG9vbHRpcC9jaGFuZ2UubWRcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FDQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==