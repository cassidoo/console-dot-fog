/**
*
* console.fog is inspired by console.frog by Tim Holman, http://tholman.com
* except here we're more lit
*
*/

(function makeItLit() {
  if (!window.console) return;

  window.console.fog = function() {
    var inBrowser = (typeof window !== 'undefined');
    var css = 'color: rgba(0,0,0,1); text-shadow: 2px 2px 4px rgba(0,0,0,.5);';

    // Taken from here: http://www.chris.com/ascii/index.php?art=objects/cigarettes
    var fog = ['',
      '                     (  )/ ',
      '                      )(/  ',
      '   ________________  ( /)  ',
      '  ()__)____________)))))   ',
      ''];
    if (inBrowser) {
      fog = ['',
        '                      ( ',
        '                       ) (',
        '   ___________________(  )',
        '  ()__)____________)))))   ',
        ''];
    }

    var stringOfArgs = Array.prototype.slice.call(arguments).join(' ');
    if (stringOfArgs.length > 0) fog[1] = fog[1] + '  ' + stringOfArgs + '   )';

    var i;
    var str;
    if (inBrowser) {
      str= '%c';
      for (i = 0; i < fog.length; i++) {
        str = str + fog[i] + '\n';
      }
      console.log(str+'%c', css, '');
    } else {
      str= '';
      for (i = 0; i < fog.length; i++) {
        str = str + fog[i] + '\n';
      }
      console.log(str);
    }
  };
})();
