webpackJsonp([134],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ profession: '两年制副学士学位', highest: 110000, minimum: 23000, mean: 56636 }, { profession: '执法与救火', highest: 120000, minimum: 18000, mean: 66625 }, { profession: '教育学', highest: 125000, minimum: 24000, mean: 72536 }, { profession: '心理学', highest: 130000, minimum: 22500, mean: 75256 }, { profession: '计算机科学', highest: 131000, minimum: 23000, mean: 77031 }, { profession: '医学与护理', highest: 132000, minimum: 23500, mean: 77791 }, { profession: '农学', highest: 135000, minimum: 23200, mean: 78526 }, { profession: '数学', highest: 137000, minimum: 23000, mean: 78526 }, { profession: '物理与化学', highest: 130000, minimum: 30500, mean: 79975 }, { profession: '哲学', highest: 140000, minimum: 22200, mean: 81911 }, { profession: '建筑学', highest: 139000, minimum: 23000, mean: 83971 }, { profession: '经管营销', highest: 138000, minimum: 23000, mean: 84572 }, { profession: '工程学', highest: 145000, minimum: 32200, mean: 88037 }, { profession: '人文科学', highest: 136000, minimum: 40000, mean: 84572 }, { profession: '新闻学', highest: 148000, minimum: 33000, mean: 89064 }, { profession: '生物学', highest: 147000, minimum: 34200, mean: 89869 }, { profession: '传播学', highest: 149000, minimum: 34000, mean: 90735 }, { profession: '社会学、政治学', highest: 148500, minimum: 35000, mean: 91704 }, { profession: '经济学', highest: 146000, minimum: 37200, mean: 91923 }, { profession: '视觉与表演艺术', highest: 148900, minimum: 40000, mean: 94381 }, { profession: '历史系', highest: 155000, minimum: 38200, mean: 95900 }, { profession: '英语', highest: 159000, minimum: 39000, mean: 99533 }];

	var Stat = G2.Stat;
	var Frame = G2.Frame;
	var frame = new Frame(data); // 加工数据

	frame.addCol('range', function (obj) {
	  return [obj.minimum, obj.highest];
	});

	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500,
	  plotCfg: {
	    margin: [80, 120, 90, 180]
	  }
	});
	var defs = {
	  'range': { min: 0, max: 200000, alias: '收入范围' },
	  'mean': { min: 0, max: 200000, alias: '收入均值' }
	};

	chart.source(frame, defs);
	chart.axis('profession', { title: null });
	chart.axis('mean', false);

	chart.coord().transpose();
	chart.interval().position('profession*range').size(12);
	chart.point().position('profession*mean').color('#F8AB60').shape('circle').label('mean', { offset: 20, label: { fill: '#F8AB60' } });

		chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYmFyL3JhbmdlLWJhci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9iYXIvcmFuZ2UtYmFyLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiJdLCJzb3VyY2VzQ29udGVudCI6WyIgIHZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG4gIHZhciBkYXRhID0gW1xuICAgIHtwcm9mZXNzaW9uOiAn5Lik5bm05Yi25Ymv5a2m5aOr5a2m5L2NJyxoaWdoZXN0OiAxMTAwMDAsbWluaW11bTogMjMwMDAsbWVhbjogNTY2MzZ9LFxuICAgIHtwcm9mZXNzaW9uOiAn5omn5rOV5LiO5pWR54GrJyxoaWdoZXN0OiAxMjAwMDAsbWluaW11bTogMTgwMDAsbWVhbjogNjY2MjV9LFxuICAgIHtwcm9mZXNzaW9uOiAn5pWZ6IKy5a2mJyxoaWdoZXN0OiAxMjUwMDAsbWluaW11bTogMjQwMDAsbWVhbjogNzI1MzZ9LFxuICAgIHtwcm9mZXNzaW9uOiAn5b+D55CG5a2mJyxoaWdoZXN0OiAxMzAwMDAsbWluaW11bTogMjI1MDAsbWVhbjogNzUyNTZ9LFxuICAgIHtwcm9mZXNzaW9uOiAn6K6h566X5py656eR5a2mJyxoaWdoZXN0OiAxMzEwMDAsbWluaW11bTogMjMwMDAsbWVhbjogNzcwMzF9LFxuICAgIHtwcm9mZXNzaW9uOiAn5Yy75a2m5LiO5oqk55CGJyxoaWdoZXN0OiAxMzIwMDAsbWluaW11bTogMjM1MDAsbWVhbjogNzc3OTF9LFxuICAgIHtwcm9mZXNzaW9uOiAn5Yac5a2mJyxoaWdoZXN0OiAxMzUwMDAsbWluaW11bTogMjMyMDAsbWVhbjogNzg1MjZ9LFxuICAgIHtwcm9mZXNzaW9uOiAn5pWw5a2mJyxoaWdoZXN0OiAxMzcwMDAsbWluaW11bTogMjMwMDAsbWVhbjogNzg1MjZ9LFxuICAgIHtwcm9mZXNzaW9uOiAn54mp55CG5LiO5YyW5a2mJyxoaWdoZXN0OiAxMzAwMDAsbWluaW11bTogMzA1MDAsbWVhbjogNzk5NzV9LFxuICAgIHtwcm9mZXNzaW9uOiAn5ZOy5a2mJyxoaWdoZXN0OiAxNDAwMDAsbWluaW11bTogMjIyMDAsbWVhbjogODE5MTF9LFxuICAgIHtwcm9mZXNzaW9uOiAn5bu6562R5a2mJyxoaWdoZXN0OiAxMzkwMDAsbWluaW11bTogMjMwMDAsbWVhbjogODM5NzF9LFxuICAgIHtwcm9mZXNzaW9uOiAn57uP566h6JCl6ZSAJyxoaWdoZXN0OiAxMzgwMDAsbWluaW11bTogMjMwMDAsbWVhbjogODQ1NzJ9LFxuICAgIHtwcm9mZXNzaW9uOiAn5bel56iL5a2mJyxoaWdoZXN0OiAxNDUwMDAsbWluaW11bTogMzIyMDAsbWVhbjogODgwMzd9LFxuICAgIHtwcm9mZXNzaW9uOiAn5Lq65paH56eR5a2mJyxoaWdoZXN0OiAxMzYwMDAsbWluaW11bTogNDAwMDAsbWVhbjogODQ1NzJ9LFxuICAgIHtwcm9mZXNzaW9uOiAn5paw6Ze75a2mJyxoaWdoZXN0OiAxNDgwMDAsbWluaW11bTogMzMwMDAsbWVhbjogODkwNjR9LFxuICAgIHtwcm9mZXNzaW9uOiAn55Sf54mp5a2mJyxoaWdoZXN0OiAxNDcwMDAsbWluaW11bTogMzQyMDAsbWVhbjogODk4Njl9LFxuICAgIHtwcm9mZXNzaW9uOiAn5Lyg5pKt5a2mJyxoaWdoZXN0OiAxNDkwMDAsbWluaW11bTogMzQwMDAsbWVhbjogOTA3MzV9LFxuICAgIHtwcm9mZXNzaW9uOiAn56S+5Lya5a2m44CB5pS/5rK75a2mJyxoaWdoZXN0OiAxNDg1MDAsbWluaW11bTogMzUwMDAsbWVhbjogOTE3MDR9LFxuICAgIHtwcm9mZXNzaW9uOiAn57uP5rWO5a2mJyxoaWdoZXN0OiAxNDYwMDAsbWluaW11bTogMzcyMDAsbWVhbjogOTE5MjN9LFxuICAgIHtwcm9mZXNzaW9uOiAn6KeG6KeJ5LiO6KGo5ryU6Im65pyvJyxoaWdoZXN0OiAxNDg5MDAsbWluaW11bTogNDAwMDAsbWVhbjogOTQzODF9LFxuICAgIHtwcm9mZXNzaW9uOiAn5Y6G5Y+y57O7JyxoaWdoZXN0OiAxNTUwMDAsbWluaW11bTogMzgyMDAsbWVhbjogOTU5MDB9LFxuICAgIHtwcm9mZXNzaW9uOiAn6Iux6K+tJyxoaWdoZXN0OiAxNTkwMDAsbWluaW11bTogMzkwMDAsbWVhbjogOTk1MzN9XG4gIF07XG5cbiAgdmFyIFN0YXQgPSBHMi5TdGF0O1xuICB2YXIgRnJhbWUgPSBHMi5GcmFtZTtcbiAgdmFyIGZyYW1lID0gbmV3IEZyYW1lKGRhdGEpOyAvLyDliqDlt6XmlbDmja5cblxuICBmcmFtZS5hZGRDb2woJ3JhbmdlJyxmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIFtvYmoubWluaW11bSxvYmouaGlnaGVzdF07XG4gIH0pO1xuXG4gIHZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgaWQ6ICdjMScsXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA1MDAsXG4gICAgcGxvdENmZzoge1xuICAgICAgbWFyZ2luOiBbODAsIDEyMCwgOTAsIDE4MF1cbiAgICB9XG4gIH0pO1xuICB2YXIgZGVmcyA9IHtcbiAgICAncmFuZ2UnOiB7bWluOiAwLG1heDogMjAwMDAwLGFsaWFzOiAn5pS25YWl6IyD5Zu0J30sXG4gICAgJ21lYW4nOiB7bWluOiAwLG1heDogMjAwMDAwLGFsaWFzOiAn5pS25YWl5Z2H5YC8J31cbiAgfTtcblxuICBjaGFydC5zb3VyY2UoZnJhbWUsZGVmcyk7XG4gIGNoYXJ0LmF4aXMoJ3Byb2Zlc3Npb24nLHt0aXRsZTogbnVsbH0pO1xuICBjaGFydC5heGlzKCdtZWFuJyxmYWxzZSk7XG5cbiAgY2hhcnQuY29vcmQoKS50cmFuc3Bvc2UoKTtcbiAgY2hhcnQuaW50ZXJ2YWwoKS5wb3NpdGlvbigncHJvZmVzc2lvbipyYW5nZScpLnNpemUoMTIpO1xuICBjaGFydC5wb2ludCgpLnBvc2l0aW9uKCdwcm9mZXNzaW9uKm1lYW4nKS5jb2xvcignI0Y4QUI2MCcpXG4gICAgLnNoYXBlKCdjaXJjbGUnKVxuICAgIC5sYWJlbCgnbWVhbicse29mZnNldDogMjAsbGFiZWw6IHtmaWxsOiAnI0Y4QUI2MCd9fSk7XG5cbiAgY2hhcnQucmVuZGVyKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvYmFyL3JhbmdlLWJhci5tZFxuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUNDQTtBQUNBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==