# 辅助图片

----

## code

```html
<div id="c1">
</div>
```

```js
      import data from '../data/diamond.json';
      var G2 = require('g2');
      var Stat = G2.Stat;
      var chart = new G2.Chart({
        id: 'c1',
        width: 1000,
        height: 500
      });
      chart.source(data);
      chart.interval().position(Stat.summary.count(Stat.bin.rect('depth'))).shape('hollowRect');

      chart.guide().image([55,300],{
        src: 'http://gtms02.alicdn.com/tps/i2/TB1LEzAIVXXXXaZXFXXKC07OVXX-160-230.png',
        width: 160,
        height: 230
      });

      chart.guide().image([61,300],{
        src: 'http://gtms03.alicdn.com/tps/i3/TB1sGntIVXXXXaEXVXXKC07OVXX-160-230.png'
      });

      chart.guide().image([67,300],{
        src: 'http://gtms04.alicdn.com/tps/i4/TB13x2BIVXXXXa6XFXXKC07OVXX-160-230.png'
      });

      chart.render();
```
