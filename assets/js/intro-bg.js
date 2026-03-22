(function () {
  function makeStars(count) {
    var shadows = [];
    for (var i = 0; i < count; i++) {
      var x = Math.floor(Math.random() * 2000);
      var y = Math.floor(Math.random() * 2000);
      shadows.push(x + 'px ' + y + 'px #FFF');
    }
    return shadows.join(', ');
  }

  document.documentElement.style.setProperty('--stars',  makeStars(700));
  document.documentElement.style.setProperty('--stars2', makeStars(200));
  document.documentElement.style.setProperty('--stars3', makeStars(100));
})();
