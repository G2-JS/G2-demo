# 镜像分面 - 翻转

- template: demo-detail
- type: 分面
- index: 7
----

<script>
$.getJSON('../../static/data/diamond.json',function (data) {
    var Stat = G2.Stat;
    var Frame = G2.Frame;
    var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500,
      plotCfg: {
        margin: [45,80,80,80]
      }
    });
    var frame = new Frame(data);
    frame.addCol('caratGroup',function(obj){
      if (obj.carat > 1){
        return 1;
      }else{
        return 0;
      }
    });
    var defs = {
      'caratGroup': { // 由于镜像坐标系仅支持存在2个分类的字段，所以我们构建仅有2个分类的字段
        type: 'cat',
        values: ['小钻石 < 1克拉','大钻石 >= 1克拉'], 
        alias: '钻石大小'
      }
    };
    chart.source(frame,defs);
    
    chart.legend('caratGroup',false);
    chart.facet(['caratGroup'],{ // 镜像分面
      type: 'mirror',
      transpose: true,
      margin: 100
    });
    chart.interval().position(Stat.summary.percent(Stat.summary.count(Stat.bin.rect('depth')))).color('caratGroup');
    chart.render();
}); 

</script>
