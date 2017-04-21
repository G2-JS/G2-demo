# 色块图

- template: demo-detail
- product: G2
- type: 热力/色块图
- index: 0
- description: 色块图，由小色块有序且紧凑的组成的图表。色块图的最大好处是，2维画布上的空间利用率非常高。理论上小色块的大小是可以等于硬件像素的大小。
- antVLink: https://antv.alipay.com/chart/details/color-map.html

----

<script>
var data = [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]];
var source = [];
for(var i = 0; i < data.length; i ++) {
	var item = data[i];
	var obj = {};
	obj.name = item[0];
	obj.day = item[1];
	obj.sales = item[2];
	source.push(obj);
}
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [20, 80, 60, 85]
  }
});

chart.source(source, {
 	name: {
 		type: 'cat',
 		values: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
 	},
 	day: {
 		type: 'cat',
 		values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
 	}
});
chart.axis('name', {
	title: null
});
chart.axis('day', {
	title: null
});
chart.polygon()
  .position('name*day')
  .color('sales', '#ffffff-#36B3C3')
  .label('sales', {
  	offset: -2,
  	label: {
  		fill: '#444',
  		fontWeight: 'bold'
  	}
  })
  .style({
    lineWidth: 1,
    stroke: '#fff'
  });
chart.render();
</script>
