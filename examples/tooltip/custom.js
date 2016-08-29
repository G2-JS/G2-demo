webpackJsonp([103],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);

	var data = [{ name: '类别1', value: 10, children: [{ name: '类别11', value: 18 }, { name: '类别12', value: 10 }, { name: '类别13', value: 7 }, { name: '类别14', value: 12 }] }, { name: '类别2', value: 8, children: [{ name: '类别21', value: 28 }, { name: '类别22', value: 20 }, { name: '类别23', value: 7 }, { name: '类别24', value: 2 }] }, { name: '类别3', value: 4, children: [{ name: '类别31', value: 14 }, { name: '类别32', value: 12 }, { name: '类别33', value: 6 }, { name: '类别34', value: 1 }] }, { name: '类别4', value: 9, children: [{ name: '类别41', value: 38 }, { name: '类别42', value: 10 }, { name: '类别43', value: 17 }, { name: '类别44', value: 22 }] }];
	var Stat = G2.Stat;
	// 创建柱状图
	var chart = new G2.Chart({
	  id: 'c1',
	  animate: false,
	  width: 1000,
	  height: 500
	});
	var defs = {
	  'value': { min: 0 }
	};
	chart.source(data);
	chart.tooltip(true, {
	  custom: true,
	  html: '#p1'
	});
	chart.interval().position('name*value').color('name');
	chart.render();

	// 创建柱状图
	var chart2 = new G2.Chart({
	  id: 'c2',
	  animate: false,
	  width: 300,
	  height: 300,
	  plotCfg: {
	    margin: [0, 0, 35] // 设置边框
	  }
	});

	chart2.coord('theta');
	chart2.legend('name', {
	  position: 'bottom',
	  title: null
	});

	// 查找对应的数据
	function findObj(name) {
	  var rst = null;
	  data.forEach(function (item) {
	    if (item.name === name) {
	      rst = item;
	    }
	  });
	  return rst;
	}

	// 监听tooltip 改变事件
	chart.on('tooltipchange', function (ev) {
	  var item = ev.items[0]; // 获取tooltip要显示的内容
	  var name = item.name;
	  var obj = findObj(name);
	  if (obj) {
	    chart2.clear();
	    chart2.source(obj.children);
	    chart2.intervalStack().position(Stat.summary.percent('value')).color('name');
	    chart2.render();
	  }
	});

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvdG9vbHRpcC9jdXN0b20uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvdG9vbHRpcC9jdXN0b20ubWQiLCJ3ZWJwYWNrOi8vLz9kNDFkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsiICAgIHZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG5cbiAgICB2YXIgZGF0YSA9IFtcbiAgICAgIHtuYW1lOiAn57G75YirMScsdmFsdWU6IDEwLGNoaWxkcmVuOiBbXG4gICAgICAgIHtuYW1lOiAn57G75YirMTEnLHZhbHVlOiAxOH0sXG4gICAgICAgIHtuYW1lOiAn57G75YirMTInLHZhbHVlOiAxMH0sXG4gICAgICAgIHtuYW1lOiAn57G75YirMTMnLHZhbHVlOiA3fSxcbiAgICAgICAge25hbWU6ICfnsbvliKsxNCcsdmFsdWU6IDEyfVxuICAgICAgXX0sXG4gICAgICB7bmFtZTogJ+exu+WIqzInLHZhbHVlOiA4LGNoaWxkcmVuOiBbXG4gICAgICAgIHtuYW1lOiAn57G75YirMjEnLHZhbHVlOiAyOH0sXG4gICAgICAgIHtuYW1lOiAn57G75YirMjInLHZhbHVlOiAyMH0sXG4gICAgICAgIHtuYW1lOiAn57G75YirMjMnLHZhbHVlOiA3fSxcbiAgICAgICAge25hbWU6ICfnsbvliKsyNCcsdmFsdWU6IDJ9XG4gICAgICBdfSxcbiAgICAgIHtuYW1lOiAn57G75YirMycsdmFsdWU6IDQsY2hpbGRyZW46IFtcbiAgICAgICAge25hbWU6ICfnsbvliKszMScsdmFsdWU6IDE0fSxcbiAgICAgICAge25hbWU6ICfnsbvliKszMicsdmFsdWU6IDEyfSxcbiAgICAgICAge25hbWU6ICfnsbvliKszMycsdmFsdWU6IDZ9LFxuICAgICAgICB7bmFtZTogJ+exu+WIqzM0Jyx2YWx1ZTogMX1cbiAgICAgIF19LFxuICAgICAge25hbWU6ICfnsbvliKs0Jyx2YWx1ZTogOSxjaGlsZHJlbjogW1xuICAgICAgICB7bmFtZTogJ+exu+WIqzQxJyx2YWx1ZTogMzh9LFxuICAgICAgICB7bmFtZTogJ+exu+WIqzQyJyx2YWx1ZTogMTB9LFxuICAgICAgICB7bmFtZTogJ+exu+WIqzQzJyx2YWx1ZTogMTd9LFxuICAgICAgICB7bmFtZTogJ+exu+WIqzQ0Jyx2YWx1ZTogMjJ9XG4gICAgICBdfVxuICAgIF07XG4gICAgdmFyIFN0YXQgPSBHMi5TdGF0O1xuICAgIC8vIOWIm+W7uuafseeKtuWbvlxuICAgIHZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBpZDogJ2MxJyxcbiAgICAgIGFuaW1hdGU6IGZhbHNlLFxuICAgICAgd2lkdGg6IDEwMDAsXG4gICAgICBoZWlnaHQ6IDUwMFxuICAgIH0pO1xuICAgIHZhciBkZWZzID0ge1xuICAgICAgJ3ZhbHVlJzoge21pbjogMH1cbiAgICB9O1xuICAgIGNoYXJ0LnNvdXJjZShkYXRhKTtcbiAgICBjaGFydC50b29sdGlwKHRydWUse1xuICAgICAgY3VzdG9tIDogdHJ1ZSxcbiAgICAgIGh0bWwgOiAnI3AxJ1xuICAgIH0pO1xuICAgIGNoYXJ0LmludGVydmFsKCkucG9zaXRpb24oJ25hbWUqdmFsdWUnKS5jb2xvcignbmFtZScpO1xuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG5cbiAgICAvLyDliJvlu7rmn7Hnirblm75cbiAgICB2YXIgY2hhcnQyID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGlkOiAnYzInLFxuICAgICAgYW5pbWF0ZTogZmFsc2UsXG4gICAgICB3aWR0aDogMzAwLFxuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICBwbG90Q2ZnOiB7XG4gICAgICAgIG1hcmdpbjogWzAsMCwzNV0vLyDorr7nva7ovrnmoYZcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNoYXJ0Mi5jb29yZCgndGhldGEnKTtcbiAgICBjaGFydDIubGVnZW5kKCduYW1lJywge1xuICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgdGl0bGU6IG51bGxcbiAgICB9KTtcblxuICAgIC8vIOafpeaJvuWvueW6lOeahOaVsOaNrlxuICAgIGZ1bmN0aW9uIGZpbmRPYmoobmFtZSkge1xuICAgICAgdmFyIHJzdCA9IG51bGxcbiAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgaWYoaXRlbS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgcnN0ID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcnN0O1xuICAgIH1cblxuICAgIC8vIOebkeWQrHRvb2x0aXAg5pS55Y+Y5LqL5Lu2XG4gICAgY2hhcnQub24oJ3Rvb2x0aXBjaGFuZ2UnLGZ1bmN0aW9uKGV2KXtcbiAgICAgIHZhciBpdGVtID0gZXYuaXRlbXNbMF07IC8vIOiOt+WPlnRvb2x0aXDopoHmmL7npLrnmoTlhoXlrrlcbiAgICAgIHZhciBuYW1lID0gaXRlbS5uYW1lO1xuICAgICAgdmFyIG9iaiA9IGZpbmRPYmoobmFtZSk7XG4gICAgICBpZiAob2JqKSB7XG4gICAgICAgIGNoYXJ0Mi5jbGVhcigpO1xuICAgICAgICBjaGFydDIuc291cmNlKG9iai5jaGlsZHJlbik7XG4gICAgICAgIGNoYXJ0Mi5pbnRlcnZhbFN0YWNrKCkucG9zaXRpb24oU3RhdC5zdW1tYXJ5LnBlcmNlbnQoJ3ZhbHVlJykpLmNvbG9yKCduYW1lJyk7ICBcbiAgICAgICAgY2hhcnQyLnJlbmRlcigpO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL3Rvb2x0aXAvY3VzdG9tLm1kXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FDQ0E7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFMQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9