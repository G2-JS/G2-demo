webpackJsonp([139],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ time: 1246406400000, Temperature: [14.3, 27.7], averageTem: 21.5 }, { time: 1246492800000, Temperature: [14.5, 27.8], averageTem: 22.1 }, { time: 1246579200000, Temperature: [15.5, 29.6], averageTem: 23 }, { time: 1246665600000, Temperature: [16.7, 30.7], averageTem: 23.8 }, { time: 1246752000000, Temperature: [16.5, 25.0], averageTem: 21.4 }, { time: 1246838400000, Temperature: [17.8, 25.7], averageTem: 21. }, { time: 1246924800000, Temperature: [13.5, 24.8], averageTem: 18.3 }, { time: 1247011200000, Temperature: [10.5, 21.4], averageTem: 15.4 }, { time: 1247097600000, Temperature: [9.2, 23.8], averageTem: 16.4 }, { time: 1247184000000, Temperature: [11.6, 21.8], averageTem: 17.7 }, { time: 1247270400000, Temperature: [10.7, 23.7], averageTem: 17.5 }, { time: 1247356800000, Temperature: [11.0, 23.3], averageTem: 17.6 }, { time: 1247443200000, Temperature: [11.6, 23.7], averageTem: 17.7 }, { time: 1247529600000, Temperature: [11.8, 20.7], averageTem: 16.8 }, { time: 1247616000000, Temperature: [12.6, 22.4], averageTem: 17.7 }, { time: 1247702400000, Temperature: [13.6, 19.6], averageTem: 16.3 }, { time: 1247788800000, Temperature: [11.4, 22.6], averageTem: 17.8 }, { time: 1247875200000, Temperature: [13.2, 25.0], averageTem: 18.1 }, { time: 1247961600000, Temperature: [14.2, 21.6], averageTem: 17.2 }, { time: 1248048000000, Temperature: [13.1, 17.1], averageTem: 14.4 }, { time: 1248134400000, Temperature: [12.2, 15.5], averageTem: 13.7 }, { time: 1248220800000, Temperature: [12.0, 20.8], averageTem: 15.7 }, { time: 1248307200000, Temperature: [12.0, 17.1], averageTem: 14.6 }, { time: 1248393600000, Temperature: [12.7, 18.3], averageTem: 15.3 }, { time: 1248480000000, Temperature: [12.4, 19.4], averageTem: 15.3 }, { time: 1248566400000, Temperature: [12.6, 19.9], averageTem: 15.8 }, { time: 1248652800000, Temperature: [11.9, 20.2], averageTem: 15.2 }, { time: 1248739200000, Temperature: [11.0, 19.3], averageTem: 14.8 }, { time: 1248825600000, Temperature: [10.8, 17.8], averageTem: 14.4 }, { time: 1248912000000, Temperature: [11.8, 18.5], averageTem: 15 }, { time: 1248998400000, Temperature: [10.8, 16.1], averageTem: 13.6 }];
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.source(data, {
	  time: {
	    type: 'timeCat',
	    mask: 'dd/mm',
	    tickCount: 16
	  },
	  Temperature: {
	    min: 5,
	    max: 35,
	    nice: false
	  },
	  averageTem: {
	    min: 5,
	    max: 35,
	    nice: false
	  }
	});
	chart.axis('averageTem', false);
	chart.legend(false);
	chart.tooltip({
	  crosshairs: true
	});
	chart.area().position('time*Temperature').opacity(0.25);
	chart.line().position('time*averageTem').size(2);
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYXJlYS9hcmVhLXJhbmdlLWxpbmUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvYXJlYS9hcmVhLXJhbmdlLWxpbmUubWQiLCJ3ZWJwYWNrOi8vLz9kNDFkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbnZhciBkYXRhID0gW1xuICB7dGltZTogMTI0NjQwNjQwMDAwMCwgVGVtcGVyYXR1cmU6IFsxNC4zLCAyNy43XSwgYXZlcmFnZVRlbTogMjEuNX0sXG4gIHt0aW1lOiAxMjQ2NDkyODAwMDAwLCBUZW1wZXJhdHVyZTogWzE0LjUsIDI3LjhdLCBhdmVyYWdlVGVtOiAyMi4xfSxcbiAge3RpbWU6IDEyNDY1NzkyMDAwMDAsIFRlbXBlcmF0dXJlOiBbMTUuNSwgMjkuNl0sIGF2ZXJhZ2VUZW06IDIzfSxcbiAge3RpbWU6IDEyNDY2NjU2MDAwMDAsIFRlbXBlcmF0dXJlOiBbMTYuNywgMzAuN10sIGF2ZXJhZ2VUZW06IDIzLjh9LFxuICB7dGltZTogMTI0Njc1MjAwMDAwMCwgVGVtcGVyYXR1cmU6IFsxNi41LCAyNS4wXSwgYXZlcmFnZVRlbTogMjEuNH0sXG4gIHt0aW1lOiAxMjQ2ODM4NDAwMDAwLCBUZW1wZXJhdHVyZTogWzE3LjgsIDI1LjddLCBhdmVyYWdlVGVtOiAyMS59LFxuICB7dGltZTogMTI0NjkyNDgwMDAwMCwgVGVtcGVyYXR1cmU6IFsxMy41LCAyNC44XSwgYXZlcmFnZVRlbTogMTguM30sXG4gIHt0aW1lOiAxMjQ3MDExMjAwMDAwLCBUZW1wZXJhdHVyZTogWzEwLjUsIDIxLjRdLCBhdmVyYWdlVGVtOiAxNS40fSxcbiAge3RpbWU6IDEyNDcwOTc2MDAwMDAsIFRlbXBlcmF0dXJlOiBbOS4yLCAyMy44XSwgYXZlcmFnZVRlbTogMTYuNH0sXG4gIHt0aW1lOiAxMjQ3MTg0MDAwMDAwLCBUZW1wZXJhdHVyZTogWzExLjYsIDIxLjhdLCBhdmVyYWdlVGVtOiAxNy43fSxcbiAge3RpbWU6IDEyNDcyNzA0MDAwMDAsIFRlbXBlcmF0dXJlOiBbMTAuNywgMjMuN10sIGF2ZXJhZ2VUZW06IDE3LjV9LFxuICB7dGltZTogMTI0NzM1NjgwMDAwMCwgVGVtcGVyYXR1cmU6IFsxMS4wLCAyMy4zXSwgYXZlcmFnZVRlbTogMTcuNn0sXG4gIHt0aW1lOiAxMjQ3NDQzMjAwMDAwLCBUZW1wZXJhdHVyZTogWzExLjYsIDIzLjddLCBhdmVyYWdlVGVtOiAxNy43fSxcbiAge3RpbWU6IDEyNDc1Mjk2MDAwMDAsIFRlbXBlcmF0dXJlOiBbMTEuOCwgMjAuN10sIGF2ZXJhZ2VUZW06IDE2Ljh9LFxuICB7dGltZTogMTI0NzYxNjAwMDAwMCwgVGVtcGVyYXR1cmU6IFsxMi42LCAyMi40XSwgYXZlcmFnZVRlbTogMTcuN30sXG4gIHt0aW1lOiAxMjQ3NzAyNDAwMDAwLCBUZW1wZXJhdHVyZTogWzEzLjYsIDE5LjZdLCBhdmVyYWdlVGVtOiAxNi4zfSxcbiAge3RpbWU6IDEyNDc3ODg4MDAwMDAsIFRlbXBlcmF0dXJlOiBbMTEuNCwgMjIuNl0sIGF2ZXJhZ2VUZW06IDE3Ljh9LFxuICB7dGltZTogMTI0Nzg3NTIwMDAwMCwgVGVtcGVyYXR1cmU6IFsxMy4yLCAyNS4wXSwgYXZlcmFnZVRlbTogMTguMX0sXG4gIHt0aW1lOiAxMjQ3OTYxNjAwMDAwLCBUZW1wZXJhdHVyZTogWzE0LjIsIDIxLjZdLCBhdmVyYWdlVGVtOiAxNy4yfSxcbiAge3RpbWU6IDEyNDgwNDgwMDAwMDAsIFRlbXBlcmF0dXJlOiBbMTMuMSwgMTcuMV0sIGF2ZXJhZ2VUZW06IDE0LjR9LFxuICB7dGltZTogMTI0ODEzNDQwMDAwMCwgVGVtcGVyYXR1cmU6IFsxMi4yLCAxNS41XSwgYXZlcmFnZVRlbTogMTMuN30sXG4gIHt0aW1lOiAxMjQ4MjIwODAwMDAwLCBUZW1wZXJhdHVyZTogWzEyLjAsIDIwLjhdLCBhdmVyYWdlVGVtOiAxNS43fSxcbiAge3RpbWU6IDEyNDgzMDcyMDAwMDAsIFRlbXBlcmF0dXJlOiBbMTIuMCwgMTcuMV0sIGF2ZXJhZ2VUZW06IDE0LjZ9LFxuICB7dGltZTogMTI0ODM5MzYwMDAwMCwgVGVtcGVyYXR1cmU6IFsxMi43LCAxOC4zXSwgYXZlcmFnZVRlbTogMTUuM30sXG4gIHt0aW1lOiAxMjQ4NDgwMDAwMDAwLCBUZW1wZXJhdHVyZTogWzEyLjQsIDE5LjRdLCBhdmVyYWdlVGVtOiAxNS4zfSxcbiAge3RpbWU6IDEyNDg1NjY0MDAwMDAsIFRlbXBlcmF0dXJlOiBbMTIuNiwgMTkuOV0sIGF2ZXJhZ2VUZW06IDE1Ljh9LFxuICB7dGltZTogMTI0ODY1MjgwMDAwMCwgVGVtcGVyYXR1cmU6IFsxMS45LCAyMC4yXSwgYXZlcmFnZVRlbTogMTUuMn0sXG4gIHt0aW1lOiAxMjQ4NzM5MjAwMDAwLCBUZW1wZXJhdHVyZTogWzExLjAsIDE5LjNdLCBhdmVyYWdlVGVtOiAxNC44fSxcbiAge3RpbWU6IDEyNDg4MjU2MDAwMDAsIFRlbXBlcmF0dXJlOiBbMTAuOCwgMTcuOF0sIGF2ZXJhZ2VUZW06IDE0LjR9LFxuICB7dGltZTogMTI0ODkxMjAwMDAwMCwgVGVtcGVyYXR1cmU6IFsxMS44LCAxOC41XSwgYXZlcmFnZVRlbTogMTV9LFxuICB7dGltZTogMTI0ODk5ODQwMDAwMCwgVGVtcGVyYXR1cmU6IFsxMC44LCAxNi4xXSwgYXZlcmFnZVRlbTogMTMuNn1cbl07XG52YXIgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICBpZDogJ2MxJyxcbiAgd2lkdGg6IDEwMDAsXG4gIGhlaWdodDogNTAwXG59KTtcbmNoYXJ0LnNvdXJjZShkYXRhLCB7XG4gIHRpbWU6IHtcbiAgICB0eXBlOiAndGltZUNhdCcsXG4gICAgbWFzazogJ2RkL21tJyxcbiAgICB0aWNrQ291bnQ6IDE2XG4gIH0sXG4gIFRlbXBlcmF0dXJlOiB7XG4gICAgbWluOiA1LFxuICAgIG1heDogMzUsXG4gICAgbmljZTogZmFsc2VcbiAgfSxcbiAgYXZlcmFnZVRlbToge1xuICAgIG1pbjogNSxcbiAgICBtYXg6IDM1LFxuICAgIG5pY2U6IGZhbHNlIFxuICB9XG59KTtcbmNoYXJ0LmF4aXMoJ2F2ZXJhZ2VUZW0nLCBmYWxzZSk7XG5jaGFydC5sZWdlbmQoZmFsc2UpO1xuY2hhcnQudG9vbHRpcCh7XG4gIGNyb3NzaGFpcnM6IHRydWVcbn0pO1xuY2hhcnQuYXJlYSgpLnBvc2l0aW9uKCd0aW1lKlRlbXBlcmF0dXJlJykub3BhY2l0eSgwLjI1KTtcbmNoYXJ0LmxpbmUoKS5wb3NpdGlvbigndGltZSphdmVyYWdlVGVtJykuc2l6ZSgyKTtcbmNoYXJ0LnJlbmRlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2FyZWEvYXJlYS1yYW5nZS1saW5lLm1kXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQ0NBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVhBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==