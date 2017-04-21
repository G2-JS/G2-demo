# 图片词云

- template: demo-detail
- product: G2
- type: 其他图表
- index: 11

----
<script src="https://a.alipayobjects.com/g/datavis/g-cloud/1.0.2/index.js"></script>

<script>
var Util = G2.Util;
var Shape = G2.Shape;

function getTextAttrs(cfg) {
  var textAttrs = Util.mix(true, {}, {
    fillOpacity: cfg.opacity,
    fontSize: cfg.size,
    rotate: cfg.origin._origin.rotate,
    text: cfg.origin._origin.text,
    textAlign: 'center',
    fill: cfg.color,
    textBaseline:'Alphabetic'
  }, cfg.style);
  return textAttrs;
}

// 给point注册一个词云的shape
Shape.registShape('point', 'cloud', {
  drawShape: function(cfg, container) {
    cfg.points = this.parsePoints(cfg.points);
    var attrs = getTextAttrs(cfg);
    // 给容器添加text类型的shape
    // 坐标仍然是原来的坐标
    // 文字样式为通过getTextAttrs方法获取的样式
    var shape = container.addShape('text', {
      attrs: Util.mix(attrs, {
        x: cfg.points[0].x,
        y: cfg.points[0].y
      })
    });
    return shape;
  }
});

$.getJSON('../../static/data/g2pv.json', function(data) {
  data.sort(function(a,b){
    return b.pv-a.pv;
  });
  // 获取数据的最大值和最小值
  var max = data[0].pv;
  var min = data[data.length-1].pv;
  // 构造一个词云布局对象
  var layout = new Cloud({
    // 传入数据源
    words: data,
    // 设定宽高（默认为500*500）
    width : 500,
    height : 500,
    // 设定文字大小配置函数(默认为12-40px的随机大小)
    size: function(words){
      // 将pv映射到canvas可绘制的size范围14-100(canvas默认最小文字为12px)
      return ((words.pv - min)/(max - min)) * (60 - 12) + 12;
    },
    // 设定文字内容
    text: function(words){
      // 将网址处理成用'.'分隔开的第一个字符串
      var index = words.site.indexOf('.');
      var text = words.site;
      if(index > 0 && index < words.site.length){
        text = words.site.substr(0,index);
        // 当字符串是'www'时获取下一个
        if(text === 'www'){
          text = words.site.substr(index + 1);
          index = text.indexOf('.');
          text = text.substr(0,index);
        }
        // 当字符串是数字时获取整个网址
        if(/^[0-9]*$/g.test(text)) {
          var text = words.site;
        }
      }
      return text;
    }
  });
  var imageURL = 'https://zos.alipayobjects.com/rmsportal/EEFqYWuloqIHRnh.jpg';
  // 引入图片
  layout.image(imageURL,function(imageCloud){
    // 执行词云布局函数，并在回调函数中调用G2对结果进行绘制
    imageCloud.exec(function(texts){
      var chart = new G2.Chart({
        id : 'c1',
        // 当配置了边距时，canvas的宽高等于布局宽高加上边距
        width : 1000,
        height : 500,
        plotCfg : {
          margin : [0, 250, 0, 250]
        }
      });
      chart.legend(false);
      chart.source(texts);
      chart.axis(false);
      chart.tooltip({
        title:false
      });
      // 将词云坐标系调整为G2的坐标系
      chart.coord().reflect();
      // 绘制点图，在x*y的坐标点绘制自定义的词云shape，颜色根据text字段进行映射，大小根据size字段的真实值进行映射，文字样式配置为词云布局返回的样式，tooltip显示site*pv两个字段的内容
      chart.point().position('x*y').color('text').size('size',function(size){
        return size;
        }).shape('cloud').style({
          fontStyle: texts[0].style,
          fontFamily: texts[0].font,
          fontWeight: texts[0].weight
        }).tooltip('site*pv');
      chart.render();
    });
  });
});

</script>
