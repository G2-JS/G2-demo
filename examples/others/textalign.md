# 文本对齐

----

文本对齐

----

## code 

```html
<div>
<h2>柱状图文本对齐</h2>
<div id="c1" style="float:left"></div>
<div id="c2" style="float:left"></div>
<div style="clear:both;"></div>
<div>

<div>
<h2>区间柱状图</h2>
<div id="c3" style="float:left"></div>
<div id="c4" style="float:left"></div>
<div style="clear:both;"></div>
<div>

<div>
<h2>翻转柱状图</h2>
<div id="c11" style="float:left"></div>
<div id="c21" style="float:left"></div>
<div style="clear:both;"></div>
<div>

<div>
<h2>翻转区间柱状图</h2>
<div id="c31" style="float:left"></div>
<div id="c41" style="float:left"></div>
<div style="clear:both;"></div>
<div>

<div>
<h2>玫瑰图文本对齐</h2>
<div id="c5" style="float:left"></div>
<div id="c6" style="float:left"></div>
<div style="clear:both;"></div>
<div>

<div>
<h2>极坐标转置文本对齐</h2>
<div id="c51" style="float:left"></div>
<div id="c61" style="float:left"></div>
<div style="clear:both;"></div>

<div id="c52" style="float:left"></div>
<div id="c62" style="float:left"></div>
<div style="clear:both;"></div>
<div>

<div>
<h2>区间玫瑰图文本对齐</h2>
<div id="c7" style="float:left"></div>
<div id="c8" style="float:left"></div>
<div style="clear:both;"></div>
<div>

<div>
<h2>饼图文本对齐</h2>
<div id="c9" style="float:left"></div>
<div id="c10" style="float:left"></div>
<div style="clear:both;"></div>
<div>

```

```js
// =======start 柱状图文本对齐
    var data = [
      {action:'访问',visiter:500,text: 'xxdadsfsadfasdfadsf'},
      {action:'浏览',visiter:400,text: 'sfsadfasdfadsf'},
      {action:'交互',visiter:300,text: 'xxdadsfs'},
      {action:'下单',visiter:200,text: 'fsadfasdfadsf'},
      {action:'付款',visiter:100,text: 'xxd'}
    ];
    var data1 = [
      {action:'访问',visiter:[100,500],text: 'xxdadsfsadfasdfadsf'},
      {action:'浏览',visiter:[200,400],text: 'sfsadfasdfadsf'},
      {action:'交互',visiter:[150,300],text: 'xxdadsfs'},
      {action:'下单',visiter:[120,250],text: 'fsadfasdfadsf'},
      {action:'付款',visiter:[30,180],text: 'xxd'}
    ];
    var G2 = require('g2');
    G2.Global.animate = false;
    var Stat = G2.Stat;
    var defs = {
      visiter: {min: 0}
    };
    var chart = new G2.Chart({
      id: 'c1',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart.source(data,defs);
    chart.legend(false);

    chart.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: 20})
    chart.render();
    chart.showTooltip({
      x: 500,
      y: 300
    });

    var chart1 = new G2.Chart({
      id: 'c2',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });

    chart1.source(data,defs);
    chart1.legend(false);

    chart1.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: -20})
    chart1.render();
// =======end 柱状图文本对齐

// =======start 区间柱状图
    var chart = new G2.Chart({
      id: 'c3',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart.source(data1);
    chart.legend(false);

    chart.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: 20})
    chart.render();


    var chart1 = new G2.Chart({
      id: 'c4',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });

    chart1.source(data1);
    chart1.legend(false);

    chart1.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: -20})
    chart1.render();
// =======end 区间柱状图

// =======start 翻转柱状图
    var defs = {
      visiter: {min: 0}
    };
    var chart = new G2.Chart({
      id: 'c11',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart.coord().transpose();
    chart.source(data,defs);
    chart.legend(false);

    chart.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: 20})
    chart.render();


    var chart1 = new G2.Chart({
      id: 'c21',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart1.coord().transpose();
    chart1.source(data,defs);
    chart1.legend(false);

    chart1.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: -20})
    chart1.render();
// =======end 翻转柱状图

// =======start 翻转区间柱状图

    var chart = new G2.Chart({
      id: 'c31',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart.coord().transpose();
    chart.source(data1);
    chart.legend(false);

    chart.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: 20})
    chart.render();


    var chart1 = new G2.Chart({
      id: 'c41',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart1.coord().transpose();
    chart1.source(data1);
    chart1.legend(false);

    chart1.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: -20})
    chart1.render();
// =======end 翻转区间柱状图

// =======start 玫瑰图文本对齐
    var defs = {
      visiter: {min: 0}
    };
    var chart = new G2.Chart({
      id: 'c5',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart.axis(false);
    chart.coord('polar');
    chart.source(data,defs);
    chart.legend(false);
    chart.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: 20})
    chart.render();


    var chart1 = new G2.Chart({
      id: 'c6',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart1.axis(false);
    chart1.coord('polar');
    chart1.source(data,defs);
    chart1.legend(false);

    chart1.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: -20})
    chart1.render();
// =======end 玫瑰图文本对齐

// =======start 极坐标转置文本对齐

    var defs = {
      visiter: {min: 0}
    };
    var coordCfg = {
      inner: 0.1,
      startAngle: -Math.PI / 2,
      endAngle: Math.PI
    };

    var tmpData = data.slice(0).reverse();
    var chart = new G2.Chart({
      id: 'c51',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart.axis(false);
    chart.coord('polar',coordCfg).transpose();
    chart.source(tmpData,defs);
    chart.legend(false);
    chart.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: 10})
    chart.render();


    var chart1 = new G2.Chart({
      id: 'c61',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart1.axis(false);
    chart1.coord('polar',coordCfg).transpose();
    chart1.source(tmpData,defs);
    chart1.legend(false);

    chart1.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: -10})
    chart1.render();


    var chart2 = new G2.Chart({
      id: 'c52',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart2.axis(false);
    chart2.coord('polar',coordCfg).transpose().scale(-1,1);
    chart2.source(tmpData,defs);
    chart2.legend(false);
    chart2.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: 10})
    chart2.render();


    var chart3 = new G2.Chart({
      id: 'c62',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart3.axis(false);
    chart3.coord('polar',coordCfg).transpose().scale(-1,1);
    chart3.source(tmpData,defs);
    chart3.legend(false);

    chart3.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: -10})
    chart3.render();
// =======end 极坐标转置文本对齐

// =======start 区间玫瑰图文本对齐

    var chart = new G2.Chart({
      id: 'c7',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart.axis(false);
    chart.coord('polar',{radius: 0.8,inner: 0.4});
    chart.source(data1);
    chart.legend(false);
    chart.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: 20})
    chart.render();


    var chart1 = new G2.Chart({
      id: 'c8',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart1.axis(false);
    chart1.coord('polar',{radius: 0.9});
    chart1.source(data1);
    chart1.legend(false);

    chart1.interval()
          .position('action*visiter')
          .color('action')
          .label('visiter',{offset: -10})
    chart1.render();
// =======end 区间玫瑰图文本对齐

// =======start 饼图文本对齐
    var chart = new G2.Chart({
      id: 'c9',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart.coord('theta');
    chart.source(data);
    chart.legend(false);
    chart.intervalStack()
          .position(Stat.summary.percent('visiter'))
          .color('action')
          .label('visiter',{offset: 30})
    chart.render();


    var chart1 = new G2.Chart({
      id: 'c10',
      width: 400,
      height: 300,
      plotCfg: {
        margin: [30,10,50,60]
      }
    });
    chart1.coord('theta');

    chart1.source(data);
    chart1.legend(false);

    chart1.intervalStack()
          .position(Stat.summary.percent('visiter'))
          .color('action')
          .label('visiter',{offset: -30})
    chart1.render();
// =======end 饼图文本对齐
```
