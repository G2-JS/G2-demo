$(document).ready(function() {
  $('#J_fullpage').fullpage({
    sectionSelector: '.section',
    autoScrolling: false,
    fitToSection: false,
    fitToSectionDelay: false,
    afterLoad: function(anchorLink, index) {
      $('#J_sectionWrapper, #J_indexFooter, #J_inner').removeClass('invisible');
    }
  });

  $('#J_scrollDown').click(function() {
    var height = $('#J_fullpage').outerHeight();
    $('html, body').animate({
      scrollTop: height
    }, 1000);
  });

  var CLS_PRETTY = 'prettyprint linenums';
  BUI.use('bui/common', function(BUI) {
    var preEls = $('pre');
    BUI.each(preEls, function(el) {
      var node = $(el),
        innerText;
      node.addClass(CLS_PRETTY);
      innerText = node.html();
      var a = /^(\s+)/.exec(innerText),
        regex;
      if (a) {
        regex = new RegExp('(' + a[0] + ')(\\s*)', 'ig');
        innerText = innerText.replace(regex, '$2');
      }

      node.html(innerText);
    });
    if (window.prettyPrint) {
      prettyPrint();
    }
  });
});
