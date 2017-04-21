# 图片层叠点图

- template: demo-detail
- product: G2
- type: 点图
- index: 3

----

<script>
var Shape = G2.Shape;
Shape.registShape('point', 'image', {
  drawShape: function(cfg, container) {
    var size = cfg.size;
    return container.addShape('image', {
      attrs: {
        x: cfg.x - size,
        y: cfg.y - size,
        width: size * 2,
        height: size * 2,
        img: cfg.shape[1]
      }
    });
  }
});

var data = [];
// 构造数据，3个小组的男女对比
for (var i = 0; i < 5; i ++) {
  var maleCount = parseInt(Math.random() * 10); // 男 的个数
  var femaleCount = parseInt(Math.random() * 10); // 女 的数量

  for (var j = 0; j < maleCount; j++) {
    data.push({
      group: 'group' + i,
      gender: 'male',
      id: 'm' + i + j
    });
  }
  for (var k = 0; k < femaleCount; k++) {
    data.push({
      group: 'group' + i,
      gender: 'female',
      id: 'f' + i + k
    });
  }
}

var imagesMap = {
  male: 'https://zos.alipayobjects.com/rmsportal/BsEtgKxwWwCBtPAylNwu.png',
  female: 'https://zos.alipayobjects.com/rmsportal/LhiLKFbQAtAzZOUJbHVv.png'
};

var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500
});
chart.source(data);
chart.pointStack(['dodge', 'stack'])
  .position('group')
  .shape('gender', function(gender) {
    return ['image', imagesMap[gender]]
  })
  .size(20);
chart.render();

</script>