webpackJsonp([134],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var G2 = __webpack_require__(2);
	var data = [{ "province": "北京市", "population": 19612368 }, { "province": "天津市", "population": 12938693 }, { "province": "河北省", "population": 71854210 }, { "province": "山西省", "population": 27500000 }, { "province": "内蒙古自治区", "population": 24706291 }, { "province": "辽宁省", "population": 43746323 }, { "province": "吉林省", "population": 27452815 }, { "province": "黑龙江省", "population": 38313991 }, { "province": "上海市", "population": 23019196 }, { "province": "江苏省", "population": 78660941 }, { "province": "浙江省", "population": 54426891 }, { "province": "安徽省", "population": 59500468 }, { "province": "福建省", "population": 36894217 }, { "province": "江西省", "population": 44567797 }, { "province": "山东省", "population": 95792719 }, { "province": "河南省", "population": 94029939 }, { "province": "湖北省", "population": 57237727 }, { "province": "湖南省", "population": 65700762 }, { "province": "广东省", "population": 104320459 }, { "province": "广西壮族自治区", "population": 46023761 }, { "province": "海南省", "population": 8671485 }, { "province": "重庆市", "population": 28846170 }, { "province": "四川省", "population": 80417528 }, { "province": "贵州省", "population": 34748556 }, { "province": "云南省", "population": 45966766 }, { "province": "西藏自治区", "population": 3002165 }, { "province": "陕西省", "population": 37327379 }, { "province": "甘肃省", "population": 25575263 }, { "province": "青海省", "population": 5626723 }];

	var Stat = G2.Stat;
	var Frame = G2.Frame;
	var frame = new Frame(data);

	frame = Frame.sort(frame, 'population'); // 将数据按照population 进行排序，由大到小

	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500,
	  plotCfg: {
	    margin: [20, 60, 80, 120]
	  }
	});

	chart.source(frame);
	chart.axis('province', {
	  title: null
	});
	chart.coord('rect').transpose();
	chart.interval().position('province*population');
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYmFyL2Jhci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9iYXIvYmFyLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRzIgPSByZXF1aXJlKCdnMicpO1xudmFyIGRhdGEgPSBbXG4gIHtcInByb3ZpbmNlXCI6XCLljJfkuqzluIJcIixcInBvcHVsYXRpb25cIjoxOTYxMjM2OH0sXG4gIHtcInByb3ZpbmNlXCI6XCLlpKnmtKXluIJcIixcInBvcHVsYXRpb25cIjoxMjkzODY5M30sXG4gIHtcInByb3ZpbmNlXCI6XCLmsrPljJfnnIFcIixcInBvcHVsYXRpb25cIjo3MTg1NDIxMH0sXG4gIHtcInByb3ZpbmNlXCI6XCLlsbHopb/nnIFcIixcInBvcHVsYXRpb25cIjoyNzUwMDAwMH0sXG4gIHtcInByb3ZpbmNlXCI6XCLlhoXokpnlj6Toh6rmsrvljLpcIixcInBvcHVsYXRpb25cIjoyNDcwNjI5MX0sXG4gIHtcInByb3ZpbmNlXCI6XCLovr3lroHnnIFcIixcInBvcHVsYXRpb25cIjo0Mzc0NjMyM30sXG4gIHtcInByb3ZpbmNlXCI6XCLlkInmnpfnnIFcIixcInBvcHVsYXRpb25cIjoyNzQ1MjgxNX0sXG4gIHtcInByb3ZpbmNlXCI6XCLpu5HpvpnmsZ/nnIFcIixcInBvcHVsYXRpb25cIjozODMxMzk5MX0sXG4gIHtcInByb3ZpbmNlXCI6XCLkuIrmtbfluIJcIixcInBvcHVsYXRpb25cIjoyMzAxOTE5Nn0sXG4gIHtcInByb3ZpbmNlXCI6XCLmsZ/oi4/nnIFcIixcInBvcHVsYXRpb25cIjo3ODY2MDk0MX0sXG4gIHtcInByb3ZpbmNlXCI6XCLmtZnmsZ/nnIFcIixcInBvcHVsYXRpb25cIjo1NDQyNjg5MX0sXG4gIHtcInByb3ZpbmNlXCI6XCLlronlvr3nnIFcIixcInBvcHVsYXRpb25cIjo1OTUwMDQ2OH0sXG4gIHtcInByb3ZpbmNlXCI6XCLnpo/lu7rnnIFcIixcInBvcHVsYXRpb25cIjozNjg5NDIxN30sXG4gIHtcInByb3ZpbmNlXCI6XCLmsZ/opb/nnIFcIixcInBvcHVsYXRpb25cIjo0NDU2Nzc5N30sXG4gIHtcInByb3ZpbmNlXCI6XCLlsbHkuJznnIFcIixcInBvcHVsYXRpb25cIjo5NTc5MjcxOX0sXG4gIHtcInByb3ZpbmNlXCI6XCLmsrPljZfnnIFcIixcInBvcHVsYXRpb25cIjo5NDAyOTkzOX0sXG4gIHtcInByb3ZpbmNlXCI6XCLmuZbljJfnnIFcIixcInBvcHVsYXRpb25cIjo1NzIzNzcyN30sXG4gIHtcInByb3ZpbmNlXCI6XCLmuZbljZfnnIFcIixcInBvcHVsYXRpb25cIjo2NTcwMDc2Mn0sXG4gIHtcInByb3ZpbmNlXCI6XCLlub/kuJznnIFcIixcInBvcHVsYXRpb25cIjoxMDQzMjA0NTl9LFxuICB7XCJwcm92aW5jZVwiOlwi5bm/6KW/5aOu5peP6Ieq5rK75Yy6XCIsXCJwb3B1bGF0aW9uXCI6NDYwMjM3NjF9LFxuICB7XCJwcm92aW5jZVwiOlwi5rW35Y2X55yBXCIsXCJwb3B1bGF0aW9uXCI6ODY3MTQ4NX0sXG4gIHtcInByb3ZpbmNlXCI6XCLph43luobluIJcIixcInBvcHVsYXRpb25cIjoyODg0NjE3MH0sXG4gIHtcInByb3ZpbmNlXCI6XCLlm5vlt53nnIFcIixcInBvcHVsYXRpb25cIjo4MDQxNzUyOH0sXG4gIHtcInByb3ZpbmNlXCI6XCLotLXlt57nnIFcIixcInBvcHVsYXRpb25cIjozNDc0ODU1Nn0sXG4gIHtcInByb3ZpbmNlXCI6XCLkupHljZfnnIFcIixcInBvcHVsYXRpb25cIjo0NTk2Njc2Nn0sXG4gIHtcInByb3ZpbmNlXCI6XCLopb/ol4/oh6rmsrvljLpcIixcInBvcHVsYXRpb25cIjozMDAyMTY1fSxcbiAge1wicHJvdmluY2VcIjpcIumZleilv+ecgVwiLFwicG9wdWxhdGlvblwiOjM3MzI3Mzc5fSxcbiAge1wicHJvdmluY2VcIjpcIueUmOiCg+ecgVwiLFwicG9wdWxhdGlvblwiOjI1NTc1MjYzfSxcbiAge1wicHJvdmluY2VcIjpcIumdkua1t+ecgVwiLFwicG9wdWxhdGlvblwiOjU2MjY3MjN9XG5dO1xuXG52YXIgU3RhdCA9IEcyLlN0YXQ7XG52YXIgRnJhbWUgPSBHMi5GcmFtZTtcbnZhciBmcmFtZSA9IG5ldyBGcmFtZShkYXRhKTtcblxuZnJhbWUgPSBGcmFtZS5zb3J0KGZyYW1lLCAncG9wdWxhdGlvbicpOyAvLyDlsIbmlbDmja7mjInnhadwb3B1bGF0aW9uIOi/m+ihjOaOkuW6j++8jOeUseWkp+WIsOWwj1xuXG52YXIgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICBpZCA6ICdjMScsXG4gIHdpZHRoIDogMTAwMCxcbiAgaGVpZ2h0IDogNTAwLFxuICBwbG90Q2ZnOiB7XG4gICAgbWFyZ2luOiBbMjAsIDYwLCA4MCwgMTIwXVxuICB9XG59KTtcblxuY2hhcnQuc291cmNlKGZyYW1lKTtcbmNoYXJ0LmF4aXMoJ3Byb3ZpbmNlJyx7XG4gIHRpdGxlOiBudWxsXG59KTtcbmNoYXJ0LmNvb3JkKCdyZWN0JykudHJhbnNwb3NlKCk7XG5jaGFydC5pbnRlcnZhbCgpLnBvc2l0aW9uKCdwcm92aW5jZSpwb3B1bGF0aW9uJyk7XG5jaGFydC5yZW5kZXIoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9iYXIvYmFyLm1kXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQ0NBO0FBQ0E7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==