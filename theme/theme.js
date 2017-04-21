var _ = require('lodash');
var internalIp = require('internal-ip');

module.exports = function(nico) {
  var exports = {};
  exports.reader = function(post) {
    var filepath = post.meta.filepath.toLowerCase();

    post.template = post.meta.template = (post.meta.template || 'index');

    if ((filepath.indexOf('demo') >= 0)&&(filepath.indexOf('demo') <= 5)) {
      post.meta.dir = 'demo';
    }

    if (filepath === 'readme.md') {
      post.filename = post.meta.filename = 'index';
      post.template = post.meta.template = 'index';
    }

    return post;
  };

  function getDir(path) {
    var arr = path.split('/');
    return arr[arr.length - 2];
  }

  function getProduct(path) {
    var arr = path.split('/');
    return arr[1];
  }

  function getPageInfos(pages, path, type) {
    var ret = [];
    var dir = getDir(path);
    var titles = [];
    Object.keys(pages).forEach(function(key) {
      var page = pages[key];
      if (key.indexOf(type) >= 0) {
        var title = page.meta.title || getDir(key);
        if (titles.indexOf(title) === -1) {
          var filepath = page.filepath;
          var idx = filepath.indexOf('.');
          ret.push({
            title: title,
            url: filepath.substr(0, idx),
            index: page.meta.index,
            isNew: page.meta.isNew
          });
          titles.push(title);
        }
      }
    });

    // 进行排序
    ret.sort(function(obj1, obj2) {
      var index1 = obj1.index*1;
      var index2 = obj2.index*1;
      if (index1 < index2) return -1;
      if (index1 > index2) return 1;
      return 0;
    });

    return ret;
  }

  var filters = {
    find_category: function(pages, cat) {
      var ret = [];
      Object.keys(pages).forEach(function(key) {
        var item = nico.sdk.post.read(key);
        if (item.meta.category === cat) {
          ret.push(item);
        }
      });
      ret = ret.sort(function(a, b) {
        a = a.meta.order || 10;
        b = b.meta.order || 10;
        return parseInt(a, 10) - parseInt(b, 10);
      });
      return ret;
    },
    getTitle: function(path) {
      var page = nico.sdk.post.read(path);
      var filepath = page.filepath;
      var idx = filepath.indexOf('.');
      return {
        title: page.meta.title,
        index: page.meta.index,
        url: filepath.substr(0, idx)
      };
    },
    getDemoTypes: function(pages, path) {
      var types = [];
      Object.keys(pages).forEach(function(key) {
        var page = pages[key];
        if ((key.indexOf('demo') >= 0) && (key.indexOf('demo') <= 5)) {
          var type = page.meta.type;
          if (type && types.indexOf(type) === -1) {
            types.push(type);
          }
        }
      });

      return types;
    },
    getDemoPages: function(pages, path, demoType) {
      var ret = [];
      var product = getProduct(path);
      Object.keys(pages).forEach(function(key) {
        var page = pages[key];
        if ( /*product == getProduct(key) && */ key.indexOf('demo') >= 0 && key.indexOf('demo') <= 5 && page.meta.type == demoType) {
          ret.push(page);
        }
      });
      ret.sort(function(obj1, obj2) {
        var index1 = obj1.meta.index || 0;
        var index2 = obj2.meta.index || 0;
        return index1 - index2;
      });
      return ret;
    },
    trim: function(value) {
      return value.replace(/\s+/g,"");
    },
    getNeighbors: function(curIdx, pages) {
      var result = {};
      curIdx = curIdx*1;
      var length = pages.length;
      if (curIdx > 0) {
        result.pre = {
          url: pages[curIdx - 1].url,
          title: pages[curIdx - 1].title
        }
      }

      if (curIdx < length - 1) {
        result.next = {
          url: pages[curIdx + 1].url,
          title: pages[curIdx + 1].title
        };
      }
      return result;
    },
    getClientIp:function() {
      var ip = internalIp();
      return ip;
    }
  };
  exports.filters = filters;
  return exports;
};
