(function () {
  // Copy buttons: <button data-copy="element-id">. Falls back to selecting the text.
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    var target = document.getElementById(btn.getAttribute('data-copy'));
    if (!target) return;
    var idle = btn.textContent, timer = 0;
    function settle(label) {
      btn.textContent = label;
      clearTimeout(timer);
      timer = setTimeout(function () { btn.textContent = idle; }, 1800);
    }
    function selectText() {
      var range = document.createRange();
      range.selectNodeContents(target);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      settle('Selected');
    }
    btn.addEventListener('click', function () {
      var text = target.innerText.trim();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { settle('Copied'); }, selectText);
      } else {
        selectText();
      }
    });
  });
})();
