webpackJsonp([101],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ value: 6, name: '名称一', type: '类型一', children: [{ value: 3, type: '类型一', name: '名称一一' }, { value: 2, type: '类型一', name: '名称一二' }, { value: 1, type: '类型一', name: '名称一三' }] }, { value: 6, name: '名称二', type: '类型二' }, { value: 4, name: '名称三', type: '类型三' }, { value: 3, name: '名称四', type: '类型四', children: [{ value: 2, type: '类型四', name: '名称四一' }, { value: 1, type: '类型四', name: '名称四二' }] }, { value: 2, name: '名称五', type: '类型五' }, { value: 2, name: '名称六', type: '类型六' }, { value: 1, name: '你好么，亲爱你好', type: '类型七' }];

	var Stat = G2.Stat;
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.source(data);
	chart.tooltip({
	  map: {
	    title: 'type',
	    name: 'name',
	    value: 'value'
	  }
	});
	chart.axis(false);
	// 统计函数自动生成 ..level字段
	chart.polygon().position(Stat.treemap('children*value')).color('type').label('name*children', function (name, children) {
	  // 仅显示没有子节点的名称
	  if (!children) {
	    return name;
	  }
	}, {
	  label: {
	    fontWeight: 'bold'
	  }
	}).style({
	  stroke: '#fff',
	  'stroke-width': 1
	});;

		chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvdHJlZW1hcC90cmVlbWFwMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy90cmVlbWFwL3RyZWVtYXAyLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyIgIHZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG4gIHZhciBkYXRhID0gW1xuICAgICAge3ZhbHVlOiA2LG5hbWU6ICflkI3np7DkuIAnLHR5cGU6ICfnsbvlnovkuIAnLGNoaWxkcmVuOiBbe3ZhbHVlOiAzLHR5cGU6ICfnsbvlnovkuIAnLG5hbWU6ICflkI3np7DkuIDkuIAnfSx7dmFsdWU6IDIsdHlwZTogJ+exu+Wei+S4gCcsbmFtZTogJ+WQjeensOS4gOS6jCd9LHt2YWx1ZTogMSx0eXBlOiAn57G75Z6L5LiAJyxuYW1lOiAn5ZCN56ew5LiA5LiJJ31dfSxcbiAgICAgIHt2YWx1ZTogNixuYW1lOiAn5ZCN56ew5LqMJyx0eXBlOiAn57G75Z6L5LqMJ30sXG4gICAgICB7dmFsdWU6IDQsbmFtZTogJ+WQjeensOS4iScsdHlwZTogJ+exu+Wei+S4iSd9LFxuICAgICAge3ZhbHVlOiAzLG5hbWU6ICflkI3np7Dlm5snLHR5cGU6ICfnsbvlnovlm5snLGNoaWxkcmVuOiBbe3ZhbHVlOiAyLHR5cGU6ICfnsbvlnovlm5snLG5hbWU6ICflkI3np7Dlm5vkuIAnfSx7dmFsdWU6IDEsdHlwZTogJ+exu+Wei+WbmycsbmFtZTogJ+WQjeensOWbm+S6jCd9XX0sXG4gICAgICB7dmFsdWU6IDIsbmFtZTogJ+WQjeensOS6lCcsdHlwZTogJ+exu+Wei+S6lCd9LFxuICAgICAge3ZhbHVlOiAyLG5hbWU6ICflkI3np7Dlha0nLHR5cGU6ICfnsbvlnovlha0nfSxcbiAgICAgIHt2YWx1ZTogMSxuYW1lOiAn5L2g5aW95LmI77yM5Lqy54ix5L2g5aW9Jyx0eXBlOiAn57G75Z6L5LiDJ31cbiAgXTtcblxuICB2YXIgU3RhdCA9IEcyLlN0YXQ7XG4gIHZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgaWQ6ICdjMScsXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA1MDBcbiAgfSk7XG4gIGNoYXJ0LnNvdXJjZShkYXRhKTtcbiAgY2hhcnQudG9vbHRpcCh7XG4gICAgbWFwOiB7XG4gICAgICB0aXRsZTogJ3R5cGUnLFxuICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgdmFsdWU6ICd2YWx1ZSdcbiAgICB9XG4gIH0pO1xuICBjaGFydC5heGlzKGZhbHNlKTtcbiAgLy8g57uf6K6h5Ye95pWw6Ieq5Yqo55Sf5oiQIC4ubGV2ZWzlrZfmrrVcbiAgY2hhcnQucG9seWdvbigpLnBvc2l0aW9uKFN0YXQudHJlZW1hcCgnY2hpbGRyZW4qdmFsdWUnKSkuY29sb3IoJ3R5cGUnKVxuICAgIC5sYWJlbCgnbmFtZSpjaGlsZHJlbicsZnVuY3Rpb24gKG5hbWUsIGNoaWxkcmVuKSB7IC8vIOS7heaYvuekuuayoeacieWtkOiKgueCueeahOWQjeensFxuICAgICAgaWYgKCFjaGlsZHJlbikge1xuICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICAgICAgfVxuICAgIH0pLnN0eWxlKHtcbiAgICAgIHN0cm9rZTogJyNmZmYnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDFcbiAgICB9KTs7XG5cbiAgY2hhcnQucmVuZGVyKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvdHJlZW1hcC90cmVlbWFwMi5tZFxuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUNDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OzsiLCJzb3VyY2VSb290IjoiIn0=