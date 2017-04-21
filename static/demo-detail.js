$(function() {
  // 代码编辑器
  var codeEditor = {
    flag: true,
    init: function() {
      var self = this;
      var editorThemeA = CodeMirror.fromTextArea(document.getElementById('codeA'), {
        mode: 'text/html',
        lineNumbers: true
      });

      self.autoFormat([editorThemeA]);
      editorThemeA.on('focus', function() {
        $('.CodeMirror').css('background', '#f4f4f4');
      });
      editorThemeA.on('blur', function() {
        $('.CodeMirror').css('background', '#fff');
      });
    },
    autoFormat: function(editors) {
      editors.forEach(function(editor) {
        var totalLines = editor.lineCount();
        var totalChars = editor.getTextArea().value.length;
        editor.autoFormatRange({line:0, ch:0}, {line:totalLines, ch:totalChars});
      });
    }
  };

  codeEditor.init();
});
