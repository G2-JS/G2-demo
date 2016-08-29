webpackJsonp([112],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [];

	/**
	 * 有3个字段
	 * name ：名称
	 * value : 0 - 100 之间的数字
	 * type: 类型值 1，2
	 */
	for (var i = 0; i < 15; i++) {
	  var obj = {
	    name: '同学' + i,
	    value: parseInt(Math.random() * 100)
	  };
	  obj.type = obj.value > 60 ? 2 : 1;
	  data.push(obj);
	}
	var Stat = G2.Stat;
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.coord().transpose();

	chart.source(data, { // 列定义
	  'type': {
	    type: 'cat',
	    alias: '类型',
	    // 用于控制图例、提示信息上显示的文本
	    formatter: function formatter(value) {
	      if (value == 1) {
	        return '警告';
	      }
	      return '错误';
	    }
	  }
	});

	chart.axis('name', { title: null });
	chart.interval().position('name*value').color('type', function (value, name) {
	  if (value == 1) {
	    return '#FAC450';
	  } else if (value == 2) {
	    return '#FF6600';
	  }
	  return 'green';
	});
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvc2NhbGUvY2F0LWZvcm1hdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9zY2FsZS9jYXQtZm9ybWF0Lm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIl0sInNvdXJjZXNDb250ZW50IjpbIiAgdmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbiAgdmFyIGRhdGEgPSBbXTtcblxuICAvKipcbiAgICog5pyJM+S4quWtl+autVxuICAgKiBuYW1lIO+8muWQjeensFxuICAgKiB2YWx1ZSA6IDAgLSAxMDAg5LmL6Ze055qE5pWw5a2XXG4gICAqIHR5cGU6IOexu+Wei+WAvCAx77yMMlxuICAgKi9cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSArKykge1xuICAgIHZhciBvYmogPSB7XG4gICAgICBuYW1lOiAn5ZCM5a2mJyArIGksXG4gICAgICB2YWx1ZTogcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgICB9O1xuICAgIG9iai50eXBlID0gb2JqLnZhbHVlID4gNjAgPyAyIDogMTtcbiAgICBkYXRhLnB1c2gob2JqKTtcbiAgfVxuICB2YXIgU3RhdCA9IEcyLlN0YXQ7XG4gIHZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgaWQ6ICdjMScsXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA1MDBcbiAgfSk7XG4gIGNoYXJ0LmNvb3JkKCkudHJhbnNwb3NlKCk7XG5cbiAgY2hhcnQuc291cmNlKGRhdGEseyAvLyDliJflrprkuYlcbiAgICAndHlwZSc6IHtcbiAgICAgIHR5cGU6ICdjYXQnLFxuICAgICAgYWxpYXM6ICfnsbvlnosnLFxuICAgICAgLy8g55So5LqO5o6n5Yi25Zu+5L6L44CB5o+Q56S65L+h5oGv5LiK5pi+56S655qE5paH5pysXG4gICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT0gMSkge1xuICAgICAgICAgIHJldHVybiAn6K2m5ZGKJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAn6ZSZ6K+vJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNoYXJ0LmF4aXMoJ25hbWUnLHt0aXRsZTogbnVsbH0pO1xuICBjaGFydC5pbnRlcnZhbCgpLnBvc2l0aW9uKCduYW1lKnZhbHVlJykuY29sb3IoJ3R5cGUnLGZ1bmN0aW9uICh2YWx1ZSxuYW1lKSB7XG4gICAgaWYgKHZhbHVlID09IDEpIHtcbiAgICAgIHJldHVybiAnI0ZBQzQ1MCdcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09IDIpIHtcbiAgICAgIHJldHVybiAnI0ZGNjYwMCc7XG4gICAgfVxuICAgIHJldHVybiAnZ3JlZW4nO1xuICB9KTtcbiAgY2hhcnQucmVuZGVyKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvc2NhbGUvY2F0LWZvcm1hdC5tZFxuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUNDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBREE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=