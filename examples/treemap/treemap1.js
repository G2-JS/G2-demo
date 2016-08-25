webpackJsonp([99],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ value: 6, name: '分类一' }, { value: 6, name: '分类二' }, { value: 4, name: '分类三' }, { value: 3, name: '分类四' }, { value: 2, name: '分类五' }, { value: 2, name: '分类六' }, { value: 1, name: '分类七' }];

	var Stat = G2.Stat;
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.source(data);
	chart.tooltip({
	  map: {
	    title: 'name',
	    value: 'value'
	  }
	});
	chart.axis(false);
	chart.polygon().position(Stat.treemap('1*value')).color('name').label('name', {
	  label: {
	    fontWeight: 'bold'
	  }
	}).style({
	  stroke: '#fff',
	  'stroke-width': 1
	});
		chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvdHJlZW1hcC90cmVlbWFwMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy90cmVlbWFwL3RyZWVtYXAxLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsiICB2YXIgRzIgPSByZXF1aXJlKCdnMicpO1xuICB2YXIgZGF0YSA9IFtcbiAgICAgIHt2YWx1ZTogNixuYW1lOiAn5YiG57G75LiAJ30sXG4gICAgICB7dmFsdWU6IDYsbmFtZTogJ+WIhuexu+S6jCd9LFxuICAgICAge3ZhbHVlOiA0LG5hbWU6ICfliIbnsbvkuIknfSxcbiAgICAgIHt2YWx1ZTogMyxuYW1lOiAn5YiG57G75ZubJ30sXG4gICAgICB7dmFsdWU6IDIsbmFtZTogJ+WIhuexu+S6lCd9LFxuICAgICAge3ZhbHVlOiAyLG5hbWU6ICfliIbnsbvlha0nfSxcbiAgICAgIHt2YWx1ZTogMSxuYW1lOiAn5YiG57G75LiDJ31cbiAgXTtcblxuICB2YXIgU3RhdCA9IEcyLlN0YXQ7XG4gIHZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgaWQ6ICdjMScsXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA1MDBcbiAgfSk7XG4gIGNoYXJ0LnNvdXJjZShkYXRhKTtcbiAgY2hhcnQudG9vbHRpcCh7XG4gICAgbWFwOiB7XG4gICAgICB0aXRsZTogJ25hbWUnLFxuICAgICAgdmFsdWU6ICd2YWx1ZSdcbiAgICB9XG4gIH0pO1xuICBjaGFydC5heGlzKGZhbHNlKTtcbiAgY2hhcnQucG9seWdvbigpLnBvc2l0aW9uKFN0YXQudHJlZW1hcCgnMSp2YWx1ZScpKS5jb2xvcignbmFtZScpXG4gICAgLmxhYmVsKCduYW1lJywge1xuICAgICAgbGFiZWw6IHtcbiAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnXG4gICAgICB9XG4gICAgfSlcbiAgICAuc3R5bGUoe1xuICAgICAgc3Ryb2tlOiAnI2ZmZicsXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogMVxuICAgIH0pO1xuICBjaGFydC5yZW5kZXIoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy90cmVlbWFwL3RyZWVtYXAxLm1kXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQ0NBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFGQTtBQUlBOzs7Iiwic291cmNlUm9vdCI6IiJ9