webpackJsonp([4],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var G2 = __webpack_require__(1);
	var data = [{ action: '访问', visitor: 500 }, { action: '浏览', visitor: 400 }, { action: '交互', visitor: 300 }, { action: '下单', visitor: 200 }, { action: '付款', visitor: 100 }];
	
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 800,
	  height: 400
	}); // 创建图表对象
	chart.source(data); // 载入数据，所有的数据都储存在 data 变量中
	chart.interval().position('action*visitor').color('action');
	chart.render(); // 渲染图表

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vLm1kIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEtBQUksS0FBSyxvQkFBUSxDQUFSLENBQVQ7QUFDQSxLQUFJLE9BQU8sQ0FDVCxFQUFDLFFBQU8sSUFBUixFQUFhLFNBQVEsR0FBckIsRUFEUyxFQUVULEVBQUMsUUFBTyxJQUFSLEVBQWEsU0FBUSxHQUFyQixFQUZTLEVBR1QsRUFBQyxRQUFPLElBQVIsRUFBYSxTQUFRLEdBQXJCLEVBSFMsRUFJVCxFQUFDLFFBQU8sSUFBUixFQUFhLFNBQVEsR0FBckIsRUFKUyxFQUtULEVBQUMsUUFBTyxJQUFSLEVBQWEsU0FBUSxHQUFyQixFQUxTLENBQVg7O0FBUUEsS0FBSSxRQUFRLElBQUksR0FBRyxLQUFQLENBQWE7QUFDdkIsT0FBSSxJQURtQjtBQUV2QixVQUFPLEdBRmdCO0FBR3ZCLFdBQVE7QUFIZSxFQUFiLENBQVosQyxDQUlJO0FBQ0osT0FBTSxNQUFOLENBQWEsSUFBYixFLENBQW9CO0FBQ3BCLE9BQU0sUUFBTixHQUFpQixRQUFqQixDQUEwQixnQkFBMUIsRUFBNEMsS0FBNUMsQ0FBa0QsUUFBbEQ7QUFDQSxPQUFNLE1BQU4sRyxDQUFnQixPIiwiZmlsZSI6ImV4YW1wbGVzL2RlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRzIgPSByZXF1aXJlKCdnMicpO1xudmFyIGRhdGEgPSBbXG4gIHthY3Rpb246J+iuv+mXricsdmlzaXRvcjo1MDB9LFxuICB7YWN0aW9uOifmtY/op4gnLHZpc2l0b3I6NDAwfSxcbiAge2FjdGlvbjon5Lqk5LqSJyx2aXNpdG9yOjMwMH0sXG4gIHthY3Rpb246J+S4i+WNlScsdmlzaXRvcjoyMDB9LFxuICB7YWN0aW9uOifku5jmrL4nLHZpc2l0b3I6MTAwfVxuXTtcblxudmFyIGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgaWQ6ICdjMScsXG4gIHdpZHRoOiA4MDAsXG4gIGhlaWdodDogNDAwXG59KTsgLy8g5Yib5bu65Zu+6KGo5a+56LGhXG5jaGFydC5zb3VyY2UoZGF0YSk7IC8vIOi9veWFpeaVsOaNru+8jOaJgOacieeahOaVsOaNrumDveWCqOWtmOWcqCBkYXRhIOWPmOmHj+S4rVxuY2hhcnQuaW50ZXJ2YWwoKS5wb3NpdGlvbignYWN0aW9uKnZpc2l0b3InKS5jb2xvcignYWN0aW9uJyk7XG5jaGFydC5yZW5kZXIoKTsgLy8g5riy5p+T5Zu+6KGoXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9kZW1vLm1kXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==