webpackJsonp([132],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var G2 = __webpack_require__(2);
	var data = [{ "部门": "部门0", "小组": "组名0", "完成人数": 37, "未完成人数": 9 }, { "部门": "部门3", "小组": "组名1", "完成人数": 33, "未完成人数": 16 }, { "部门": "部门0", "小组": "组名2", "完成人数": 29, "未完成人数": 10 }, { "部门": "部门3", "小组": "组名3", "完成人数": 14, "未完成人数": 1 }, { "部门": "部门3", "小组": "组名4", "完成人数": 43, "未完成人数": 25 }, { "部门": "部门4", "小组": "组名5", "完成人数": 98, "未完成人数": 4 }, { "部门": "部门4", "小组": "组名6", "完成人数": 88, "未完成人数": 12 }, { "部门": "部门2", "小组": "组名7", "完成人数": 50, "未完成人数": 5 }, { "部门": "部门0", "小组": "组名8", "完成人数": 59, "未完成人数": 14 }, { "部门": "部门0", "小组": "组名9", "完成人数": 60, "未完成人数": 8 }, { "部门": "部门0", "小组": "组名10", "完成人数": 83, "未完成人数": 14 }, { "部门": "部门2", "小组": "组名11", "完成人数": 86, "未完成人数": 26 }, { "部门": "部门0", "小组": "组名12", "完成人数": 67, "未完成人数": 21 }, { "部门": "部门2", "小组": "组名13", "完成人数": 63, "未完成人数": 16 }, { "部门": "部门0", "小组": "组名14", "完成人数": 46, "未完成人数": 18 }, { "部门": "部门1", "小组": "组名15", "完成人数": 34, "未完成人数": 19 }, { "部门": "部门3", "小组": "组名16", "完成人数": 45, "未完成人数": 13 }, { "部门": "部门0", "小组": "组名17", "完成人数": 19, "未完成人数": 27 }, { "部门": "部门3", "小组": "组名18", "完成人数": 50, "未完成人数": 21 }, { "部门": "部门0", "小组": "组名19", "完成人数": 74, "未完成人数": 17 }, { "部门": "部门1", "小组": "组名20", "完成人数": 71, "未完成人数": 25 }, { "部门": "部门4", "小组": "组名21", "完成人数": 52, "未完成人数": 9 }, { "部门": "部门3", "小组": "组名22", "完成人数": 43, "未完成人数": 7 }, { "部门": "部门3", "小组": "组名23", "完成人数": 38, "未完成人数": 6 }, { "部门": "部门3", "小组": "组名24", "完成人数": 33, "未完成人数": 24 }, { "部门": "部门3", "小组": "组名25", "完成人数": 13, "未完成人数": 27 }, { "部门": "部门1", "小组": "组名26", "完成人数": 28, "未完成人数": 23 }, { "部门": "部门2", "小组": "组名27", "完成人数": 76, "未完成人数": 2 }, { "部门": "部门2", "小组": "组名28", "完成人数": 13, "未完成人数": 28 }, { "部门": "部门1", "小组": "组名29", "完成人数": 90, "未完成人数": 24 }];
	// 按照部门排序
	data.sort(function (obj1, obj2) {
	  return obj1['部门'] > obj2['部门'] ? 1 : -1;
	});
	data.forEach(function (obj) {
	  obj['未完成人数'] *= -1; // 将未完成人数转换成负数
	});

	var Stat = G2.Stat;
	var Frame = G2.Frame;
	var frame = new Frame(data);
	G2.Global.shape.interval['stroke-width'] = 2;

	// 将'完成人数','未完成人数' 合并成一列，增加完成状态字段
	frame = Frame.combinColumns(frame, ['完成人数', '未完成人数'], '人数', '完成状态');
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 450,
	  plotCfg: {
	    margin: [20, 100, 60, 80]
	  }
	});

	var defs = {
	  '人数': {
	    formatter: function formatter(value) {
	      return Math.abs(value); // 将负数格式化成正数
	    }
	  }
	};

	chart.source(frame, defs);
	chart.axis('小组', { title: null });
	chart.interval().position('小组*人数').color('部门').shape('完成状态', ['rect', 'hollowRect']);
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYmFyL2NvbHVtbi1saW5lLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2Jhci9jb2x1bW4tbGluZS5tZCIsIndlYnBhY2s6Ly8vP2Q0MWQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG52YXIgZGF0YSA9IFtcbiAge1wi6YOo6ZeoXCI6XCLpg6jpl6gwXCIsXCLlsI/nu4RcIjpcIue7hOWQjTBcIixcIuWujOaIkOS6uuaVsFwiOjM3LFwi5pyq5a6M5oiQ5Lq65pWwXCI6OX0sXG4gIHtcIumDqOmXqFwiOlwi6YOo6ZeoM1wiLFwi5bCP57uEXCI6XCLnu4TlkI0xXCIsXCLlrozmiJDkurrmlbBcIjozMyxcIuacquWujOaIkOS6uuaVsFwiOjE2fSxcbiAge1wi6YOo6ZeoXCI6XCLpg6jpl6gwXCIsXCLlsI/nu4RcIjpcIue7hOWQjTJcIixcIuWujOaIkOS6uuaVsFwiOjI5LFwi5pyq5a6M5oiQ5Lq65pWwXCI6MTB9LFxuICB7XCLpg6jpl6hcIjpcIumDqOmXqDNcIixcIuWwj+e7hFwiOlwi57uE5ZCNM1wiLFwi5a6M5oiQ5Lq65pWwXCI6MTQsXCLmnKrlrozmiJDkurrmlbBcIjoxfSxcbiAge1wi6YOo6ZeoXCI6XCLpg6jpl6gzXCIsXCLlsI/nu4RcIjpcIue7hOWQjTRcIixcIuWujOaIkOS6uuaVsFwiOjQzLFwi5pyq5a6M5oiQ5Lq65pWwXCI6MjV9LFxuICB7XCLpg6jpl6hcIjpcIumDqOmXqDRcIixcIuWwj+e7hFwiOlwi57uE5ZCNNVwiLFwi5a6M5oiQ5Lq65pWwXCI6OTgsXCLmnKrlrozmiJDkurrmlbBcIjo0fSxcbiAge1wi6YOo6ZeoXCI6XCLpg6jpl6g0XCIsXCLlsI/nu4RcIjpcIue7hOWQjTZcIixcIuWujOaIkOS6uuaVsFwiOjg4LFwi5pyq5a6M5oiQ5Lq65pWwXCI6MTJ9LFxuICB7XCLpg6jpl6hcIjpcIumDqOmXqDJcIixcIuWwj+e7hFwiOlwi57uE5ZCNN1wiLFwi5a6M5oiQ5Lq65pWwXCI6NTAsXCLmnKrlrozmiJDkurrmlbBcIjo1fSxcbiAge1wi6YOo6ZeoXCI6XCLpg6jpl6gwXCIsXCLlsI/nu4RcIjpcIue7hOWQjThcIixcIuWujOaIkOS6uuaVsFwiOjU5LFwi5pyq5a6M5oiQ5Lq65pWwXCI6MTR9LHtcIumDqOmXqFwiOlwi6YOo6ZeoMFwiLFwi5bCP57uEXCI6XCLnu4TlkI05XCIsXCLlrozmiJDkurrmlbBcIjo2MCxcIuacquWujOaIkOS6uuaVsFwiOjh9LFxuICB7XCLpg6jpl6hcIjpcIumDqOmXqDBcIixcIuWwj+e7hFwiOlwi57uE5ZCNMTBcIixcIuWujOaIkOS6uuaVsFwiOjgzLFwi5pyq5a6M5oiQ5Lq65pWwXCI6MTR9LHtcIumDqOmXqFwiOlwi6YOo6ZeoMlwiLFwi5bCP57uEXCI6XCLnu4TlkI0xMVwiLFwi5a6M5oiQ5Lq65pWwXCI6ODYsXCLmnKrlrozmiJDkurrmlbBcIjoyNn0sXG4gIHtcIumDqOmXqFwiOlwi6YOo6ZeoMFwiLFwi5bCP57uEXCI6XCLnu4TlkI0xMlwiLFwi5a6M5oiQ5Lq65pWwXCI6NjcsXCLmnKrlrozmiJDkurrmlbBcIjoyMX0se1wi6YOo6ZeoXCI6XCLpg6jpl6gyXCIsXCLlsI/nu4RcIjpcIue7hOWQjTEzXCIsXCLlrozmiJDkurrmlbBcIjo2MyxcIuacquWujOaIkOS6uuaVsFwiOjE2fSxcbiAge1wi6YOo6ZeoXCI6XCLpg6jpl6gwXCIsXCLlsI/nu4RcIjpcIue7hOWQjTE0XCIsXCLlrozmiJDkurrmlbBcIjo0NixcIuacquWujOaIkOS6uuaVsFwiOjE4fSx7XCLpg6jpl6hcIjpcIumDqOmXqDFcIixcIuWwj+e7hFwiOlwi57uE5ZCNMTVcIixcIuWujOaIkOS6uuaVsFwiOjM0LFwi5pyq5a6M5oiQ5Lq65pWwXCI6MTl9LFxuICB7XCLpg6jpl6hcIjpcIumDqOmXqDNcIixcIuWwj+e7hFwiOlwi57uE5ZCNMTZcIixcIuWujOaIkOS6uuaVsFwiOjQ1LFwi5pyq5a6M5oiQ5Lq65pWwXCI6MTN9LHtcIumDqOmXqFwiOlwi6YOo6ZeoMFwiLFwi5bCP57uEXCI6XCLnu4TlkI0xN1wiLFwi5a6M5oiQ5Lq65pWwXCI6MTksXCLmnKrlrozmiJDkurrmlbBcIjoyN30sXG4gIHtcIumDqOmXqFwiOlwi6YOo6ZeoM1wiLFwi5bCP57uEXCI6XCLnu4TlkI0xOFwiLFwi5a6M5oiQ5Lq65pWwXCI6NTAsXCLmnKrlrozmiJDkurrmlbBcIjoyMX0se1wi6YOo6ZeoXCI6XCLpg6jpl6gwXCIsXCLlsI/nu4RcIjpcIue7hOWQjTE5XCIsXCLlrozmiJDkurrmlbBcIjo3NCxcIuacquWujOaIkOS6uuaVsFwiOjE3fSxcbiAge1wi6YOo6ZeoXCI6XCLpg6jpl6gxXCIsXCLlsI/nu4RcIjpcIue7hOWQjTIwXCIsXCLlrozmiJDkurrmlbBcIjo3MSxcIuacquWujOaIkOS6uuaVsFwiOjI1fSx7XCLpg6jpl6hcIjpcIumDqOmXqDRcIixcIuWwj+e7hFwiOlwi57uE5ZCNMjFcIixcIuWujOaIkOS6uuaVsFwiOjUyLFwi5pyq5a6M5oiQ5Lq65pWwXCI6OX0sXG4gIHtcIumDqOmXqFwiOlwi6YOo6ZeoM1wiLFwi5bCP57uEXCI6XCLnu4TlkI0yMlwiLFwi5a6M5oiQ5Lq65pWwXCI6NDMsXCLmnKrlrozmiJDkurrmlbBcIjo3fSx7XCLpg6jpl6hcIjpcIumDqOmXqDNcIixcIuWwj+e7hFwiOlwi57uE5ZCNMjNcIixcIuWujOaIkOS6uuaVsFwiOjM4LFwi5pyq5a6M5oiQ5Lq65pWwXCI6Nn0sXG4gIHtcIumDqOmXqFwiOlwi6YOo6ZeoM1wiLFwi5bCP57uEXCI6XCLnu4TlkI0yNFwiLFwi5a6M5oiQ5Lq65pWwXCI6MzMsXCLmnKrlrozmiJDkurrmlbBcIjoyNH0se1wi6YOo6ZeoXCI6XCLpg6jpl6gzXCIsXCLlsI/nu4RcIjpcIue7hOWQjTI1XCIsXCLlrozmiJDkurrmlbBcIjoxMyxcIuacquWujOaIkOS6uuaVsFwiOjI3fSxcbiAge1wi6YOo6ZeoXCI6XCLpg6jpl6gxXCIsXCLlsI/nu4RcIjpcIue7hOWQjTI2XCIsXCLlrozmiJDkurrmlbBcIjoyOCxcIuacquWujOaIkOS6uuaVsFwiOjIzfSx7XCLpg6jpl6hcIjpcIumDqOmXqDJcIixcIuWwj+e7hFwiOlwi57uE5ZCNMjdcIixcIuWujOaIkOS6uuaVsFwiOjc2LFwi5pyq5a6M5oiQ5Lq65pWwXCI6Mn0sXG4gIHtcIumDqOmXqFwiOlwi6YOo6ZeoMlwiLFwi5bCP57uEXCI6XCLnu4TlkI0yOFwiLFwi5a6M5oiQ5Lq65pWwXCI6MTMsXCLmnKrlrozmiJDkurrmlbBcIjoyOH0se1wi6YOo6ZeoXCI6XCLpg6jpl6gxXCIsXCLlsI/nu4RcIjpcIue7hOWQjTI5XCIsXCLlrozmiJDkurrmlbBcIjo5MCxcIuacquWujOaIkOS6uuaVsFwiOjI0fVxuXTtcbi8vIOaMieeFp+mDqOmXqOaOkuW6j1xuZGF0YS5zb3J0KGZ1bmN0aW9uICAob2JqMSxvYmoyKSB7XG4gIHJldHVybiBvYmoxWyfpg6jpl6gnXSA+IG9iajJbJ+mDqOmXqCddID8gMSA6IC0xO1xufSk7XG5kYXRhLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcbiAgb2JqWyfmnKrlrozmiJDkurrmlbAnXSAqPSAtMTsgLy8g5bCG5pyq5a6M5oiQ5Lq65pWw6L2s5o2i5oiQ6LSf5pWwXG59KTtcblxudmFyIFN0YXQgPSBHMi5TdGF0O1xudmFyIEZyYW1lID0gRzIuRnJhbWU7XG52YXIgZnJhbWUgPSBuZXcgRnJhbWUoZGF0YSk7XG5HMi5HbG9iYWwuc2hhcGUuaW50ZXJ2YWxbJ3N0cm9rZS13aWR0aCddID0gMjtcblxuLy8g5bCGJ+WujOaIkOS6uuaVsCcsJ+acquWujOaIkOS6uuaVsCcg5ZCI5bm25oiQ5LiA5YiX77yM5aKe5Yqg5a6M5oiQ54q25oCB5a2X5q61XG5mcmFtZSA9IEZyYW1lLmNvbWJpbkNvbHVtbnMoZnJhbWUsWyflrozmiJDkurrmlbAnLCfmnKrlrozmiJDkurrmlbAnXSwn5Lq65pWwJywn5a6M5oiQ54q25oCBJyk7XG52YXIgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICBpZDogJ2MxJyxcbiAgd2lkdGggOiAxMDAwLFxuICBoZWlnaHQgOiA0NTAsXG4gIHBsb3RDZmc6IHtcbiAgICBtYXJnaW46IFsyMCwgMTAwLCA2MCwgODBdXG4gIH1cbn0pO1xuXG52YXIgZGVmcyA9IHtcbiAgJ+S6uuaVsCc6IHtcbiAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIHJldHVybiBNYXRoLmFicyh2YWx1ZSk7IC8vIOWwhui0n+aVsOagvOW8j+WMluaIkOato+aVsFxuICAgIH1cbiAgfVxufTtcblxuY2hhcnQuc291cmNlKGZyYW1lLGRlZnMpO1xuY2hhcnQuYXhpcygn5bCP57uEJyx7dGl0bGU6IG51bGx9KTtcbmNoYXJ0LmludGVydmFsKCkucG9zaXRpb24oJ+Wwj+e7hCrkurrmlbAnKS5jb2xvcign6YOo6ZeoJykuc2hhcGUoJ+WujOaIkOeKtuaAgScsWydyZWN0JywnaG9sbG93UmVjdCddKTtcbmNoYXJ0LnJlbmRlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2Jhci9jb2x1bW4tbGluZS5tZFxuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUNDQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUpBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUNBO0FBT0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==